Object.defineProperty(exports, '__esModule', { value: true });
const _createClass = (function() {
  function defineProperties(target, props) {
    for (let i = 0; i < props.length; i++) {
      const descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();
const _ImageStylePropTypes = require('../../components/Image/ImageStylePropTypes');
const _ImageStylePropTypes2 = _interopRequireDefault(_ImageStylePropTypes);
const _TextInputStylePropTypes = require('../../components/TextInput/TextInputStylePropTypes');
const _TextInputStylePropTypes2 = _interopRequireDefault(_TextInputStylePropTypes);
const _TextStylePropTypes = require('../../components/Text/TextStylePropTypes');
const _TextStylePropTypes2 = _interopRequireDefault(_TextStylePropTypes);
const _ViewStylePropTypes = require('../../components/View/ViewStylePropTypes');
const _ViewStylePropTypes2 = _interopRequireDefault(_ViewStylePropTypes);
const _warning = require('fbjs/lib/warning');
const _warning2 = _interopRequireDefault(_warning);
const _propTypes = require('prop-types');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
const ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
const StyleSheetValidation = (function() {
  function StyleSheetValidation() {
    _classCallCheck(this, StyleSheetValidation);
  }
  _createClass(StyleSheetValidation, null, [
    {
      key: 'validateStyleProp',
      value: function validateStyleProp(prop, style, caller) {
        if (process.env.NODE_ENV !== 'production') {
          const isCustomProperty = prop.indexOf('--') === 0;
          if (isCustomProperty) return;
          if (allStylePropTypes[prop] === undefined) {
            const message1 = '"' + prop + '" is not a valid style property.';
            const message2 =
              '\nValid style props: ' +
              JSON.stringify(Object.keys(allStylePropTypes).sort(), null, '  ');
            styleError(message1, style, caller, message2);
          } else {
            const error = allStylePropTypes[prop](
              style,
              prop,
              caller,
              'prop',
              null,
              ReactPropTypesSecret
            );
            if (error) {
              styleError(error.message, style, caller);
            }
          }
        }
      }
    },
    {
      key: 'validateStyle',
      value: function validateStyle(name, styles) {
        if (process.env.NODE_ENV !== 'production') {
          for (const prop in styles[name]) {
            StyleSheetValidation.validateStyleProp(prop, styles[name], 'StyleSheet ' + name);
          }
        }
      }
    },
    {
      key: 'addValidStylePropTypes',
      value: function addValidStylePropTypes(stylePropTypes) {
        for (const key in stylePropTypes) {
          allStylePropTypes[key] = stylePropTypes[key];
        }
      }
    }
  ]);
  return StyleSheetValidation;
})();
exports.default = StyleSheetValidation;
var styleError = function styleError(message1, style, caller, message2) {
  (0, _warning2.default)(
    false,
    message1 +
      '\n' +
      (caller || '<<unknown>>') +
      ': ' +
      JSON.stringify(style, null, '  ') +
      (message2 || '')
  );
};
var allStylePropTypes = {};
StyleSheetValidation.addValidStylePropTypes(_ImageStylePropTypes2.default);
StyleSheetValidation.addValidStylePropTypes(_TextStylePropTypes2.default);
StyleSheetValidation.addValidStylePropTypes(_TextInputStylePropTypes2.default);
StyleSheetValidation.addValidStylePropTypes(_ViewStylePropTypes2.default);
StyleSheetValidation.addValidStylePropTypes({
  appearance: _propTypes.string,
  borderCollapse: _propTypes.string,
  borderSpacing: (0, _propTypes.oneOf)([_propTypes.number, _propTypes.string]),
  clear: _propTypes.string,
  cursor: _propTypes.string,
  float: (0, _propTypes.oneOf)(['left', 'none', 'right']),
  font: _propTypes.string,
  listStyle: _propTypes.string,
  pointerEvents: _propTypes.string,
  tableLayout: _propTypes.string
});
