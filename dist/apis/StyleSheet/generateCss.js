Object.defineProperty(exports, '__esModule', { value: true });
const _hyphenateStyleName = require('hyphenate-style-name');
const _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
const _mapKeyValue = require('../../modules/mapKeyValue');
const _mapKeyValue2 = _interopRequireDefault(_mapKeyValue);
const _normalizeValue = require('./normalizeValue');
const _normalizeValue2 = _interopRequireDefault(_normalizeValue);
const _prefixStyles = require('../../modules/prefixStyles');
const _prefixStyles2 = _interopRequireDefault(_prefixStyles);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const createDeclarationString = function createDeclarationString(prop, val) {
  const name = (0, _hyphenateStyleName2.default)(prop);
  const value = (0, _normalizeValue2.default)(prop, val);
  if (Array.isArray(val)) {
    return val
      .map(function(v) {
        return name + ':' + v;
      })
      .join(';');
  }
  return name + ':' + value;
};
const generateCss = function generateCss(style) {
  return (0, _mapKeyValue2.default)((0, _prefixStyles2.default)(style), createDeclarationString)
    .sort()
    .join(';');
};
exports.default = generateCss;
