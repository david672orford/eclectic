---
layout: post
permalink: how-to-be-a-good-voip-provider-for-asterisk-users/
title: How to be a Good VoIP Provider for Asterisk Users
description: None
date: 2009-01-09 22:13:00 -0000
last_modified_at: 2016-01-14 22:06:24 -0000
publish: true
pin: false
categories:
- asterisk
- telephony
- voip
tags: []
---
There is more to being a good VoIP telephony provider for Asterisk users than
simply offering the best balance of price and reliability. Usability is also
very important. Here are some things which make for a service more convenient
for Asterisk users.

## Provide a Simple Dialplan

It is all right to allow your
users to dial numbers in a variety of ways, perhaps to conform to local
practice in your target market. But make sure to allow your customers to dial
numbers in full international format, starting with the country code, if they
so choose. I suggest you follow the European Union practice and designate 00 as
the prefix to indicate that the number will be dialed in international format.

This is important because otherwise your users will have to program Asterisk to
divide numbers into classes and select the appropriate prefixes. Lets take
Vitelity's dial plan as an example. Vitelity expects calls to the USA and
Canada to be dialed as 10 digits, starting with the area code. (You can dial 1
first if you like.) But calls to other countries, including countries in the
North American Number Plan must be dialed with a prefix of 011. So, a call to
Jamaica, which would normally be dialed from the USA as 1-876-555-1212 must be
dialed 011-1-876-555-1212. This means that we must give Asterisk a list of
about two dozen NANP area codes which require special treatment.

Most European providers does this. Voip.ms does this too.

## Allow us to Disable Recorded Fault

Messages Asterisk users frequently have several providers for outgoing calls so
that if one fails or your account with it is out of money Asterisk can roll
over to the next. They do this to improve reliability and to get better rates.

A common cause of failure is running out of funds. If you play an "you are out
of funds" message, the caller will most likely hang up even though, had he
waited, Asterisk might move on to another provider. You should simply reject
the call with an appropriate error code.

Of course, such messages are helpful
to those customers who are using your service directly from an ATA, but there
should be a clearly explained way to turn them off, perhaps by indicating
whether one is using an ATA or a PBX.

Whether or not you play a message, never,
ever answer a call which you do not intend to put through. If you must play a
message, play it as early audio.

The same goes for other problems which would
provoke a recorded fault message. Don't play messages for all-routes-busy,
cannot-be-completed-as-dialed or any other condition where another provider may
be able to put the call through. True, you will make no money all the call, but
you reduce the chance that the Asterisk administrator will cut you out of the
route.

## Provide Machine Readable Rate Tables

Many Asterisk users want to know
exactly how much their calls will cost so that they can do least-cost routing.
While web pages which give rates for such things as "Peru Landlines" or "UK
Mobiles" are fine as an advertisement, a computer cannot take a phone number
and automatically find the corresponding rate.

You should provide a rate table
which lists your rates by prefix. By convention the longest match wins, so you
can list a rate for a whole country or other region and then list longer
prefixes begining with the same digits for those blocks which have other rates.
For example:
  
    1 1.05 ; United States
    1808 1.46 ; United States - Hawaii
    1907 1.25 ; United States Alaska

But, be sure your switch rejects the call gracefully, without playing any
messages, for any 'holes' in your coverage.

Finally, make sure that your rate
table can be downloaded by fetching a single URL. Customers hate having to
write programs to scrape your website.

## Let DID's Work Without Registration

For most customers using SIP phones directly with your service, periodic
registration is the best way for them to inform you of their current IP
address. However, Asterisk switches frequently have fixed IP addresses and DNS
names. So, let your customers specify a SIP or IAX2 address to which to send
the calls. This eliminates the constant chatter of registrations. When there
are no calls there is no load on your network and servers and no load on ours.

For an example of a provider that does this well, take a look at how
voip-user.org has users configure their second and subsequent incoming numbers.
Call With Us allows this to, though they do not explain how to do it.

## Make it Easy to Check One's Balance

Your Asterisk-using customers are quite likely to
want to check their balances automatically and gather all of their provider
balances into one place. Make it easy for them to do so. Provide a way for them
to do this with a single URL fetch.

Voicepulse for Asterisk and Call With Us do
this well. Most other providers make you scrape their websites in order to
determine your balance automatically

## Treat Customer Suggestions as Free Labour

If your service is weak in some of these areas, knowledgeable customers may
point it out to you. Train your staff to recognize these customers and forward
their suggestions to your system administrators for consideration. While it may
cost more to fix the problem than you will ever make from that customer, a more
usable service will help you to attract additional customers.
