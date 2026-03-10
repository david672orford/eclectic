---
layout: post
permalink: electrical-power-and-power-loss/
title: Electrical Power and Power Loss
description: None
date: 2016-03-02 16:18:50 -0000
last_modified_at: 2021-02-08 15:58:27 -0000
publish: true
pin: false
image:
  path: /files/2016/03/voltage.png
  alt: Water tank with closed outlet represents voltage. Tank with open outlet represents
    current. Narrow pipe represents more resistance than wide pipe.
categories:
- electricity
- explainer
tags: []
---
[![](/files/2016/03/voltage-300x104.png)](/files/2016/03/voltage.png)

## Basic Electrical Units

A volt is a unit of electrical potential. Electrical potential in turn is the
force which a power source (such as a battery) applies to a connected device in
order to push electrons through it. Electrical potential (voltage) is
comperable to the presure which a pump applies to a plumbing system in order to
push water through the pipes.

An ampere is a unit describing the volume of an electrical current. (One ampere
is equal to approximately 6,241,000,000,000,000,000 electrons passing a barrier
per second.) Using the water analogy, it is comparable to gallons per minute.

The Ohm is the unit of electrical resistance. Resistance is the ability of a
substance to resist an electrical potential applied across it and pass less
current than an theoretical ideal conductor. Again using the water analogy, a
pipe resists the passage of water by having a small diameter or a rough
internal surface.

The watt is the unit of electrical power expended.

## What is Electrical Power

When we refer to electrical power we mean exerted power as opposed to the mere
ability to act. To illustrate, imagine a loaded railway boxcar and a muscular
man standing beside it. We might call him powerful in view of his likely
ability to unload the railway car. But in electrical terminology this is not
power since he is not doing anything, it is potential which is measured in
volts.

If the man now starts to unload the railway car, then there is starts to exert
power. If the power were electrical, we could measure it in watts. The watt is
a unit of work done. This work might be accomplished by a motor turning a shaft
or an electric heater warming a room.

Electrical power is exerted when pressure is applied to electrons to make them
move. The exerted power rises if either the pressure (in volts) is increased or
the number of electrons so moved (in amperes) increases. (As we will see later,
increasing the pressure will also increase the number of electrons moved.)

## Computing Power Consumption

In order to compute the power consumed by a device, we must know the voltage
supplied at its input terminals and the current drawn. The voltage can be
measured by connecting a voltmeter to the input terminals. In order to compute
the current drawn in a DC system it is necessary to disconnect one of the power
leads from the input terminal and then connect an ammeter in series with it.

The power in watts is equal to the applied potential (in volts) multiplied by
the drawn current (in amperes):
  
     watts = volts * amps
  
For example, if the supplied voltage is 48 and the current is half an ampere, then the power drawn is 24 watts.

This formula can be transformed algebraically so that we can find any of the three parameters if we know the other two:
  
               watts
     volts = ---------------
               amps
    
    
    
             watts
     amps = ---------------
             volts
  
An analogy with a water wheel is helpful here. If potential (voltage) is
compared to the height from which the water falls and current (amperage) is
compared to the water's quantity, then power (wattage) is the size of the
machinery inside the mill which it can turn. If we install more machinery, we
must either open the sluice wider (increase the amperage) or arrange for the
water the come in higher on the wheel (increase the voltage).

## Ohm's Law

Ohm's law explains the relationship between the voltage applied to a device,
its resistance, and the amount of current which will flow through it.
Specifically, it states that a potential of one volt applied to a device with a
resistance of one Ohm will cause a current of one Ampere to flow. This can be
expressed as the formula:
  
              volts
      amps = ---------
              ohms
  
This formula can also be transformed algebraically so that we can find any of
the three parameters if we know the other two:
  
      volts = amps * ohms
    
    
    
              volts
      ohms = -----------
              amps
  
Returning to our analogy with a pump and a water pipe, if we want to get more
water through the pipe, we can do one of two things:

* Install a more powerful pump (increase the voltage)
* Clean the pipe or install larger one (decrease the resistance)

