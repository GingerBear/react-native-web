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
const _ColorPropType = require('../../propTypes/ColorPropType');
const _ColorPropType2 = _interopRequireDefault(_ColorPropType);
const _ViewStylePropTypes = require('../View/ViewStylePropTypes');
const _ViewStylePropTypes2 = _interopRequireDefault(_ViewStylePropTypes);
const _propTypes = require('prop-types');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const numberOrString = (0, _propTypes.oneOfType)([_propTypes.number, _propTypes.string]);
const ShadowOffsetPropType = (0, _propTypes.shape)({
  width: _propTypes.number,
  height: _propTypes.number
});
const TextAlignPropType = (0, _propTypes.oneOf)([
  'center',
  'inherit',
  'justify',
  'justify-all',
  'left',
  'right'
]);
const WritingDirectionPropType = (0, _propTypes.oneOf)(['auto', 'ltr', 'rtl']);
const TextStylePropTypes = _extends({}, _ViewStylePropTypes2.default, {
  color: _ColorPropType2.default,
  fontFamily: _propTypes.string,
  fontFeatureSettings: _propTypes.string,
  fontSize: numberOrString,
  fontStyle: _propTypes.string,
  fontWeight: _propTypes.string,
  letterSpacing: numberOrString,
  lineHeight: numberOrString,
  textAlign: TextAlignPropType,
  textAlignVertical: (0, _propTypes.oneOf)(['auto', 'bottom', 'center', 'top']),
  textDecorationColor: _ColorPropType2.default,
  textDecorationLine: _propTypes.string,
  textDecorationStyle: _propTypes.string,
  textShadowColor: _ColorPropType2.default,
  textShadowOffset: ShadowOffsetPropType,
  textShadowRadius: _propTypes.number,
  writingDirection: WritingDirectionPropType,
  textIndent: numberOrString,
  textOverflow: _propTypes.string,
  textRendering: (0, _propTypes.oneOf)([
    'auto',
    'geometricPrecision',
    'optimizeLegibility',
    'optimizeSpeed'
  ]),
  textTransform: (0, _propTypes.oneOf)(['capitalize', 'lowercase', 'none', 'uppercase']),
  unicodeBidi: (0, _propTypes.oneOf)([
    'normal',
    'bidi-override',
    'embed',
    'isolate',
    'isolate-override',
    'plaintext'
  ]),
  whiteSpace: _propTypes.string,
  wordWrap: _propTypes.string,
  MozOsxFontSmoothing: _propTypes.string,
  WebkitFontSmoothing: _propTypes.string
});
exports.default = TextStylePropTypes;
