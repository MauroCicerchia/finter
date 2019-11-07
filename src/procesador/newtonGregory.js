const _ = require("lodash");
const math = require("mathjs");

module.exports = class Newton {
  procesar(puntos) {
    let l = this._basesPolinomicas(puntos);
    console.log(l[0]);
  }
};
