---
title: Nessus in the Role of a Tease
description: None
permalink: nessus-in-the-role-of-a-tease/
date: 2025-08-22 13:04:11 -0000
last_modified_at: 2025-09-11 19:44:36 -0000
categories:
- computing
tags: []
---
{% include figure.html
	file="2025/08/Nessus-in-the-role-of-a-tease.png"
	width=1024 height=1536
%}

Nessus is a security scanner sold by a company called Tenable. It runs through
a customer's network checking to see whether the computers have any known
defects which could undermine their security.

Normally this works well. Yes,
sometimes the test plugins do not have access to full information and have to
make assumptions which lead to false positives. But sometimes Tenable writes
the test procedure incorrectly. This has happened three times in the last three
weeks.

<!--more-->

## The Insecurity of Non-Existent Things

SNMP is a protocol which is used in network management. A central management
computer can use this protocol to ask computers it is managing for information
about their health such as how much disk space is free, or how high the CPU
load is. SNMP was introduced decades ago when the Internet was a much
friendlier place. As initially designed access to the SNMP monitoring agents
required a password and the default password for read-only access was "public".

Nessus looks for SNMP agents which still provide system information to anyone
with the password "public". This was good. But last month Nessus started
falsely accusing computers of accepting "public" as the SNMP password. There
was just one problem: these computers were not running SNMP agents at all. This
was not a false positive. The result of the test was negative, but Nessus
misreported it as a positive.

The effect of this was that around July 24th
customers saw a huge jump in the number of their devices which supposedly had
this problem, only for the problem to disappear a couple days later.

## Not Watching the News

The next flock of erroneous vulnerability reports flew in from a different
place: misinterpretation of a poorly-written message posted to the Debian
security mailing list. This message was sent in connection with the release of
Debian version 13. It announced an updated version of a spreadsheet which lists
the Debian release and various dates related to their life cycle. The
announcement said the updated spreadsheet was now available for installation on
Debian version 11 as an update to a package called "distro-info-data".

The problem was that the announcement of the updated spreadsheet included
boilerplate text describing the updated spreadsheet as a "fix" for a "problem"
and told users where to read about the "security status" of the
distro-info-data package. Not entirely surprisingly, someone at Tenable
interpreted this as an announcement of a security fix. More surprisingly they
decided that the risk level was "high" despite the fact that no vulnerability
was described and so there was no information on which to base a vulnerability
assessment.

So the vulnerability reports which Nessus generated are nonsense.
Debian 11 is under long-term support until August 2026. Until then it receives
security patches. Nothing changed from a security perspective just because a
new version of Debian was released in August 2025.

## All Bugs are Old

The next problem due to allowing an assumption to take priority over the
literal text of a vulnerability report. CVE-2025-54090 is described as a bug in
version 2.4.64 of the Apache Web Server. The vulnerability report recommends
upgrading to version 2.4.65.

The problem is that someone at Tenable assumed
that this was an old bug which must be present in versions prior to 2.4.64. The
report does not say that and it is not true. The bug was introduced into the
code on July 7th, three days before version 2.4.64 released.

As a consequence
of this misunderstanding Nessus started demanding that system administrators
upgrade earlier versions such as 2.4.62 to 2.4.65 in order to fix this
"high-risk" vulnerability which they never had.

## Costs

Some may argue that more information is always better. I disagree. Nessus
reports, particularly high-risk ones, must be taken seriously. But responding
to them takes up enormous amounts of staff time. And a false report can take
considerably more time to address than a true on. A real security defect can
often be can be fixed quickly and crossed off the list. But a false reports
requires investigation and considerable discussion until everyone involved is
satisfied that it is indeed false. When the time of highly-skilled staff
members is consumed so uselessly, it takes them away from activities which
could actually improve security.
