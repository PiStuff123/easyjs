# **EasyJS**

GitHub: [easyjs](https://github.com/PiStuff123/easyjs)

One import with 369 small, everyday JavaScript helpers (no aliases). Written in vanilla JS with no external libraries.

## Install

```bash
npm i @cooljs123/easyjs
```

## Use

```js
const easyJS = require("@cooljs123/easyjs");

// Run once to add prototype helpers (Array/String/Object methods like .shuffle(), .toTitleCase(), .mapKeys()).
// Use this only if you want prototype sugar; it changes global prototypes.
easyJS.install();

easyJS.anyOf("tom", ["thomas", "tommy", "tom"]); // true
easyJS.normalizeString("  ToM  "); // "tom"
easyJS.safeGet({ a: { b: 2 } }, "a.b", 0); // 2
easyJS.safeSet({}, "a.b", 3); // { a: { b: 3 } }
```

## Modular Imports

```js
import { sum, uniq } from "@cooljs123/easyjs";
import shuffle from "@cooljs123/easyjs/array/shuffle";
import sumDefault from "@cooljs123/easyjs/sum";
import shuffleDefault from "@cooljs123/easyjs/shuffle";
```

```js
const easyJS = require("@cooljs123/easyjs");
const { sum, uniq } = require("@cooljs123/easyjs");
const shuffle = require("@cooljs123/easyjs/shuffle");
```

## Chain API

```js
easyJS.chain([1,2,2,3])
  .uniq()
  .shuffle()
  .take(2)
  .value()
```

## Plugins

If you want a plugin-only core, use `easyjs-empty` and add plugins like `easyjs-maths`, `easyjs-time`, `easyjs-random`, `easyjs-date`, `easyjs-json`, and `easyjs-collections`.

```js
const easy = require("easyjs-empty");
const maths = require("easyjs-maths");

easy.use(maths); // loads basic
easy.use(maths.advanced); // loads advanced
```

## Examples (All 369 Functions)

### Math

`abs`

```js
// Takes numbers and returns abs.
easyJS.abs(2, 3) // 2
```

`acosDeg`

```js
// Takes numbers and returns acos deg.
easyJS.acosDeg(2, 3) // null
```

`add`

```js
// Takes numbers and returns add.
easyJS.add(2, 3) // 5
```

`apothemRegularPolygon`

```js
// Takes numbers and returns apothem regular polygon.
easyJS.apothemRegularPolygon(2, 3) // 9.184850993605148e-17
```

`arcLength`

```js
// Takes numbers and returns arc length.
easyJS.arcLength(2, 3) // 6
```

`areaCircle`

```js
// Takes numbers and returns area circle.
easyJS.areaCircle(2, 3) // 12.566370614359172
```

`areaEllipse`

```js
// Takes numbers and returns area ellipse.
easyJS.areaEllipse(2, 3) // 18.84955592153876
```

`areaParallelogram`

```js
// Takes numbers and returns area parallelogram.
easyJS.areaParallelogram(2, 3) // 6
```

`areaRectangle`

```js
// Takes numbers and returns area rectangle.
easyJS.areaRectangle(2, 3) // 6
```

`areaRegularPolygon`

```js
// Takes numbers and returns area regular polygon.
easyJS.areaRegularPolygon(2, 3) // 0
```

`areaRing`

```js
// Takes numbers and returns area ring.
easyJS.areaRing(2, 3) // -15.707963267948966
```

`areaSector`

```js
// Takes numbers and returns area sector.
easyJS.areaSector(2, 3) // 9
```

`areaSquare`

```js
// Takes numbers and returns area square.
easyJS.areaSquare(2, 3) // 4
```

`areaTrapezoid`

```js
// Takes numbers and returns area trapezoid.
easyJS.areaTrapezoid(2, 3) // null
```

`areaTriangle`

```js
// Takes numbers and returns area triangle.
easyJS.areaTriangle(2, 3) // 3
```

`asinDeg`

```js
// Takes numbers and returns asin deg.
easyJS.asinDeg(2, 3) // null
```

`atanDeg`

```js
// Takes numbers and returns atan deg.
easyJS.atanDeg(2, 3) // 63.43494882292201
```

`averageOfThree`

```js
// Takes numbers and returns average of three.
easyJS.averageOfThree(2, 3) // null
```

`averageOfTwo`

```js
// Takes numbers and returns average of two.
easyJS.averageOfTwo(2, 3) // 2.5
```

`avg`

```js
// Takes numbers and returns avg.
easyJS.avg(2, 3) // 2.5
```

`between`

```js
// Takes numbers and returns between.
easyJS.between(2, 3) // false
```

`cbrt`

```js
// Takes numbers and returns cbrt.
easyJS.cbrt(2, 3) // 1.2599210498948732
```

`ceilTo`

```js
// Takes numbers and returns ceil to.
easyJS.ceilTo(2, 3) // 3
```

`ceilToMultiple`

```js
// Takes numbers and returns ceil to multiple.
easyJS.ceilToMultiple(2, 3) // 3
```

`circumferenceCircle`

```js
// Takes numbers and returns circumference circle.
easyJS.circumferenceCircle(2, 3) // 12.566370614359172
```

`circumradiusRegularPolygon`

```js
// Takes numbers and returns circumradius regular polygon.
easyJS.circumradiusRegularPolygon(2, 3) // 1.5
```

`clamp`

```js
// Takes numbers and returns clamp.
easyJS.clamp(2, 3) // null
```

`clamp01`

```js
// Takes numbers and returns clamp 01.
easyJS.clamp01(2, 3) // 1
```

`clampAbs`

```js
// Takes numbers and returns clamp abs.
easyJS.clampAbs(2, 3) // 2
```

`clampInt`

```js
// Takes numbers and returns clamp int.
easyJS.clampInt(2, 3) // null
```

`clampMax`

```js
// Takes numbers and returns clamp max.
easyJS.clampMax(2, 3) // 2
```

`clampMin`

```js
// Takes numbers and returns clamp min.
easyJS.clampMin(2, 3) // 3
```

`clampPercent`

```js
// Takes numbers and returns clamp percent.
easyJS.clampPercent(2, 3) // 2
```

`convertCtoF`

```js
// Takes numbers and returns convert cto f.
easyJS.convertCtoF(2, 3) // 35.6
```

`convertCtoK`

```js
// Takes numbers and returns convert cto k.
easyJS.convertCtoK(2, 3) // 275.15
```

`convertFtoC`

```js
// Takes numbers and returns convert fto c.
easyJS.convertFtoC(2, 3) // -16.666666666666668
```

`convertFtoK`

```js
// Takes numbers and returns convert fto k.
easyJS.convertFtoK(2, 3) // 256.48333333333335
```

`convertKtoC`

```js
// Takes numbers and returns convert kto c.
easyJS.convertKtoC(2, 3) // -271.15
```

`convertKtoF`

```js
// Takes numbers and returns convert kto f.
easyJS.convertKtoF(2, 3) // -456.07
```

`cosDeg`

```js
// Takes numbers and returns cos deg.
easyJS.cosDeg(2, 3) // 0.9993908270190958
```

`cube`

```js
// Takes numbers and returns cube.
easyJS.cube(2, 3) // 8
```

`degToRad`

```js
// Takes numbers and returns deg to rad.
easyJS.degToRad(2, 3) // 0.03490658503988659
```

`degToTurn`

```js
// Takes numbers and returns deg to turn.
easyJS.degToTurn(2, 3) // 0.005555555555555556
```

`denormalize`

```js
// Takes numbers and returns denormalize.
easyJS.denormalize(2, 3) // null
```

`diff`

```js
// Takes numbers and returns diff.
easyJS.diff(2, 3) // 1
```

`distance1D`

```js
// Takes numbers and returns distance 1d.
easyJS.distance1D(2, 3) // 1
```

`distance2D`

```js
// Takes numbers and returns distance 2d.
easyJS.distance2D(2, 3) // null
```

`distance3D`

```js
// Takes numbers and returns distance 3d.
easyJS.distance3D(2, 3) // null
```

`distancePointLine`

```js
// Takes numbers and returns distance point line.
easyJS.distancePointLine(2, 3) // null
```

`distancePoints`

```js
// Takes numbers and returns distance points.
easyJS.distancePoints(2, 3) // null
```

`divide`

```js
// Takes numbers and returns divide.
easyJS.divide(2, 3) // 0.6666666666666666
```

`dot2`

```js
// Takes numbers and returns dot 2.
easyJS.dot2(2, 3) // null
```

`dot3`

```js
// Takes numbers and returns dot 3.
easyJS.dot3(2, 3) // null
```

`exp`

```js
// Takes numbers and returns exp.
easyJS.exp(2, 3) // 7.38905609893065
```

`expm1`

```js
// Takes numbers and returns expm 1.
easyJS.expm1(2, 3) // 6.38905609893065
```

`factorial`

```js
// Takes numbers and returns factorial.
easyJS.factorial(2, 3) // 2
```

`fibonacci`

```js
// Takes numbers and returns fibonacci.
easyJS.fibonacci(2, 3) // 1
```

`floorTo`

```js
// Takes numbers and returns floor to.
easyJS.floorTo(2, 3) // 0
```

`floorToMultiple`

```js
// Takes numbers and returns floor to multiple.
easyJS.floorToMultiple(2, 3) // 0
```

`fromPercent`

```js
// Takes numbers and returns from percent.
easyJS.fromPercent(2, 3) // 0.06
```

`gcd`

```js
// Takes numbers and returns gcd.
easyJS.gcd(2, 3) // 1
```

`geometricMean`

```js
// Takes numbers and returns geometric mean.
easyJS.geometricMean(2, 3) // 2.449489742783178
```

`harmonicMean`

```js
// Takes numbers and returns harmonic mean.
easyJS.harmonicMean(2, 3) // 2.4000000000000004
```

`heronArea`

```js
// Takes numbers and returns heron area.
easyJS.heronArea(2, 3) // null
```

`hypot2`

```js
// Takes numbers and returns hypot 2.
easyJS.hypot2(2, 3) // 3.6055512754639896
```

`hypot3`

```js
// Takes numbers and returns hypot 3.
easyJS.hypot3(2, 3) // null
```

`inRangeExclusive`

```js
// Takes numbers and returns in range exclusive.
easyJS.inRangeExclusive(2, 3) // false
```

`inRangeInclusive`

```js
// Takes numbers and returns in range inclusive.
easyJS.inRangeInclusive(2, 3) // false
```

`isEven`

```js
// Checks if is even is true.
easyJS.isEven(2, 3) // true
```

`isFiniteNumber`

```js
// Checks if is finite number is true.
easyJS.isFiniteNumber(2, 3) // true
```

`isInt`

```js
// Checks if is int is true.
easyJS.isInt(2, 3) // true
```

`isMultipleOf`

```js
// Checks if is multiple of is true.
easyJS.isMultipleOf(2, 3) // false
```

`isNaNNumber`

```js
// Checks if is na nnumber is true.
easyJS.isNaNNumber(2, 3) // false
```

`isNegative`

```js
// Checks if is negative is true.
easyJS.isNegative(2, 3) // false
```

`isNumber`

```js
// Checks if is number is true.
easyJS.isNumber(2, 3) // true
```

`isOdd`

```js
// Checks if is odd is true.
easyJS.isOdd(2, 3) // false
```

`isPositive`

```js
// Checks if is positive is true.
easyJS.isPositive(2, 3) // true
```

`isPowerOfTwo`

```js
// Checks if is power of two is true.
easyJS.isPowerOfTwo(2, 3) // true
```

`isPrime`

```js
// Checks if is prime is true.
easyJS.isPrime(2, 3) // true
```

`isZero`

```js
// Checks if is zero is true.
easyJS.isZero(2, 3) // false
```

`lawOfCosinesAngle`

```js
// Takes numbers and returns law of cosines angle.
easyJS.lawOfCosinesAngle(2, 3) // null
```

`lawOfCosinesSide`

```js
// Takes numbers and returns law of cosines side.
easyJS.lawOfCosinesSide(2, 3) // null
```

`lawOfSinesAngle`

```js
// Takes numbers and returns law of sines angle.
easyJS.lawOfSinesAngle(2, 3) // null
```

`lawOfSinesSide`

```js
// Takes numbers and returns law of sines side.
easyJS.lawOfSinesSide(2, 3) // null
```

`lcm`

```js
// Takes numbers and returns lcm.
easyJS.lcm(2, 3) // 6
```

`lerp`

```js
// Takes numbers and returns lerp.
easyJS.lerp(2, 3) // null
```

`lerpAngleDeg`

```js
// Takes numbers and returns lerp angle deg.
easyJS.lerpAngleDeg(2, 3) // null
```

`lerpAngleRad`

```js
// Takes numbers and returns lerp angle rad.
easyJS.lerpAngleRad(2, 3) // null
```

`lerpClamped`

```js
// Takes numbers and returns lerp clamped.
easyJS.lerpClamped(2, 3) // null
```

`lerpInt`

```js
// Takes numbers and returns lerp int.
easyJS.lerpInt(2, 3) // null
```

`ln1p`

```js
// Takes numbers and returns ln 1p.
easyJS.ln1p(2, 3) // 1.0986122886681096
```

`log`

```js
// Takes numbers and returns log.
easyJS.log(2, 3) // 0.6931471805599453
```

`log10`

```js
// Takes numbers and returns log 10.
easyJS.log10(2, 3) // 0.3010299956639812
```

`log2`

```js
// Takes numbers and returns log 2.
easyJS.log2(2, 3) // 1
```

`manhattan2D`

```js
// Takes numbers and returns manhattan 2d.
easyJS.manhattan2D(2, 3) // null
```

`manhattan3D`

```js
// Takes numbers and returns manhattan 3d.
easyJS.manhattan3D(2, 3) // null
```

`mapRange`

```js
// Takes numbers and returns map range.
easyJS.mapRange(2, 3) // null
```

`max`

```js
// Takes numbers and returns max.
easyJS.max(2, 3) // 3
```

`mean`

```js
// Takes numbers and returns mean.
easyJS.mean(2, 3) // 2.5
```

`median`

```js
// Takes numbers and returns median.
easyJS.median(2, 3) // 2.5
```

`medianOfThree`

```js
// Takes numbers and returns median of three.
easyJS.medianOfThree(2, 3) // 3
```

`midpointX`

```js
// Takes numbers and returns midpoint x.
easyJS.midpointX(2, 3) // 2.5
```

`midpointY`

```js
// Takes numbers and returns midpoint y.
easyJS.midpointY(2, 3) // 2.5
```

`min`

```js
// Takes numbers and returns min.
easyJS.min(2, 3) // 2
```

`mod`

```js
// Takes numbers and returns mod.
easyJS.mod(2, 3) // 2
```

`modSafe`

```js
// Takes numbers and returns mod safe.
easyJS.modSafe(2, 3) // 2
```

`mode`

```js
// Takes numbers and returns mode.
easyJS.mode(2, 3) // 2
```

`multiply`

```js
// Takes numbers and returns multiply.
easyJS.multiply(2, 3) // 6
```

`nCr`

```js
// Takes numbers and returns n cr.
easyJS.nCr(2, 3) // 0
```

`nPr`

```js
// Takes numbers and returns n pr.
easyJS.nPr(2, 3) // 0
```

`nearEqual`

```js
// Takes numbers and returns near equal.
easyJS.nearEqual(2, 3) // false
```

`nextPrime`

```js
// Takes numbers and returns next prime.
easyJS.nextPrime(2, 3) // 2
```

`normalize`

```js
// Takes numbers and returns normalize.
easyJS.normalize(2, 3) // null
```

`normalizeAngle`

```js
// Takes numbers and returns normalize angle.
easyJS.normalizeAngle(2, 3) // 2
```

`percent`

```js
// Takes numbers and returns percent.
easyJS.percent(2, 3) // 66.66666666666666
```

`percentChange`

```js
// Takes numbers and returns percent change.
easyJS.percentChange(2, 3) // 50
```

`percentOf`

```js
// Takes numbers and returns percent of.
easyJS.percentOf(2, 3) // 66.66666666666666
```

`percentile`

```js
// Takes numbers and returns percentile.
easyJS.percentile(2, 3) // 2
```

`perimeterRectangle`

```js
// Takes numbers and returns perimeter rectangle.
easyJS.perimeterRectangle(2, 3) // 10
```

`perimeterRegularPolygon`

```js
// Takes numbers and returns perimeter regular polygon.
easyJS.perimeterRegularPolygon(2, 3) // 6
```

`perimeterSquare`

```js
// Takes numbers and returns perimeter square.
easyJS.perimeterSquare(2, 3) // 8
```

`perimeterTriangle`

```js
// Takes numbers and returns perimeter triangle.
easyJS.perimeterTriangle(2, 3) // null
```

`pingPong`

```js
// Takes numbers and returns ping pong.
easyJS.pingPong(2, 3) // 2
```

`pow`

```js
// Takes numbers and returns pow.
easyJS.pow(2, 3) // 8
```

`prevPrime`

```js
// Takes numbers and returns prev prime.
easyJS.prevPrime(2, 3) // 2
```

`pythagoras`

```js
// Takes numbers and returns pythagoras.
easyJS.pythagoras(2, 3) // 3.6055512754639896
```

`quadraticDiscriminant`

```js
// Takes numbers and returns quadratic discriminant.
easyJS.quadraticDiscriminant(2, 3) // null
```

`quadraticRoots`

```js
// Takes numbers and returns quadratic roots.
easyJS.quadraticRoots(2, 3) // [null,null]
```

`radToDeg`

```js
// Takes numbers and returns rad to deg.
easyJS.radToDeg(2, 3) // 114.59155902616465
```

`radToTurn`

```js
// Takes numbers and returns rad to turn.
easyJS.radToTurn(2, 3) // 0.3183098861837907
```

`randomBool`

```js
// Takes numbers and returns random bool.
easyJS.randomBool() // random (example: true)
```

`randomFloat`

```js
// Takes numbers and returns random float.
easyJS.randomFloat(1, 5) // random (example: 3.27)
```

`randomGaussian`

```js
// Takes numbers and returns random gaussian.
easyJS.randomGaussian() // random (example: 1.086899378726529)
```

`randomInt`

```js
// Takes numbers and returns random int.
easyJS.randomInt(1, 3) // random (example: 1)
```

`randomSign`

```js
// Takes numbers and returns random sign.
easyJS.randomSign() // random (example: 1)
```

`ratio`

```js
// Takes numbers and returns ratio.
easyJS.ratio(2, 3) // 0.6666666666666666
```

`rms`

```js
// Takes numbers and returns rms.
easyJS.rms(2, 3) // 2.5495097567963922
```

`roundBankers`

```js
// Takes numbers and returns round bankers.
easyJS.roundBankers(2, 3) // 2
```

`roundDecimal`

```js
// Takes numbers and returns round decimal.
easyJS.roundDecimal(2, 3) // 2
```

`roundDown`

```js
// Takes numbers and returns round down.
easyJS.roundDown(2, 3) // 2
```

`roundHalfDown`

```js
// Takes numbers and returns round half down.
easyJS.roundHalfDown(2, 3) // 2
```

`roundHalfUp`

```js
// Takes numbers and returns round half up.
easyJS.roundHalfUp(2, 3) // 2
```

`roundTo`

```js
// Takes numbers and returns round to.
easyJS.roundTo(2, 3) // 2
```

`roundToMultiple`

```js
// Takes numbers and returns round to multiple.
easyJS.roundToMultiple(2, 3) // 3
```

`roundToNearest`

```js
// Takes numbers and returns round to nearest.
easyJS.roundToNearest(2, 3) // 3
```

`roundToSignificant`

```js
// Takes numbers and returns round to significant.
easyJS.roundToSignificant(2, 3) // 2
```

`roundToStep`

```js
// Takes numbers and returns round to step.
easyJS.roundToStep(2, 3) // 3
```

`roundUp`

```js
// Takes numbers and returns round up.
easyJS.roundUp(2, 3) // 2
```

`safeDivide`

```js
// Takes numbers and returns safe divide.
easyJS.safeDivide(2, 3) // 0.6666666666666666
```

`sawtoothWave`

```js
// Takes numbers and returns sawtooth wave.
easyJS.sawtoothWave(2, 3) // 0.6666666666666665
```

`sigmoid`

```js
// Takes numbers and returns sigmoid.
easyJS.sigmoid(2, 3) // 0.8807970779778823
```

`sign`

```js
// Takes numbers and returns sign.
easyJS.sign(2, 3) // 1
```

`sinDeg`

```js
// Takes numbers and returns sin deg.
easyJS.sinDeg(2, 3) // 0.03489949670250097
```

`slope`

```js
// Takes numbers and returns slope.
easyJS.slope(2, 3) // null
```

`smoothClamp`

```js
// Takes numbers and returns smooth clamp.
easyJS.smoothClamp(2, 3) // null
```

`smootherstep`

```js
// Takes numbers and returns smootherstep.
easyJS.smootherstep(2, 3) // null
```

`smoothstep`

```js
// Takes numbers and returns smoothstep.
easyJS.smoothstep(2, 3) // null
```

`smoothstep01`

```js
// Takes numbers and returns smoothstep 01.
easyJS.smoothstep01(2, 3) // 1
```

`sqrt`

```js
// Takes numbers and returns sqrt.
easyJS.sqrt(2, 3) // 1.4142135623730951
```

`square`

```js
// Takes numbers and returns square.
easyJS.square(2, 3) // 4
```

`stdDev`

```js
// Takes numbers and returns std dev.
easyJS.stdDev(2, 3) // 0
```

`stdDevSample`

```js
// Takes numbers and returns std dev sample.
easyJS.stdDevSample(2, 3) // 0
```

`step`

```js
// Takes numbers and returns step.
easyJS.step(2, 3) // 1
```

`subtract`

```js
// Takes numbers and returns subtract.
easyJS.subtract(2, 3) // -1
```

`sum`

```js
// Takes numbers and returns sum.
easyJS.sum(2, 3) // 5
```

`sumOfSquares`

```js
// Takes numbers and returns sum of squares.
easyJS.sumOfSquares(2, 3) // 13
```

`sumOfTwo`

```js
// Takes numbers and returns sum of two.
easyJS.sumOfTwo(2, 3) // 5
```

`surfaceAreaCone`

```js
// Takes numbers and returns surface area cone.
easyJS.surfaceAreaCone(2, 3) // 35.22071741263713
```

`surfaceAreaCube`

```js
// Takes numbers and returns surface area cube.
easyJS.surfaceAreaCube(2, 3) // 24
```

`surfaceAreaCylinder`

```js
// Takes numbers and returns surface area cylinder.
easyJS.surfaceAreaCylinder(2, 3) // 62.83185307179586
```

`surfaceAreaPyramidSquare`

```js
// Takes numbers and returns surface area pyramid square.
easyJS.surfaceAreaPyramidSquare(2, 3) // 16
```

`surfaceAreaRectPrism`

```js
// Takes numbers and returns surface area rect prism.
easyJS.surfaceAreaRectPrism(2, 3) // null
```

`surfaceAreaSphere`

```js
// Takes numbers and returns surface area sphere.
easyJS.surfaceAreaSphere(2, 3) // 50.26548245743669
```

`tanDeg`

```js
// Takes numbers and returns tan deg.
easyJS.tanDeg(2, 3) // 0.03492076949174773
```

`toFloat`

```js
// Takes numbers and returns to float.
easyJS.toFloat(2, 3) // 2
```

`toInt`

```js
// Takes numbers and returns to int.
easyJS.toInt(2, 3) // 2
```

`toNumber`

```js
// Takes numbers and returns to number.
easyJS.toNumber(2, 3) // 2
```

`triangleWave`

```js
// Takes numbers and returns triangle wave.
easyJS.triangleWave(2, 3) // -0.3333333333333335
```

`triangularNumber`

```js
// Takes numbers and returns triangular number.
easyJS.triangularNumber(2, 3) // 3
```

`turnToDeg`

```js
// Takes numbers and returns turn to deg.
easyJS.turnToDeg(2, 3) // 720
```

`turnToRad`

```js
// Takes numbers and returns turn to rad.
easyJS.turnToRad(2, 3) // 12.566370614359172
```

`variance`

```js
// Takes numbers and returns variance.
easyJS.variance(2, 3) // 0.25
```

`varianceSample`

```js
// Takes numbers and returns variance sample.
easyJS.varianceSample(2, 3) // 0.5
```

`volumeCone`

```js
// Takes numbers and returns volume cone.
easyJS.volumeCone(2, 3) // 12.566370614359172
```

`volumeCube`

```js
// Takes numbers and returns volume cube.
easyJS.volumeCube(2, 3) // 8
```

`volumeCylinder`

```js
// Takes numbers and returns volume cylinder.
easyJS.volumeCylinder(2, 3) // 37.69911184307752
```

`volumePyramidSquare`

```js
// Takes numbers and returns volume pyramid square.
easyJS.volumePyramidSquare(2, 3) // 2
```

`volumeRectPrism`

```js
// Takes numbers and returns volume rect prism.
easyJS.volumeRectPrism(2, 3) // null
```

`volumeSphere`

```js
// Takes numbers and returns volume sphere.
easyJS.volumeSphere(2, 3) // 33.510321638291124
```

`wrap`

```js
// Takes numbers and returns wrap.
easyJS.wrap(2, 3) // null
```

`wrapAngle`

```js
// Takes numbers and returns wrap angle.
easyJS.wrapAngle(2, 3) // 2
```

`wrapPi`

```js
// Takes numbers and returns wrap pi.
easyJS.wrapPi(2, 3) // 2
```

### Array

`arrayGroupBy`

```js
// Takes an array and returns array group by.
easyJS.arrayGroupBy([1,2,3]) // {"undefined":[1,2,3]}
```

`asArray`

```js
// Takes an array and returns as array.
easyJS.asArray([1,2,3]) // [1,2,3]
```

`avgBy`

```js
// Takes an array and returns avg by.
easyJS.avgBy([{"v":1},{"v":3}], fn) // 2
```

`chunk`

```js
// Takes an array and returns chunk.
easyJS.chunk([1,2,3]) // [[]]
```

`chunkBy`

```js
// Takes an array and returns chunk by.
easyJS.chunkBy([1,1,2,2,3], fn) // [[1,1],[2,2],[3]]
```

`chunkWhile`

```js
// Takes an array and returns chunk while.
easyJS.chunkWhile([1,2,3,4], fn) // [[1,2],[3,4]]
```

`compact`

```js
// Takes an array and returns compact.
easyJS.compact([1,2,3]) // [1,2,3]
```

`compactBy`

```js
// Takes an array and returns compact by.
easyJS.compactBy([0,1,2], fn) // [1,2]
```

`count`

```js
// Takes an array and returns count.
easyJS.count([1,2,3]) // 3
```

`countBy`

```js
// Takes an array and returns count by.
easyJS.countBy([1,2,3,4], fn) // {"0":2,"1":2}
```

`difference`

```js
// Takes an array and returns difference.
easyJS.difference([1,2,3]) // [1,2,3]
```

`differenceBy`

```js
// Takes an array and returns difference by.
easyJS.differenceBy([1,2,3], [2], fn) // [1,3]
```

`drop`

```js
// Takes an array and returns drop.
easyJS.drop([1,2,3]) // [1,2,3]
```

`dropRight`

```js
// Takes an array and returns drop right.
easyJS.dropRight([1,2,3]) // []
```

`dropUntil`

```js
// Takes an array and returns drop until.
easyJS.dropUntil([1,2,3,4], fn) // [3,4]
```

`dropWhile`

```js
// Takes an array and returns drop while.
easyJS.dropWhile([1,2,3,4], fn) // [3,4]
```

`findLast`

```js
// Takes an array and returns find last.
easyJS.findLast([1,2,3,4], fn) // 4
```

`findLastIndex`

```js
// Takes an array and returns find last index.
easyJS.findLastIndex([1,2,3,4], fn) // 3
```

`first`

```js
// Takes an array and returns first.
easyJS.first([1,2,3]) // 1
```

`flatten`

```js
// Takes an array and returns flatten.
easyJS.flatten([1,2,3]) // [1,2,3]
```

`flattenDeep`

```js
// Takes an array and returns flatten deep.
easyJS.flattenDeep([1,2,3]) // [1,2,3]
```

`flattenDepth`

```js
// Takes an array and returns flatten depth.
easyJS.flattenDepth([1,2,3]) // [1,2,3]
```

`fromSet`

```js
// Takes an array and returns from set.
easyJS.fromSet([1,2,3]) // [1,2,3]
```

`groupBy`

```js
// Takes an array and returns group by.
easyJS.groupBy([1,2,3,4], fn) // {"0":[2,4],"1":[1,3]}
```

`head`

```js
// Takes an array and returns head.
easyJS.head([1,2,3]) // 1
```

`inArray`

```js
// Takes an array and returns in array.
easyJS.inArray([1,2,3]) // false
```

`indexBy`

```js
// Takes an array and returns index by.
easyJS.indexBy([{"id":1},{"id":2}], fn) // {"1":{"id":1},"2":{"id":2}}
```

`indexOfAll`

```js
// Takes an array and returns index of all.
easyJS.indexOfAll([1,2,3]) // []
```

`init`

```js
// Takes an array and returns init.
easyJS.init([1,2,3]) // [1,2]
```

`insertAt`

```js
// Takes an array and returns insert at.
easyJS.insertAt([1,2,3]) // [null,1,2,3]
```

`intersection`

```js
// Takes an array and returns intersection.
easyJS.intersection([1,2,3]) // [1,2,3]
```

`intersectionBy`

```js
// Takes an array and returns intersection by.
easyJS.intersectionBy([1,2,3], [2,4], fn) // [2]
```

`isArray`

```js
// Checks if is array is true.
easyJS.isArray([1,2,3]) // true
```

`keyBy`

```js
// Takes an array and returns key by.
easyJS.keyBy([{"id":1},{"id":2}], fn) // {"1":{"id":1},"2":{"id":2}}
```

`last`

```js
// Takes an array and returns last.
easyJS.last([1,2,3]) // 3
```

`lastIndex`

```js
// Takes an array and returns last index.
easyJS.lastIndex([1,2,3]) // 2
```

`lastIndexOf`

```js
// Takes an array and returns last index of.
easyJS.lastIndexOf([1,2,3]) // -1
```

`move`

```js
// Takes an array and returns move.
easyJS.move([1,2,3]) // [1,2,3]
```

`partition`

```js
// Takes an array and returns partition.
easyJS.partition([1,2,3,4], fn) // [[2,4],[1,3]]
```

`pluck`

```js
// Takes an array and returns pluck.
easyJS.pluck([{"a":1},{"a":2}], "a") // [1,2]
```

`range`

```js
// Takes an array and returns range.
easyJS.range([1,2,3]) // []
```

`removeAt`

```js
// Takes an array and returns remove at.
easyJS.removeAt([1,2,3]) // [2,3]
```

`repeatArray`

```js
// Takes an array and returns repeat array.
easyJS.repeatArray([1,2,3]) // []
```

`rotate`

```js
// Takes an array and returns rotate.
easyJS.rotate([1,2,3]) // [1,2,3]
```

`rotateLeft`

```js
// Takes an array and returns rotate left.
easyJS.rotateLeft([1,2,3]) // [1,2,3]
```

`rotateRight`

```js
// Takes an array and returns rotate right.
easyJS.rotateRight([1,2,3]) // [1,2,3]
```

`sample`

```js
// Takes an array and returns sample.
easyJS.sample([1,2,3]) // random (example: 2)
```

`shuffle`

```js
// Takes an array and returns shuffle.
easyJS.shuffle([1,2,3]) // random (example: [2,1,3])
```

`slidingWindow`

```js
// Takes an array and returns sliding window.
easyJS.slidingWindow([1,2,3]) // []
```

`sortBy`

```js
// Takes an array and returns sort by.
easyJS.sortBy([{"n":2},{"n":1}], fn) // [{"n":1},{"n":2}]
```

`sumBy`

```js
// Takes an array and returns sum by.
easyJS.sumBy([{"v":1},{"v":2}], fn) // 3
```

`swap`

```js
// Takes an array and returns swap.
easyJS.swap([1,2,3]) // [1,2,3]
```

`tail`

```js
// Takes an array and returns tail.
easyJS.tail([1,2,3]) // [2,3]
```

`take`

```js
// Takes an array and returns take.
easyJS.take([1,2,3]) // [1,2,3]
```

`takeRight`

```js
// Takes an array and returns take right.
easyJS.takeRight([1,2,3]) // [1,2,3]
```

`takeUntil`

```js
// Takes an array and returns take until.
easyJS.takeUntil([1,2,3,4], fn) // [1,2]
```

`takeWhile`

```js
// Takes an array and returns take while.
easyJS.takeWhile([1,2,3,4], fn) // [1,2]
```

`toSet`

```js
// Takes an array and returns to set.
easyJS.toSet([1,2,3]) // {}
```

`union`

```js
// Takes an array and returns union.
easyJS.union([1,2,3]) // [1,2,3]
```

`unionBy`

```js
// Takes an array and returns union by.
easyJS.unionBy([{"id":1},{"id":2}], [{"id":2},{"id":3}], fn) // [{"id":1},{"id":2},{"id":3}]
```

`uniq`

```js
// Takes an array and returns uniq.
easyJS.uniq([1,2,3]) // [1,2,3]
```

`uniqueBy`

```js
// Takes an array and returns unique by.
easyJS.uniqueBy([1,2,3]) // [1]
```

`uniqueSorted`

```js
// Takes an array and returns unique sorted.
easyJS.uniqueSorted([1,2,3]) // [1,2,3]
```

`unzip`

```js
// Takes an array and returns unzip.
easyJS.unzip([1,2,3]) // []
```

`zip`

```js
// Takes an array and returns zip.
easyJS.zip([1,2,3]) // [[1],[2],[3]]
```

`zipObject`

```js
// Takes an array and returns zip object.
easyJS.zipObject([1,2,3]) // {}
```

### String

`camelCase`

```js
// Takes a string and returns camel case.
easyJS.camelCase("hello world") // "helloWorld"
```

`capitalize`

```js
// Takes a string and returns capitalize.
easyJS.capitalize("hello world") // "Hello world"
```

`collapseWhitespace`

```js
// Takes a string and returns collapse whitespace.
easyJS.collapseWhitespace("hello world") // "hello world"
```

`containsAny`

```js
// Takes a string and returns contains any.
easyJS.containsAny("hello world", ["ell","zzz"]) // true
```

`countChars`

```js
// Takes a string and returns count chars.
easyJS.countChars("hello world") // 11
```

`countOccurrences`

```js
// Takes a string and returns count occurrences.
easyJS.countOccurrences("a-b-a", "a") // 2
```

`countWords`

```js
// Takes a string and returns count words.
easyJS.countWords("hello world") // 2
```

`endsWith`

```js
// Takes a string and returns ends with.
easyJS.endsWith("hello world", "ld") // true
```

`endsWithAny`

```js
// Takes a string and returns ends with any.
easyJS.endsWithAny("hello world", ["ld","zz"]) // true
```

`ensurePrefix`

```js
// Takes a string and returns ensure prefix.
easyJS.ensurePrefix("world", "hello ") // "hello world"
```

`ensureSuffix`

```js
// Takes a string and returns ensure suffix.
easyJS.ensureSuffix("hello", "!") // "hello!"
```

`includes`

```js
// Takes a string and returns includes.
easyJS.includes("hello world", "lo") // true
```

`isBlank`

```js
// Checks if is blank is true.
easyJS.isBlank("hello world") // false
```

`isLower`

```js
// Checks if is lower is true.
easyJS.isLower("hello world") // true
```

`isUpper`

```js
// Checks if is upper is true.
easyJS.isUpper("hello world") // false
```

`kebabCase`

```js
// Takes a string and returns kebab case.
easyJS.kebabCase("hello world") // "hello-world"
```

`lines`

```js
// Takes a string and returns lines.
easyJS.lines("hello world") // ["hello world"]
```

`mask`

```js
// Takes a string and returns mask.
easyJS.mask("123456", 2, "*") // "****56"
```

`normalizeString`

```js
// Takes a string and returns normalize string.
easyJS.normalizeString("hello world") // "hello world"
```

`padCenter`

```js
// Takes a string and returns pad center.
easyJS.padCenter("hi", 6, "-") // "--hi--"
```

`padLeft`

```js
// Takes a string and returns pad left.
easyJS.padLeft("7", 3, "0") // "007"
```

`padRight`

```js
// Takes a string and returns pad right.
easyJS.padRight("7", 3, "0") // "700"
```

`pascalCase`

```js
// Takes a string and returns pascal case.
easyJS.pascalCase("hello world") // "HelloWorld"
```

`removeConsonants`

```js
// Takes a string and returns remove consonants.
easyJS.removeConsonants("hello world") // "eowod"
```

`removeVowels`

```js
// Takes a string and returns remove vowels.
easyJS.removeVowels("hello world") // "hll wrld"
```

`repeat`

```js
// Takes a string and returns repeat.
easyJS.repeat("hello world") // ""
```

`replaceAll`

```js
// Takes a string and returns replace all.
easyJS.replaceAll("hello world") // "hello world"
```

`replaceFirst`

```js
// Takes a string and returns replace first.
easyJS.replaceFirst("a-b-a", "a", "x") // "x-b-a"
```

`replaceLast`

```js
// Takes a string and returns replace last.
easyJS.replaceLast("a-b-a", "a", "x") // "a-b-x"
```

`reverseString`

```js
// Takes a string and returns reverse string.
easyJS.reverseString("hello world") // "dlrow olleh"
```

`slugify`

```js
// Takes a string and returns slugify.
easyJS.slugify("hello world") // "hello-world"
```

`snakeCase`

```js
// Takes a string and returns snake case.
easyJS.snakeCase("hello world") // "hello_world"
```

`startsWith`

```js
// Takes a string and returns starts with.
easyJS.startsWith("hello world", "he") // true
```

`startsWithAny`

```js
// Takes a string and returns starts with any.
easyJS.startsWithAny("hello world", ["he","yo"]) // true
```

`stripNonAlpha`

```js
// Takes a string and returns strip non alpha.
easyJS.stripNonAlpha("hello world") // "helloworld"
```

`stripPrefix`

```js
// Takes a string and returns strip prefix.
easyJS.stripPrefix("hello", "he") // "llo"
```

`stripSuffix`

```js
// Takes a string and returns strip suffix.
easyJS.stripSuffix("hello", "lo") // "hel"
```

`surround`

```js
// Takes a string and returns surround.
easyJS.surround("hi", "<", ">") // "<hi>"
```

`swapCase`

```js
// Takes a string and returns swap case.
easyJS.swapCase("hello world") // "HELLO WORLD"
```

`toLower`

```js
// Takes a string and returns to lower.
easyJS.toLower("hello world") // "hello world"
```

`toTitleCase`

```js
// Takes a string and returns to title case.
easyJS.toTitleCase("hello world") // "Hello World"
```

`toTitleCaseWords`

```js
// Takes a string and returns to title case words.
easyJS.toTitleCaseWords("hello world") // "Hello World"
```

`toUpper`

```js
// Takes a string and returns to upper.
easyJS.toUpper("hello world") // "HELLO WORLD"
```

`trim`

```js
// Takes a string and returns trim.
easyJS.trim("hello world") // "hello world"
```

`trimEnd`

```js
// Takes a string and returns trim end.
easyJS.trimEnd("hello world") // "hello world"
```

`trimStart`

```js
// Takes a string and returns trim start.
easyJS.trimStart("hello world") // "hello world"
```

`truncate`

```js
// Takes a string and returns truncate.
easyJS.truncate("hello world") // "..."
```

`unmask`

```js
// Takes a string and returns unmask.
easyJS.unmask("**1234", "*") // "1234"
```

`words`

```js
// Takes a string and returns words.
easyJS.words("hello world") // ["hello","world"]
```

### Object

`cloneShallow`

```js
// Takes an object and returns clone shallow.
easyJS.cloneShallow({"a":1,"b":2}) // {"a":1,"b":2}
```

`deepMerge`

```js
// Takes an object and returns deep merge.
easyJS.deepMerge({"a":{"b":1}}, {"a":{"c":2}}) // {"a":{"b":1,"c":2}}
```

`defaults`

```js
// Takes an object and returns defaults.
easyJS.defaults({"a":1}, {"a":2,"b":2}) // {"a":1,"b":2}
```

`defaultsDeep`

```js
// Takes an object and returns defaults deep.
easyJS.defaultsDeep({"a":{"b":1}}, {"a":{"c":2}}) // {"a":{"b":1,"c":2}}
```

`entries`

```js
// Takes an object and returns entries.
easyJS.entries({"a":1,"b":2}) // [["a",1],["b",2]]
```

`filterKeys`

```js
// Takes an object and returns filter keys.
easyJS.filterKeys({"a":1,"b":2}, fn) // {"a":1}
```

`filterValues`

```js
// Takes an object and returns filter values.
easyJS.filterValues({"a":1,"b":2}, fn) // {"b":2}
```

`fromEntries`

```js
// Takes an object and returns from entries.
easyJS.fromEntries({"a":1,"b":2}) // {}
```

`fromPairs`

```js
// Takes an object and returns from pairs.
easyJS.fromPairs([["a",1],["b",2]]) // {"a":1,"b":2}
```

`has`

```js
// Takes an object and returns has.
easyJS.has({"a":1,"b":2}) // false
```

`hasPath`

```js
// Takes an object and returns has path.
easyJS.hasPath({"a":{"b":2}}, "a.b") // true
```

`invert`

```js
// Takes an object and returns invert.
easyJS.invert({"a":1,"b":2}) // {"1":"a","2":"b"}
```

`invertBy`

```js
// Takes an object and returns invert by.
easyJS.invertBy({"a":1,"b":2}, fn) // {"1":"a","2":"b"}
```

`isEmptyObject`

```js
// Checks if is empty object is true.
easyJS.isEmptyObject({"a":1,"b":2}) // false
```

`isObject`

```js
// Checks if is object is true.
easyJS.isObject({"a":1,"b":2}) // true
```

`keys`

```js
// Takes an object and returns keys.
easyJS.keys({"a":1,"b":2}) // ["a","b"]
```

`mapEntries`

```js
// Takes an object and returns map entries.
easyJS.mapEntries({"a":1}, fn) // [["a",2]]
```

`mapKeys`

```js
// Takes an object and returns map keys.
easyJS.mapKeys({"a":1,"b":2}, fn) // {"A":1,"B":2}
```

`mapValues`

```js
// Takes an object and returns map values.
easyJS.mapValues({"a":1,"b":2}, fn) // {"a":2,"b":4}
```

`merge`

```js
// Takes an object and returns merge.
easyJS.merge({"a":1,"b":2}) // {"a":1,"b":2}
```

`mergeWith`

```js
// Takes an object and returns merge with.
easyJS.mergeWith({"a":1}, {"a":2}, fn) // {"a":1}
```

`objectCompact`

```js
// Takes an object and returns object compact.
easyJS.objectCompact({"a":1,"b":2}) // {"a":1,"b":2}
```

`omit`

```js
// Takes an object and returns omit.
easyJS.omit({"a":1,"b":2}) // {"a":1,"b":2}
```

`omitBy`

```js
// Takes an object and returns omit by.
easyJS.omitBy({"a":1,"b":2}, fn) // {"a":1}
```

`omitPath`

```js
// Takes an object and returns omit path.
easyJS.omitPath({"a":{"b":2},"c":3}, ["a.b"]) // {"a":{},"c":3}
```

`pick`

```js
// Takes an object and returns pick.
easyJS.pick({"a":1,"b":2}) // {}
```

`pickBy`

```js
// Takes an object and returns pick by.
easyJS.pickBy({"a":1,"b":2}, fn) // {"b":2}
```

`pickPath`

```js
// Takes an object and returns pick path.
easyJS.pickPath({"a":{"b":2},"c":3}, ["a.b","c"]) // {"a":{"b":2},"c":3}
```

`safeGet`

```js
// Takes an object and returns safe get.
easyJS.safeGet({"a":{"b":2}}, "a.b", 0) // 2
```

`safeSet`

```js
// Takes an object and returns safe set.
easyJS.safeSet({"a":{"b":3}}, "a.b", 3) // {"a":{"b":3}}
```

`size`

```js
// Takes an object and returns size.
easyJS.size({"a":1,"b":2}) // 2
```

`toPairs`

```js
// Takes an object and returns to pairs.
easyJS.toPairs({"a":1,"b":2}) // [["a",1],["b",2]]
```

`unsetPath`

```js
// Takes an object and returns unset path.
easyJS.unsetPath({"a":{}}, "a.b") // true
```

`values`

```js
// Takes an object and returns values.
easyJS.values({"a":1,"b":2}) // [1,2]
```

`zipObjectDeep`

```js
// Takes an object and returns zip object deep.
easyJS.zipObjectDeep(["a.b","c"], [1,2]) // {"a":{"b":1},"c":2}
```

### Util

`anyOf`

```js
// any Of.
easyJS.anyOf("tom", ["thomas","tommy","tom"]) // true
```

`arrayFromArgs`

```js
// array From Args.
easyJS.arrayFromArgs([1,2,3]) // [1,2,3]
```

`chain`

```js
// chain.
easyJS.chain([1,2,2,3]).uniq().take(2).value() // [1,2]
```

`compose`

```js
// compose.
easyJS.compose(fn, fn) // undefined
```

`debounce`

```js
// debounce.
easyJS.debounce(fn, 10) // undefined
```

`deepClone`

```js
// deep Clone.
easyJS.deepClone({a:1, b:{c:2}}) // {a:1,b:{c:2}}
```

`defaultTo`

```js
// default To.
easyJS.defaultTo(null, 5) // 5
```

`defer`

```js
// defer.
easyJS.defer() // {}
```

`eqAny`

```js
// eq Any.
easyJS.eqAny(2, [1,2,3]) // true
```

`identity`

```js
// identity.
easyJS.identity("hi") // "hi"
```

`install`

```js
// install.
easyJS.install() // adds prototype helpers
```

`isEmpty`

```js
// Checks if is empty is true.
easyJS.isEmpty([]) // true
```

`isNil`

```js
// Checks if is nil is true.
easyJS.isNil(undefined) // true
```

`memoize`

```js
// memoize.
easyJS.memoize(fn) // undefined
```

`noop`

```js
// noop.
easyJS.noop() // undefined
```

`noopAsync`

```js
// noop Async.
easyJS.noopAsync() // {}
```

`once`

```js
// once.
easyJS.once(fn) // undefined
```

`onceAsync`

```js
// once Async.
easyJS.onceAsync(async n => n + 1)(1) // Promise (example: 2)
```

`parsePath`

```js
// parse Path.
easyJS.parsePath("a.b") // ["a","b"]
```

`pipe`

```js
// pipe.
easyJS.pipe(fn, fn) // undefined
```

`safeJsonParse`

```js
// safe Json Parse.
easyJS.safeJsonParse("{\"a\":1}", {}) // {"a":1}
```

`safeJsonStringify`

```js
// safe Json Stringify.
easyJS.safeJsonStringify({"a":1}) // "{\"a\":1}"
```

`sleep`

```js
// sleep.
easyJS.sleep(100) // Promise (resolves after ~100ms)
```

`tap`

```js
// tap.
easyJS.tap(5, fn) // 5
```

`throttle`

```js
// throttle.
easyJS.throttle(fn, 10) // undefined
```

`times`

```js
// times.
easyJS.times(3, fn) // [0,1,2]
```

`tryCatch`

```js
// try Catch.
easyJS.tryCatch(fn, fn) // "fallback"
```

## Prototype Helpers (Only After `easyJS.install()`)

These methods are added to built-in prototypes and only work after running `easyJS.install()`.

### Array
`.shuffle()`
```js
easyJS.install()
[1, 2, 3].shuffle() // random order
```
`.unique()`
```js
easyJS.install()
[1, 2, 2].unique() // [1, 2]
```
`.chunk(size)`
```js
easyJS.install()
[1, 2, 3, 4].chunk(2) // [[1, 2], [3, 4]]
```
`.move(from, to)`
```js
easyJS.install()
[1, 2, 3].move(0, 2) // [2, 3, 1]
```
`.groupBy(fn)`
```js
easyJS.install()
[1, 2, 3, 4].groupBy(x => x % 2) // { 0: [2, 4], 1: [1, 3] }
```
`.compact(fn?)`
```js
easyJS.install()
[0, null, 2].compact() // [0, 2]
```
`.flatten()`
```js
easyJS.install()
[1, [2, 3]].flatten() // [1, 2, 3]
```
`.first()`
```js
easyJS.install()
[9, 8, 7].first() // 9
```
`.last()`
```js
easyJS.install()
[9, 8, 7].last() // 7
```
`.take(n)`
```js
easyJS.install()
[1, 2, 3].take(2) // [1, 2]
```
`.takeRight(n)`
```js
easyJS.install()
[1, 2, 3].takeRight(2) // [2, 3]
```
`.drop(n)`
```js
easyJS.install()
[1, 2, 3].drop(1) // [2, 3]
```
`.dropRight(n)`
```js
easyJS.install()
[1, 2, 3].dropRight(1) // [1, 2]
```

### Object
`.mapKeys(fn)`
```js
easyJS.install()
({ a: 1, b: 2 }).mapKeys(k => k.toUpperCase()) // { A: 1, B: 2 }
```
`.pick(keys)`
```js
easyJS.install()
({ a: 1, b: 2 }).pick(["a"]) // { a: 1 }
```
`.invert()`
```js
easyJS.install()
({ a: 1 }).invert() // { "1": "a" }
```
`.compact()`
```js
easyJS.install()
({ a: null, b: 2 }).compact() // { b: 2 }
```
`.omit(keys)`
```js
easyJS.install()
({ a: 1, b: 2 }).omit(["b"]) // { a: 1 }
```
`.has(key)`
```js
easyJS.install()
({ a: 1 }).has("a") // true
```
`.merge(...objs)`
```js
easyJS.install()
({ a: 1 }).merge({ b: 2 }) // { a: 1, b: 2 }
```
`.deepMerge(...objs)`
```js
easyJS.install()
({ a: { b: 1 } }).deepMerge({ a: { c: 2 } }) // { a: { b: 1, c: 2 } }
```
`.size()`
```js
easyJS.install()
({ a: 1, b: 2 }).size() // 2
```

### String
`.toTitleCase()`
```js
easyJS.install()
"hello world".toTitleCase() // "Hello World"
```
`.truncate(len)`
```js
easyJS.install()
"hello world".truncate(8) // "hello..."
```
`.replaceAllEasy(sub, rep)`
```js
easyJS.install()
"a-b".replaceAllEasy("-", "_") // "a_b"
```
`.countWords()`
```js
easyJS.install()
"hi there".countWords() // 2
```
`.slugify()`
```js
easyJS.install()
"Hello World!".slugify() // "hello-world"
```
`.padLeft(len, ch?)`
```js
easyJS.install()
"7".padLeft(3, "0") // "007"
```
`.padRight(len, ch?)`
```js
easyJS.install()
"7".padRight(3, "0") // "700"
```
`.repeatEasy(n)`
```js
easyJS.install()
"ha".repeatEasy(3) // "hahaha"
```
`.stripNonAlpha()`
```js
easyJS.install()
"a-b_c".stripNonAlpha() // "abc"
```
`.isBlank()`
```js
easyJS.install()
"   ".isBlank() // true
```
`.normalizeString()`
```js
easyJS.install()
"  ToM  ".normalizeString() // "tom"
```
#### <small>Made by Thomas Boerdam</small>
