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
const _react = require('react');
const _propTypes = require('prop-types');
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' + typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, enumerable: false, writable: true, configurable: true }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}
const StaticRenderer = (function(_Component) {
  _inherits(StaticRenderer, _Component);
  function StaticRenderer() {
    _classCallCheck(this, StaticRenderer);
    return _possibleConstructorReturn(
      this,
      (StaticRenderer.__proto__ || Object.getPrototypeOf(StaticRenderer)).apply(this, arguments)
    );
  }
  _createClass(StaticRenderer, [
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        return nextProps.shouldUpdate;
      }
    },
    {
      key: 'render',
      value: function render() {
        return this.props.render();
      }
    }
  ]);
  return StaticRenderer;
})(_react.Component);
exports.default = StaticRenderer;
StaticRenderer.propTypes =
  process.env.NODE_ENV !== 'production'
    ? { render: _propTypes.func.isRequired, shouldUpdate: _propTypes.bool.isRequired }
    : {};
