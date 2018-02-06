Object.defineProperty(exports, '__esModule', { value: true });
const _NativeMethodsMixin = require('../NativeMethodsMixin');
const _NativeMethodsMixin2 = _interopRequireDefault(_NativeMethodsMixin);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const applyNativeMethods = function applyNativeMethods(Component) {
  Object.keys(_NativeMethodsMixin2.default).forEach(function(method) {
    if (!Component.prototype[method]) {
      Component.prototype[method] = _NativeMethodsMixin2.default[method];
    }
  });
  return Component;
};
exports.default = applyNativeMethods;
