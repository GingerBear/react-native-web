Object.defineProperty(exports, '__esModule', { value: true });
const _dangerousStyleValue = require('../dangerousStyleValue');
const _dangerousStyleValue2 = _interopRequireDefault(_dangerousStyleValue);
const _warnValidStyle = require('../warnValidStyle');
const _warnValidStyle2 = _interopRequireDefault(_warnValidStyle);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const setValueForStyles = function setValueForStyles(node, styles, component) {
  const style = node.style;
  for (let styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    const isCustomProperty = styleName.indexOf('--') === 0;
    if (process.env.NODE_ENV !== 'production') {
      if (!isCustomProperty) {
        (0, _warnValidStyle2.default)(styleName, styles[styleName], component);
      }
    }
    const styleValue = (0, _dangerousStyleValue2.default)(
      styleName,
      styles[styleName],
      isCustomProperty
    );
    if (styleName === 'float') {
      styleName = 'cssFloat';
    }
    if (isCustomProperty) {
      style.setProperty(styleName, styleValue);
    } else if (styleValue) {
      style[styleName] = styleValue;
    } else {
      style[styleName] = '';
    }
  }
};
exports.default = setValueForStyles;
