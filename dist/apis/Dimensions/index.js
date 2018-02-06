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
const _debounce = require('debounce');
const _debounce2 = _interopRequireDefault(_debounce);
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
const win = _ExecutionEnvironment.canUseDOM
  ? window
  : {
      devicePixelRatio: undefined,
      innerHeight: undefined,
      innerWidth: undefined,
      screen: { height: undefined, width: undefined }
    };
const dimensions = {};
const listeners = {};
const Dimensions = (function() {
  function Dimensions() {
    _classCallCheck(this, Dimensions);
  }
  _createClass(Dimensions, null, [
    {
      key: 'get',
      value: function get(dimension) {
        (0, _invariant2.default)(dimensions[dimension], 'No dimension set for key ' + dimension);
        return dimensions[dimension];
      }
    },
    {
      key: 'set',
      value: function set(initialDimensions) {
        if (initialDimensions) {
          if (_ExecutionEnvironment.canUseDOM) {
            (0, _invariant2.default)(false, 'Dimensions cannot be set in the browser');
          } else {
            dimensions.screen = initialDimensions.screen;
            dimensions.window = initialDimensions.window;
          }
        }
      }
    },
    {
      key: '_update',
      value: function _update() {
        dimensions.window = {
          fontScale: 1,
          height: win.innerHeight,
          scale: win.devicePixelRatio || 1,
          width: win.innerWidth
        };
        dimensions.screen = {
          fontScale: 1,
          height: win.screen.height,
          scale: win.devicePixelRatio || 1,
          width: win.screen.width
        };
        if (Array.isArray(listeners['change'])) {
          listeners['change'].forEach(function(handler) {
            return handler(dimensions);
          });
        }
      }
    },
    {
      key: 'addEventListener',
      value: function addEventListener(type, handler) {
        listeners[type] = listeners[type] || [];
        listeners[type].push(handler);
      }
    },
    {
      key: 'removeEventListener',
      value: function removeEventListener(type, handler) {
        if (Array.isArray(listeners[type])) {
          listeners[type] = listeners[type].filter(function(_handler) {
            return _handler !== handler;
          });
        }
      }
    }
  ]);
  return Dimensions;
})();
exports.default = Dimensions;
Dimensions._update();
if (_ExecutionEnvironment.canUseDOM) {
  window.addEventListener('resize', (0, _debounce2.default)(Dimensions._update, 16), false);
}
