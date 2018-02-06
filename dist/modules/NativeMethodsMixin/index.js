Object.defineProperty(exports, '__esModule', { value: true });
const _createDOMProps = require('../createDOMProps');
const _createDOMProps2 = _interopRequireDefault(_createDOMProps);
const _findNodeHandle = require('../findNodeHandle');
const _findNodeHandle2 = _interopRequireDefault(_findNodeHandle);
const _i18nStyle = require('../../apis/StyleSheet/i18nStyle');
const _i18nStyle2 = _interopRequireDefault(_i18nStyle);
const _registry = require('../../apis/StyleSheet/registry');
const _registry2 = _interopRequireDefault(_registry);
const _UIManager = require('../../apis/UIManager');
const _UIManager2 = _interopRequireDefault(_UIManager);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const hyphenPattern = /-([a-z])/g;
const toCamelCase = function toCamelCase(str) {
  return str.replace(hyphenPattern, function(m) {
    return m[1].toUpperCase();
  });
};
const NativeMethodsMixin = {
  blur: function blur() {
    _UIManager2.default.blur((0, _findNodeHandle2.default)(this));
  },
  focus: function focus() {
    _UIManager2.default.focus((0, _findNodeHandle2.default)(this));
  },
  measure: function measure(callback) {
    _UIManager2.default.measure((0, _findNodeHandle2.default)(this), callback);
  },
  measureInWindow: function measureInWindow(callback) {
    _UIManager2.default.measureInWindow((0, _findNodeHandle2.default)(this), callback);
  },
  measureLayout: function measureLayout(relativeToNativeNode, onSuccess, onFail) {
    _UIManager2.default.measureLayout(
      (0, _findNodeHandle2.default)(this),
      relativeToNativeNode,
      onFail,
      onSuccess
    );
  },
  setNativeProps: function setNativeProps(nativeProps) {
    const node = (0, _findNodeHandle2.default)(this);
    const nodeStyle = node.style;
    const classList = Array.prototype.slice.call(node.classList);
    const style = {};
    for (let i = 0; i < node.style.length; i += 1) {
      const property = nodeStyle.item(i);
      if (property) {
        style[toCamelCase(property)] = nodeStyle.getPropertyValue(property);
      }
    }
    const domStyleProps = { classList: classList, style: style };
    const domProps = (0, _createDOMProps2.default)(
      null,
      (0, _i18nStyle2.default)(nativeProps),
      function(style) {
        return _registry2.default.resolveStateful(style, domStyleProps, { i18n: false });
      }
    );
    _UIManager2.default.updateView(node, domProps, this);
  }
};
exports.default = NativeMethodsMixin;
