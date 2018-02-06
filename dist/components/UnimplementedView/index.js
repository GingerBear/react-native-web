Object.defineProperty(exports, '__esModule', { value: true });
const _jsxFileName = 'src/components/UnimplementedView/index.js';
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
const _View = require('../View');
const _View2 = _interopRequireDefault(_View);
const _react = require('react');
const _react2 = _interopRequireDefault(_react);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
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
const UnimplementedView = (function(_Component) {
  _inherits(UnimplementedView, _Component);
  function UnimplementedView() {
    _classCallCheck(this, UnimplementedView);
    return _possibleConstructorReturn(
      this,
      (UnimplementedView.__proto__ || Object.getPrototypeOf(UnimplementedView)).apply(
        this,
        arguments
      )
    );
  }
  _createClass(UnimplementedView, [
    { key: 'setNativeProps', value: function setNativeProps() {} },
    {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _View2.default,
          {
            style: [unimplementedViewStyles, this.props.style],
            __source: { fileName: _jsxFileName, lineNumber: 28 }
          },
          this.props.children
        );
      }
    }
  ]);
  return UnimplementedView;
})(_react.Component);
var unimplementedViewStyles =
  process.env.NODE_ENV !== 'production'
    ? { alignSelf: 'flex-start', borderColor: 'red', borderWidth: 1 }
    : {};
exports.default = UnimplementedView;
