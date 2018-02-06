Object.defineProperty(exports, '__esModule', { value: true });
const isDisabled = function isDisabled(props) {
  return props.disabled || props['aria-disabled'];
};
exports.default = isDisabled;
