const math = require("mathjs");
const Lagrange = require("./lagrange");
const NewtonGregory = require("./newtonGregory");

const muestra = [
  { x: 1, y: -2 },
  { x: -3, y: 1 },
  { x: 5, y: 2 },
  { x: 7, y: -3 }
];

// let l = new Lagrange().procesar(muestra);
// // let f = x => math.parse(l.result).evaluate({ x });
// module.exports = {
//   interpolator: math.simplify(l.result).toString(),
//   input: muestra
// };
// let xs = math.range(-100, 100).map(x => x / 10);
// module.exports = xs.map(x => ({ x, y: f(x) })).toArray();

let ng = new NewtonGregory();
let ds = ng.procesar(muestra);
console.log("AVERGA", ds);
