---
layout: post
permalink: my-voip-network/
title: My VoIP network
description: None
date: 2008-05-01 15:15:00 -0000
last_modified_at: 2016-01-14 21:42:25 -0000
publish: true
pin: false
categories:
- asterisk
- voip
tags: []
---
I run a VoIP network for my friends and family. There are phones at about 10
locations. Four of the locations have Asterisk servers.

Three of the Asterisk servers are run in a redundant configuration. SIP query
DNS to get the list of servers for our domain and try connecting to them in the
order specified by the domain's SRV record. It does not matter to which server
the SIP phone ultimately connects because the servers are connected by DUNDi.
When one of the phones is called, the server which receives the call uses DUNDi
to determine with which server the phone is registered and routes the call to
that server over IAX2.

<!--more-->

These three main Asterisk servers have trunks to the PSTN. They also
collect call detail records which they share with one another.

The fourth Asterisk server runs on the same Linksys WL-500G Premium which
serves as the gateway router at my parents' house. It servers the SIP phones in
their house.  It has a much more limited configuration. It relies on the main
servers for connection to the PSTN and does not keep its own call detail
records.

In future postings I can describe:

* PSTN providers used
* Least Cost Routing
* Collecting and displaying CDR
* Inexpensive SIP phones used If you would like to hear about any of these topics, please post a comment.
