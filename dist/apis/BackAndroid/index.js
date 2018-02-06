Object.defineProperty(exports, '__esModule', { value: true });
function emptyFunction() {}
const BackAndroid = {
  exitApp: emptyFunction,
  addEventListener: function addEventListener() {
    return { remove: emptyFunction };
  },
  removeEventListener: emptyFunction
};
exports.default = BackAndroid;
