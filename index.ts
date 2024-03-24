#! /usr/bin/env node 

import inquirer from "inquirer";

// 1) =>0ur First task is that a computer machine first generate a random number.
// 2) =>Our second task is that the user input guessing random number.
// 3) =>Atlast Compare Userinput Number with computer generated number snd Show result.
const random_Number = Math.floor(Math.random() * 6 + 1)

const answers = await inquirer.prompt([
    {
        name: "UserGuestNumber",
        type: "number",
        message: "Kindly guess a Number between 1 t0 6."
    }
]);
if(answers.UserGuestNumber === random_Number){
    console.log("Congratulation! you guest a right number");  
}else{
    console.log("Try Again, you Guest a wrong number.");   
}
