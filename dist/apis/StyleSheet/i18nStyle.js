Object.defineProperty(exports, '__esModule', { value: true });
const _I18nManager = require('../I18nManager');
const _I18nManager2 = _interopRequireDefault(_I18nManager);
const _multiplyStyleLengthValue = require('../../modules/multiplyStyleLengthValue');
const _multiplyStyleLengthValue2 = _interopRequireDefault(_multiplyStyleLengthValue);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const emptyObject = {};
const PROPERTIES_TO_SWAP = {
  borderTopLeftRadius: 'borderTopRightRadius',
  borderTopRightRadius: 'borderTopLeftRadius',
  borderBottomLeftRadius: 'borderBottomRightRadius',
  borderBottomRightRadius: 'borderBottomLeftRadius',
  borderLeftColor: 'borderRightColor',
  borderLeftStyle: 'borderRightStyle',
  borderLeftWidth: 'borderRightWidth',
  borderRightColor: 'borderLeftColor',
  borderRightWidth: 'borderLeftWidth',
  borderRightStyle: 'borderLeftStyle',
  left: 'right',
  marginLeft: 'marginRight',
  marginRight: 'marginLeft',
  paddingLeft: 'paddingRight',
  paddingRight: 'paddingLeft',
  right: 'left'
};
const PROPERTIES_SWAP_LEFT_RIGHT = { clear: true, float: true, textAlign: true };
const additiveInverse = function additiveInverse(value) {
  return (0, _multiplyStyleLengthValue2.default)(value, -1);
};
const flipProperty = function flipProperty(prop) {
  return PROPERTIES_TO_SWAP.hasOwnProperty(prop) ? PROPERTIES_TO_SWAP[prop] : prop;
};
const swapLeftRight = function swapLeftRight(value) {
  return value === 'left' ? 'right' : value === 'right' ? 'left' : value;
};
const i18nStyle = function i18nStyle(originalStyle) {
  if (!_I18nManager2.default.isRTL) {
    return originalStyle;
  }
  const style = originalStyle || emptyObject;
  const nextStyle = {};
  for (const prop in style) {
    if (!Object.prototype.hasOwnProperty.call(style, prop)) {
      continue;
    }
    const value = style[prop];
    if (PROPERTIES_TO_SWAP[prop]) {
      const newProp = flipProperty(prop);
      nextStyle[newProp] = value;
    } else if (PROPERTIES_SWAP_LEFT_RIGHT[prop]) {
      nextStyle[prop] = swapLeftRight(value);
    } else if (prop === 'textShadowOffset') {
      nextStyle[prop] = value;
      nextStyle[prop].width = additiveInverse(value.width);
    } else {
      nextStyle[prop] = style[prop];
    }
  }
  return nextStyle;
};
exports.default = i18nStyle;
