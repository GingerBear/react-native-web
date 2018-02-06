Object.defineProperty(exports, '__esModule', { value: true });
const _isDisabled = require('./isDisabled');
const _isDisabled2 = _interopRequireDefault(_isDisabled);
const _propsToAccessibilityComponent = require('./propsToAccessibilityComponent');
const _propsToAccessibilityComponent2 = _interopRequireDefault(_propsToAccessibilityComponent);
const _propsToAriaRole = require('./propsToAriaRole');
const _propsToAriaRole2 = _interopRequireDefault(_propsToAriaRole);
const _propsToTabIndex = require('./propsToTabIndex');
const _propsToTabIndex2 = _interopRequireDefault(_propsToTabIndex);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const AccessibilityUtil = {
  isDisabled: _isDisabled2.default,
  propsToAccessibilityComponent: _propsToAccessibilityComponent2.default,
  propsToAriaRole: _propsToAriaRole2.default,
  propsToTabIndex: _propsToTabIndex2.default
};
exports.default = AccessibilityUtil;
