Object.defineProperty(exports, '__esModule', { value: true });
exports.cancelIdleCallback = undefined;
const _ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
const _requestIdleCallback = function _requestIdleCallback(cb) {
  return setTimeout(function() {
    const start = Date.now();
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};
const _cancelIdleCallback = function _cancelIdleCallback(id) {
  clearTimeout(id);
};
const isSupported =
  _ExecutionEnvironment.canUseDOM && typeof window.requestIdleCallback !== 'undefined';
const requestIdleCallback = isSupported ? window.requestIdleCallback : _requestIdleCallback;
const cancelIdleCallback = isSupported ? window.cancelIdleCallback : _cancelIdleCallback;
exports.default = requestIdleCallback;
exports.cancelIdleCallback = cancelIdleCallback;
