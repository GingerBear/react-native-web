Object.defineProperty(exports, '__esModule', { value: true });
const _extends =
  Object.assign ||
  function(target) {
    for (let i = 1; i < arguments.length; i++) {
      const source = arguments[i];
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
const _jsxFileName = 'src/components/RefreshControl/index.js';
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
const _ColorPropType = require('../../propTypes/ColorPropType');
const _ColorPropType2 = _interopRequireDefault(_ColorPropType);
const _View = require('../View');
const _View2 = _interopRequireDefault(_View);
const _ViewPropTypes = require('../View/ViewPropTypes');
const _ViewPropTypes2 = _interopRequireDefault(_ViewPropTypes);
const _propTypes = require('prop-types');
const _react = require('react');
const _react2 = _interopRequireDefault(_react);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _objectWithoutProperties(obj, keys) {
  const target = {};
  for (const i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
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
const RefreshControl = (function(_Component) {
  _inherits(RefreshControl, _Component);
  function RefreshControl() {
    _classCallCheck(this, RefreshControl);
    return _possibleConstructorReturn(
      this,
      (RefreshControl.__proto__ || Object.getPrototypeOf(RefreshControl)).apply(this, arguments)
    );
  }
  _createClass(RefreshControl, [
    {
      key: 'render',
      value: function render() {
        let _props = this.props,
          colors = _props.colors,
          enabled = _props.enabled,
          onRefresh = _props.onRefresh,
          progressBackgroundColor = _props.progressBackgroundColor,
          progressViewOffset = _props.progressViewOffset,
          refreshing = _props.refreshing,
          size = _props.size,
          tintColor = _props.tintColor,
          title = _props.title,
          titleColor = _props.titleColor,
          rest = _objectWithoutProperties(_props, [
            'colors',
            'enabled',
            'onRefresh',
            'progressBackgroundColor',
            'progressViewOffset',
            'refreshing',
            'size',
            'tintColor',
            'title',
            'titleColor'
          ]);
        return _react2.default.createElement(
          _View2.default,
          _extends({}, rest, { __source: { fileName: _jsxFileName, lineNumber: 51 } })
        );
      }
    }
  ]);
  return RefreshControl;
})(_react.Component);
RefreshControl.propTypes =
  process.env.NODE_ENV !== 'production'
    ? _extends({}, _ViewPropTypes2.default, {
        colors: (0, _propTypes.arrayOf)(_ColorPropType2.default),
        enabled: _propTypes.bool,
        onRefresh: _propTypes.func,
        progressBackgroundColor: _ColorPropType2.default,
        progressViewOffset: _propTypes.number,
        refreshing: _propTypes.bool.isRequired,
        size: (0, _propTypes.oneOf)([0, 1]),
        tintColor: _ColorPropType2.default,
        title: _propTypes.string,
        titleColor: _ColorPropType2.default
      })
    : {};
exports.default = RefreshControl;
