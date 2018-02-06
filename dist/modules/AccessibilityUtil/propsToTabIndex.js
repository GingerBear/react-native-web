Object.defineProperty(exports, '__esModule', { value: true });
const _isDisabled = require('./isDisabled');
const _isDisabled2 = _interopRequireDefault(_isDisabled);
const _propsToAriaRole = require('./propsToAriaRole');
const _propsToAriaRole2 = _interopRequireDefault(_propsToAriaRole);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const propsToTabIndex = function propsToTabIndex(props) {
  const role = (0, _propsToAriaRole2.default)(props);
  const focusable =
    !(0, _isDisabled2.default)(props) &&
    props.importantForAccessibility !== 'no' &&
    props.importantForAccessibility !== 'no-hide-descendants';
  if (role === 'link') {
    if (props.accessible === false || !focusable) {
      return '-1';
    }
  } else if (role === 'button') {
    if (props.accessible !== false && focusable) {
      return '0';
    }
  } else {
    if (props.accessible === true && focusable) {
      return '0';
    }
  }
};
exports.default = propsToTabIndex;
