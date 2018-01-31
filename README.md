## Introduction

In order to successfully complete this exam, you will need to have node v4 or greater installed on your machine.

* Install project dependencies: `npm i`
* To start the application: `npm start`
* To run the tests: `npm test`

These are the only commands you should have to worry about. Running `npm start` will start a local webserver and you can access the page from [http://localhost:8080](http://localhost:8080)

Once you are finished with the exam, please delete the node_modules directory, zip the folder, and email it to the exam coordinator.

## Expectations

Please treat this exercise as you would for any job interview application and put your best effort forward. We are using it to ascertain how skilled you are as a front-end developer. There are many components to this role, including understanding of programming fundamentals, the abilty to interpret requirements, understanding of JavaScript, the ability to learn and follow framework philosophies, understanding for user experience design and user interface concerns, and basic developer discipline. Please make the effort to deliver high-quality code for this exercise. If you do not have the time to put forth the effort you would normally want to, please take the time to at the least make sure your code works, then also write up what it is you would change or spend more time on. Expect to discuss this with your reviewer.

We expect that you will complete this test in an honest fashion. You should not copy and paste code from Stack Overflow or blogs in order to complete it. We also expect that you will work on this by yourself without assistance from your colleagues. This is a test of your individual abilities. Feel free to ask any clarifying questions or float ideas you have through your interview coordinator. 

Babel 6 is already included along with the complimentary build configuration. You should not need to make any changes to this.

You will only need to worry about supporting the latest version of Chrome for your solution.

### Usage of frameworks and libraries

You may use additional JavaScript frameworks or libraries to complete the solution. They must be included in your package.json file.

## Requirements

### Scenario 1

* Given a list of pizzas available at '/pizza.json'
* When the server returns a response
* Then the list of pizzas should be shown
* And a filter input is shown
* And a sort button is shown

### Scenario 2

* Given the user has loaded the page
* When the page waits for data to load
* Then the text "Loading" should be shown
* And no other elements should be shown

### Scenario 3

* Given the page is shown with a list of pizzas
* When the user enters filter text
* Then only the pizzas that include the filter text should be shown

### Scenario 4

* Given the page is shown with a list of pizzas
* When the user enters filter text
* Then the list of pizzas should be filtered in a case insensitive way

### Scenario 5

* Given the page is shown with a list of pizzas
* When the user clicks the sort button
* Then the list of pizzas will be sorted in reverse alphabetic order

### Scenario 6

* Given the user has entered text into the filter input
* When the user clicks the sort button
* Then the sorted list of pizzas should also be filtered according to the input

## Additional Requirements
* `npm start` must compile and run without errors.
* Do not modify `pizza.json`.
* Any tests you have added must pass with `npm test`.

