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
const emptyObject = {};
const objects = {};
const prefix = 'r';
let uniqueID = 1;
const createKey = function createKey(id) {
  return prefix + '-' + id;
};
const ReactNativePropRegistry = (function() {
  function ReactNativePropRegistry() {
    _classCallCheck(this, ReactNativePropRegistry);
  }
  _createClass(ReactNativePropRegistry, null, [
    {
      key: 'register',
      value: function register(object) {
        const id = uniqueID++;
        if (process.env.NODE_ENV !== 'production') {
          Object.freeze(object);
        }
        const key = createKey(id);
        objects[key] = object;
        return id;
      }
    },
    {
      key: 'getByID',
      value: function getByID(id) {
        if (!id) {
          return emptyObject;
        }
        const key = createKey(id);
        const object = objects[key];
        if (!object) {
          console.warn('Invalid style with id `' + id + '`. Skipping ...');
          return emptyObject;
        }
        return object;
      }
    }
  ]);
  return ReactNativePropRegistry;
})();
exports.default = ReactNativePropRegistry;
