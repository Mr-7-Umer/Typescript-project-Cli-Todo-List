#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to my todo List\n");
let myLoop = true;
let todoListArray = [];
while (myLoop) {
    const userInput = await inquirer.prompt([
        {
            type: "input",
            name: "todoItem",
            message: "Please enter a task in your todo List!",
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to add more tasks ?",
            default: false,
        },
        {
            type: "confirm",
            name: "seeList",
            message: "Do you want to see the List ? ",
            default: false,
            when(userInput) {
                return userInput.addMore === false;
            }
        }
    ]);
    const { todoItem, addMore, seeList } = userInput;
    if (todoItem) {
        todoListArray.push(todoItem);
    }
    if (seeList) {
        console.log(`\nHere is your Todo List: `);
        todoListArray.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
    myLoop = addMore;
}
