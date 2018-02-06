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
const _jsxFileName = 'src/components/Switch/index.js';
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
const _createElement = require('../../modules/createElement');
const _createElement2 = _interopRequireDefault(_createElement);
const _multiplyStyleLengthValue = require('../../modules/multiplyStyleLengthValue');
const _multiplyStyleLengthValue2 = _interopRequireDefault(_multiplyStyleLengthValue);
const _StyleSheet = require('../../apis/StyleSheet');
const _StyleSheet2 = _interopRequireDefault(_StyleSheet);
const _UIManager = require('../../apis/UIManager');
const _UIManager2 = _interopRequireDefault(_UIManager);
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
const emptyObject = {};
const thumbDefaultBoxShadow = '0px 1px 3px rgba(0,0,0,0.5)';
const thumbFocusedBoxShadow = thumbDefaultBoxShadow + ', 0 0 0 10px rgba(0,0,0,0.1)';
const Switch = (function(_PureComponent) {
  _inherits(Switch, _PureComponent);
  function Switch() {
    let _ref;
    let _temp, _this, _ret;
    _classCallCheck(this, Switch);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (
      (_ret = ((_temp = ((_this = _possibleConstructorReturn(
        this,
        (_ref = Switch.__proto__ || Object.getPrototypeOf(Switch)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this._handleChange = function(event) {
        const onValueChange = _this.props.onValueChange;
        onValueChange && onValueChange(event.nativeEvent.target.checked);
      }),
      (_this._handleFocusState = function(event) {
        const isFocused = event.nativeEvent.type === 'focus';
        const boxShadow = isFocused ? thumbFocusedBoxShadow : thumbDefaultBoxShadow;
        if (_this._thumbElement) {
          _this._thumbElement.setNativeProps({ style: { boxShadow: boxShadow } });
        }
      }),
      (_this._setCheckboxRef = function(element) {
        _this._checkboxElement = element;
      }),
      (_this._setThumbRef = function(element) {
        _this._thumbElement = element;
      }),
      _temp)),
      _possibleConstructorReturn(_this, _ret)
    );
  }
  _createClass(Switch, [
    {
      key: 'blur',
      value: function blur() {
        _UIManager2.default.blur(this._checkboxElement);
      }
    },
    {
      key: 'focus',
      value: function focus() {
        _UIManager2.default.focus(this._checkboxElement);
      }
    },
    {
      key: 'render',
      value: function render() {
        let _props = this.props,
          activeThumbColor = _props.activeThumbColor,
          activeTrackColor = _props.activeTrackColor,
          disabled = _props.disabled,
          onValueChange = _props.onValueChange,
          style = _props.style,
          thumbColor = _props.thumbColor,
          trackColor = _props.trackColor,
          value = _props.value,
          onTintColor = _props.onTintColor,
          thumbTintColor = _props.thumbTintColor,
          tintColor = _props.tintColor,
          other = _objectWithoutProperties(_props, [
            'activeThumbColor',
            'activeTrackColor',
            'disabled',
            'onValueChange',
            'style',
            'thumbColor',
            'trackColor',
            'value',
            'onTintColor',
            'thumbTintColor',
            'tintColor'
          ]);
        let _StyleSheet$flatten = _StyleSheet2.default.flatten(style),
          styleHeight = _StyleSheet$flatten.height,
          styleWidth = _StyleSheet$flatten.width;
        const height = styleHeight || 20;
        const minWidth = (0, _multiplyStyleLengthValue2.default)(height, 2);
        const width = styleWidth > minWidth ? styleWidth : minWidth;
        const trackBorderRadius = (0, _multiplyStyleLengthValue2.default)(height, 0.5);
        const trackCurrentColor = value ? onTintColor || activeTrackColor : tintColor || trackColor;
        const thumbCurrentColor = value ? activeThumbColor : thumbTintColor || thumbColor;
        const thumbHeight = height;
        const thumbWidth = thumbHeight;
        const rootStyle = [
          styles.root,
          style,
          { height: height, width: width },
          disabled && styles.cursorDefault
        ];
        const trackStyle = [
          styles.track,
          { backgroundColor: trackCurrentColor, borderRadius: trackBorderRadius },
          disabled && styles.disabledTrack
        ];
        const thumbStyle = [
          styles.thumb,
          { backgroundColor: thumbCurrentColor, height: thumbHeight, width: thumbWidth },
          disabled && styles.disabledThumb
        ];
        const nativeControl = (0, _createElement2.default)('input', {
          checked: value,
          disabled: disabled,
          onBlur: this._handleFocusState,
          onChange: this._handleChange,
          onFocus: this._handleFocusState,
          ref: this._setCheckboxRef,
          style: [styles.nativeControl, styles.cursorInherit],
          type: 'checkbox'
        });
        return _react2.default.createElement(
          _View2.default,
          _extends({}, other, {
            style: rootStyle,
            __source: { fileName: _jsxFileName, lineNumber: 125 }
          }),
          _react2.default.createElement(_View2.default, {
            style: trackStyle,
            __source: { fileName: _jsxFileName, lineNumber: 126 }
          }),
          _react2.default.createElement(_View2.default, {
            ref: this._setThumbRef,
            style: [
              thumbStyle,
              value && styles.thumbOn,
              { marginLeft: value ? (0, _multiplyStyleLengthValue2.default)(thumbWidth, -1) : 0 }
            ],
            __source: { fileName: _jsxFileName, lineNumber: 127 }
          }),
          nativeControl
        );
      }
    }
  ]);
  return Switch;
})(_react.PureComponent);
Switch.displayName = 'Switch';
Switch.defaultProps = {
  activeThumbColor: '#009688',
  activeTrackColor: '#A3D3CF',
  disabled: false,
  style: emptyObject,
  thumbColor: '#FAFAFA',
  trackColor: '#939393',
  value: false
};
Switch.propTypes =
  process.env.NODE_ENV !== 'production'
    ? _extends({}, _ViewPropTypes2.default, {
        activeThumbColor: _ColorPropType2.default,
        activeTrackColor: _ColorPropType2.default,
        disabled: _propTypes.bool,
        onValueChange: _propTypes.func,
        thumbColor: _ColorPropType2.default,
        trackColor: _ColorPropType2.default,
        value: _propTypes.bool,
        onTintColor: _ColorPropType2.default,
        thumbTintColor: _ColorPropType2.default,
        tintColor: _ColorPropType2.default
      })
    : {};
var styles = _StyleSheet2.default.create({
  root: { cursor: 'pointer', userSelect: 'none' },
  cursorDefault: { cursor: 'default' },
  cursorInherit: { cursor: 'inherit' },
  track: _extends({}, _StyleSheet2.default.absoluteFillObject, {
    height: '70%',
    margin: 'auto',
    transitionDuration: '0.1s',
    width: '100%'
  }),
  disabledTrack: { backgroundColor: '#D5D5D5' },
  thumb: {
    alignSelf: 'flex-start',
    borderRadius: '100%',
    boxShadow: thumbDefaultBoxShadow,
    left: '0%',
    transform: [{ translateZ: 0 }],
    transitionDuration: '0.1s'
  },
  thumbOn: { left: '100%' },
  disabledThumb: { backgroundColor: '#BDBDBD' },
  nativeControl: _extends({}, _StyleSheet2.default.absoluteFillObject, {
    height: '100%',
    margin: 0,
    opacity: 0,
    padding: 0,
    width: '100%'
  })
});
exports.default = (0, _applyNativeMethods2.default)(Switch);
