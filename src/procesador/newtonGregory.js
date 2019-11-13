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
    //return ds;
    return this._crearPolinomios(xs, ys, ds);
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

  _crearPolinomios(xs, ys, ds) {
    return {
      prog: this._crearProgresivo(xs, ds),
      reg: this._crearRegresivo(xs, ds)
    };
  }

  _crearProgresivo(xs, ds) {
    return this._calcularTerminos(xs, ds).join(" + ");
  }

  _crearRegresivo(xs, ds) {
    let xinv = _.reverse(xs);
    let dinv = _.map(ds, d => _.reverse(d));
    return this._crearProgresivo(xinv, dinv);
  }

  _calcularTerminos(xs, ds) {
    let coefs = _.map(ds, d => d[0]);
    let x = [];
    for (let i = 0; i < ds.length; i++) {
      x = [...x, this._xs(xs, i)];
    }
    return _.zipWith(coefs, x, (c, x) => (x ? `${c} * ${x}` : `${c}`));
  }

  _xs(xs, i) {
    return _.take(xs, i)
      .map(xi => `(x - ${xi})`)
      .join(" * ");
  }
};
