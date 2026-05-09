// funny cat
// get infected by the funny wacky cat catte from kaiju paradise or else...

console.log("Hello World!");

// pak ages
import chalk from "chalk";
const prompts = require('prompts');

// functions

// commands
function test() {
    console.log("Hello World!");
}


// running it
function run_commands(command:string[]) {
    if (command === "help") {
        test();
    }
}


(async () => {
    const response = await prompts({
        type: 'text',
        name: 'command',
        message: 'what would you like to do today?',
    });
    console.log(response);
    run_commands(response);
})();