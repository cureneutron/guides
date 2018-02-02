---
layout: guide
disabled: false
title: All-Out Guide to Rolling Wormholes
shorttitle: Rolling Wormholes
author: Mussah Yacoub
excerpt: >
    What is 'rolling a wormhole' and how do I do it?
---
## Introduction

So, you might have heard of the terms "rolling wormholes" and "rolling ships" and have been wondering what the fuck they are
Basically, every wormhole has a max amount of mass that can go through it before it collapses, and a max amount of mass that can go through each jump
and by doing "passes" aka going through and back with ships that are close to the maximum amount of mass that can go through,
we can kill bad/dangerous wormholes, or get better statics than the ones we have (since statics spawn a wormhole of the same type after being rolled).
We call this process "rolling wormholes", and the ships and fits we use "rolling ships"

## Overview

* TOC
{:toc}

## General Information

Rolling mass amounts are discussed in very large units, called Gigagrams (Gg) or Kilotons (kT). They are both equal to
1,000,000 kg of mass. The superior unit of measurement is however the "Rolling Unit", or RU, which is 100,000,000 kg, or 100 Gg/kT

Ship mass is given in Kg in both the fitting window and the various fitting programs (EFT/Pyfa), so you're gonna have to move decimal places around sometimes.
Also, ship mass is increased when you activate a prop mod (MWD or an Afterburner), by a set amount dictated by the module size,
so a large afterburner and a large MWD increase the mass by the same amount)

Activating a prop mod increases the mass of your ship.  An AB and a MWD of equal size give an equal mass increase.


## General Info About Wormholes
Wormholes have 3 important statistics that we'll keep track of here: the wormhole mass, age and type.

### Wormhole Mass
All wormholes "reduce" when they hit 50% of the total mass allowed through ("This wormhole has had its stability reduced by ships passing through it, but not to a critical degree yet"),
and "crit" when there's only 10% mass left (aka 90% of total allowed mass jumped through) ("This wormhole has had its stability critically disrupted by the mass of numerous ships passing through and is on the verge of collapse." )
You can and should regularly check whether a wormhole is reduced, crit or normal (above 50% mass left) by right clicking and pressing "show info" on the wormhole itself
(if it's normal, it will say "This wormhole has not yet had its stability significantly disrupted by ships passing through it." )
All wormholes also have a 10% deviation to their mass amount, so a hole with 30 RU of mass can have anywhere between 30^3 worth of mass.

## All-Out Rolling

### Numbers

#### Home Statics

All-Out's statics both have 2,000 Gg total mass. They "mass" or "reduce" after 1,000 Gg and "crit" after 200 Gg.  The heaviest ship that can enter them is 300 Gg.

#### Ship Masses
We use specially-fit Megathrons for most rolling, and cheap Thoraxes for "threading" critted holes:

- Hot Higgs Mega - 300 Gg
- Cold Higgs Mega - 200 Gg
- Hot Unrigged Mega - 150 Gg
- Cold Unrigged Mega - 100 Gg
- Hot Higgs Thorax - 125 Gg
- Cold Higgs Thorax - 25 Gg

### Procedures

#### "Flawless" Way to Roll a Fresh Home Static:

This fails about 5% of the time due to random mass variation and there's nothing you can do about it.  However, most fuckups on *fresh* holes are due to human error.

All bets are off once a few ships of unknown mass have jumped through.

*Starting from inside the home hole:*

- Hot Hot
- Hot Hot *(now massed)*
- Cold Hot
- Cold *(now crit)* Hot *(now rolled)*

#### Someone Messed Up and I Just Realized the Regular Jumps Will Roll Me Out if I Keep Doing Them

Best plan is to do some envelope-math with masses to figure out exactly where you stand and what to do, but if you don't want to do that here are rules of thumb:

- Do Hot passes until the hole masses.
- Then do Cold passes until the hole crits (if you feel lucky do Hot return passes).
- If it rolls you out without critting, bad luck. Try to get the Mega home safe and tear out the Higgs if you need to.
- If it crits and you're outside, coming in Hot will roll it.
- If it crits and you're inside, use a threading Thorax and a pilot in a cheap clone. Go out Cold and come in Hot until you close the hole or you get rolled out (your choice to self destruct or scan out at that point).

#### Shoot, I Just Lost a Corp Mega, Now What?

It should have been insured so you should get a payout for the loss.

Preferred option is to go ahead and buy another one, platinum insure it and bring it back to our hole.

If you're a bit spacepoor and a director is around, you can ask them to reimburse you from the corp wallet for, say, the insurance cost of the new ship.  Or if you can't afford the ship at all but still want to help, you could ask for reimbursement for the ship price but still bring it into the hole yourself.

If you're spacepoor *and* you have no time to offer, you can at least give the insurance payout back to the corp wallet (into the Rent division) so we can use it to offset the cost of a new one later.

### Fits

#### Megathron (~220m)

~~~
[Megathron, All-Out Rolling Mega]

Damage Control II
Reinforced Bulkheads II
Reinforced Bulkheads II
Reinforced Bulkheads II
Reinforced Bulkheads II
Reinforced Bulkheads II
Reinforced Bulkheads II
Reinforced Bulkheads II

500MN Y-T8 Compact Microwarpdrive
Cap Recharger II
Large Micro Jump Drive
J5b Phased Prototype Warp Scrambler I

Heavy Gremlin Compact Energy Neutralizer
Heavy Gremlin Compact Energy Neutralizer
Heavy Gremlin Compact Energy Neutralizer
Prototype Cloaking Device I
Large 'Notos' Explosive Charge I
Large 'Notos' Explosive Charge I
Core Probe Launcher I, Core Scanner Probe I

Large Higgs Anchor I
Large Transverse Bulkhead I
Large Transverse Bulkhead I


Hobgoblin II x5
Hornet EC-300 x5
Warrior II x5
~~~

#### Thorax (~13m)

~~~
[Thorax, All-Out Threading Thorax]

Damage Control II
[Empty Low slot]
[Empty Low slot]
[Empty Low slot]
[Empty Low slot]

100MN Y-S8 Compact Afterburner
[Empty Med slot]
[Empty Med slot]
[Empty Med slot]

Core Probe Launcher I, Core Scanner Probe I
[Empty High slot]
[Empty High slot]
[Empty High slot]
[Empty High slot]

Medium Higgs Anchor I
[Empty Rig slot]
[Empty Rig slot]
~~~

*[Gg]: Gigagram
*[kT]: Kiloton
*[AB]: Afterburner
*[MWD]: Microwarpdrive
*[Cold]: Prop mod OFF
*[Hot]: Prop mod ON
*[Pyfa]: Python Fitting Assistant
*[EFT]: Eve Fitting Tool