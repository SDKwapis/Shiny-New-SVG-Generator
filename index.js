const shapes = require('./lib/shapes.js');
const inquirer = require("inquirer");


inquirer
  .prompt([
    {
        type: 'maxlength-input',
        name: 'title',
        message: 'Enter three leters for your logo name.',
        maxLength: 3
    },
    {
        type: "list",
        message: "What color would you like your text to be?",
        name: "colors",
        choices: ["red", "blue", "green", "yellow", "cyan", "magenta"],
      },
    {
      type: "list",
      message: "What shape would you like to use for your logo?",
      name: "shapes",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
        type: "list",
        message: "What color would you like your shape to be?",
        name: "colors",
        choices: ["red", "blue", "green", "yellow", "cyan", "magenta"],
    },
    {
        message: "Generated logo.svg",
        name: "complete"
    }
  ])