# My-Daily-Planner

The purpose of this assignment was to show how a basic daily planner could be created using bootstarp, jquery and moments.

Firstly a document ready function was created as code within it will only run once the Document Object Model (DOM) is ready for JavaScript code to execute.

The current day class within the HTML was then accessed and within that a function was logged to confirm what the current day is when the HTML is opened in the browser.

A save button function was also created with the variables of time and textInput. The textInput was accessed via the sibling class of inputText and time via the parent of ID. Time was used as the key and textInput as the value to save/set items to the local storage once text was placed within the inputText column and then the save button was clicked.

A currentTime function was then made with a if, else if statement that would change the colour of the time block depending on whether it was past, present or future.

Finally a function was created to get the information saved in local storage and show it in each time slot.

Please see screenshot of working html and link to live HTML.

https://iler22.github.io/My-Daily-Planner/

![2021-11-30](https://user-images.githubusercontent.com/89151536/144091194-85e368eb-c0ec-4799-9983-ee4e68b6756b.png)
