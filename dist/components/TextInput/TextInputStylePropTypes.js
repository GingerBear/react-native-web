Object.defineProperty(exports, '__esModule', { value: true });
const _extends =
  Object.assign ||
  function(target) {
    for (let i = 1; i < arguments.length; i++) {
      const source = arguments[i];
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
const _TextStylePropTypes = require('../Text/TextStylePropTypes');
const _TextStylePropTypes2 = _interopRequireDefault(_TextStylePropTypes);
const _propTypes = require('prop-types');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const TextInputStylePropTypes = _extends({}, _TextStylePropTypes2.default, {
  resize: (0, _propTypes.oneOf)(['none', 'vertical', 'horizontal', 'both'])
});
exports.default = TextInputStylePropTypes;
