Object.defineProperty(exports, '__esModule', { value: true });
const isWebColor = function isWebColor(color) {
  return color === 'currentcolor' || color === 'inherit' || color.indexOf('var(') === 0;
};
const colorPropType = function colorPropType(
  isRequired,
  props,
  propName,
  componentName,
  location,
  propFullName
) {
  const normalizeColor = require('normalize-css-color');
  const color = props[propName];
  if (color === undefined || color === null) {
    if (isRequired) {
      return new Error(
        'Required ' +
          location +
          ' `' +
          (propFullName || propName) +
          '` was not specified in `' +
          componentName +
          '`.'
      );
    }
    return;
  }
  if (typeof color === 'number') {
    return;
  }
  if (typeof color === 'string' && isWebColor(color)) {
    return;
  }
  if (normalizeColor(color) === null) {
    return new Error(
      'Invalid ' +
        location +
        ' `' +
        (propFullName || propName) +
        '` supplied to `' +
        componentName +
        '`: ' +
        color +
        '\n' +
        "Valid color formats are\n  - '#f0f' (#rgb)\n  - '#f0fc' (#rgba)\n  - '#ff00ff' (#rrggbb)\n  - '#ff00ff00' (#rrggbbaa)\n  - 'rgb(255, 255, 255)'\n  - 'rgba(255, 255, 255, 1.0)'\n  - 'hsl(360, 100%, 100%)'\n  - 'hsla(360, 100%, 100%, 1.0)'\n  - 'transparent'\n  - 'red'\n  - 0xff00ff00 (0xrrggbbaa)\n"
    );
  }
};
let ColorPropType = void 0;
if (process.env.NODE_ENV !== 'production') {
  ColorPropType = colorPropType.bind(null, false);
  ColorPropType.isRequired = colorPropType.bind(null, true);
} else {
  ColorPropType = function ColorPropType() {};
}
exports.default = ColorPropType;
