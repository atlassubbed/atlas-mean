# atlas-mean

Calculates the expectation value of a set of data points.

[![Travis](https://img.shields.io/travis/atlassubbed/atlas-mean.svg)](https://travis-ci.org/atlassubbed/atlas-mean)

---

## install

```
npm install --save atlas-mean
```

## why

Breaking up [atlas-dataset](https://github.com/atlassubbed/atlas-dataset#readme) into standalone functions. This module computes the mean value over an array of numbers:

<p align="center">
  <img alt="mean(V) = 1/|V| * sum[i=1 -> |V|](v_i)" src="docs/mean.png">
</p>

## examples

```javascript
const mean = require("atlas-mean")
console.log(mean([1,2,3,4,5,6,7,8,9,10]))
// 5.5
```
