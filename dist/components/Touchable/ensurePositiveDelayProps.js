Object.defineProperty(exports, '__esModule', { value: true });
const _invariant = require('fbjs/lib/invariant');
const _invariant2 = _interopRequireDefault(_invariant);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const ensurePositiveDelayProps = function ensurePositiveDelayProps(props) {
  (0, _invariant2.default)(
    !(props.delayPressIn < 0 || props.delayPressOut < 0 || props.delayLongPress < 0),
    'Touchable components cannot have negative delay properties'
  );
};
exports.default = ensurePositiveDelayProps;
