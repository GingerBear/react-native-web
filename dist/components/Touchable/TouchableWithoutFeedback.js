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
const _BaseComponentPropTypes = require('../../propTypes/BaseComponentPropTypes');
const _BaseComponentPropTypes2 = _interopRequireDefault(_BaseComponentPropTypes);
const _createReactClass = require('create-react-class');
const _createReactClass2 = _interopRequireDefault(_createReactClass);
const _EdgeInsetsPropType = require('../../propTypes/EdgeInsetsPropType');
const _EdgeInsetsPropType2 = _interopRequireDefault(_EdgeInsetsPropType);
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
const _warning = require('fbjs/lib/warning');
const _warning2 = _interopRequireDefault(_warning);
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
const PRESS_RETENTION_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 };
const TouchableWithoutFeedback = (0, _createReactClass2.default)({
  displayName: 'TouchableWithoutFeedback',
  mixins: [_reactTimerMixin2.default, _Touchable2.default.Mixin],
  propTypes: {
    accessibilityComponentType: _BaseComponentPropTypes2.default.accessibilityComponentType,
    accessibilityLabel: _propTypes.string,
    accessibilityRole: _BaseComponentPropTypes2.default.accessibilityRole,
    accessibilityTraits: _BaseComponentPropTypes2.default.accessibilityTraits,
    accessible: _propTypes.bool,
    delayLongPress: _propTypes.number,
    delayPressIn: _propTypes.number,
    delayPressOut: _propTypes.number,
    disabled: _propTypes.bool,
    hitSlop: _EdgeInsetsPropType2.default,
    onLayout: _propTypes.func,
    onLongPress: _propTypes.func,
    onPress: _propTypes.func,
    onPressIn: _propTypes.func,
    onPressOut: _propTypes.func,
    pressRetentionOffset: _EdgeInsetsPropType2.default,
    testID: _propTypes.string
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
  touchableHandlePress: function touchableHandlePress(e) {
    this.props.onPress && this.props.onPress(e);
  },
  touchableHandleActivePressIn: function touchableHandleActivePressIn(e) {
    this.props.onPressIn && this.props.onPressIn(e);
  },
  touchableHandleActivePressOut: function touchableHandleActivePressOut(e) {
    this.props.onPressOut && this.props.onPressOut(e);
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
    return this.props.delayPressOut || 0;
  },
  render: function render() {
    let _props = this.props,
      delayLongPress = _props.delayLongPress,
      delayPressIn = _props.delayPressIn,
      delayPressOut = _props.delayPressOut,
      onLongPress = _props.onLongPress,
      onPress = _props.onPress,
      onPressIn = _props.onPressIn,
      onPressOut = _props.onPressOut,
      pressRetentionOffset = _props.pressRetentionOffset,
      other = _objectWithoutProperties(_props, [
        'delayLongPress',
        'delayPressIn',
        'delayPressOut',
        'onLongPress',
        'onPress',
        'onPressIn',
        'onPressOut',
        'pressRetentionOffset'
      ]);
    const child = _react2.default.Children.only(this.props.children);
    let children = child.props.children;
    (0, _warning2.default)(
      !child.type || child.type.displayName !== 'Text',
      'TouchableWithoutFeedback does not work well with Text children. Wrap children in a View instead. See ' +
        ((child._owner && child._owner.getName && child._owner.getName()) || '<unknown>')
    );
    if (
      process.env.NODE_ENV !== 'production' &&
      _Touchable2.default.TOUCH_TARGET_DEBUG &&
      child.type &&
      child.type.displayName === 'View'
    ) {
      children = _react2.default.Children.toArray(children);
      children.push(
        _Touchable2.default.renderDebugView({ color: 'red', hitSlop: this.props.hitSlop })
      );
    }
    const style =
      _Touchable2.default.TOUCH_TARGET_DEBUG && child.type && child.type.displayName === 'Text'
        ? [!this.props.disabled && styles.actionable, child.props.style, { color: 'red' }]
        : [!this.props.disabled && styles.actionable, child.props.style];
    return _react2.default.cloneElement(
      child,
      _extends({}, other, {
        accessible: this.props.accessible !== false,
        children: children,
        onKeyDown: this.touchableHandleKeyEvent,
        onKeyUp: this.touchableHandleKeyEvent,
        onResponderGrant: this.touchableHandleResponderGrant,
        onResponderMove: this.touchableHandleResponderMove,
        onResponderRelease: this.touchableHandleResponderRelease,
        onResponderTerminate: this.touchableHandleResponderTerminate,
        onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
        onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
        style: style
      })
    );
  }
});
var styles = _StyleSheet2.default.create({
  actionable: { cursor: 'pointer', touchAction: 'manipulate' }
});
exports.default = TouchableWithoutFeedback;
