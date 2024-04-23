#! usr/bin/env node

import inquirer from "inquirer";
let todos =[];
let condition =true;

while (condition ) {
    
     let addTask = await inquirer.prompt([{
        name:"todo",
        type:"input",
        message:"what you want to add in todo",
    },{
        name:"addMore",
        type:"confirm",
        message:"do you want add more?"

    },]);
todos.push(addTask.todo);
condition=addTask.addMore;
console.log(todos);}