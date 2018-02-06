Object.defineProperty(exports, '__esModule', { value: true });
const _invariant = require('fbjs/lib/invariant');
const _invariant2 = _interopRequireDefault(_invariant);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const InteractionManager = {
  Events: { interactionStart: 'interactionStart', interactionComplete: 'interactionComplete' },
  runAfterInteractions: function runAfterInteractions(callback) {
    (0, _invariant2.default)(
      typeof callback === 'function',
      'Must specify a function to schedule.'
    );
    callback();
  },
  createInteractionHandle: function createInteractionHandle() {
    return 1;
  },
  clearInteractionHandle: function clearInteractionHandle(handle) {
    (0, _invariant2.default)(!!handle, 'Must provide a handle to clear.');
  },
  addListener: function addListener() {}
};
exports.default = InteractionManager;
