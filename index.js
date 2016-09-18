var m = require('makerjs');

function Front(holeRadius, alignToAngle) {
    this.units = m.unitType.Millimeter;

    holeRadius = holeRadius || 3.1;
    alignToAngle = alignToAngle || 90;

    var bc1 = new m.paths.Circle(49.7);
    var bc2 = new m.paths.Circle(87.3);
    var bc3 = new m.paths.Circle([bc1.radius, 0], 51);

    var int = m.path.intersection(bc2, bc3);

    this.paths = {
        c1: new m.paths.Circle(bc3.origin, holeRadius),
        c2: new m.paths.Circle(int.intersectionPoints[0], holeRadius)
    };

    var line = new m.paths.Line(this.paths.c1.origin, this.paths.c2.origin);

    this.angle = m.angle.ofLineInDegrees(line);

    m.model.rotate(this, alignToAngle - this.angle);
}

function Rear(holeRadius, alignToAngle) {
    this.units = m.unitType.Millimeter;

    holeRadius = holeRadius || 3.1;
    alignToAngle = alignToAngle || 135;

    var bc1 = new m.paths.Circle(39.9);
    var bc2 = new m.paths.Circle(78.1);
    var bc3 = new m.paths.Circle([bc1.radius, 0], 51);

    var int = m.path.intersection(bc2, bc3);

    this.paths = {
        c1: new m.paths.Circle(bc3.origin, holeRadius),
        c2: new m.paths.Circle(int.intersectionPoints[0], holeRadius)
    };

    var line = new m.paths.Line(this.paths.c1.origin, this.paths.c2.origin);

    this.angle = m.angle.ofLineInDegrees(line);

    m.model.rotate(this, alignToAngle - this.angle);
}

module.exports = { front: Front, rear: Rear };
