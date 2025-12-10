

# Lab 7.2, States and Events

## Description
In this lab an interactive input element is made in React to exercise using state variables and handling events. Allowing the user to type an input and see information about the text



## Running the program
To view this lab use "npm run dev" in the console, open localhost:5173, and type some words in the input field. 
<br>
Text can be pasted but the stats will not update until after an edit is made to the pasted text.
<br>

## Reflection Questions
> How did you handle state updates when the text changed?

State variables were made for the current input text and stats properties. When the interactive <input> element's onChange() method is called, a customized function 
<br>

> What considerations did you make when calculating reading time?

Reading time assumes 5 words per second (300 words per minute), convert to minutes and round to 2 decimals.
<br>

> How did you ensure the UI remained responsive during rapid text input?

Statistical responses are changed using state variables, which are updated
<br>

> What challenges did you face when implementing the statistics calculations?

useState() variables were used to track and update the statistics. Several of the current useState() variables can probably be condensed into a single variable, placing the calculations directly into the updated object
<br>

Where to do the calculations, App.tsx or inside a component. App.tsx was restructured to return only one element and calculations were moved to the CharacterCounter.tsx component.
<br>









