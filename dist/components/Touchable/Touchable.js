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
const _jsxFileName = 'src/components/Touchable/Touchable.js';
const _AccessibilityUtil = require('../../modules/AccessibilityUtil');
const _AccessibilityUtil2 = _interopRequireDefault(_AccessibilityUtil);
const _BoundingDimensions = require('./BoundingDimensions');
const _BoundingDimensions2 = _interopRequireDefault(_BoundingDimensions);
const _findNodeHandle = require('../../modules/findNodeHandle');
const _findNodeHandle2 = _interopRequireDefault(_findNodeHandle);
const _normalizeCssColor = require('normalize-css-color');
const _normalizeCssColor2 = _interopRequireDefault(_normalizeCssColor);
const _Position = require('./Position');
const _Position2 = _interopRequireDefault(_Position);
const _react = require('react');
const _react2 = _interopRequireDefault(_react);
const _TouchEventUtils = require('fbjs/lib/TouchEventUtils');
const _TouchEventUtils2 = _interopRequireDefault(_TouchEventUtils);
const _UIManager = require('../../apis/UIManager');
const _UIManager2 = _interopRequireDefault(_UIManager);
const _View = require('../../components/View');
const _View2 = _interopRequireDefault(_View);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const States = {
  NOT_RESPONDER: 'NOT_RESPONDER',
  RESPONDER_INACTIVE_PRESS_IN: 'RESPONDER_INACTIVE_PRESS_IN',
  RESPONDER_INACTIVE_PRESS_OUT: 'RESPONDER_INACTIVE_PRESS_OUT',
  RESPONDER_ACTIVE_PRESS_IN: 'RESPONDER_ACTIVE_PRESS_IN',
  RESPONDER_ACTIVE_PRESS_OUT: 'RESPONDER_ACTIVE_PRESS_OUT',
  RESPONDER_ACTIVE_LONG_PRESS_IN: 'RESPONDER_ACTIVE_LONG_PRESS_IN',
  RESPONDER_ACTIVE_LONG_PRESS_OUT: 'RESPONDER_ACTIVE_LONG_PRESS_OUT',
  ERROR: 'ERROR'
};
const IsActive = { RESPONDER_ACTIVE_PRESS_OUT: true, RESPONDER_ACTIVE_PRESS_IN: true };
const IsPressingIn = {
  RESPONDER_INACTIVE_PRESS_IN: true,
  RESPONDER_ACTIVE_PRESS_IN: true,
  RESPONDER_ACTIVE_LONG_PRESS_IN: true
};
const IsLongPressingIn = { RESPONDER_ACTIVE_LONG_PRESS_IN: true };
const Signals = {
  DELAY: 'DELAY',
  RESPONDER_GRANT: 'RESPONDER_GRANT',
  RESPONDER_RELEASE: 'RESPONDER_RELEASE',
  RESPONDER_TERMINATED: 'RESPONDER_TERMINATED',
  ENTER_PRESS_RECT: 'ENTER_PRESS_RECT',
  LEAVE_PRESS_RECT: 'LEAVE_PRESS_RECT',
  LONG_PRESS_DETECTED: 'LONG_PRESS_DETECTED'
};
const Transitions = {
  NOT_RESPONDER: {
    DELAY: States.ERROR,
    RESPONDER_GRANT: States.RESPONDER_INACTIVE_PRESS_IN,
    RESPONDER_RELEASE: States.ERROR,
    RESPONDER_TERMINATED: States.ERROR,
    ENTER_PRESS_RECT: States.ERROR,
    LEAVE_PRESS_RECT: States.ERROR,
    LONG_PRESS_DETECTED: States.ERROR
  },
  RESPONDER_INACTIVE_PRESS_IN: {
    DELAY: States.RESPONDER_ACTIVE_PRESS_IN,
    RESPONDER_GRANT: States.ERROR,
    RESPONDER_RELEASE: States.NOT_RESPONDER,
    RESPONDER_TERMINATED: States.NOT_RESPONDER,
    ENTER_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_IN,
    LEAVE_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_OUT,
    LONG_PRESS_DETECTED: States.ERROR
  },
  RESPONDER_INACTIVE_PRESS_OUT: {
    DELAY: States.RESPONDER_ACTIVE_PRESS_OUT,
    RESPONDER_GRANT: States.ERROR,
    RESPONDER_RELEASE: States.NOT_RESPONDER,
    RESPONDER_TERMINATED: States.NOT_RESPONDER,
    ENTER_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_IN,
    LEAVE_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_OUT,
    LONG_PRESS_DETECTED: States.ERROR
  },
  RESPONDER_ACTIVE_PRESS_IN: {
    DELAY: States.ERROR,
    RESPONDER_GRANT: States.ERROR,
    RESPONDER_RELEASE: States.NOT_RESPONDER,
    RESPONDER_TERMINATED: States.NOT_RESPONDER,
    ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_IN,
    LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_OUT,
    LONG_PRESS_DETECTED: States.RESPONDER_ACTIVE_LONG_PRESS_IN
  },
  RESPONDER_ACTIVE_PRESS_OUT: {
    DELAY: States.ERROR,
    RESPONDER_GRANT: States.ERROR,
    RESPONDER_RELEASE: States.NOT_RESPONDER,
    RESPONDER_TERMINATED: States.NOT_RESPONDER,
    ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_IN,
    LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_OUT,
    LONG_PRESS_DETECTED: States.ERROR
  },
  RESPONDER_ACTIVE_LONG_PRESS_IN: {
    DELAY: States.ERROR,
    RESPONDER_GRANT: States.ERROR,
    RESPONDER_RELEASE: States.NOT_RESPONDER,
    RESPONDER_TERMINATED: States.NOT_RESPONDER,
    ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_IN,
    LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_OUT,
    LONG_PRESS_DETECTED: States.RESPONDER_ACTIVE_LONG_PRESS_IN
  },
  RESPONDER_ACTIVE_LONG_PRESS_OUT: {
    DELAY: States.ERROR,
    RESPONDER_GRANT: States.ERROR,
    RESPONDER_RELEASE: States.NOT_RESPONDER,
    RESPONDER_TERMINATED: States.NOT_RESPONDER,
    ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_IN,
    LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_OUT,
    LONG_PRESS_DETECTED: States.ERROR
  },
  error: {
    DELAY: States.NOT_RESPONDER,
    RESPONDER_GRANT: States.RESPONDER_INACTIVE_PRESS_IN,
    RESPONDER_RELEASE: States.NOT_RESPONDER,
    RESPONDER_TERMINATED: States.NOT_RESPONDER,
    ENTER_PRESS_RECT: States.NOT_RESPONDER,
    LEAVE_PRESS_RECT: States.NOT_RESPONDER,
    LONG_PRESS_DETECTED: States.NOT_RESPONDER
  }
};
const HIGHLIGHT_DELAY_MS = 130;
const PRESS_EXPAND_PX = 20;
const LONG_PRESS_THRESHOLD = 500;
const LONG_PRESS_DELAY_MS = LONG_PRESS_THRESHOLD - HIGHLIGHT_DELAY_MS;
const LONG_PRESS_ALLOWED_MOVEMENT = 10;
const TouchableMixin = {
  componentDidMount: function componentDidMount() {
    const _this = this;
    this._touchableNode = (0, _findNodeHandle2.default)(this);
    this._touchableBlurListener = function(e) {
      if (_this._isTouchableKeyboardActive) {
        if (
          _this.state.touchable.touchState &&
          _this.state.touchable.touchState !== States.NOT_RESPONDER
        ) {
          _this.touchableHandleResponderTerminate({ nativeEvent: e });
        }
        _this._isTouchableKeyboardActive = false;
      }
    };
    this._touchableNode.addEventListener('blur', this._touchableBlurListener);
  },
  componentWillUnmount: function componentWillUnmount() {
    this._touchableNode.removeEventListener('blur', this._touchableBlurListener);
    this.touchableDelayTimeout && clearTimeout(this.touchableDelayTimeout);
    this.longPressDelayTimeout && clearTimeout(this.longPressDelayTimeout);
    this.pressOutDelayTimeout && clearTimeout(this.pressOutDelayTimeout);
  },
  touchableGetInitialState: function touchableGetInitialState() {
    return { touchable: { touchState: undefined, responderID: null } };
  },
  touchableHandleResponderTerminationRequest: function touchableHandleResponderTerminationRequest() {
    return !this.props.rejectResponderTermination;
  },
  touchableHandleStartShouldSetResponder: function touchableHandleStartShouldSetResponder() {
    return !this.props.disabled;
  },
  touchableLongPressCancelsPress: function touchableLongPressCancelsPress() {
    return true;
  },
  touchableHandleResponderGrant: function touchableHandleResponderGrant(e) {
    const dispatchID = e.currentTarget;
    e.persist();
    this.pressOutDelayTimeout && clearTimeout(this.pressOutDelayTimeout);
    this.pressOutDelayTimeout = null;
    this.state.touchable.touchState = States.NOT_RESPONDER;
    this.state.touchable.responderID = dispatchID;
    this._receiveSignal(Signals.RESPONDER_GRANT, e);
    let delayMS =
      this.touchableGetHighlightDelayMS !== undefined
        ? Math.max(this.touchableGetHighlightDelayMS(), 0)
        : HIGHLIGHT_DELAY_MS;
    delayMS = isNaN(delayMS) ? HIGHLIGHT_DELAY_MS : delayMS;
    if (delayMS !== 0) {
      this.touchableDelayTimeout = setTimeout(this._handleDelay.bind(this, e), delayMS);
    } else {
      this.state.touchable.positionOnActivate = null;
      this._handleDelay(e);
    }
    let longDelayMS =
      this.touchableGetLongPressDelayMS !== undefined
        ? Math.max(this.touchableGetLongPressDelayMS(), 10)
        : LONG_PRESS_DELAY_MS;
    longDelayMS = isNaN(longDelayMS) ? LONG_PRESS_DELAY_MS : longDelayMS;
    this.longPressDelayTimeout = setTimeout(
      this._handleLongDelay.bind(this, e),
      longDelayMS + delayMS
    );
  },
  touchableHandleResponderRelease: function touchableHandleResponderRelease(e) {
    this._receiveSignal(Signals.RESPONDER_RELEASE, e);
    if (e.cancelable && !e.isDefaultPrevented()) {
      e.preventDefault();
    }
  },
  touchableHandleResponderTerminate: function touchableHandleResponderTerminate(e) {
    this._receiveSignal(Signals.RESPONDER_TERMINATED, e);
  },
  touchableHandleResponderMove: function touchableHandleResponderMove(e) {
    if (this.state.touchable.touchState === States.RESPONDER_INACTIVE_PRESS_IN) {
      return;
    }
    if (!this.state.touchable.positionOnActivate) {
      return;
    }
    const positionOnActivate = this.state.touchable.positionOnActivate;
    const dimensionsOnActivate = this.state.touchable.dimensionsOnActivate;
    const pressRectOffset = this.touchableGetPressRectOffset
      ? this.touchableGetPressRectOffset()
      : {
          left: PRESS_EXPAND_PX,
          right: PRESS_EXPAND_PX,
          top: PRESS_EXPAND_PX,
          bottom: PRESS_EXPAND_PX
        };
    let pressExpandLeft = pressRectOffset.left;
    let pressExpandTop = pressRectOffset.top;
    let pressExpandRight = pressRectOffset.right;
    let pressExpandBottom = pressRectOffset.bottom;
    const hitSlop = this.touchableGetHitSlop ? this.touchableGetHitSlop() : null;
    if (hitSlop) {
      pressExpandLeft += hitSlop.left;
      pressExpandTop += hitSlop.top;
      pressExpandRight += hitSlop.right;
      pressExpandBottom += hitSlop.bottom;
    }
    const touch = _TouchEventUtils2.default.extractSingleTouch(e.nativeEvent);
    const pageX = touch && touch.pageX;
    const pageY = touch && touch.pageY;
    if (this.pressInLocation) {
      const movedDistance = this._getDistanceBetweenPoints(
        pageX,
        pageY,
        this.pressInLocation.pageX,
        this.pressInLocation.pageY
      );
      if (movedDistance > LONG_PRESS_ALLOWED_MOVEMENT) {
        this._cancelLongPressDelayTimeout();
      }
    }
    const isTouchWithinActive =
      pageX > positionOnActivate.left - pressExpandLeft &&
      pageY > positionOnActivate.top - pressExpandTop &&
      pageX < positionOnActivate.left + dimensionsOnActivate.width + pressExpandRight &&
      pageY < positionOnActivate.top + dimensionsOnActivate.height + pressExpandBottom;
    if (isTouchWithinActive) {
      this._receiveSignal(Signals.ENTER_PRESS_RECT, e);
      const curState = this.state.touchable.touchState;
      if (curState === States.RESPONDER_INACTIVE_PRESS_IN) {
        this._cancelLongPressDelayTimeout();
      }
    } else {
      this._cancelLongPressDelayTimeout();
      this._receiveSignal(Signals.LEAVE_PRESS_RECT, e);
    }
  },
  _remeasureMetricsOnActivation: function _remeasureMetricsOnActivation() {
    const tag = this.state.touchable.responderID;
    if (tag == null) {
      return;
    }
    _UIManager2.default.measure(tag, this._handleQueryLayout);
  },
  _handleQueryLayout: function _handleQueryLayout(x, y, width, height, globalX, globalY) {
    if (!x && !y && !width && !height && !globalX && !globalY) {
      return;
    }
    this.state.touchable.positionOnActivate &&
      _Position2.default.release(this.state.touchable.positionOnActivate);
    this.state.touchable.dimensionsOnActivate &&
      _BoundingDimensions2.default.release(this.state.touchable.dimensionsOnActivate);
    this.state.touchable.positionOnActivate = _Position2.default.getPooled(globalX, globalY);
    this.state.touchable.dimensionsOnActivate = _BoundingDimensions2.default.getPooled(
      width,
      height
    );
  },
  _handleDelay: function _handleDelay(e) {
    this.touchableDelayTimeout = null;
    this._receiveSignal(Signals.DELAY, e);
  },
  _handleLongDelay: function _handleLongDelay(e) {
    this.longPressDelayTimeout = null;
    const curState = this.state.touchable.touchState;
    if (
      curState !== States.RESPONDER_ACTIVE_PRESS_IN &&
      curState !== States.RESPONDER_ACTIVE_LONG_PRESS_IN
    ) {
      console.error(
        'Attempted to transition from state `' +
          curState +
          '` to `' +
          States.RESPONDER_ACTIVE_LONG_PRESS_IN +
          '`, which is not supported. This is ' +
          'most likely due to `Touchable.longPressDelayTimeout` not being cancelled.'
      );
    } else {
      this._receiveSignal(Signals.LONG_PRESS_DETECTED, e);
    }
  },
  _receiveSignal: function _receiveSignal(signal, e) {
    const responderID = this.state.touchable.responderID;
    const curState = this.state.touchable.touchState;
    const nextState = Transitions[curState] && Transitions[curState][signal];
    if (!responderID && signal === Signals.RESPONDER_RELEASE) {
      return;
    }
    if (!nextState) {
      throw new Error(
        'Unrecognized signal `' +
          signal +
          '` or state `' +
          curState +
          '` for Touchable responder `' +
          responderID +
          '`'
      );
    }
    if (nextState === States.ERROR) {
      throw new Error(
        'Touchable cannot transition from `' +
          curState +
          '` to `' +
          signal +
          '` for responder `' +
          responderID +
          '`'
      );
    }
    if (curState !== nextState) {
      this._performSideEffectsForTransition(curState, nextState, signal, e);
      this.state.touchable.touchState = nextState;
    }
  },
  _cancelLongPressDelayTimeout: function _cancelLongPressDelayTimeout() {
    this.longPressDelayTimeout && clearTimeout(this.longPressDelayTimeout);
    this.longPressDelayTimeout = null;
  },
  _isHighlight: function _isHighlight(state) {
    return (
      state === States.RESPONDER_ACTIVE_PRESS_IN || state === States.RESPONDER_ACTIVE_LONG_PRESS_IN
    );
  },
  _savePressInLocation: function _savePressInLocation(e) {
    const touch = _TouchEventUtils2.default.extractSingleTouch(e.nativeEvent);
    const pageX = touch && touch.pageX;
    const pageY = touch && touch.pageY;
    const locationX = touch && touch.locationX;
    const locationY = touch && touch.locationY;
    this.pressInLocation = {
      pageX: pageX,
      pageY: pageY,
      locationX: locationX,
      locationY: locationY
    };
  },
  _getDistanceBetweenPoints: function _getDistanceBetweenPoints(aX, aY, bX, bY) {
    const deltaX = aX - bX;
    const deltaY = aY - bY;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  },
  _performSideEffectsForTransition: function _performSideEffectsForTransition(
    curState,
    nextState,
    signal,
    e
  ) {
    const curIsHighlight = this._isHighlight(curState);
    const newIsHighlight = this._isHighlight(nextState);
    const isFinalSignal =
      signal === Signals.RESPONDER_TERMINATED || signal === Signals.RESPONDER_RELEASE;
    if (isFinalSignal) {
      this._cancelLongPressDelayTimeout();
    }
    if (!IsActive[curState] && IsActive[nextState]) {
      this._remeasureMetricsOnActivation();
    }
    if (IsPressingIn[curState] && signal === Signals.LONG_PRESS_DETECTED) {
      this.touchableHandleLongPress && this.touchableHandleLongPress(e);
    }
    if (newIsHighlight && !curIsHighlight) {
      this._startHighlight(e);
    } else if (!newIsHighlight && curIsHighlight) {
      this._endHighlight(e);
    }
    if (IsPressingIn[curState] && signal === Signals.RESPONDER_RELEASE) {
      const hasLongPressHandler = !!this.props.onLongPress;
      const pressIsLongButStillCallOnPress =
        IsLongPressingIn[curState] &&
        (!hasLongPressHandler || !this.touchableLongPressCancelsPress());
      const shouldInvokePress = !IsLongPressingIn[curState] || pressIsLongButStillCallOnPress;
      if (shouldInvokePress && this.touchableHandlePress) {
        if (!newIsHighlight && !curIsHighlight) {
          this._startHighlight(e);
          this._endHighlight(e);
        }
        this.touchableHandlePress(e);
      }
    }
    this.touchableDelayTimeout && clearTimeout(this.touchableDelayTimeout);
    this.touchableDelayTimeout = null;
  },
  _startHighlight: function _startHighlight(e) {
    this._savePressInLocation(e);
    this.touchableHandleActivePressIn && this.touchableHandleActivePressIn(e);
  },
  _endHighlight: function _endHighlight(e) {
    const _this2 = this;
    if (this.touchableHandleActivePressOut) {
      if (this.touchableGetPressOutDelayMS && this.touchableGetPressOutDelayMS()) {
        this.pressOutDelayTimeout = setTimeout(function() {
          _this2.touchableHandleActivePressOut(e);
        }, this.touchableGetPressOutDelayMS());
      } else {
        this.touchableHandleActivePressOut(e);
      }
    }
  },
  touchableHandleKeyEvent: function touchableHandleKeyEvent(e) {
    const ENTER = 13;
    const SPACE = 32;
    let type = e.type,
      which = e.which;
    if (which === ENTER || which === SPACE) {
      if (type === 'keydown') {
        if (!this._isTouchableKeyboardActive) {
          if (
            !this.state.touchable.touchState ||
            this.state.touchable.touchState === States.NOT_RESPONDER
          ) {
            this.touchableHandleResponderGrant(e);
            this._isTouchableKeyboardActive = true;
          }
        }
      } else if (type === 'keyup') {
        if (this._isTouchableKeyboardActive) {
          if (
            this.state.touchable.touchState &&
            this.state.touchable.touchState !== States.NOT_RESPONDER
          ) {
            this.touchableHandleResponderRelease(e);
            this._isTouchableKeyboardActive = false;
          }
        }
      }
      e.stopPropagation();
      if (
        !(which === ENTER && _AccessibilityUtil2.default.propsToAriaRole(this.props) === 'link')
      ) {
        e.preventDefault();
      }
    }
  }
};
var Touchable = {
  Mixin: TouchableMixin,
  TOUCH_TARGET_DEBUG: false,
  renderDebugView: function renderDebugView(_ref) {
    let color = _ref.color,
      hitSlop = _ref.hitSlop;
    if (process.env.NODE_ENV !== 'production') {
      if (!Touchable.TOUCH_TARGET_DEBUG) {
        return null;
      }
      const debugHitSlopStyle = {};
      hitSlop = hitSlop || { top: 0, bottom: 0, left: 0, right: 0 };
      for (const key in hitSlop) {
        debugHitSlopStyle[key] = -hitSlop[key];
      }
      const hexColor =
        '#' + ('00000000' + (0, _normalizeCssColor2.default)(color).toString(16)).substr(-8);
      return _react2.default.createElement(_View2.default, {
        pointerEvents: 'none',
        style: _extends(
          {
            position: 'absolute',
            borderColor: hexColor.slice(0, -2) + '55',
            borderWidth: 1,
            borderStyle: 'dashed',
            backgroundColor: hexColor.slice(0, -2) + '0F'
          },
          debugHitSlopStyle
        ),
        __source: { fileName: _jsxFileName, lineNumber: 850 }
      });
    }
  }
};
exports.default = Touchable;
