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
const _jsxFileName = 'src/components/ProgressBar/index.js';
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
const _applyNativeMethods = require('../../modules/applyNativeMethods');
const _applyNativeMethods2 = _interopRequireDefault(_applyNativeMethods);
const _ColorPropType = require('../../propTypes/ColorPropType');
const _ColorPropType2 = _interopRequireDefault(_ColorPropType);
const _StyleSheet = require('../../apis/StyleSheet');
const _StyleSheet2 = _interopRequireDefault(_StyleSheet);
const _View = require('../View');
const _View2 = _interopRequireDefault(_View);
const _ViewPropTypes = require('../View/ViewPropTypes');
const _ViewPropTypes2 = _interopRequireDefault(_ViewPropTypes);
const _react = require('react');
const _react2 = _interopRequireDefault(_react);
const _propTypes = require('prop-types');
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
const ProgressBar = (function(_Component) {
  _inherits(ProgressBar, _Component);
  function ProgressBar() {
    let _ref;
    let _temp, _this, _ret;
    _classCallCheck(this, ProgressBar);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (
      (_ret = ((_temp = ((_this = _possibleConstructorReturn(
        this,
        (_ref = ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this._setProgressRef = function(element) {
        _this._progressElement = element;
      }),
      (_this._updateProgressWidth = function() {
        let _this$props = _this.props,
          indeterminate = _this$props.indeterminate,
          progress = _this$props.progress;
        const percentageProgress = indeterminate ? 50 : progress * 100;
        const width = indeterminate ? '25%' : percentageProgress + '%';
        if (_this._progressElement) {
          _this._progressElement.setNativeProps({ style: { width: width } });
        }
      }),
      _temp)),
      _possibleConstructorReturn(_this, _ret)
    );
  }
  _createClass(ProgressBar, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._updateProgressWidth();
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this._updateProgressWidth();
      }
    },
    {
      key: 'render',
      value: function render() {
        let _props = this.props,
          color = _props.color,
          indeterminate = _props.indeterminate,
          progress = _props.progress,
          trackColor = _props.trackColor,
          style = _props.style,
          other = _objectWithoutProperties(_props, [
            'color',
            'indeterminate',
            'progress',
            'trackColor',
            'style'
          ]);
        const percentageProgress = progress * 100;
        return _react2.default.createElement(
          _View2.default,
          _extends({}, other, {
            accessibilityRole: 'progressbar',
            'aria-valuemax': '100',
            'aria-valuemin': '0',
            'aria-valuenow': indeterminate ? null : percentageProgress,
            style: [styles.track, style, { backgroundColor: trackColor }],
            __source: { fileName: _jsxFileName, lineNumber: 54 }
          }),
          _react2.default.createElement(_View2.default, {
            ref: this._setProgressRef,
            style: [styles.progress, indeterminate && styles.animation, { backgroundColor: color }],
            __source: { fileName: _jsxFileName, lineNumber: 62 }
          })
        );
      }
    }
  ]);
  return ProgressBar;
})(_react.Component);
ProgressBar.displayName = 'ProgressBar';
ProgressBar.defaultProps = {
  color: '#1976D2',
  indeterminate: false,
  progress: 0,
  trackColor: 'transparent'
};
ProgressBar.propTypes =
  process.env.NODE_ENV !== 'production'
    ? _extends({}, _ViewPropTypes2.default, {
        color: _ColorPropType2.default,
        indeterminate: _propTypes.bool,
        progress: _propTypes.number,
        trackColor: _ColorPropType2.default
      })
    : {};
var styles = _StyleSheet2.default.create({
  track: { height: 5, overflow: 'hidden', userSelect: 'none', zIndex: 0 },
  progress: { height: '100%', zIndex: -1 },
  animation: {
    animationDuration: '1s',
    animationName: 'rn-ProgressBar-animation',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite'
  }
});
exports.default = (0, _applyNativeMethods2.default)(ProgressBar);
