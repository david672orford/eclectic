---
layout: post
permalink: eclectic/updating-webmins-self-signed-certificate/
title: Updating Webmin's Self-Signed Certificate
description: None
date: 2019-08-28 15:50:21 -0000
last_modified_at: 2023-02-11 17:08:30 -0000
publish: true
pin: false
image:
  path: /files/2019/08/signature.png
categories:
- system administration
tags: []
---
[![](/files/2019/08/signature-300x225.png)](/files/2019/08/signature.png) When SSL is enable in Webmin it creates a self-signed certificate which is stored in the file /etc/webmin/miniserv.pem. I recently upgraded a server from Debian 7 to Debian 9 and discovered that Webmin would no longer start.  This is what I saw when I tried to start it: Starting Webmin server in /usr/share/webmin Failed to open SSL cert at /usr/share/webmin/miniserv.pl line 4201. It turned out the certificate had expired long ago but previous versions of Webmin or the underlying libraries had not been detecting this fact. The question was how to fix this. A number of answers posted on the Internet suggested disabling SSL, logging in, and re-enabling it to generate a new certificate. The problem is that if you log in with SSL disable, you expose your password. I tried finding the script in the Webmin code which generates the certificate, but gave up after a while and found a command for generating a self-signed certificate. Once I did that, I had to concatenate the private encryption key and the self-signed certificate into the single file which Webmin expects. Here are the commands: # cd /etc/webmin # openssl req -new -newkey rsa:4096 -x509 -sha256 -days 3650 -nodes -out miniserv.crt -keyout miniserv.key # cat miniserv.key miniserv.crt >miniserv.pem # rm miniserv.key miniserv.crt You can then start Webmin: # systemctl restart webmin.service
