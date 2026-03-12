---
title: Flowroute
permalink: flowroute/
date: 2010-07-15 15:12:00 -0000
last_modified_at: 2016-01-14 22:08:40 -0000
categories:
- voip
---
I have been grieving ever since Voicepulse canceled its flexrate program and
been looking for a new low-price provider with good quality.

<!--more-->

Under the flexrate program, one would send a query to Voicepulse's servers
before putting each call through and Voicepulse would name its price. This is a
very clever idea. Presumably Voicepulse had trunks which at certain times of
the day would be underutilized but still had to be paid for. They could keep
the price high when they needed the trunks for their ordinary customers and
drop the price when usage was low. The maximum price was 1.9¢ per minute
(higher than the going rate). When the prices was high, the Flexrate customers
would chose a different route.

Whether this idea was carried through I do not know. I suspect the person who
dreamed it up quit his job and nobody was left to manage it. So, they changed
the query server to always return the maximum price. This pretty much stopped
the calls. My calls started going to my backup provider, Vitelity.

So, I started looking for a new primary provider offering calls to the USA with
good quality at about 1¢ per minute. I have found that provider. It is
[Flowroute](http://www.flowroute.com/).

Flowroute's quality is good and the price (1¢ per minute to the USA) is
excellent. The initial deposit must be at least $35. Subsequent deposits must
be at least $20. The protocol is SIP. Password authentication is an option, so
it can be used from behind a NAT router.

Flowroute has recently added DID service. I may try this soon, though I am
hesitant to put important DIDs on it yet just because Flowroute appears to be a
new provider. For now I am sticking with Vitelity for those.
