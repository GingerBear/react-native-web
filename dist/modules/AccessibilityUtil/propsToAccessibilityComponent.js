Object.defineProperty(exports, '__esModule', { value: true });
const _propsToAriaRole = require('./propsToAriaRole');
const _propsToAriaRole2 = _interopRequireDefault(_propsToAriaRole);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const roleComponents = {
  article: 'article',
  banner: 'header',
  complementary: 'aside',
  contentinfo: 'footer',
  form: 'form',
  label: 'label',
  link: 'a',
  list: 'ul',
  listitem: 'li',
  main: 'main',
  navigation: 'nav',
  region: 'section'
};
const emptyObject = {};
const propsToAccessibilityComponent = function propsToAccessibilityComponent() {
  const props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyObject;
  const role = (0, _propsToAriaRole2.default)(props);
  if (role) {
    if (role === 'heading') {
      const level = props['aria-level'] || 1;
      return 'h' + level;
    }
    return roleComponents[role];
  }
};
exports.default = propsToAccessibilityComponent;
