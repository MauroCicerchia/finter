const _ = require("lodash");
const math = require("mathjs");

module.exports = class Lagrange {
  procesar(puntos) {
    // _verificarUnicidad(puntos);
    let xs = _.map(puntos, ({ x }) => x);
    let ys = _.map(puntos, ({ y }) => y);
    let ls = this._basesPolinomicas(xs);
    let result = _.zipWith(ys, ls, (y, l) => `${y} * ${l}`).join(" + ");
    return { result, ls };
  }

  _basesPolinomicas(xs) {
    return _.map(xs, x => this._basePolinomica(x, xs));
  }

  //Seems ok
  _basePolinomica(xj, xs) {
    return _.filter(xs, x => x !== xj)
      .map(xi => `(x - ${xi}) / ${xj - xi}`)
      .map(it => math.simplify(it).toString())
      .join(" * ");
  }
};
