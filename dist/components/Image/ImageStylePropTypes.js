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
const _BorderPropTypes = require('../../propTypes/BorderPropTypes');
const _BorderPropTypes2 = _interopRequireDefault(_BorderPropTypes);
const _ColorPropType = require('../../propTypes/ColorPropType');
const _ColorPropType2 = _interopRequireDefault(_ColorPropType);
const _ImageResizeMode = require('./ImageResizeMode');
const _ImageResizeMode2 = _interopRequireDefault(_ImageResizeMode);
const _LayoutPropTypes = require('../../propTypes/LayoutPropTypes');
const _LayoutPropTypes2 = _interopRequireDefault(_LayoutPropTypes);
const _ShadowPropTypes = require('../../propTypes/ShadowPropTypes');
const _ShadowPropTypes2 = _interopRequireDefault(_ShadowPropTypes);
const _TransformPropTypes = require('../../propTypes/TransformPropTypes');
const _TransformPropTypes2 = _interopRequireDefault(_TransformPropTypes);
const _propTypes = require('prop-types');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const ImageStylePropTypes = _extends(
  {},
  _BorderPropTypes2.default,
  _LayoutPropTypes2.default,
  _ShadowPropTypes2.default,
  _TransformPropTypes2.default,
  {
    backgroundColor: _ColorPropType2.default,
    opacity: _propTypes.number,
    resizeMode: (0, _propTypes.oneOf)(Object.keys(_ImageResizeMode2.default)),
    overlayColor: _propTypes.string,
    tintColor: _ColorPropType2.default,
    boxShadow: _propTypes.string
  }
);
exports.default = ImageStylePropTypes;
