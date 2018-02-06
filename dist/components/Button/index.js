Object.defineProperty(exports, '__esModule', { value: true });
const _jsxFileName = 'src/components/Button/index.js';
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
const _StyleSheet = require('../../apis/StyleSheet');
const _StyleSheet2 = _interopRequireDefault(_StyleSheet);
const _TouchableOpacity = require('../Touchable/TouchableOpacity');
const _TouchableOpacity2 = _interopRequireDefault(_TouchableOpacity);
const _Text = require('../Text');
const _Text2 = _interopRequireDefault(_Text);
const _propTypes = require('prop-types');
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
const Button = (function(_Component) {
  _inherits(Button, _Component);
  function Button() {
    _classCallCheck(this, Button);
    return _possibleConstructorReturn(
      this,
      (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments)
    );
  }
  _createClass(Button, [
    {
      key: 'render',
      value: function render() {
        let _props = this.props,
          accessibilityLabel = _props.accessibilityLabel,
          color = _props.color,
          disabled = _props.disabled,
          onPress = _props.onPress,
          testID = _props.testID,
          title = _props.title;
        return _react2.default.createElement(
          _TouchableOpacity2.default,
          {
            accessibilityLabel: accessibilityLabel,
            accessibilityRole: 'button',
            disabled: disabled,
            onPress: onPress,
            style: [
              styles.button,
              color && { backgroundColor: color },
              disabled && styles.buttonDisabled
            ],
            testID: testID,
            __source: { fileName: _jsxFileName, lineNumber: 34 }
          },
          _react2.default.createElement(
            _Text2.default,
            {
              style: [styles.text, disabled && styles.textDisabled],
              __source: { fileName: _jsxFileName, lineNumber: 46 }
            },
            title
          )
        );
      }
    }
  ]);
  return Button;
})(_react.Component);
Button.propTypes =
  process.env.NODE_ENV !== 'production'
    ? {
        accessibilityLabel: _propTypes.string,
        color: _ColorPropType2.default,
        disabled: _propTypes.bool,
        onPress: _propTypes.func.isRequired,
        testID: _propTypes.string,
        title: _propTypes.string.isRequired
      }
    : {};
var styles = _StyleSheet2.default.create({
  button: { backgroundColor: '#2196F3', borderRadius: 2 },
  text: {
    color: '#fff',
    fontWeight: '500',
    padding: 8,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  buttonDisabled: { backgroundColor: '#dfdfdf' },
  textDisabled: { color: '#a1a1a1' }
});
exports.default = Button;
