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
const _createReactDOMStyle = require('./createReactDOMStyle');
const _createReactDOMStyle2 = _interopRequireDefault(_createReactDOMStyle);
const _flattenArray = require('../../modules/flattenArray');
const _flattenArray2 = _interopRequireDefault(_flattenArray);
const _flattenStyle = require('./flattenStyle');
const _flattenStyle2 = _interopRequireDefault(_flattenStyle);
const _I18nManager = require('../I18nManager');
const _I18nManager2 = _interopRequireDefault(_I18nManager);
const _i18nStyle = require('./i18nStyle');
const _i18nStyle2 = _interopRequireDefault(_i18nStyle);
const _prefixStyles = require('../../modules/prefixStyles');
const _ReactNativePropRegistry = require('../../modules/ReactNativePropRegistry');
const _ReactNativePropRegistry2 = _interopRequireDefault(_ReactNativePropRegistry);
const _StyleManager = require('./StyleManager');
const _StyleManager2 = _interopRequireDefault(_StyleManager);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
const emptyObject = {};
const createCacheKey = function createCacheKey(id) {
  const prefix = 'rn';
  return prefix + '-' + id;
};
const classListToString = function classListToString(list) {
  return list.join(' ').trim();
};
const StyleRegistry = (function() {
  function StyleRegistry() {
    _classCallCheck(this, StyleRegistry);
    this.cache = { ltr: {}, rtl: {} };
    this.styleManager = new _StyleManager2.default();
  }
  _createClass(StyleRegistry, [
    {
      key: 'getStyleSheets',
      value: function getStyleSheets() {
        return this.styleManager.getStyleSheets();
      }
    },
    {
      key: 'register',
      value: function register(flatStyle) {
        const id = _ReactNativePropRegistry2.default.register(flatStyle);
        this._registerById(id);
        return id;
      }
    },
    {
      key: '_registerById',
      value: function _registerById(id) {
        const _this = this;
        const dir = _I18nManager2.default.isRTL ? 'rtl' : 'ltr';
        if (!this.cache[dir][id]) {
          const style = (0, _flattenStyle2.default)(id);
          const domStyle = (0, _createReactDOMStyle2.default)((0, _i18nStyle2.default)(style));
          Object.keys(domStyle).forEach(function(styleProp) {
            const value = domStyle[styleProp];
            if (value != null) {
              _this.styleManager.setDeclaration(styleProp, value);
            }
          });
          this.cache[dir][id] = true;
        }
      }
    },
    {
      key: 'resolve',
      value: function resolve(reactNativeStyle) {
        const options =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyObject;
        if (!reactNativeStyle) {
          return emptyObject;
        }
        if (typeof reactNativeStyle === 'number') {
          this._registerById(reactNativeStyle);
          const _key = createCacheKey(reactNativeStyle);
          return this._resolveStyleIfNeeded(reactNativeStyle, options, _key);
        }
        if (!Array.isArray(reactNativeStyle)) {
          return this._resolveStyle(reactNativeStyle, options);
        }
        const flatArray = (0, _flattenArray2.default)(reactNativeStyle);
        let isArrayOfNumbers = true;
        for (let i = 0; i < flatArray.length; i++) {
          const id = flatArray[i];
          if (typeof id !== 'number') {
            isArrayOfNumbers = false;
          } else {
            this._registerById(id);
          }
        }
        const key = isArrayOfNumbers ? createCacheKey(flatArray.join('-')) : null;
        return this._resolveStyleIfNeeded(flatArray, options, key);
      }
    },
    {
      key: 'resolveStateful',
      value: function resolveStateful(rnStyleNext, domStyleProps, options) {
        const _this2 = this;
        let rdomClassList = domStyleProps.classList,
          rdomStyle = domStyleProps.style;
        let _rdomClassList$reduce = rdomClassList.reduce(
            function(styleProps, className) {
              let _styleManager$getDecl = _this2.styleManager.getDeclaration(className),
                prop = _styleManager$getDecl.prop,
                value = _styleManager$getDecl.value;
              if (prop) {
                styleProps.style[prop] = value;
              } else {
                styleProps.classList.push(className);
              }
              return styleProps;
            },
            { classList: [], style: {} }
          ),
          rnClassList = _rdomClassList$reduce.classList,
          rnStyle = _rdomClassList$reduce.style;
        let _resolve = this.resolve([rnStyle, rnStyleNext], options),
          rdomClassListNext = _resolve.classList,
          rdomStyleNext = _resolve.style;
        const style = _extends({}, rdomStyle);
        rdomClassListNext.forEach(function(className) {
          let _styleManager$getDecl2 = _this2.styleManager.getDeclaration(className),
            prop = _styleManager$getDecl2.prop;
          if (style[prop]) {
            style[prop] = '';
          }
        });
        _extends(style, rdomStyleNext);
        const className = classListToString(rdomClassListNext.concat(rnClassList));
        return { className: className, style: style };
      }
    },
    {
      key: '_resolveStyle',
      value: function _resolveStyle(reactNativeStyle, options) {
        const _this3 = this;
        const flatStyle = (0, _flattenStyle2.default)(reactNativeStyle);
        const domStyle = (0, _createReactDOMStyle2.default)(
          options.i18n === false ? flatStyle : (0, _i18nStyle2.default)(flatStyle)
        );
        const props = Object.keys(domStyle).reduce(
          function(props, styleProp) {
            const value = domStyle[styleProp];
            if (value != null) {
              const className = _this3.styleManager.getClassName(styleProp, value);
              if (className) {
                props.classList.push(className);
              } else {
                if (!props.style) {
                  props.style = {};
                }
                props.style[styleProp] = value;
              }
            }
            return props;
          },
          { classList: [] }
        );
        props.className = classListToString(props.classList);
        if (props.style) {
          props.style = (0, _prefixStyles.prefixInlineStyles)(props.style);
        }
        return props;
      }
    },
    {
      key: '_resolveStyleIfNeeded',
      value: function _resolveStyleIfNeeded(style, options, key) {
        const dir = _I18nManager2.default.isRTL ? 'rtl' : 'ltr';
        if (key) {
          if (!this.cache[dir][key]) {
            this.cache[dir][key] = this._resolveStyle(style, options);
          }
          return this.cache[dir][key];
        }
        return this._resolveStyle(style, options);
      }
    }
  ]);
  return StyleRegistry;
})();
exports.default = StyleRegistry;
