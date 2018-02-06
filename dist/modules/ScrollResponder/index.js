Object.defineProperty(exports, '__esModule', { value: true });
const _Dimensions = require('../../apis/Dimensions');
const _Dimensions2 = _interopRequireDefault(_Dimensions);
const _findNodeHandle = require('../findNodeHandle');
const _findNodeHandle2 = _interopRequireDefault(_findNodeHandle);
const _invariant = require('fbjs/lib/invariant');
const _invariant2 = _interopRequireDefault(_invariant);
const _Platform = require('../../apis/Platform');
const _Platform2 = _interopRequireDefault(_Platform);
const _TextInputState = require('../../components/TextInput/TextInputState');
const _TextInputState2 = _interopRequireDefault(_TextInputState);
const _UIManager = require('../../apis/UIManager');
const _UIManager2 = _interopRequireDefault(_UIManager);
const _warning = require('fbjs/lib/warning');
const _warning2 = _interopRequireDefault(_warning);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const emptyObject = {};
const IS_ANIMATING_TOUCH_START_THRESHOLD_MS = 16;
const ScrollResponderMixin = {
  scrollResponderMixinGetInitialState: function scrollResponderMixinGetInitialState() {
    return {
      isTouching: false,
      lastMomentumScrollBeginTime: 0,
      lastMomentumScrollEndTime: 0,
      observedScrollSinceBecomingResponder: false,
      becameResponderWhileAnimating: false
    };
  },
  scrollResponderHandleScrollShouldSetResponder: function scrollResponderHandleScrollShouldSetResponder() {
    return this.state.isTouching;
  },
  scrollResponderHandleStartShouldSetResponder: function scrollResponderHandleStartShouldSetResponder() {
    return false;
  },
  scrollResponderHandleStartShouldSetResponderCapture: function scrollResponderHandleStartShouldSetResponderCapture(
    e
  ) {
    return this.scrollResponderIsAnimating();
  },
  scrollResponderHandleResponderReject: function scrollResponderHandleResponderReject() {
    (0, _warning2.default)(false, "ScrollView doesn't take rejection well - scrolls anyway");
  },
  scrollResponderHandleTerminationRequest: function scrollResponderHandleTerminationRequest() {
    return !this.state.observedScrollSinceBecomingResponder;
  },
  scrollResponderHandleTouchEnd: function scrollResponderHandleTouchEnd(e) {
    const nativeEvent = e.nativeEvent;
    this.state.isTouching = nativeEvent.touches.length !== 0;
    this.props.onTouchEnd && this.props.onTouchEnd(e);
  },
  scrollResponderHandleResponderRelease: function scrollResponderHandleResponderRelease(e) {
    this.props.onResponderRelease && this.props.onResponderRelease(e);
    const currentlyFocusedTextInput = _TextInputState2.default.currentlyFocusedField();
    if (
      !this.props.keyboardShouldPersistTaps &&
      currentlyFocusedTextInput != null &&
      e.target !== currentlyFocusedTextInput &&
      !this.state.observedScrollSinceBecomingResponder &&
      !this.state.becameResponderWhileAnimating
    ) {
      this.props.onScrollResponderKeyboardDismissed &&
        this.props.onScrollResponderKeyboardDismissed(e);
      _TextInputState2.default.blurTextInput(currentlyFocusedTextInput);
    }
  },
  scrollResponderHandleScroll: function scrollResponderHandleScroll(e) {
    this.state.observedScrollSinceBecomingResponder = true;
    this.props.onScroll && this.props.onScroll(e);
  },
  scrollResponderHandleResponderGrant: function scrollResponderHandleResponderGrant(e) {
    this.state.observedScrollSinceBecomingResponder = false;
    this.props.onResponderGrant && this.props.onResponderGrant(e);
    this.state.becameResponderWhileAnimating = this.scrollResponderIsAnimating();
  },
  scrollResponderHandleScrollBeginDrag: function scrollResponderHandleScrollBeginDrag(e) {
    this.props.onScrollBeginDrag && this.props.onScrollBeginDrag(e);
  },
  scrollResponderHandleScrollEndDrag: function scrollResponderHandleScrollEndDrag(e) {
    this.props.onScrollEndDrag && this.props.onScrollEndDrag(e);
  },
  scrollResponderHandleMomentumScrollBegin: function scrollResponderHandleMomentumScrollBegin(e) {
    this.state.lastMomentumScrollBeginTime = Date.now();
    this.props.onMomentumScrollBegin && this.props.onMomentumScrollBegin(e);
  },
  scrollResponderHandleMomentumScrollEnd: function scrollResponderHandleMomentumScrollEnd(e) {
    this.state.lastMomentumScrollEndTime = Date.now();
    this.props.onMomentumScrollEnd && this.props.onMomentumScrollEnd(e);
  },
  scrollResponderHandleTouchStart: function scrollResponderHandleTouchStart(e) {
    this.state.isTouching = true;
    this.props.onTouchStart && this.props.onTouchStart(e);
  },
  scrollResponderHandleTouchMove: function scrollResponderHandleTouchMove(e) {
    this.props.onTouchMove && this.props.onTouchMove(e);
  },
  scrollResponderIsAnimating: function scrollResponderIsAnimating() {
    const now = Date.now();
    const timeSinceLastMomentumScrollEnd = now - this.state.lastMomentumScrollEndTime;
    const isAnimating =
      timeSinceLastMomentumScrollEnd < IS_ANIMATING_TOUCH_START_THRESHOLD_MS ||
      this.state.lastMomentumScrollEndTime < this.state.lastMomentumScrollBeginTime;
    return isAnimating;
  },
  scrollResponderGetScrollableNode: function scrollResponderGetScrollableNode() {
    return this.getScrollableNode ? this.getScrollableNode() : (0, _findNodeHandle2.default)(this);
  },
  scrollResponderScrollTo: function scrollResponderScrollTo(x, y, animated) {
    if (typeof x === 'number') {
      console.warn(
        '`scrollResponderScrollTo(x, y, animated)` is deprecated. Use `scrollResponderScrollTo({x: 5, y: 5, animated: true})` instead.'
      );
    } else {
      const _ref = x || emptyObject;
      x = _ref.x;
      y = _ref.y;
      animated = _ref.animated;
    }
    const node = this.scrollResponderGetScrollableNode();
    node.scrollLeft = x || 0;
    node.scrollTop = y || 0;
  },
  scrollResponderScrollWithoutAnimationTo: function scrollResponderScrollWithoutAnimationTo(
    offsetX,
    offsetY
  ) {
    console.warn(
      '`scrollResponderScrollWithoutAnimationTo` is deprecated. Use `scrollResponderScrollTo` instead'
    );
    this.scrollResponderScrollTo({ x: offsetX, y: offsetY, animated: false });
  },
  scrollResponderZoomTo: function scrollResponderZoomTo(rect, animated) {
    if (_Platform2.default.OS !== 'ios') {
      (0, _invariant2.default)('zoomToRect is not implemented');
    }
  },
  scrollResponderScrollNativeHandleToKeyboard: function scrollResponderScrollNativeHandleToKeyboard(
    nodeHandle,
    additionalOffset,
    preventNegativeScrollOffset
  ) {
    this.additionalScrollOffset = additionalOffset || 0;
    this.preventNegativeScrollOffset = !!preventNegativeScrollOffset;
    _UIManager2.default.measureLayout(
      nodeHandle,
      (0, _findNodeHandle2.default)(this.getInnerViewNode()),
      this.scrollResponderTextInputFocusError,
      this.scrollResponderInputMeasureAndScrollToKeyboard
    );
  },
  scrollResponderInputMeasureAndScrollToKeyboard: function scrollResponderInputMeasureAndScrollToKeyboard(
    left,
    top,
    width,
    height
  ) {
    let keyboardScreenY = _Dimensions2.default.get('window').height;
    if (this.keyboardWillOpenTo) {
      keyboardScreenY = this.keyboardWillOpenTo.endCoordinates.screenY;
    }
    let scrollOffsetY = top - keyboardScreenY + height + this.additionalScrollOffset;
    if (this.preventNegativeScrollOffset) {
      scrollOffsetY = Math.max(0, scrollOffsetY);
    }
    this.scrollResponderScrollTo({ x: 0, y: scrollOffsetY, animated: true });
    this.additionalOffset = 0;
    this.preventNegativeScrollOffset = false;
  },
  scrollResponderTextInputFocusError: function scrollResponderTextInputFocusError(e) {
    console.error('Error measuring text field: ', e);
  },
  componentWillMount: function componentWillMount() {
    this.keyboardWillOpenTo = null;
    this.additionalScrollOffset = 0;
  },
  scrollResponderKeyboardWillShow: function scrollResponderKeyboardWillShow(e) {
    this.keyboardWillOpenTo = e;
    this.props.onKeyboardWillShow && this.props.onKeyboardWillShow(e);
  },
  scrollResponderKeyboardWillHide: function scrollResponderKeyboardWillHide(e) {
    this.keyboardWillOpenTo = null;
    this.props.onKeyboardWillHide && this.props.onKeyboardWillHide(e);
  },
  scrollResponderKeyboardDidShow: function scrollResponderKeyboardDidShow(e) {
    if (e) {
      this.keyboardWillOpenTo = e;
    }
    this.props.onKeyboardDidShow && this.props.onKeyboardDidShow(e);
  },
  scrollResponderKeyboardDidHide: function scrollResponderKeyboardDidHide(e) {
    this.keyboardWillOpenTo = null;
    this.props.onKeyboardDidHide && this.props.onKeyboardDidHide(e);
  }
};
const ScrollResponder = { Mixin: ScrollResponderMixin };
exports.default = ScrollResponder;
