Object.defineProperty(exports, '__esModule', { value: true });
const _ColorPropType = require('./ColorPropType');
const _ColorPropType2 = _interopRequireDefault(_ColorPropType);
const _propTypes = require('prop-types');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const numberOrString = (0, _propTypes.oneOfType)([_propTypes.number, _propTypes.string]);
const BorderStylePropType = (0, _propTypes.oneOf)(['solid', 'dotted', 'dashed']);
const BorderPropTypes = {
  borderColor: _ColorPropType2.default,
  borderTopColor: _ColorPropType2.default,
  borderRightColor: _ColorPropType2.default,
  borderBottomColor: _ColorPropType2.default,
  borderLeftColor: _ColorPropType2.default,
  borderRadius: numberOrString,
  borderTopLeftRadius: numberOrString,
  borderTopRightRadius: numberOrString,
  borderBottomLeftRadius: numberOrString,
  borderBottomRightRadius: numberOrString,
  borderStyle: BorderStylePropType,
  borderTopStyle: BorderStylePropType,
  borderRightStyle: BorderStylePropType,
  borderBottomStyle: BorderStylePropType,
  borderLeftStyle: BorderStylePropType
};
exports.default = BorderPropTypes;
