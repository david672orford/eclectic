---
title: 'Waiting to Bite: BIND and Invalid Zone Files'
permalink: bind-and-invalid-zone-files-a-lurking-problem/
date: 2016-01-14 21:34:42 -0000
last_modified_at: 2019-02-05 17:54:16 -0000
categories:
- dns
- system administration
tags: []
---
It looks like Webmin lets you create DNS entries which BIND 9 does not like.
When it sees one it refuses to load the whole zone and keeps what it has in
RAM. This may go unnoticed for months until the server is rebooted. BIND then
restarts with that zone completely empty!

<!--more-->

I have looked for a way to test whether BIND has loaded all of the zones. There
is a "rndc status" command but amazingly it does not report this information.
It looks like the best you can do is ask it to reload all zones and see what
shows up in the system log!

So, I came up with this ridiculous script to run from Cron:
  
    #! /bin/sh
    lines=`wc -l /var/log/syslog | cut -d' ' -f1`
    next_line=`expr $lines + 1`
    rndc reload >/dev/null
    sleep 5
    output=`tail -n +$next_line /var/log/syslog | grep " named\["`
    echo "$output" | grep "not loaded due to errors" >/dev/null
    if [ $? -eq 0 ]
        then
        echo "$output"
        fi
  
First it figures out how many lines are in /var/log/syslog and what the number
of the next line will be. It then asks BIND to reload its configuration
(including the zone files) and waits for five seconds for it to do so. Then it
collects any new lines which BIND has logged and if any of them contains a
statement that a zone was not loaded due to errors, it prints the whole thing
to stdout. If the script is run from Cron, the output will be mailed.

If you run this once a day you will be warned of lurking problems and should
have time to correct them.
