Object.defineProperty(exports, '__esModule', { value: true });
const _normalizeCssColor = require('normalize-css-color');
const _normalizeCssColor2 = _interopRequireDefault(_normalizeCssColor);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const processColor = function processColor(color) {
  const opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (
    color === undefined ||
    color === null ||
    (opacity === 1 && typeof color === 'string' && color.charAt(0) !== '#')
  ) {
    return color;
  }
  const int32Color = (0, _normalizeCssColor2.default)(color);
  if (int32Color === null) {
    return undefined;
  }
  const rgba = _normalizeCssColor2.default.rgba(int32Color);
  rgba.a = rgba.a.toFixed(1);
  let r = rgba.r,
    g = rgba.g,
    b = rgba.b,
    a = rgba.a;
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a * opacity + ')';
};
exports.default = processColor;
