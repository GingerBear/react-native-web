Object.defineProperty(exports, '__esModule', { value: true });
exports.prefixInlineStyles = undefined;
const _createPrefixer = require('inline-style-prefixer/static/createPrefixer');
const _createPrefixer2 = _interopRequireDefault(_createPrefixer);
const _static = require('./static');
const _static2 = _interopRequireDefault(_static);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const prefixAll = (0, _createPrefixer2.default)(_static2.default);
exports.default = prefixAll;
const prefixInlineStyles = (exports.prefixInlineStyles = function prefixInlineStyles(style) {
  const prefixedStyles = prefixAll(style);
  Object.keys(prefixedStyles).forEach(function(prop) {
    const value = prefixedStyles[prop];
    if (Array.isArray(value)) {
      prefixedStyles[prop] = value[value.length - 1];
    }
  });
  return prefixedStyles;
});
