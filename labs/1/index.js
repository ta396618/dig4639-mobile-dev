const Adder = require("./Adder.js");

let adder = new Adder({
  a: 5,
  b: 10
});
console.log(adder.render());
