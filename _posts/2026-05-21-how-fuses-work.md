---
title: How Fuses Work
categories:
- electricity
- explainer
image: files/2026/05/fuse-typical-automotive.jpg
description: >
  We discuss why fuses have a voltage rating. Does a fuse used at other
  than its rated voltage blow at a different currently level? Some believe
  so.
---
{% include figure.html 
	file="files/2026/05/fuse-typical-automotive.jpg"
	alt="The word Vim over a green diamond shape"
	width=545 height=545
%}
A fuse is an electrical device which interrupts a circuit during an overload
condition. It is usually a thin piece of wire in some kind of a holder. When
the current passing through it exceeds the intended limit, the wire starts to
heat up and, if the overload is large or sustained, melt. Often this wire or
metal strip is made of a special alloy which melts at a relatively low
temperature.

A fuse has two key ratings. The first is a current in amperes. The second is
a voltage. The meaning of the current rating is easy to understand. At some
point above this current the fuse will "blow." But the voltage rating is a
frequent subject of confusion.

This is one of those cases where a little bit of knowledge is dangerous.
While the average person looks only at the amperage rating, someone who
has had a little education in electrical theory may attempt to apply Joule's law:

    Watts = Volts x Amperes

Let's say we have a 12-volt automotive circuit protected by a 10 amp fuse:

    12 volts x 10 amperes = 120 watts

So a fuse which blows at 10 amps blows at 120 watts. But what if we put it in a six
volt circuit? Since energy is what melts the fuse and energy delivery is measured in
watts, it might seem that we should compute the current for 120 watts at six volts:

      120 watts
    -------------- = 20 amperes
       6 volts 

The math seems clear: a 12 volt fuse in a six volt circuit can be expected to
carry twice its rated current. 

I have encountered this reasoning repeatedly online. For example, there is an
excellent video entitled [Bad Fuses](https://www.youtube.com/watch?v=apQU_VuJlFU)
on the Youtube channel [Ham Radio A2Z](https://www.youtube.com/@HamRadioA2Z). In it
inexpensive automotive fuses bought from a major online retailer are tested. It is
found that what is ostensibly a five amp fuse will carry 21 amperes indefinitely.
This is totally unaccepable.

However a number of viewers suggested the test was invalid because the meter on the
test rig showed 0.6 volts applied to the fuse. This is one such comment:

> Do you think the issue with the 5 amp fuse not blowing, may have be due low
> voltage used in the test. 0.6 volts (0.6 volts x 21 amps = 12.6 watts). Did
> you try the same fuse at 13.8 volts (13.8 volts x 21 amps = 289.9 watts).

While the mathmatical calculations are performed correctly, the application of
Joule's law is erroneous. To understand why, let's look at a simple circuit
protected by a fuse.

![0.01 volt measured across the fuse](/files/2026/05/fuse-normal-operation.svg)

Notice that the fuse is not connected to the load in parallel, as if it were a
second lamp. Instead it is a short segment of the conductor leading to the
electric lamp which serves as the load.

Since it is connected in series with the load, a fuse is not exposed to the
system voltage during normal operation. (In much the same way as a bird perched
on a high-voltage wire is not exposed to the voltage since it is not also
touching the ground.) Until the fuse blows, the voltage measured between its
terminals will be only a fraction of a volt.

During an overload, this voltage will be higher, but at two, three, or ten times
the rated current, the voltage will be two, three, or ten times that tiny faction.
It is this tiny voltage multiplied by the current which gives us the power in watts
which will potentially melt the fuse. If instead we were to try to computing the
power by multiply 12 volts by the current, we could actually be computing the power
consumed by the lamp, which is irrelevant to the fuse.

When the fuse blows the system current drops to zero and the voltage
across the terminals of the fuse rises to the full system voltage, as 
illustrated below:

![Fuse open, 12.00 volts across its terminals](/files/2026/05/fuse-after-failure.svg)

It is at this moment that the voltage rating of the fuse becomes importing. If
the gap created by the melting of the fuse is too small, then the current may
arc across the gap, particularly in a DC system. Higher voltages can jump
larger gaps. The voltage rating of a fuse describe its ability to prevent this,
often simply by making the gap larger.

In conclusion, the voltage and current ratings of a fuse are independent.
One should not attempt to adjust the current rating using Joule's law.
Choose a fuse with a voltage rating above the voltage of the power supply.
Choose a current rating a bit above the maximum expected during normal operation.
And choose conductors which can safely carry that current.

