Object.defineProperty(exports, '__esModule', { value: true });
const _ColorPropType = require('./ColorPropType');
const _ColorPropType2 = _interopRequireDefault(_ColorPropType);
const _propTypes = require('prop-types');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const numberOrString = (0, _propTypes.oneOfType)([_propTypes.number, _propTypes.string]);
const ShadowPropTypes = {
  shadowColor: _ColorPropType2.default,
  shadowOffset: (0, _propTypes.shape)({ width: numberOrString, height: numberOrString }),
  shadowOpacity: _propTypes.number,
  shadowRadius: numberOrString,
  shadowSpread: numberOrString
};
exports.default = ShadowPropTypes;
