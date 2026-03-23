---
categories:
  - computing
  - sysadmin
  - cybersecurity
  - opensource
image: files/common/Vimlogo.png
description: >
  As of February 2026 Nessus reports half-a-dozen bugs in Vim.
  Since Debian has not yet released a fix, I describe how to
  install Vim 9.2 from Unstable.
---
{% include figure.html 
	file="common/Vimlogo.svg"
	alt="The word Vim over a green diamond shape"
	width=545 height=545
%}
At the end of February 2026 half-a-dozen security bugs were reported in the
text editor Vim. Fixing them requires an upgrade to Vim version 9.2.0078 or
later. This time those who write the plugins for the Nessus security scanner
decided it should produces an alert for each bug rather than a single combined
alert suggesting an upgrade as it sometimes does. This produced a huge jump in our
total number of vulnerabilities. Several of them have been given a severity
level of Medium or High.

Understanding and explaining the impact of bugs like these is not simple.  Vim
is not like a web browser. A web browser downloads hundreds of files every time
it is used. At best the user is explicitly aware only of the HTML page at the
address shown in the address bar.  But this page could be pulling in dozens or
even hundreds of files from various servers. The browser can potentially be
attacked by putting a maliciously-crafted file on any of these servers.

In contrast exploiting a security bug in something like Vim is far more
difficult. One must get a maliciously-crafted file into some package of files
such as a Git repository which people will deliberately install and then edit
with Vim.

So if Nessus reports that your server has a dozen vulnerabilities in Vim, the
actually chances that one of the bugs will 'get woken up' and start doing bad
things is pretty low, since nothing happens until the system administrator
interacts with maliciously-crafted files, and this will probably never happen.
But Nessus marks them Medium and High seriousness because for all Nessus knows
users may be downloading all sorts of stuff from the Internet and could get
bitten.  Be that as it may, the scary reports make people nervous and sometimes
fixing it is simpler than performing a risk assessement and defending it.

The problem is that Debian has not yet released a patch for this and it is not
clear (to me) if they believe the theoretical risks of exploitation justify the
risks of breaking something in a stable release. The only place the problem is
fixed is in the unstable repository which has Vim version 9.2.0136. Prior
releases still have Vim version 9.1.x. There are three possible solutions:

1. Remove the Vim package and edit configuration files using **busybox vi** until they get this sorted out
2. Remove the Vim package and build and install it from source code
3. Install the packages from Sid

I chose option one for most servers and option two for my development system.

My development system was at Debian 12 "Bookworm". The problem is that Vim from
unstable depends on a newer version of the C library. If I allow this upgrade,
it could cause problems either with code compatibility or package dependencies.
So I decided to upgrade the system to Debian 13 "Trixie" which is the current
latest release and hope the C library versions would be the same. This was on
my list of things to do anyway and it paid off.

After the upgrade I temporarily added the Unstable repository by creating
the file /etc/apt/sources.list.d/debian-unstable.sources with these contents:

    Types: deb
	URIs: https://deb.debian.org/debian/
	Suites: sid
	Components: main contrib non-free non-free-firmware
	Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg

And then:

    $ sudo apt-get update
    $ sudo apt-get install vim

I then removed /etc/apt/sources.list.d/debian-unstable.sources and updated
the sources list again:

    $ sudo apt-get update

I think there may be a way to make the Trixie repository the default
and leave the Unstable repository in place. Then presumably Vim would
follow Unstable, but I did not persue that.




