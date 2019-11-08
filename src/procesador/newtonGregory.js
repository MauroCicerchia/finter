const _ = require("lodash");
const math = require("mathjs");

module.exports = class Newton {
  procesar(puntos) {
    /*
      x   y   Δ0  Δ1  Δ2  ...
      x0  y0
              y1-y0/x(1+i)-x0
      x1  y1
              y2-y1/x(2+i)-x1
      x2  y2
              y3-y2/x(3+i)-x2
      x3  y3
    */
    let xs = _.map(puntos, ({ x }) => x);
    let ys = _.map(puntos, ({ y }) => y);
    let ds = this._deltas(xs, ys);
    return ds;
    // return this._crearPolinomio(xs, ys, ds);
  }

  _deltas(xs, ys, it = 0) {
    if (it === 4) return;
    if (ys.length === 1) return [ys];
    let ds = this._calcularDeltas(xs, ys, it);
    return _.concat([ys], this._deltas(xs, ds, it + 1));
  }

  _calcularDeltas(xs, ys, it) {
    let ds = [];
    for (let i = 0; i < ys.length - 1; i++) {
      let d = (ys[i + 1] - ys[i]) / (xs[i + 1 + it] - xs[i]);
      ds = [...ds, d];
    }
    return ds;
  }

  _crearPolinomio(xs, ys, ds) {}
};
