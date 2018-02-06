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
const _BaseComponentPropTypes = require('../../propTypes/BaseComponentPropTypes');
const _BaseComponentPropTypes2 = _interopRequireDefault(_BaseComponentPropTypes);
const _StyleSheetPropType = require('../../propTypes/StyleSheetPropType');
const _StyleSheetPropType2 = _interopRequireDefault(_StyleSheetPropType);
const _TextStylePropTypes = require('./TextStylePropTypes');
const _TextStylePropTypes2 = _interopRequireDefault(_TextStylePropTypes);
const _propTypes = require('prop-types');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const TextPropTypes = _extends({}, _BaseComponentPropTypes2.default, {
  accessibilityRole: (0, _propTypes.oneOf)(['button', 'heading', 'label', 'link', 'listitem']),
  children: _propTypes.any,
  numberOfLines: _propTypes.number,
  onLayout: _propTypes.func,
  onPress: _propTypes.func,
  selectable: _propTypes.bool,
  style: (0, _StyleSheetPropType2.default)(_TextStylePropTypes2.default)
});
exports.default = TextPropTypes;
