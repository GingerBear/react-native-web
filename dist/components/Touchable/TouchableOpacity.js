Object.defineProperty(exports, '__esModule', { value: true });
const _jsxFileName = 'src/components/Touchable/TouchableOpacity.js';
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
const _applyNativeMethods = require('../../modules/applyNativeMethods');
const _applyNativeMethods2 = _interopRequireDefault(_applyNativeMethods);
const _createReactClass = require('create-react-class');
const _createReactClass2 = _interopRequireDefault(_createReactClass);
const _ensurePositiveDelayProps = require('./ensurePositiveDelayProps');
const _ensurePositiveDelayProps2 = _interopRequireDefault(_ensurePositiveDelayProps);
const _propTypes = require('prop-types');
const _react = require('react');
const _react2 = _interopRequireDefault(_react);
const _StyleSheet = require('../../apis/StyleSheet');
const _StyleSheet2 = _interopRequireDefault(_StyleSheet);
const _Touchable = require('./Touchable');
const _Touchable2 = _interopRequireDefault(_Touchable);
const _TouchableWithoutFeedback = require('./TouchableWithoutFeedback');
const _TouchableWithoutFeedback2 = _interopRequireDefault(_TouchableWithoutFeedback);
const _View = require('../View');
const _View2 = _interopRequireDefault(_View);
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
const flattenStyle = _StyleSheet2.default.flatten;
const PRESS_RETENTION_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 };
const TouchableOpacity = (0, _createReactClass2.default)({
  displayName: 'TouchableOpacity',
  mixins: [_Touchable2.default.Mixin],
  propTypes: _extends({}, _TouchableWithoutFeedback2.default.propTypes, {
    activeOpacity: _propTypes.number,
    focusedOpacity: _propTypes.number
  }),
  getDefaultProps: function getDefaultProps() {
    return { activeOpacity: 0.2, focusedOpacity: 0.7 };
  },
  getInitialState: function getInitialState() {
    return this.touchableGetInitialState();
  },
  componentDidMount: function componentDidMount() {
    (0, _ensurePositiveDelayProps2.default)(this.props);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    (0, _ensurePositiveDelayProps2.default)(nextProps);
  },
  setOpacityTo: function setOpacityTo(value, duration) {
    this.setNativeProps({
      style: { opacity: value, transitionDuration: duration ? duration / 1000 + 's' : '0s' }
    });
  },
  touchableHandleActivePressIn: function touchableHandleActivePressIn(e) {
    if (e.dispatchConfig.registrationName === 'onResponderGrant') {
      this._opacityActive(0);
    } else {
      this._opacityActive(150);
    }
    this.props.onPressIn && this.props.onPressIn(e);
  },
  touchableHandleActivePressOut: function touchableHandleActivePressOut(e) {
    this._opacityInactive(250);
    this.props.onPressOut && this.props.onPressOut(e);
  },
  touchableHandlePress: function touchableHandlePress(e) {
    this.props.onPress && this.props.onPress(e);
  },
  touchableHandleLongPress: function touchableHandleLongPress(e) {
    this.props.onLongPress && this.props.onLongPress(e);
  },
  touchableGetPressRectOffset: function touchableGetPressRectOffset() {
    return this.props.pressRetentionOffset || PRESS_RETENTION_OFFSET;
  },
  touchableGetHitSlop: function touchableGetHitSlop() {
    return this.props.hitSlop;
  },
  touchableGetHighlightDelayMS: function touchableGetHighlightDelayMS() {
    return this.props.delayPressIn || 0;
  },
  touchableGetLongPressDelayMS: function touchableGetLongPressDelayMS() {
    return this.props.delayLongPress === 0 ? 0 : this.props.delayLongPress || 500;
  },
  touchableGetPressOutDelayMS: function touchableGetPressOutDelayMS() {
    return this.props.delayPressOut;
  },
  _opacityActive: function _opacityActive(duration) {
    this.setOpacityTo(this.props.activeOpacity, duration);
  },
  _opacityInactive: function _opacityInactive(duration) {
    this.setOpacityTo(this._getChildStyleOpacityWithDefault(), duration);
  },
  _opacityFocused: function _opacityFocused() {
    this.setOpacityTo(this.props.focusedOpacity);
  },
  _getChildStyleOpacityWithDefault: function _getChildStyleOpacityWithDefault() {
    const childStyle = flattenStyle(this.props.style) || {};
    return childStyle.opacity === undefined ? 1 : childStyle.opacity;
  },
  render: function render() {
    let _props = this.props,
      activeOpacity = _props.activeOpacity,
      focusedOpacity = _props.focusedOpacity,
      delayLongPress = _props.delayLongPress,
      delayPressIn = _props.delayPressIn,
      delayPressOut = _props.delayPressOut,
      onLongPress = _props.onLongPress,
      onPress = _props.onPress,
      onPressIn = _props.onPressIn,
      onPressOut = _props.onPressOut,
      pressRetentionOffset = _props.pressRetentionOffset,
      other = _objectWithoutProperties(_props, [
        'activeOpacity',
        'focusedOpacity',
        'delayLongPress',
        'delayPressIn',
        'delayPressOut',
        'onLongPress',
        'onPress',
        'onPressIn',
        'onPressOut',
        'pressRetentionOffset'
      ]);
    return _react2.default.createElement(
      _View2.default,
      _extends({}, other, {
        accessible: this.props.accessible !== false,
        onKeyDown: this.touchableHandleKeyEvent,
        onKeyUp: this.touchableHandleKeyEvent,
        onResponderGrant: this.touchableHandleResponderGrant,
        onResponderMove: this.touchableHandleResponderMove,
        onResponderRelease: this.touchableHandleResponderRelease,
        onResponderTerminate: this.touchableHandleResponderTerminate,
        onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
        onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
        style: [styles.root, !this.props.disabled && styles.actionable, this.props.style],
        __source: { fileName: _jsxFileName, lineNumber: 179 }
      }),
      this.props.children,
      _Touchable2.default.renderDebugView({ color: 'blue', hitSlop: this.props.hitSlop })
    );
  }
});
var styles = _StyleSheet2.default.create({
  root: { transitionProperty: 'opacity', transitionDuration: '0.15s', userSelect: 'none' },
  actionable: { cursor: 'pointer', touchAction: 'manipulate' }
});
exports.default = (0, _applyNativeMethods2.default)(TouchableOpacity);
