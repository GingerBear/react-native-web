Object.defineProperty(exports, '__esModule', { value: true });
const _dismissKeyboard = require('../../modules/dismissKeyboard');
const _dismissKeyboard2 = _interopRequireDefault(_dismissKeyboard);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const Keyboard = {
  addListener: function addListener() {
    return { remove: function remove() {} };
  },
  dismiss: function dismiss() {
    (0, _dismissKeyboard2.default)();
  },
  removeAllListeners: function removeAllListeners() {},
  removeListener: function removeListener() {}
};
exports.default = Keyboard;
