Object.defineProperty(exports, '__esModule', { value: true });
const _createClass = (function() {
  function defineProperties(target, props) {
    for (let i = 0; i < props.length; i++) {
      const descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
const Clipboard = (function() {
  function Clipboard() {
    _classCallCheck(this, Clipboard);
  }
  _createClass(Clipboard, null, [
    {
      key: 'isAvailable',
      value: function isAvailable() {
        return (
          typeof document.queryCommandSupported === 'function' &&
          document.queryCommandSupported('copy')
        );
      }
    },
    {
      key: 'getString',
      value: function getString() {
        return Promise.resolve('');
      }
    },
    {
      key: 'setString',
      value: function setString(text) {
        let success = false;
        const body = document.body;
        if (body) {
          const node = document.createElement('span');
          node.textContent = text;
          node.style.position = 'absolute';
          node.style.opacity = '0';
          body.appendChild(node);
          const selection = window.getSelection();
          selection.removeAllRanges();
          const range = document.createRange();
          range.selectNodeContents(node);
          selection.addRange(range);
          try {
            document.execCommand('copy');
            success = true;
          } catch (e) {}
          selection.removeAllRanges();
          body.removeChild(node);
        }
        return success;
      }
    }
  ]);
  return Clipboard;
})();
exports.default = Clipboard;
