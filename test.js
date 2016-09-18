var lib = require('./index');
var m = require('makerjs');

var model = {
    models: {
        front: new lib.front(),
        rear: new lib.rear()
    },
    units: m.unitType.Millimeter
};

console.log(m.exporter.toSVG(model, { useSvgPathOnly: false }));
