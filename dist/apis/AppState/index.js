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
const _ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
const _arrayFindIndex = require('array-find-index');
const _arrayFindIndex2 = _interopRequireDefault(_arrayFindIndex);
const _invariant = require('fbjs/lib/invariant');
const _invariant2 = _interopRequireDefault(_invariant);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
const isPrefixed =
  _ExecutionEnvironment.canUseDOM &&
  !document.hasOwnProperty('hidden') &&
  document.hasOwnProperty('webkitHidden');
const EVENT_TYPES = ['change'];
const VISIBILITY_CHANGE_EVENT = isPrefixed ? 'webkitvisibilitychange' : 'visibilitychange';
const VISIBILITY_STATE_PROPERTY = isPrefixed ? 'webkitVisibilityState' : 'visibilityState';
const AppStates = { BACKGROUND: 'background', ACTIVE: 'active' };
const listeners = [];
const AppState = (function() {
  function AppState() {
    _classCallCheck(this, AppState);
  }
  _createClass(AppState, null, [
    {
      key: 'addEventListener',
      value: function addEventListener(type, handler) {
        if (AppState.isAvailable) {
          (0, _invariant2.default)(
            EVENT_TYPES.indexOf(type) !== -1,
            'Trying to subscribe to unknown event: "%s"',
            type
          );
          const callback = function callback() {
            return handler(AppState.currentState);
          };
          listeners.push([handler, callback]);
          document.addEventListener(VISIBILITY_CHANGE_EVENT, callback, false);
        }
      }
    },
    {
      key: 'removeEventListener',
      value: function removeEventListener(type, handler) {
        if (AppState.isAvailable) {
          (0, _invariant2.default)(
            EVENT_TYPES.indexOf(type) !== -1,
            'Trying to remove listener for unknown event: "%s"',
            type
          );
          const listenerIndex = (0, _arrayFindIndex2.default)(listeners, function(pair) {
            return pair[0] === handler;
          });
          (0, _invariant2.default)(
            listenerIndex !== -1,
            'Trying to remove AppState listener for unregistered handler'
          );
          const callback = listeners[listenerIndex][1];
          document.removeEventListener(VISIBILITY_CHANGE_EVENT, callback, false);
          listeners.splice(listenerIndex, 1);
        }
      }
    },
    {
      key: 'currentState',
      get: function get() {
        if (!AppState.isAvailable) {
          return AppStates.ACTIVE;
        }
        switch (document[VISIBILITY_STATE_PROPERTY]) {
          case 'hidden':
          case 'prerender':
          case 'unloaded':
            return AppStates.BACKGROUND;
          default:
            return AppStates.ACTIVE;
        }
      }
    }
  ]);
  return AppState;
})();
AppState.isAvailable = _ExecutionEnvironment.canUseDOM && document[VISIBILITY_STATE_PROPERTY];
exports.default = AppState;
