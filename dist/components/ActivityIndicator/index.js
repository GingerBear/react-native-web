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
const _jsxFileName = 'src/components/ActivityIndicator/index.js';
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
const _StyleSheet = require('../../apis/StyleSheet');
const _StyleSheet2 = _interopRequireDefault(_StyleSheet);
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
const ActivityIndicator = (function(_Component) {
  _inherits(ActivityIndicator, _Component);
  function ActivityIndicator() {
    _classCallCheck(this, ActivityIndicator);
    return _possibleConstructorReturn(
      this,
      (ActivityIndicator.__proto__ || Object.getPrototypeOf(ActivityIndicator)).apply(
        this,
        arguments
      )
    );
  }
  _createClass(ActivityIndicator, [
    {
      key: 'render',
      value: function render() {
        let _props = this.props,
          animating = _props.animating,
          color = _props.color,
          hidesWhenStopped = _props.hidesWhenStopped,
          size = _props.size,
          style = _props.style,
          other = _objectWithoutProperties(_props, [
            'animating',
            'color',
            'hidesWhenStopped',
            'size',
            'style'
          ]);
        const svg = _react2.default.createElement(
          'svg',
          {
            height: '100%',
            viewBox: '0 0 32 32',
            width: '100%',
            __source: { fileName: _jsxFileName, lineNumber: 42 }
          },
          _react2.default.createElement('circle', {
            cx: '16',
            cy: '16',
            fill: 'none',
            r: '14',
            strokeWidth: '4',
            style: { stroke: color, opacity: 0.2 },
            __source: { fileName: _jsxFileName, lineNumber: 43 }
          }),
          _react2.default.createElement('circle', {
            cx: '16',
            cy: '16',
            fill: 'none',
            r: '14',
            strokeWidth: '4',
            style: { stroke: color, strokeDasharray: 80, strokeDashoffset: 60 },
            __source: { fileName: _jsxFileName, lineNumber: 54 }
          })
        );
        return _react2.default.createElement(
          _View2.default,
          _extends({}, other, {
            accessibilityRole: 'progressbar',
            'aria-valuemax': '1',
            'aria-valuemin': '0',
            style: [styles.container, style],
            __source: { fileName: _jsxFileName, lineNumber: 70 }
          }),
          _react2.default.createElement(_View2.default, {
            children: svg,
            style: [
              typeof size === 'number' ? { height: size, width: size } : indicatorSizes[size],
              styles.animation,
              !animating && styles.animationPause,
              !animating && hidesWhenStopped && styles.hidesWhenStopped
            ],
            __source: { fileName: _jsxFileName, lineNumber: 77 }
          })
        );
      }
    }
  ]);
  return ActivityIndicator;
})(_react.Component);
ActivityIndicator.displayName = 'ActivityIndicator';
ActivityIndicator.defaultProps = {
  animating: true,
  color: '#1976D2',
  hidesWhenStopped: true,
  size: 'small'
};
ActivityIndicator.propTypes =
  process.env.NODE_ENV !== 'production'
    ? _extends({}, _ViewPropTypes2.default, {
        animating: _propTypes.bool,
        color: _propTypes.string,
        hidesWhenStopped: _propTypes.bool,
        size: (0, _propTypes.oneOfType)([
          (0, _propTypes.oneOf)(['small', 'large']),
          _propTypes.number
        ])
      })
    : {};
var styles = _StyleSheet2.default.create({
  container: { alignItems: 'center', justifyContent: 'center' },
  hidesWhenStopped: { visibility: 'hidden' },
  animation: {
    animationDuration: '0.75s',
    animationName: 'rn-ActivityIndicator-animation',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite'
  },
  animationPause: { animationPlayState: 'paused' }
});
var indicatorSizes = _StyleSheet2.default.create({
  small: { width: 20, height: 20 },
  large: { width: 36, height: 36 }
});
exports.default = (0, _applyNativeMethods2.default)(ActivityIndicator);
