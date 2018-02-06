Object.defineProperty(exports, '__esModule', { value: true });
const _createStrictShapeTypeChecker = require('./createStrictShapeTypeChecker');
const _createStrictShapeTypeChecker2 = _interopRequireDefault(_createStrictShapeTypeChecker);
const _propTypes = require('prop-types');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const EdgeInsetsPropType = (0, _createStrictShapeTypeChecker2.default)({
  top: _propTypes.number,
  left: _propTypes.number,
  bottom: _propTypes.number,
  right: _propTypes.number
});
exports.default = EdgeInsetsPropType;
