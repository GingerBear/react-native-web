Object.defineProperty(exports, '__esModule', { value: true });
const _TouchHistoryMath = require('../../vendor/TouchHistoryMath');
const _TouchHistoryMath2 = _interopRequireDefault(_TouchHistoryMath);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const currentCentroidXOfTouchesChangedAfter =
  _TouchHistoryMath2.default.currentCentroidXOfTouchesChangedAfter;
const currentCentroidYOfTouchesChangedAfter =
  _TouchHistoryMath2.default.currentCentroidYOfTouchesChangedAfter;
const previousCentroidXOfTouchesChangedAfter =
  _TouchHistoryMath2.default.previousCentroidXOfTouchesChangedAfter;
const previousCentroidYOfTouchesChangedAfter =
  _TouchHistoryMath2.default.previousCentroidYOfTouchesChangedAfter;
const currentCentroidX = _TouchHistoryMath2.default.currentCentroidX;
const currentCentroidY = _TouchHistoryMath2.default.currentCentroidY;
var PanResponder = {
  _initializeGestureState: function _initializeGestureState(gestureState) {
    gestureState.moveX = 0;
    gestureState.moveY = 0;
    gestureState.x0 = 0;
    gestureState.y0 = 0;
    gestureState.dx = 0;
    gestureState.dy = 0;
    gestureState.vx = 0;
    gestureState.vy = 0;
    gestureState.numberActiveTouches = 0;
    gestureState._accountsForMovesUpTo = 0;
  },
  _updateGestureStateOnMove: function _updateGestureStateOnMove(gestureState, touchHistory) {
    gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
    gestureState.moveX = currentCentroidXOfTouchesChangedAfter(
      touchHistory,
      gestureState._accountsForMovesUpTo
    );
    gestureState.moveY = currentCentroidYOfTouchesChangedAfter(
      touchHistory,
      gestureState._accountsForMovesUpTo
    );
    const movedAfter = gestureState._accountsForMovesUpTo;
    const prevX = previousCentroidXOfTouchesChangedAfter(touchHistory, movedAfter);
    const x = currentCentroidXOfTouchesChangedAfter(touchHistory, movedAfter);
    const prevY = previousCentroidYOfTouchesChangedAfter(touchHistory, movedAfter);
    const y = currentCentroidYOfTouchesChangedAfter(touchHistory, movedAfter);
    const nextDX = gestureState.dx + (x - prevX);
    const nextDY = gestureState.dy + (y - prevY);
    const dt = touchHistory.mostRecentTimeStamp - gestureState._accountsForMovesUpTo;
    gestureState.vx = (nextDX - gestureState.dx) / dt;
    gestureState.vy = (nextDY - gestureState.dy) / dt;
    gestureState.dx = nextDX;
    gestureState.dy = nextDY;
    gestureState._accountsForMovesUpTo = touchHistory.mostRecentTimeStamp;
  },
  create: function create(config) {
    const gestureState = { stateID: Math.random() };
    PanResponder._initializeGestureState(gestureState);
    const panHandlers = {
      onStartShouldSetResponder: function onStartShouldSetResponder(e) {
        return config.onStartShouldSetPanResponder === undefined
          ? false
          : config.onStartShouldSetPanResponder(e, gestureState);
      },
      onMoveShouldSetResponder: function onMoveShouldSetResponder(e) {
        return config.onMoveShouldSetPanResponder === undefined
          ? false
          : config.onMoveShouldSetPanResponder(e, gestureState);
      },
      onStartShouldSetResponderCapture: function onStartShouldSetResponderCapture(e) {
        if (e.nativeEvent.touches) {
          if (e.nativeEvent.touches.length === 1) {
            PanResponder._initializeGestureState(gestureState);
          }
        } else if (
          e.nativeEvent.originalEvent &&
          e.nativeEvent.originalEvent.type === 'mousedown'
        ) {
          PanResponder._initializeGestureState(gestureState);
        }
        gestureState.numberActiveTouches = e.touchHistory.numberActiveTouches;
        return config.onStartShouldSetPanResponderCapture !== undefined
          ? config.onStartShouldSetPanResponderCapture(e, gestureState)
          : false;
      },
      onMoveShouldSetResponderCapture: function onMoveShouldSetResponderCapture(e) {
        const touchHistory = e.touchHistory;
        if (gestureState._accountsForMovesUpTo === touchHistory.mostRecentTimeStamp) {
          return false;
        }
        PanResponder._updateGestureStateOnMove(gestureState, touchHistory);
        return config.onMoveShouldSetPanResponderCapture
          ? config.onMoveShouldSetPanResponderCapture(e, gestureState)
          : false;
      },
      onResponderGrant: function onResponderGrant(e) {
        gestureState.x0 = currentCentroidX(e.touchHistory);
        gestureState.y0 = currentCentroidY(e.touchHistory);
        gestureState.dx = 0;
        gestureState.dy = 0;
        config.onPanResponderGrant && config.onPanResponderGrant(e, gestureState);
        return config.onShouldBlockNativeResponder === undefined
          ? true
          : config.onShouldBlockNativeResponder();
      },
      onResponderReject: function onResponderReject(e) {
        config.onPanResponderReject && config.onPanResponderReject(e, gestureState);
      },
      onResponderRelease: function onResponderRelease(e) {
        config.onPanResponderRelease && config.onPanResponderRelease(e, gestureState);
        PanResponder._initializeGestureState(gestureState);
      },
      onResponderStart: function onResponderStart(e) {
        const touchHistory = e.touchHistory;
        gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
        config.onPanResponderStart && config.onPanResponderStart(e, gestureState);
      },
      onResponderMove: function onResponderMove(e) {
        const touchHistory = e.touchHistory;
        if (gestureState._accountsForMovesUpTo === touchHistory.mostRecentTimeStamp) {
          return;
        }
        PanResponder._updateGestureStateOnMove(gestureState, touchHistory);
        config.onPanResponderMove && config.onPanResponderMove(e, gestureState);
      },
      onResponderEnd: function onResponderEnd(e) {
        const touchHistory = e.touchHistory;
        gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
        config.onPanResponderEnd && config.onPanResponderEnd(e, gestureState);
      },
      onResponderTerminate: function onResponderTerminate(e) {
        config.onPanResponderTerminate && config.onPanResponderTerminate(e, gestureState);
        PanResponder._initializeGestureState(gestureState);
      },
      onResponderTerminationRequest: function onResponderTerminationRequest(e) {
        return config.onPanResponderTerminationRequest === undefined
          ? true
          : config.onPanResponderTerminationRequest(e, gestureState);
      }
    };
    return { panHandlers: panHandlers };
  }
};
exports.default = PanResponder;
