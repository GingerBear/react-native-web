Object.defineProperty(exports, '__esModule', { value: true });
const CSS_UNIT_RE = /^[+-]?\d*(?:\.\d+)?(?:[Ee][+-]?\d+)?(%|\w*)/;
const getUnit = function getUnit(str) {
  return str.match(CSS_UNIT_RE)[1];
};
const isNumeric = function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
const multiplyStyleLengthValue = function multiplyStyleLengthValue(value, multiple) {
  if (typeof value === 'string') {
    const number = parseFloat(value) * multiple;
    const unit = getUnit(value);
    return '' + number + unit;
  } else if (isNumeric(value)) {
    return value * multiple;
  }
};
exports.default = multiplyStyleLengthValue;
