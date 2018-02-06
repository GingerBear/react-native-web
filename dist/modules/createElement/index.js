Object.defineProperty(exports, '__esModule', { value: true });
require('../injectResponderEventPlugin');
const _AccessibilityUtil = require('../AccessibilityUtil');
const _AccessibilityUtil2 = _interopRequireDefault(_AccessibilityUtil);
const _createDOMProps = require('../createDOMProps');
const _createDOMProps2 = _interopRequireDefault(_createDOMProps);
const _normalizeNativeEvent = require('../normalizeNativeEvent');
const _normalizeNativeEvent2 = _interopRequireDefault(_normalizeNativeEvent);
const _react = require('react');
const _react2 = _interopRequireDefault(_react);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const eventHandlerNames = {
  onClick: true,
  onClickCapture: true,
  onMoveShouldSetResponder: true,
  onMoveShouldSetResponderCapture: true,
  onResponderGrant: true,
  onResponderMove: true,
  onResponderReject: true,
  onResponderRelease: true,
  onResponderTerminate: true,
  onResponderTerminationRequest: true,
  onStartShouldSetResponder: true,
  onStartShouldSetResponderCapture: true,
  onTouchCancel: true,
  onTouchCancelCapture: true,
  onTouchEnd: true,
  onTouchEndCapture: true,
  onTouchMove: true,
  onTouchMoveCapture: true,
  onTouchStart: true,
  onTouchStartCapture: true
};
const adjustProps = function adjustProps(domProps) {
  const isButtonRole = domProps.role === 'button';
  const isDisabled = _AccessibilityUtil2.default.isDisabled(domProps);
  Object.keys(domProps).forEach(function(propName) {
    const prop = domProps[propName];
    const isEventHandler = typeof prop === 'function' && eventHandlerNames[propName];
    if (isEventHandler) {
      if (isButtonRole && isDisabled) {
        domProps[propName] = undefined;
      } else {
        domProps[propName] = function(e) {
          e.nativeEvent = (0, _normalizeNativeEvent2.default)(e.nativeEvent);
          return prop(e);
        };
      }
    }
  });
  if (isButtonRole && !isDisabled) {
    const onClick = domProps.onClick;
    domProps.onKeyPress = function(e) {
      if (!e.isDefaultPrevented() && (e.which === 13 || e.which === 32)) {
        e.preventDefault();
        if (onClick) {
          onClick(e);
        }
      }
    };
  }
};
const createElement = function createElement(component, props) {
  for (
    var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2;
    _key < _len;
    _key++
  ) {
    children[_key - 2] = arguments[_key];
  }
  const accessibilityComponent = _AccessibilityUtil2.default.propsToAccessibilityComponent(props);
  const Component = accessibilityComponent || component;
  const domProps = (0, _createDOMProps2.default)(Component, props);
  adjustProps(domProps);
  return _react2.default.createElement.apply(
    _react2.default,
    [Component, domProps].concat(children)
  );
};
exports.default = createElement;
