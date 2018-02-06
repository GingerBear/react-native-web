Object.defineProperty(exports, '__esModule', { value: true });
const _normalizeValue = require('./normalizeValue');
const _normalizeValue2 = _interopRequireDefault(_normalizeValue);
const _processColor = require('../../modules/processColor');
const _processColor2 = _interopRequireDefault(_processColor);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const emptyObject = {};
const styleShortFormProperties = {
  borderColor: ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'],
  borderRadius: [
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderBottomRightRadius',
    'borderBottomLeftRadius'
  ],
  borderStyle: ['borderTopStyle', 'borderRightStyle', 'borderBottomStyle', 'borderLeftStyle'],
  borderWidth: ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'],
  margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
  marginHorizontal: ['marginRight', 'marginLeft'],
  marginVertical: ['marginTop', 'marginBottom'],
  overflow: ['overflowX', 'overflowY'],
  padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
  paddingHorizontal: ['paddingRight', 'paddingLeft'],
  paddingVertical: ['paddingTop', 'paddingBottom'],
  textDecorationLine: ['textDecoration'],
  writingDirection: ['direction']
};
const colorProps = {
  backgroundColor: true,
  borderColor: true,
  borderTopColor: true,
  borderRightColor: true,
  borderBottomColor: true,
  borderLeftColor: true,
  color: true
};
const systemFontStack =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif';
const alphaSortProps = function alphaSortProps(propsArray) {
  return propsArray.sort(function(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
};
const defaultOffset = { height: 0, width: 0 };
const resolveShadow = function resolveShadow(resolvedStyle, style) {
  let _ref = style.shadowOffset || defaultOffset,
    height = _ref.height,
    width = _ref.width;
  const offsetX = (0, _normalizeValue2.default)(null, width);
  const offsetY = (0, _normalizeValue2.default)(null, height);
  const blurRadius = (0, _normalizeValue2.default)(null, style.shadowRadius || 0);
  const color = (0, _processColor2.default)(style.shadowColor, style.shadowOpacity);
  if (color) {
    const boxShadow = offsetX + ' ' + offsetY + ' ' + blurRadius + ' ' + color;
    resolvedStyle.boxShadow = style.boxShadow ? style.boxShadow + ', ' + boxShadow : boxShadow;
  } else if (style.boxShadow) {
    resolvedStyle.boxShadow = style.boxShadow;
  }
};
const resolveTextShadow = function resolveTextShadow(resolvedStyle, style) {
  let _ref2 = style.textShadowOffset || defaultOffset,
    height = _ref2.height,
    width = _ref2.width;
  const offsetX = (0, _normalizeValue2.default)(null, width);
  const offsetY = (0, _normalizeValue2.default)(null, height);
  const blurRadius = (0, _normalizeValue2.default)(null, style.textShadowRadius || 0);
  const color = (0, _processColor2.default)(style.textShadowColor);
  if (color) {
    resolvedStyle.textShadow = offsetX + ' ' + offsetY + ' ' + blurRadius + ' ' + color;
  }
};
const mapTransform = function mapTransform(transform) {
  const type = Object.keys(transform)[0];
  const value = (0, _normalizeValue2.default)(type, transform[type]);
  return type + '(' + value + ')';
};
const convertTransformMatrix = function convertTransformMatrix(transformMatrix) {
  const matrix = transformMatrix.join(',');
  return 'matrix3d(' + matrix + ')';
};
const resolveTransform = function resolveTransform(resolvedStyle, style) {
  let transform = style.transform;
  if (Array.isArray(style.transform)) {
    transform = style.transform.map(mapTransform).join(' ');
  } else if (style.transformMatrix) {
    transform = convertTransformMatrix(style.transformMatrix);
  }
  resolvedStyle.transform = transform;
};
const createReducer = function createReducer(style, styleProps) {
  let hasResolvedShadow = false;
  let hasResolvedTextShadow = false;
  return function(resolvedStyle, prop) {
    const value = (0, _normalizeValue2.default)(prop, style[prop]);
    if (value == null) {
      return resolvedStyle;
    }
    switch (prop) {
      case 'aspectRatio':
      case 'elevation':
      case 'overlayColor':
      case 'resizeMode':
      case 'tintColor': {
        break;
      }
      case 'display': {
        resolvedStyle.display = value;
        if (style.display === 'flex' && style.flex == null) {
          if (style.flexShrink == null) {
            resolvedStyle.flexShrink = '0 !important';
          }
          if (style.flexBasis == null) {
            resolvedStyle.flexBasis = 'auto !important';
          }
        }
        break;
      }
      case 'flex': {
        if (value > 0) {
          resolvedStyle.flex = value;
          resolvedStyle.flexGrow = value + ' !important';
          resolvedStyle.flexShrink = '1 !important';
        } else if (value === 0) {
          resolvedStyle.flexGrow = '0 !important';
          resolvedStyle.flexShrink = '0 !important';
          resolvedStyle.flexBasis = 'auto !important';
        } else if (value === -1) {
          resolvedStyle.flexGrow = '0 !important';
          resolvedStyle.flexShrink = '1 !important';
          resolvedStyle.flexBasis = 'auto !important';
        }
        break;
      }
      case 'flexGrow':
      case 'flexShrink':
      case 'flexBasis': {
        if (value != null) {
          const hasImportant = ('' + value).indexOf('!important') > -1;
          resolvedStyle[prop] = hasImportant ? value : value + ' !important';
        }
        break;
      }
      case 'fontFamily': {
        const isSystem = value === 'System';
        resolvedStyle.fontFamily = isSystem ? systemFontStack : value;
        break;
      }
      case 'shadowColor':
      case 'shadowOffset':
      case 'shadowOpacity':
      case 'shadowRadius': {
        if (!hasResolvedShadow) {
          resolveShadow(resolvedStyle, style);
        }
        hasResolvedShadow = true;
        break;
      }
      case 'textAlignVertical': {
        resolvedStyle.verticalAlign = value === 'center' ? 'middle' : value;
        break;
      }
      case 'textShadowColor':
      case 'textShadowOffset':
      case 'textShadowRadius': {
        if (!hasResolvedTextShadow) {
          resolveTextShadow(resolvedStyle, style);
        }
        hasResolvedTextShadow = true;
        break;
      }
      case 'transform':
      case 'transformMatrix': {
        resolveTransform(resolvedStyle, style);
        break;
      }
      default: {
        let finalValue = value;
        if (colorProps[prop]) {
          finalValue = (0, _processColor2.default)(value);
        }
        const longFormProperties = styleShortFormProperties[prop];
        if (longFormProperties) {
          longFormProperties.forEach(function(longForm, i) {
            if (styleProps.indexOf(longForm) === -1) {
              resolvedStyle[longForm] = finalValue;
            }
          });
        } else {
          resolvedStyle[prop] = finalValue;
        }
      }
    }
    return resolvedStyle;
  };
};
const createReactDOMStyle = function createReactDOMStyle(style) {
  if (!style) {
    return emptyObject;
  }
  const styleProps = Object.keys(style);
  const sortedStyleProps = alphaSortProps(styleProps);
  const reducer = createReducer(style, styleProps);
  const resolvedStyle = sortedStyleProps.reduce(reducer, {});
  return resolvedStyle;
};
exports.default = createReactDOMStyle;
