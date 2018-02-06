Object.defineProperty(exports, '__esModule', { value: true });
const _ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
const modality = function modality() {
  if (!_ExecutionEnvironment.canUseDOM) {
    return;
  }
  let styleElement = void 0;
  let hadKeyboardEvent = false;
  let keyboardThrottleTimeoutID = 0;
  const proto = window.Element.prototype;
  const matches =
    proto.matches ||
    proto.mozMatchesSelector ||
    proto.msMatchesSelector ||
    proto.webkitMatchesSelector;
  const keyboardModalityWhitelist = [
    'input:not([type])',
    'input[type=text]',
    'input[type=search]',
    'input[type=url]',
    'input[type=tel]',
    'input[type=email]',
    'input[type=password]',
    'input[type=number]',
    'input[type=date]',
    'input[type=month]',
    'input[type=week]',
    'input[type=time]',
    'input[type=datetime]',
    'input[type=datetime-local]',
    'textarea',
    '[role=textbox]'
  ].join(',');
  const initialize = function initialize() {
    const id = 'react-native-modality';
    styleElement = document.getElementById(id);
    if (!styleElement) {
      const style = '<style id="' + id + '">:focus { outline: none; }</style>';
      document.head.insertAdjacentHTML('afterbegin', style);
      styleElement = document.getElementById(id);
    }
  };
  const focusTriggersKeyboardModality = function focusTriggersKeyboardModality(el) {
    if (matches) {
      return matches.call(el, keyboardModalityWhitelist) && matches.call(el, ':not([readonly])');
    } else {
      return false;
    }
  };
  const addFocusRing = function addFocusRing() {
    if (styleElement) {
      styleElement.disabled = true;
    }
  };
  const removeFocusRing = function removeFocusRing() {
    if (styleElement) {
      styleElement.disabled = false;
    }
  };
  const handleKeyDown = function handleKeyDown(e) {
    hadKeyboardEvent = true;
    if (keyboardThrottleTimeoutID !== 0) {
      clearTimeout(keyboardThrottleTimeoutID);
    }
    keyboardThrottleTimeoutID = setTimeout(function() {
      hadKeyboardEvent = false;
      keyboardThrottleTimeoutID = 0;
    }, 100);
  };
  const handleFocus = function handleFocus(e) {
    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusRing();
    }
  };
  const handleBlur = function handleBlur() {
    if (!hadKeyboardEvent) {
      removeFocusRing();
    }
  };
  if (document.body && document.body.addEventListener) {
    initialize();
    document.body.addEventListener('keydown', handleKeyDown, true);
    document.body.addEventListener('focus', handleFocus, true);
    document.body.addEventListener('blur', handleBlur, true);
  }
};
exports.default = modality;