## Ohm's Law and Series Connected Resistors

If we connect a battery to two resistors connected in series, their total
resistance will determine the amount of current that will flow. For example, if
we apply twelve volts to a one Ohm and a two Ohm resistor, Ohm's law says the
current will be:
  
       12 volts
      ------------ = 4 amps 
       1 + 2 ohms
  
But what if we connect a voltmeter across one of the resistors? Ohm's law can answer this question too:
  
       1 ohm * 4 amps = 4 volts
    
    
    
       2 ohms * 4 amps = 8 volts
  
Note that four volts plus eight volts is 12 volts which is what we applied.
Each resistor 'sees' a fraction of the total voltage proportionate to its
contribution to the total resistance.

## Everything is a Resistor

When we say resistor we sometimes mean an electrical component specifically
designed to consume power without producing a useful result. But in reality
anything that will pass a current in a manner which conforms to Ohms law can be
analyzed as a resistor. This includes electric heaters, incandescent lamps, and
the wires used to connect them.

## Wires Acting as Series Connected Resistors

Though the resistance of copper wire is low, it is not zero. For example, 1000
feet of number 10 AWG copper wire (such as might be used to connect an electric
dryer) has a resistance of about one ohm. Much thinner number 24 AWG wire (such
as might be used to connect a telephone) has a resistance of about 25 ohms per
1000 feet.

When we connect a device (say an electric lamp) to a battery we must remember
that wires are resistors. The lamp is a resistor too. They are two resistors
connected in series. Remember that each resistor in a series sees only part of
the applied voltage. If the wire-resistor gets too large a share, then a
voltage significantly lower than intended will be applied to the lamp.
Consequently it will receive less power than intended and will glow only dimly.

For example, suppose that we want to connect a 25 watt 12 volt lamp to an
automobile using a 50 foot telephone cord. How much of the 12 volts will the
cable get and how much will the lamp get?

First of all, what is the resistance of the lamp? The lamp is designed to
consume 25 watts at 12 volts. Therefor the intended current is:
  
      25 watts
     ------------- = 2.083 amps
      12 volts 
  
We can now use Ohm's law to determine what the lamp's resistance must be:
  
      12 volts
     ------------- = 5.761 ohms
      2.083 amps
  
Second, what is the resistance of the wire? A 50 foot cable contains 100 feet
of wire. If 1000 feet of number 24 AWG wire has a resistance of 25 ohms, then
100 feet has a resistance of 2.5 ohms. That is the resistance of our cable.

So, we have a 5.77 ohm resistor (the lamp) and a 2.5 ohm resistor (the wire)
connected in series to our automobile's battery. What will be the current?
  
      12 volts
     --------------- = 1.453 amps
      2.5 + 5.761 ohms
  
Now we can compute the actual power drawn from the battery:
  
      12 volts * 1.453 amps == 17.436 watts
  
The resistance of the thin wire means that only 17.4 watts are drawn from the
battery rather than the 25 watts intended. But that is not the worst of it. How
much of this reduced power is the lamp getting? First, we figure the voltage
across its terminals:
  
     1.453 amps * 5.761 ohms = 8.371 volts
  
And the power:
  
     8.371 volts * 1.453 amps = 12.16 watts
  
We can compute the power consumed by the wire in the same way:
  
     1.453 amps * 2.5 ohms = 3.633 volts
    
    
    
     3.633 volts * 1.453 amps = 5.279 watts
  
As you can see, the resistance added by the thin wire has not only reduced the
total power drawn from the battery, but it has taken a large chunk of what was
left for itself. What, you may ask, has it done with this power? It has turned
it into heat. If you coil up the wire and leave it for a few minutes you will
find that it has become warm.

Since there was no intention to use the wire as an electric heater, the power
which it consumes is considered to have been wasted. And the fact that it takes
3.633 of the battery's 12 volts for it self is termed a voltage loss.

## Ampacity

