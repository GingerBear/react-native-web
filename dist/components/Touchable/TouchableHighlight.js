Object.defineProperty(exports, '__esModule', { value: true });
const _jsxFileName = 'src/components/Touchable/TouchableHighlight.js';
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
const _ColorPropType = require('../../propTypes/ColorPropType');
const _ColorPropType2 = _interopRequireDefault(_ColorPropType);
const _createReactClass = require('create-react-class');
const _createReactClass2 = _interopRequireDefault(_createReactClass);
const _ensureComponentIsNative = require('./ensureComponentIsNative');
const _ensureComponentIsNative2 = _interopRequireDefault(_ensureComponentIsNative);
const _ensurePositiveDelayProps = require('./ensurePositiveDelayProps');
const _ensurePositiveDelayProps2 = _interopRequireDefault(_ensurePositiveDelayProps);
const _react = require('react');
const _react2 = _interopRequireDefault(_react);
const _StyleSheet = require('../../apis/StyleSheet');
const _StyleSheet2 = _interopRequireDefault(_StyleSheet);
const _reactTimerMixin = require('react-timer-mixin');
const _reactTimerMixin2 = _interopRequireDefault(_reactTimerMixin);
const _Touchable = require('./Touchable');
const _Touchable2 = _interopRequireDefault(_Touchable);
const _TouchableWithoutFeedback = require('./TouchableWithoutFeedback');
const _TouchableWithoutFeedback2 = _interopRequireDefault(_TouchableWithoutFeedback);
const _View = require('../View');
const _View2 = _interopRequireDefault(_View);
const _ViewPropTypes = require('../View/ViewPropTypes');
const _ViewPropTypes2 = _interopRequireDefault(_ViewPropTypes);
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
const DEFAULT_PROPS = { activeOpacity: 0.85, underlayColor: 'black' };
const PRESS_RETENTION_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 };
const TouchableHighlight = (0, _createReactClass2.default)({
  displayName: 'TouchableHighlight',
  propTypes: _extends({}, _TouchableWithoutFeedback2.default.propTypes, {
    activeOpacity: _propTypes.number,
    onHideUnderlay: _propTypes.func,
    onShowUnderlay: _propTypes.func,
    style: _ViewPropTypes2.default.style,
    underlayColor: _ColorPropType2.default
  }),
  mixins: [_reactTimerMixin2.default, _Touchable2.default.Mixin],
  getDefaultProps: function getDefaultProps() {
    return DEFAULT_PROPS;
  },
  _computeSyntheticState: function _computeSyntheticState(props) {
    return {
      activeProps: { style: { opacity: props.activeOpacity } },
      activeUnderlayProps: { style: { backgroundColor: props.underlayColor } },
      underlayStyle: [INACTIVE_UNDERLAY_PROPS.style, props.style]
    };
  },
  getInitialState: function getInitialState() {
    this._isMounted = false;
    return _extends({}, this.touchableGetInitialState(), this._computeSyntheticState(this.props));
  },
  componentDidMount: function componentDidMount() {
    this._isMounted = true;
    (0, _ensurePositiveDelayProps2.default)(this.props);
    (0, _ensureComponentIsNative2.default)(this._childRef);
  },
  componentWillUnmount: function componentWillUnmount() {
    this._isMounted = false;
  },
  componentDidUpdate: function componentDidUpdate() {
    (0, _ensureComponentIsNative2.default)(this._childRef);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    (0, _ensurePositiveDelayProps2.default)(nextProps);
    if (
      nextProps.activeOpacity !== this.props.activeOpacity ||
      nextProps.underlayColor !== this.props.underlayColor ||
      nextProps.style !== this.props.style
    ) {
      this.setState(this._computeSyntheticState(nextProps));
    }
  },
  touchableHandleActivePressIn: function touchableHandleActivePressIn(e) {
    this.clearTimeout(this._hideTimeout);
    this._hideTimeout = null;
    this._showUnderlay();
    this.props.onPressIn && this.props.onPressIn(e);
  },
  touchableHandleActivePressOut: function touchableHandleActivePressOut(e) {
    if (!this._hideTimeout) {
      this._hideUnderlay();
    }
    this.props.onPressOut && this.props.onPressOut(e);
  },
  touchableHandlePress: function touchableHandlePress(e) {
    this.clearTimeout(this._hideTimeout);
    this._showUnderlay();
    this._hideTimeout = this.setTimeout(this._hideUnderlay, this.props.delayPressOut || 100);
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
    return this.props.delayPressIn;
  },
  touchableGetLongPressDelayMS: function touchableGetLongPressDelayMS() {
    return this.props.delayLongPress;
  },
  touchableGetPressOutDelayMS: function touchableGetPressOutDelayMS() {
    return this.props.delayPressOut;
  },
  _showUnderlay: function _showUnderlay() {
    if (!this._isMounted || !this._hasPressHandler()) {
      return;
    }
    this._underlayRef.setNativeProps(this.state.activeUnderlayProps);
    this._childRef.setNativeProps(this.state.activeProps);
    this.props.onShowUnderlay && this.props.onShowUnderlay();
  },
  _hideUnderlay: function _hideUnderlay() {
    this.clearTimeout(this._hideTimeout);
    this._hideTimeout = null;
    if (this._hasPressHandler() && this._underlayRef) {
      this._childRef.setNativeProps(INACTIVE_CHILD_PROPS);
      this._underlayRef.setNativeProps(
        _extends({}, INACTIVE_UNDERLAY_PROPS, { style: this.state.underlayStyle })
      );
      this.props.onHideUnderlay && this.props.onHideUnderlay();
    }
  },
  _hasPressHandler: function _hasPressHandler() {
    return !!(
      this.props.onPress ||
      this.props.onPressIn ||
      this.props.onPressOut ||
      this.props.onLongPress
    );
  },
  _setChildRef: function _setChildRef(node) {
    this._childRef = node;
  },
  _setUnderlayRef: function _setUnderlayRef(node) {
    this._underlayRef = node;
  },
  render: function render() {
    let _props = this.props,
      activeOpacity = _props.activeOpacity,
      onHideUnderlay = _props.onHideUnderlay,
      onShowUnderlay = _props.onShowUnderlay,
      underlayColor = _props.underlayColor,
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
        'onHideUnderlay',
        'onShowUnderlay',
        'underlayColor',
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
        ref: this._setUnderlayRef,
        style: [styles.root, !this.props.disabled && styles.actionable, this.state.underlayStyle],
        __source: { fileName: _jsxFileName, lineNumber: 254 }
      }),
      _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
        ref: this._setChildRef
      }),
      _Touchable2.default.renderDebugView({ color: 'green', hitSlop: this.props.hitSlop })
    );
  }
});
var INACTIVE_CHILD_PROPS = { style: _StyleSheet2.default.create({ x: { opacity: 1.0 } }).x };
var INACTIVE_UNDERLAY_PROPS = {
  style: _StyleSheet2.default.create({ x: { backgroundColor: 'transparent' } }).x
};
var styles = _StyleSheet2.default.create({
  root: { userSelect: 'none' },
  actionable: { cursor: 'pointer', touchAction: 'manipulate' }
});
exports.default = (0, _applyNativeMethods2.default)(TouchableHighlight);
