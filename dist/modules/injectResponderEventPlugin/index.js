const _EventPluginHub = require('react-dom/lib/EventPluginHub');
const _EventPluginHub2 = _interopRequireDefault(_EventPluginHub);
const _normalizeNativeEvent = require('../normalizeNativeEvent');
const _normalizeNativeEvent2 = _interopRequireDefault(_normalizeNativeEvent);
const _ResponderEventPlugin = require('react-dom/lib/ResponderEventPlugin');
const _ResponderEventPlugin2 = _interopRequireDefault(_ResponderEventPlugin);
const _ResponderTouchHistoryStore = require('react-dom/lib/ResponderTouchHistoryStore');
const _ResponderTouchHistoryStore2 = _interopRequireDefault(_ResponderTouchHistoryStore);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const topMouseDown = 'topMouseDown';
const topMouseMove = 'topMouseMove';
const topMouseUp = 'topMouseUp';
const topScroll = 'topScroll';
const topSelectionChange = 'topSelectionChange';
const topTouchCancel = 'topTouchCancel';
const topTouchEnd = 'topTouchEnd';
const topTouchMove = 'topTouchMove';
const topTouchStart = 'topTouchStart';
const endDependencies = [topTouchCancel, topTouchEnd, topMouseUp];
const moveDependencies = [topTouchMove, topMouseMove];
const startDependencies = [topTouchStart, topMouseDown];
_ResponderEventPlugin2.default.eventTypes.responderMove.dependencies = moveDependencies;
_ResponderEventPlugin2.default.eventTypes.responderEnd.dependencies = endDependencies;
_ResponderEventPlugin2.default.eventTypes.responderStart.dependencies = startDependencies;
_ResponderEventPlugin2.default.eventTypes.responderRelease.dependencies = endDependencies;
_ResponderEventPlugin2.default.eventTypes.responderTerminationRequest.dependencies = [];
_ResponderEventPlugin2.default.eventTypes.responderGrant.dependencies = [];
_ResponderEventPlugin2.default.eventTypes.responderReject.dependencies = [];
_ResponderEventPlugin2.default.eventTypes.responderTerminate.dependencies = [];
_ResponderEventPlugin2.default.eventTypes.moveShouldSetResponder.dependencies = moveDependencies;
_ResponderEventPlugin2.default.eventTypes.selectionChangeShouldSetResponder.dependencies = [
  topSelectionChange
];
_ResponderEventPlugin2.default.eventTypes.scrollShouldSetResponder.dependencies = [topScroll];
_ResponderEventPlugin2.default.eventTypes.startShouldSetResponder.dependencies = startDependencies;
const originalRecordTouchTrack = _ResponderTouchHistoryStore2.default.recordTouchTrack;
_ResponderTouchHistoryStore2.default.recordTouchTrack = function(topLevelType, nativeEvent) {
  if (
    topLevelType === topMouseMove &&
    !_ResponderTouchHistoryStore2.default.touchHistory.touchBank.length
  ) {
    return;
  }
  const normalizedEvent = (0, _normalizeNativeEvent2.default)(nativeEvent);
  originalRecordTouchTrack.call(
    _ResponderTouchHistoryStore2.default,
    topLevelType,
    normalizedEvent
  );
};
_EventPluginHub2.default.injection.injectEventPluginsByName({
  ResponderEventPlugin: _ResponderEventPlugin2.default
});
