Object.defineProperty(exports, '__esModule', { value: true });
const _ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
const _debounce = require('debounce');
const _debounce2 = _interopRequireDefault(_debounce);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const emptyObject = {};
const registry = {};
let id = 1;
const guid = function guid() {
  return 'r-' + id++;
};
if (_ExecutionEnvironment.canUseDOM) {
  const triggerAll = function triggerAll() {
    Object.keys(registry).forEach(function(key) {
      const instance = registry[key];
      instance._handleLayout();
    });
  };
  window.addEventListener('resize', (0, _debounce2.default)(triggerAll, 16), false);
}
const safeOverride = function safeOverride(original, next) {
  if (original) {
    return function prototypeOverride() {
      original.call(this);
      next.call(this);
    };
  }
  return next;
};
const applyLayout = function applyLayout(Component) {
  const componentDidMount = Component.prototype.componentDidMount;
  const componentDidUpdate = Component.prototype.componentDidUpdate;
  const componentWillUnmount = Component.prototype.componentWillUnmount;
  Component.prototype.componentDidMount = safeOverride(
    componentDidMount,
    function componentDidMount() {
      this._layoutState = emptyObject;
      this._isMounted = true;
      this._onLayoutId = guid();
      registry[this._onLayoutId] = this;
      this._handleLayout();
    }
  );
  Component.prototype.componentDidUpdate = safeOverride(
    componentDidUpdate,
    function componentDidUpdate() {
      this._handleLayout();
    }
  );
  Component.prototype.componentWillUnmount = safeOverride(
    componentWillUnmount,
    function componentWillUnmount() {
      this._isMounted = false;
      delete registry[this._onLayoutId];
    }
  );
  Component.prototype._handleLayout = function() {
    const _this = this;
    const layout = this._layoutState;
    const onLayout = this.props.onLayout;
    if (onLayout) {
      this.measure(function(x, y, width, height) {
        if (!_this._isMounted) return;
        if (
          layout.x !== x ||
          layout.y !== y ||
          layout.width !== width ||
          layout.height !== height
        ) {
          _this._layoutState = { x: x, y: y, width: width, height: height };
          const nativeEvent = { layout: _this._layoutState };
          onLayout({ nativeEvent: nativeEvent, timeStamp: Date.now() });
        }
      });
    }
  };
  return Component;
};
exports.default = applyLayout;
