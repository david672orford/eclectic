---
title: Is open source telephony a serious option?
permalink: is-open-source-telephony-a-serious-option/
date: 2008-06-10 15:56:00 -0000
last_modified_at: 2016-01-14 22:07:28 -0000
categories:
- asterisk
- opensource
- telephony
tags: []
---
I was recently asked whether anyone would every really consider replacing a
tired old PBX with an open source system and whether we had any experience with
Asterisk. Here is the answer I wrote, based on our experience here at Trinity
College.

<!--more-->

The design of all VoIP systems is much newer than that of your "tired
old PBX". No matter what you pick to replace it, it will probably will not be
as reliable as your old PBX. (I am assuming that you want to replace your PBX
because of its limitations rather than because it is failing.) Why might a new
IP PBX be less reliable?

In my limited experience, traditional, expensive PBXs
work reliably not because of superb design and quality control but because they
have been around long enough that all of the bugs which cause major
malfunctions during typical use have been patched. Hundreds of other bugs, many
of which require obscure work-arounds remain. A traditional PBX may supposedly
have lots of advanced features which are never implemented because the bugs
stop one in one's tracks.

The design of a traditional PBX is also staggeringly
conservative. The management interface on a Northern Telecom Meridian I is a
throwback to mediocre 1970's design. There is no cursor movement, no menues to
scroll through, to configuration screens to open. It is many times more
primative than the Unix or MS-Windows command-line interface which so many
dread. There is no user-accessible file system and no provision for uploading
data. The few commands that are available spawn endless questionnaires with
prompts consisting solely of obscure acronyms and abbreviations with no way to
backtrack to change an answer. Mass data loading invariably requires the
writing of scripts which run on a personal computer. There scripts connect to
the telephone switch and pretend to be a human being running the crude
interface through its paces at high speed. Of course, this is many times easier
than tracing wires and connecting resisters to change programming, but by
modern standards it is painful.

In contrast, IP PBX's are based on modern
computing experience. Configurations can be generated from databases or edited
using web interfaces. Dozens of useful features which hardly anyone had the
energy or nerve to set up on traditional PBX's can be set up easily. Bugs get
fixed. New features get added. But this comes at the price of sometimes
destabilizing the core function of ringing telephones and transmitting sound.
In other words, switching to an IP PBX brings many of the same problems as
switching from a mini computer to personal computers brought.

You ask if you
should trust something as important as your telephone system to open source. I
think first I should clear up a possible misconception. The fact that open
source telephony software is free does not mean that it is of low quality or
that it was written by amateurs. Quite the opposite. The authors of large,
successful open source projects tend to be or to become the outstanding experts
in their fields. They invariably care deeply about the quality of the product.
Nor are they amateurs with limited resources. They are often the employees of
hardware manufacturers and telephone companies. Their employers are willing to
give their work away for free because for them software is simply a nuisance.
If they share the enormous effort require to write it, they can more quickly
get back to the business or selling hardware or telephone calls.

This does not
mean that you can simply take the last thing that the Asterisk developers
released, install it, and be happy. They are not telephone system vendors. They
will not set it up for you or fix it when it breaks. They provide one of the
components needed to build a telephone system much like auto-parts
manufacturers build alternators, bearings, and engines.

What you need is a
complete VoIP phone system. This system might use Asterisk as one of its
components. It will almost certainly have some open source components. An IP
PBX of any size requires expert setup and maintenance. It is the expert
selection and proper interconnection of components that makes any PBX work, not
the origin of the components.

You ask about our experience with Asterisk.
Asterisk is in limited trial here. We have connected a server running Asterisk
to our pre-existing Northern Telecom Meridian 1 using two bridged T1 lines. The
Meridian 1 sees it as an outgoing toll trunk. Problems with Asterisk have been
very few. Connecting Asterisk to the Meridian 1 with all the PRI function we
wanted working was extremely difficult even with the help of experienced
consultants.

Using this setup we have considerably reduced our expensive for
oversees calling. We intend to explore other applications for Asterisk
including replacing our aging voice mail system.

If you would like to talk to
somebody about a full-blow Asterisk installation, you might try contacting the
IT department of Manchester, Connecticut. I have hard that they recently
installed an Asterisk telephone system with about 150 sets in city offices. The
request for bid (found at
http://lists.digium.com/pipermail/asterisk-biz/2004-October/000807.html)
contains the contact information for their CIO.

Finally, I should point out
that Asterisk is by no means the only open source VoIP building block. It is
simply the most well-known. There are a number of well-regarded components,
such as OpenSER which are frequently used instead of or in combination with
Asterisk. It is also quite common to use open source components in combination
with other non-open source components.
