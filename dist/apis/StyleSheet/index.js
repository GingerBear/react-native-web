Object.defineProperty(exports, '__esModule', { value: true });
const _flattenStyle = require('./flattenStyle');
const _flattenStyle2 = _interopRequireDefault(_flattenStyle);
const _modality = require('../../modules/modality');
const _modality2 = _interopRequireDefault(_modality);
const _registry = require('./registry');
const _registry2 = _interopRequireDefault(_registry);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
(0, _modality2.default)();
if (process.env.NODE_ENV !== 'production') {
  let _require = require('fbjs/lib/ExecutionEnvironment'),
    canUseDOM = _require.canUseDOM;
  if (canUseDOM && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = _flattenStyle2.default;
  }
}
const absoluteFillObject = { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 };
const absoluteFill = _registry2.default.register(absoluteFillObject);
const StyleSheet = {
  absoluteFill: absoluteFill,
  absoluteFillObject: absoluteFillObject,
  create: function create(styles) {
    const result = {};
    Object.keys(styles).forEach(function(key) {
      if (process.env.NODE_ENV !== 'production') {
        const StyleSheetValidation = require('./StyleSheetValidation').default;
        StyleSheetValidation.validateStyle(key, styles);
      }
      result[key] = _registry2.default.register(styles[key]);
    });
    return result;
  },
  flatten: _flattenStyle2.default,
  getStyleSheets: function getStyleSheets() {
    return _registry2.default.getStyleSheets();
  },
  hairlineWidth: 1
};
exports.default = StyleSheet;
