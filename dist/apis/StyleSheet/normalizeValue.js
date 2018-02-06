Object.defineProperty(exports, '__esModule', { value: true });
const _unitlessNumbers = require('../../modules/unitlessNumbers');
const _unitlessNumbers2 = _interopRequireDefault(_unitlessNumbers);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const normalizeValue = function normalizeValue(property, value) {
  if (!_unitlessNumbers2.default[property] && typeof value === 'number') {
    value = value + 'px';
  }
  return value;
};
exports.default = normalizeValue;
