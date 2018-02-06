Object.defineProperty(exports, '__esModule', { value: true });
const _TextInputState = require('../../components/TextInput/TextInputState');
const _TextInputState2 = _interopRequireDefault(_TextInputState);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const dismissKeyboard = function dismissKeyboard() {
  _TextInputState2.default.blurTextInput(_TextInputState2.default.currentlyFocusedField());
};
exports.default = dismissKeyboard;
