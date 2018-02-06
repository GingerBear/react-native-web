Object.defineProperty(exports, '__esModule', { value: true });
const _AccessibilityUtil = require('../AccessibilityUtil');
const _AccessibilityUtil2 = _interopRequireDefault(_AccessibilityUtil);
const _StyleSheet = require('../../apis/StyleSheet');
const _StyleSheet2 = _interopRequireDefault(_StyleSheet);
const _registry = require('../../apis/StyleSheet/registry');
const _registry2 = _interopRequireDefault(_registry);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _objectWithoutProperties(obj, keys) {
  const target = {};
  for (const i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}
const emptyObject = {};
const resetStyles = _StyleSheet2.default.create({
  ariaButton: { cursor: 'pointer' },
  button: {
    appearance: 'none',
    backgroundColor: 'transparent',
    color: 'inherit',
    font: 'inherit',
    textAlign: 'inherit'
  },
  heading: { font: 'inherit' },
  link: { backgroundColor: 'transparent', color: 'inherit', textDecorationLine: 'none' },
  list: { listStyle: 'none' }
});
const pointerEventsStyles = _StyleSheet2.default.create({
  auto: { pointerEvents: 'auto' },
  'box-none': { pointerEvents: 'box-none' },
  'box-only': { pointerEvents: 'box-only' },
  none: { pointerEvents: 'none' }
});
const defaultStyleResolver = function defaultStyleResolver(style) {
  return _registry2.default.resolve(style);
};
const createDOMProps = function createDOMProps(component, props, styleResolver) {
  if (!styleResolver) {
    styleResolver = defaultStyleResolver;
  }
  if (!props) {
    props = emptyObject;
  }
  let _props = props,
    accessibilityLabel = _props.accessibilityLabel,
    accessibilityLiveRegion = _props.accessibilityLiveRegion,
    importantForAccessibility = _props.importantForAccessibility,
    pointerEvents = _props.pointerEvents,
    providedStyle = _props.style,
    testID = _props.testID,
    accessible = _props.accessible,
    accessibilityComponentType = _props.accessibilityComponentType,
    accessibilityRole = _props.accessibilityRole,
    accessibilityTraits = _props.accessibilityTraits,
    domProps = _objectWithoutProperties(_props, [
      'accessibilityLabel',
      'accessibilityLiveRegion',
      'importantForAccessibility',
      'pointerEvents',
      'style',
      'testID',
      'accessible',
      'accessibilityComponentType',
      'accessibilityRole',
      'accessibilityTraits'
    ]);
  const isDisabled = _AccessibilityUtil2.default.isDisabled(props);
  const role = _AccessibilityUtil2.default.propsToAriaRole(props);
  const tabIndex = _AccessibilityUtil2.default.propsToTabIndex(props);
  const reactNativeStyle = [
    component === 'a' && resetStyles.link,
    component === 'button' && resetStyles.button,
    role === 'heading' && resetStyles.heading,
    component === 'ul' && resetStyles.list,
    role === 'button' && !isDisabled && resetStyles.ariaButton,
    providedStyle,
    pointerEvents && pointerEventsStyles[pointerEvents]
  ];
  let _styleResolver = styleResolver(reactNativeStyle),
    className = _styleResolver.className,
    style = _styleResolver.style;
  if (isDisabled) {
    domProps['aria-disabled'] = true;
  }
  if (importantForAccessibility === 'no-hide-descendants') {
    domProps['aria-hidden'] = true;
  }
  if (accessibilityLabel && accessibilityLabel.constructor === String) {
    domProps['aria-label'] = accessibilityLabel;
  }
  if (accessibilityLiveRegion && accessibilityLiveRegion.constructor === String) {
    domProps['aria-live'] = accessibilityLiveRegion === 'none' ? 'off' : accessibilityLiveRegion;
  }
  if (className && className.constructor === String) {
    domProps.className = domProps.className ? domProps.className + ' ' + className : className;
  }
  if (component === 'a' && domProps.target === '_blank') {
    domProps.rel = (domProps.rel || '') + ' noopener noreferrer';
  }
  if (role && role.constructor === String && role !== 'label') {
    domProps.role = role;
  }
  if (style) {
    domProps.style = style;
  }
  if (tabIndex) {
    domProps.tabIndex = tabIndex;
  }
  if (testID && testID.constructor === String) {
    domProps['data-testid'] = testID;
  }
  return domProps;
};
exports.default = createDOMProps;
