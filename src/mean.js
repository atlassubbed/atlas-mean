const sum = require("atlas-sum");

module.exports = arr => {
  const n = arr.length;
  // short circuit all edge cases
  return n ? n === 1 ? arr[0] : sum(arr)/n : void 0;
}
