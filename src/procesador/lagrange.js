import _ from "lodash";
import * as math from "mathjs";

export default class Lagrange {
  procesar(puntos) {
    let xs = _.map(puntos, ({ x }) => x);
    let ys = _.map(puntos, ({ y }) => y);
    let ls = this._basesPolinomicas(xs);
    let result = _.zipWith(ys, ls, (y, l) => `${y} * ${l}`).join(" + ");
    return { result, ls };
  }

  _basesPolinomicas(xs) {
    return _.map(xs, x => this._basePolinomica(x, xs));
  }

  _basePolinomica(xj, xs) {
    return _.filter(xs, x => x !== xj)
      .map(xi => `(x - ${xi}) / ${xj - xi}`)
      .map(it => `(${math.simplify(it).toString()})`)
      .join(" * ");
  }
}
