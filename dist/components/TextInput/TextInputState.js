Object.defineProperty(exports, '__esModule', { value: true });
const _UIManager = require('../../apis/UIManager');
const _UIManager2 = _interopRequireDefault(_UIManager);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const TextInputState = {
  _currentlyFocusedNode: null,
  currentlyFocusedField: function currentlyFocusedField() {
    if (document.activeElement !== this._currentlyFocusedNode) {
      this._currentlyFocusedNode = null;
    }
    return this._currentlyFocusedNode;
  },
  focusTextInput: function focusTextInput(textFieldNode) {
    if (document.activeElement !== textFieldNode && textFieldNode !== null) {
      this._currentlyFocusedNode = textFieldNode;
      _UIManager2.default.focus(textFieldNode);
    }
  },
  blurTextInput: function blurTextInput(textFieldNode) {
    if (document.activeElement === textFieldNode && textFieldNode !== null) {
      this._currentlyFocusedNode = null;
      _UIManager2.default.blur(textFieldNode);
    }
  }
};
exports.default = TextInputState;
