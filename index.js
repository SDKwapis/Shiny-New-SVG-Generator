const { Circle, Triangle, Square } = require("./lib/shapes.js");
const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Enter three letters for your logo name.",
      validate: input => input.length <= 3 || "Logo name must be three letters."
    },
    {
      type: "input",
      message: "Enter the name or hex code of the color you would like your text to be",
      name: "textColor"
    },
    {
      type: "list",
      message: "What shape would you like to use for your logo?",
      name: "shape",
      choices: ["Circle", "Triangle", "Square"]
    },
    {
      type: "input",
      message: "Enter the name or hex code of the color you would like your shape to be",
      name: "shapeColor"
    },
  ])
  .then((data) => {
    if (data.shape === "Square") {
      console.log("Generating your logo now!");
      const square = new Square(data.shapeColor, data.textColor, data.title);
      fs.writeFile("./examples/logo.svg", square.makeSquare(), (err) => {
        if (err) throw err;
        console.log("Generated logo.svg");
      });
    } else if (data.shape === "Triangle") {
      console.log("Generating your logo now!");
      const triangle = new Triangle(data.shapeColor, data.textColor, data.title);
      fs.writeFile("./examples/logo.svg", triangle.makeTriangle(), (err) => {
        if (err) throw err;
        console.log("Generated logo.svg");
      });
    } else if (data.shape === "Circle") {
      console.log("Generating your logo now!");
      const circle = new Circle(data.shapeColor, data.textColor, data.title);
      fs.writeFile("./examples/logo.svg", circle.makeCircle(), (err) => {
        if (err) throw err;
        console.log("Generated logo.svg");
      });
    } else {
      console.log("An error has occurred");
    }
  });

  
