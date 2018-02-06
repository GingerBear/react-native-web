Object.defineProperty(exports, '__esModule', { value: true });
const accessibilityComponentTypeToRole = { button: 'button', none: 'presentation' };
const accessibilityTraitsToRole = {
  adjustable: 'slider',
  button: 'button',
  header: 'heading',
  image: 'img',
  link: 'link',
  none: 'presentation',
  search: 'search',
  summary: 'region'
};
const propsToAriaRole = function propsToAriaRole(_ref) {
  let accessibilityComponentType = _ref.accessibilityComponentType,
    accessibilityRole = _ref.accessibilityRole,
    accessibilityTraits = _ref.accessibilityTraits;
  if (accessibilityRole) {
    return accessibilityRole;
  }
  if (accessibilityTraits) {
    const trait = Array.isArray(accessibilityTraits) ? accessibilityTraits[0] : accessibilityTraits;
    return accessibilityTraitsToRole[trait];
  }
  if (accessibilityComponentType) {
    return accessibilityComponentTypeToRole[accessibilityComponentType];
  }
};
exports.default = propsToAriaRole;
