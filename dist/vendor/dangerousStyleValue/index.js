Object.defineProperty(exports, '__esModule', { value: true });
const _unitlessNumbers = require('../../modules/unitlessNumbers');
const _unitlessNumbers2 = _interopRequireDefault(_unitlessNumbers);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function dangerousStyleValue(name, value, isCustomProperty) {
  const isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }
  if (
    !isCustomProperty &&
    typeof value === 'number' &&
    value !== 0 &&
    !(_unitlessNumbers2.default.hasOwnProperty(name) && _unitlessNumbers2.default[name])
  ) {
    return value + 'px';
  }
  return ('' + value).trim();
}
exports.default = dangerousStyleValue;
