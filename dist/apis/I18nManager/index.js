Object.defineProperty(exports, '__esModule', { value: true });
const _ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
const _ExecutionEnvironment2 = _interopRequireDefault(_ExecutionEnvironment);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
let isPreferredLanguageRTL = false;
let isRTLAllowed = true;
let isRTLForced = false;
const isRTL = function isRTL() {
  if (isRTLForced) {
    return true;
  }
  return isRTLAllowed && isPreferredLanguageRTL;
};
const onChange = function onChange() {
  if (_ExecutionEnvironment2.default.canUseDOM) {
    if (document.documentElement && document.documentElement.setAttribute) {
      document.documentElement.setAttribute('dir', isRTL() ? 'rtl' : 'ltr');
    }
  }
};
const I18nManager = {
  allowRTL: function allowRTL(bool) {
    isRTLAllowed = bool;
    onChange();
  },
  forceRTL: function forceRTL(bool) {
    isRTLForced = bool;
    onChange();
  },
  setPreferredLanguageRTL: function setPreferredLanguageRTL(bool) {
    isPreferredLanguageRTL = bool;
    onChange();
  },
  get isRTL() {
    return isRTL();
  }
};
exports.default = I18nManager;
