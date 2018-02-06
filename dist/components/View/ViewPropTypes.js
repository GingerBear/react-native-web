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
const _EdgeInsetsPropType = require('../../propTypes/EdgeInsetsPropType');
const _EdgeInsetsPropType2 = _interopRequireDefault(_EdgeInsetsPropType);
const _StyleSheetPropType = require('../../propTypes/StyleSheetPropType');
const _StyleSheetPropType2 = _interopRequireDefault(_StyleSheetPropType);
const _ViewStylePropTypes = require('./ViewStylePropTypes');
const _ViewStylePropTypes2 = _interopRequireDefault(_ViewStylePropTypes);
const _propTypes = require('prop-types');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const ViewPropTypes = _extends({}, _BaseComponentPropTypes2.default, {
  children: _propTypes.any,
  collapsable: _propTypes.bool,
  hitSlop: _EdgeInsetsPropType2.default,
  onClick: _propTypes.func,
  onClickCapture: _propTypes.func,
  onLayout: _propTypes.func,
  onMoveShouldSetResponder: _propTypes.func,
  onMoveShouldSetResponderCapture: _propTypes.func,
  onResponderGrant: _propTypes.func,
  onResponderMove: _propTypes.func,
  onResponderReject: _propTypes.func,
  onResponderRelease: _propTypes.func,
  onResponderTerminate: _propTypes.func,
  onResponderTerminationRequest: _propTypes.func,
  onStartShouldSetResponder: _propTypes.func,
  onStartShouldSetResponderCapture: _propTypes.func,
  onTouchCancel: _propTypes.func,
  onTouchCancelCapture: _propTypes.func,
  onTouchEnd: _propTypes.func,
  onTouchEndCapture: _propTypes.func,
  onTouchMove: _propTypes.func,
  onTouchMoveCapture: _propTypes.func,
  onTouchStart: _propTypes.func,
  onTouchStartCapture: _propTypes.func,
  pointerEvents: (0, _propTypes.oneOf)(['auto', 'box-none', 'box-only', 'none']),
  style: (0, _StyleSheetPropType2.default)(_ViewStylePropTypes2.default)
});
exports.default = ViewPropTypes;
