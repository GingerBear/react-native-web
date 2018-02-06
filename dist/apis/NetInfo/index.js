Object.defineProperty(exports, '__esModule', { value: true });
const _slicedToArray = (function() {
  function sliceIterator(arr, i) {
    const _arr = [];
    let _n = true;
    let _d = false;
    let _e;
    try {
      for (
        var _i = arr[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i['return']) _i['return']();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((typeof Symbol === 'function' ? Symbol.iterator : '@@iterator') in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError('Invalid attempt to destructure non-iterable instance');
    }
  };
})();
const _ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
const _ExecutionEnvironment2 = _interopRequireDefault(_ExecutionEnvironment);
const _arrayFindIndex = require('array-find-index');
const _arrayFindIndex2 = _interopRequireDefault(_arrayFindIndex);
const _invariant = require('fbjs/lib/invariant');
const _invariant2 = _interopRequireDefault(_invariant);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const connection =
  _ExecutionEnvironment2.default.canUseDOM &&
  (window.navigator.connection ||
    window.navigator.mozConnection ||
    window.navigator.webkitConnection);
const eventTypes = ['change'];
const connectionListeners = [];
var NetInfo = {
  addEventListener: function addEventListener(type, handler) {
    (0, _invariant2.default)(
      eventTypes.indexOf(type) !== -1,
      'Trying to subscribe to unknown event: "%s"',
      type
    );
    if (!connection) {
      console.error(
        'Network Connection API is not supported. Not listening for connection type changes.'
      );
      return { remove: function remove() {} };
    }
    connection.addEventListener(type, handler);
    return {
      remove: function remove() {
        return NetInfo.removeEventListener(type, handler);
      }
    };
  },
  removeEventListener: function removeEventListener(type, handler) {
    (0, _invariant2.default)(
      eventTypes.indexOf(type) !== -1,
      'Trying to subscribe to unknown event: "%s"',
      type
    );
    if (!connection) {
      return;
    }
    connection.removeEventListener(type, handler);
  },
  fetch: function fetch() {
    return new Promise(function(resolve, reject) {
      try {
        resolve(connection.type);
      } catch (err) {
        resolve('unknown');
      }
    });
  },
  isConnected: {
    addEventListener: function addEventListener(type, handler) {
      (0, _invariant2.default)(
        eventTypes.indexOf(type) !== -1,
        'Trying to subscribe to unknown event: "%s"',
        type
      );
      const onlineCallback = function onlineCallback() {
        return handler(true);
      };
      const offlineCallback = function offlineCallback() {
        return handler(false);
      };
      connectionListeners.push([handler, onlineCallback, offlineCallback]);
      window.addEventListener('online', onlineCallback, false);
      window.addEventListener('offline', offlineCallback, false);
      return {
        remove: function remove() {
          return NetInfo.isConnected.removeEventListener(type, handler);
        }
      };
    },
    removeEventListener: function removeEventListener(type, handler) {
      (0, _invariant2.default)(
        eventTypes.indexOf(type) !== -1,
        'Trying to subscribe to unknown event: "%s"',
        type
      );
      const listenerIndex = (0, _arrayFindIndex2.default)(connectionListeners, function(pair) {
        return pair[0] === handler;
      });
      (0, _invariant2.default)(
        listenerIndex !== -1,
        'Trying to remove NetInfo connection listener for unregistered handler'
      );
      let _connectionListeners$ = _slicedToArray(connectionListeners[listenerIndex], 3),
        onlineCallback = _connectionListeners$[1],
        offlineCallback = _connectionListeners$[2];
      window.removeEventListener('online', onlineCallback, false);
      window.removeEventListener('offline', offlineCallback, false);
      connectionListeners.splice(listenerIndex, 1);
    },
    fetch: function fetch() {
      return new Promise(function(resolve, reject) {
        try {
          resolve(window.navigator.onLine);
        } catch (err) {
          resolve(true);
        }
      });
    }
  }
};
exports.default = NetInfo;
