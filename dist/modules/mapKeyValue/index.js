Object.defineProperty(exports, '__esModule', { value: true });
const hasOwnProperty = Object.prototype.hasOwnProperty;
const mapKeyValue = function mapKeyValue(obj, fn) {
  const result = [];
  for (const key in obj) {
    if (hasOwnProperty.call(obj, key)) {
      const r = fn(key, obj[key]);
      r && result.push(r);
    }
  }
  return result;
};
exports.default = mapKeyValue;
