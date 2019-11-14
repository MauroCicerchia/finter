const _ = require("lodash");
const math = require("mathjs");
const Lagrange = require("./lagrange");
const NewtonGregory = require("./newtonGregory");

const muestra = [
  { x: 1, y: 4 },
  { x: 2, y: 8 },
  { x: 3, y: 2 },
  { x: 4, y: 10 }
];

let l = new Lagrange().procesar(muestra);
// let f = x => math.parse(l.result).evaluate({ x });
module.exports = {
  interpolator: math.simplify(l.result).toString(),
  input: muestra
};
// let xs = math.range(-100, 100).map(x => x / 10);
// module.exports = xs.map(x => ({ x, y: f(x) })).toArray();

// let ng = new NewtonGregory();
// let res = ng.procesar(muestra);
// console.log(math.parse(res.prog).evaluate({ x: 4 }));
