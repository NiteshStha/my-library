# My-React-Library

Text Minimize:
This React Component helps in minimizing any texts in an element by minimizing the text and appending "Read More" to the end of the text when the text is in minimized state and "Read Less" when the text is in unminimized state.

-> Attributes:

1. as: Takes the HTML element as value to wrap the text.
   Eg: <TextMinimize as='span'>

2. characters: Takes the total characters to be displayed in the text. It limits the text to the provided number.
   Eg: <TextMinimize characters={60}>

3. text: Takes the text that is to be displayed.
   Eg: <TextMinimize text={text}>
