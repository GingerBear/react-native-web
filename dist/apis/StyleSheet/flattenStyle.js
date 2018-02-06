Object.defineProperty(exports, '__esModule', { value: true });
const _ReactNativePropRegistry = require('../../modules/ReactNativePropRegistry');
const _ReactNativePropRegistry2 = _interopRequireDefault(_ReactNativePropRegistry);
const _invariant = require('fbjs/lib/invariant');
const _invariant2 = _interopRequireDefault(_invariant);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function getStyle(style) {
  if (typeof style === 'number') {
    return _ReactNativePropRegistry2.default.getByID(style);
  }
  return style;
}
function flattenStyle(style) {
  if (style == null || typeof style === 'boolean') {
    return undefined;
  }
  if (process.env.NODE_ENV !== 'production') {
    (0, _invariant2.default)(style !== true, 'style may be false but not true');
  }
  if (!Array.isArray(style)) {
    return getStyle(style);
  }
  const result = {};
  for (let i = 0, styleLength = style.length; i < styleLength; ++i) {
    const computedStyle = flattenStyle(style[i]);
    if (computedStyle) {
      for (const key in computedStyle) {
        const value = computedStyle[key];
        result[key] = value;
      }
    }
  }
  return result;
}
exports.default = flattenStyle;