And that brings us to our next important topic: ampacity. Ampacity is the
amount of current which a wire can carry without becoming unreasonably hot. The
idea is to keep the wire well below any temperature at which its insulation
might be damaged or it might start a fire. Obviously how hot is acceptable is a
matter of opinion.

Besides the squishy concept of unreasonably hot the ampacity of a wire depends
on two factors. The first is its resistance. All else being equal a thinner
wire will have a lower ampacity because it has a higher resistance and hence
for any given current generates more heat. The second factor is the wire's
ability to dissipate that heat. This depends on how it is installed. If it is
running bare high in the air on a winter's day the ampacity will be much higher
than if it is inside insulation inside a cable in a hot attic in July.

Though ampacity is a subjective concept, there are standards which assign
ampacities to particular conductors when they are installed under particular
conditions. For example, number 12 AWG wire with insulation which can stand a
temperature of 75 degrees Celsius is generally considered to have an ampacity
of 20 amps (16 amps in continuous duty).

Note that ampacity does not necessarily tell you what size wire you should
install. It tells you the minimum size you can install without raising
legitimate objections on grounds of fire safety or durability. But on long runs
the minimum safe size will waste too much power.

For example, if you might be able to connect 1900 watts of lamps to the end of
a 250 foot number 12 AWG cable without exceeding its ampacity. But, you would
lose about 12 volts (which would make the lamps dimmer) and burn up about 170
watts in the cable. The 170 watts will be spread out over the whole length of
the cable, so it won't get hot, but it is still a substantial amount of wasted
power.

## Rule-of-Thumb Design

The commonly used rule of thumb is that you should make the wire big enough
that you do not waste more than 5% of your power heating up the wire. You can
make a rough determination of the required wire size in the following manner.

  1. Determine the system voltage. Compute 5%. This is the maximum acceptable voltage loss.
  2. Measure the wire run length in feet from power source to powered device. Multiply by two (to reflect that fact that there will be one wire in each direction).
  3. Figure out how much power the connected devices actually draws. Do not rely on information which may be printed on them. These figures are often heavily padded. Instead hook one up with am ammeter in series. If the devices can supply power to other devices, hook them up too. Do not let the device idle (where it may draw less power than normal). Put it into the normal operational mode.
  4. Use Ohm's law to determine the the wire resistance which would cause the maximum acceptable voltage drop determined in step one. In other words, divide the maximum acceptable loss in volts by the maximum current drawn in amperes. (Convert mill-amperes to amperes first by multiplying by 1000.) The answer will be in Ohms.
  5. Divide 1000 by the number of feet of wire from step two and multiple by the number of Ohms from the previous step. This is the maximum acceptable resistance of the wire per 1000 feet.
  6. Open <http://en.wikipedia.org/wiki/American_wire_gauge#Tables_of_AWG_wire_sizes> and run your eye down the "Copper Resistance, (Ω/kFT)" column until you find a number which is lower than the answer you got in the previous step. Look in the far left column of the same row to find the cooresponding American Wire Gauge size.
  7. If the American Wire Gauge size obtained in the previous step is odd, subtract one from it. (Only even size are generally available.) This is the smallest size you should use.

## Long Runs at Low Voltage

Are careful reading of the above section will show that long runs at low
voltage require surprisingly large diameter wire. If we halve the voltage in a
system while keeping the power the same, we must quadruple the cross-sectional
area of the wire in order to keep the losses the same. Why is this?

The first reason is that if we halve the voltage we must double the current if
we want to keep the same power. At double the current we must double the cross
sectional area of the wire if we want to keep the same voltage drop measured in
volts. But we actually want to keep the same voltage drop as a percentage of
the supply voltage. Since we have halved the supply voltage we must halve the
acceptable voltage drop which requires us to double the cross sectional area of
the wire again.

This effect can be dramatic. For example, we might be able to power a 48 volt
device using a 50 foot run of number 24 AWG telephone wire. But if we replaced
it with a 12 volt device and substituted a 12 volt power supply we would have
to replace the wire with number 14 AWG which is like a fairly heavy-duty
extension cord.
