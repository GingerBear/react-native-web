Object.defineProperty(exports, '__esModule', { value: true });
const _createStrictShapeTypeChecker = require('./createStrictShapeTypeChecker');
const _createStrictShapeTypeChecker2 = _interopRequireDefault(_createStrictShapeTypeChecker);
const _propTypes = require('prop-types');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const PointPropType = (0, _createStrictShapeTypeChecker2.default)({
  x: _propTypes.number,
  y: _propTypes.number
});
exports.default = PointPropType;
