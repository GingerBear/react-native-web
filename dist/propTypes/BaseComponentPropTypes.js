Object.defineProperty(exports, '__esModule', { value: true });
const _propTypes = require('prop-types');
const BaseComponentPropTypes = {
  accessibilityLabel: _propTypes.string,
  accessibilityLiveRegion: (0, _propTypes.oneOf)(['assertive', 'none', 'polite']),
  accessibilityRole: _propTypes.string,
  accessible: _propTypes.bool,
  importantForAccessibility: (0, _propTypes.oneOf)(['auto', 'no', 'no-hide-descendants', 'yes']),
  style: (0, _propTypes.oneOfType)([_propTypes.array, _propTypes.number, _propTypes.object]),
  testID: _propTypes.string,
  accessibilityComponentType: _propTypes.string,
  accessibilityTraits: (0, _propTypes.oneOfType)([_propTypes.array, _propTypes.string])
};
exports.default = BaseComponentPropTypes;
