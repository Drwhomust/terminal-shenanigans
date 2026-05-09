// funny cat
// get infected by the funny wacky cat catte from kaiju paradise or else...

console.log("Hello World!");

// pak ages
import chalk from "chalk";
const prompts = require('prompts');

// -- varibales
let parmra1:any;
let commands:string[] = ["Test", "About", "Commands Available"];

// functions

function test() {
    console.log("Hello World!");
}

function cmd_available() {
    console.log(chalk.greenBright(commands));
}

function run_commands(commands:string[]) {

}


(async () => {
    const response = await prompts({
        type: 'text',
        name: 'something',
        message: 'what would you like to do today?',

    });

})();