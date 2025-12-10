

# Lab 7.2, States and Events

## Description
In this lab,



## Running the program
To view use this lab,
<br>

## Reflection Questions
> How did you handle state updates when the text changed?

C
<br>

> What considerations did you make when calculating reading time?

Reading time assumes 5 words are read per second, or 300 words per minute,
<br>

> How did you ensure the UI remained responsive during rapid text input?

I
<br>

> What challenges did you face when implementing the statistics calculations?

useState() variables were used to track and update the statistics. Several of the current useState() variables can probably be condensed into a single variable, placing the calculations directly into the updated object
<br>

Where to do the calculations, App.tsx or inside a component. App.tsx was restructured to return only one element and calculations were moved to the CharacterCounter.tsx component.
<br>









