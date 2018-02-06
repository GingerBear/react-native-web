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
const _jsxFileName = 'src/components/Image/index.js';
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
const _applyNativeMethods = require('../../modules/applyNativeMethods');
const _applyNativeMethods2 = _interopRequireDefault(_applyNativeMethods);
const _createElement = require('../../modules/createElement');
const _createElement2 = _interopRequireDefault(_createElement);
const _AssetRegistry = require('../../modules/AssetRegistry');
const _ImageLoader = require('../../modules/ImageLoader');
const _ImageLoader2 = _interopRequireDefault(_ImageLoader);
const _ImageResizeMode = require('./ImageResizeMode');
const _ImageResizeMode2 = _interopRequireDefault(_ImageResizeMode);
const _ImageStylePropTypes = require('./ImageStylePropTypes');
const _ImageStylePropTypes2 = _interopRequireDefault(_ImageStylePropTypes);
const _ImageUriCache = require('./ImageUriCache');
const _ImageUriCache2 = _interopRequireDefault(_ImageUriCache);
const _requestIdleCallback = require('../../modules/requestIdleCallback');
const _requestIdleCallback2 = _interopRequireDefault(_requestIdleCallback);
const _StyleSheet = require('../../apis/StyleSheet');
const _StyleSheet2 = _interopRequireDefault(_StyleSheet);
const _StyleSheetPropType = require('../../propTypes/StyleSheetPropType');
const _StyleSheetPropType2 = _interopRequireDefault(_StyleSheetPropType);
const _View = require('../View');
const _View2 = _interopRequireDefault(_View);
const _ViewPropTypes = require('../View/ViewPropTypes');
const _ViewPropTypes2 = _interopRequireDefault(_ViewPropTypes);
const _propTypes = require('prop-types');
const _react = require('react');
const _react2 = _interopRequireDefault(_react);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _objectWithoutProperties(obj, keys) {
  const target = {};
  for (const i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' + typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, enumerable: false, writable: true, configurable: true }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}
function _toArray(arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
}
const emptyObject = {};
const STATUS_ERRORED = 'ERRORED';
const STATUS_LOADED = 'LOADED';
const STATUS_LOADING = 'LOADING';
const STATUS_PENDING = 'PENDING';
const STATUS_IDLE = 'IDLE';
const ImageSourcePropType = (0, _propTypes.oneOfType)([
  _propTypes.number,
  (0, _propTypes.shape)({
    height: _propTypes.number,
    uri: _propTypes.string.isRequired,
    width: _propTypes.number
  }),
  _propTypes.string
]);
const getImageState = function getImageState(uri, shouldDisplaySource) {
  return shouldDisplaySource ? STATUS_LOADED : uri ? STATUS_PENDING : STATUS_IDLE;
};
const resolveAssetDimensions = function resolveAssetDimensions(source) {
  if (typeof source === 'number') {
    let _getAssetByID = (0, _AssetRegistry.getAssetByID)(source),
      height = _getAssetByID.height,
      width = _getAssetByID.width;
    return { height: height, width: width };
  } else if (typeof source === 'object') {
    let _height = source.height,
      _width = source.width;
    return { height: _height, width: _width };
  }
};
const svgDataUriPattern = /^data:image\/svg\+xml;/;
const resolveAssetSource = function resolveAssetSource(source) {
  let uri = void 0;
  if (typeof source === 'number') {
    const asset = (0, _AssetRegistry.getAssetByID)(source);
    const scale = asset.scales[0];
    const scaleSuffix = scale !== 1 ? '@' + scale + 'x' : '';
    uri = asset ? asset.httpServerLocation + '/' + asset.name + scaleSuffix + '.' + asset.type : '';
  } else if (source && source.uri) {
    uri = source.uri;
  } else {
    uri = source || '';
  }
  if (svgDataUriPattern.test(uri)) {
    const parts = uri.split('<svg');
    let _parts = _toArray(parts),
      prefix = _parts[0],
      svgFragment = _parts.slice(1);
    const svg = encodeURIComponent('<svg' + svgFragment.join('<svg'));
    return '' + prefix + svg;
  }
  return uri;
};
const Image = (function(_Component) {
  _inherits(Image, _Component);
  _createClass(Image, null, [
    {
      key: 'getSize',
      value: function getSize(uri, success, failure) {
        _ImageLoader2.default.getSize(uri, success, failure);
      }
    },
    {
      key: 'prefetch',
      value: function prefetch(uri) {
        return _ImageLoader2.default.prefetch(uri);
      }
    }
  ]);
  function Image(props, context) {
    _classCallCheck(this, Image);
    const _this = _possibleConstructorReturn(
      this,
      (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props, context)
    );
    _initialiseProps.call(_this);
    const uri = resolveAssetSource(props.source);
    const shouldDisplaySource = _ImageUriCache2.default.has(uri);
    _this.state = { shouldDisplaySource: shouldDisplaySource };
    _this._imageState = getImageState(uri, shouldDisplaySource);
    shouldDisplaySource && _ImageUriCache2.default.add(uri);
    return _this;
  }
  _createClass(Image, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._isMounted = true;
        if (this._imageState === STATUS_PENDING) {
          this._createImageLoader();
        }
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        if (this._imageState === STATUS_PENDING) {
          this._createImageLoader();
        }
      }
    },
    {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        const uri = resolveAssetSource(this.props.source);
        const nextUri = resolveAssetSource(nextProps.source);
        if (uri !== nextUri) {
          _ImageUriCache2.default.remove(uri);
          const isPreviouslyLoaded = _ImageUriCache2.default.has(nextUri);
          isPreviouslyLoaded && _ImageUriCache2.default.add(uri);
          this._updateImageState(getImageState(uri, isPreviouslyLoaded));
        }
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _ImageUriCache2.default.remove(resolveAssetSource(this.props.source));
        this._destroyImageLoader();
        this._isMounted = false;
      }
    },
    {
      key: 'render',
      value: function render() {
        const shouldDisplaySource = this.state.shouldDisplaySource;
        let _props = this.props,
          accessibilityLabel = _props.accessibilityLabel,
          accessible = _props.accessible,
          children = _props.children,
          defaultSource = _props.defaultSource,
          draggable = _props.draggable,
          onLayout = _props.onLayout,
          source = _props.source,
          testID = _props.testID,
          onError = _props.onError,
          onLoad = _props.onLoad,
          onLoadEnd = _props.onLoadEnd,
          onLoadStart = _props.onLoadStart,
          resizeMode = _props.resizeMode,
          other = _objectWithoutProperties(_props, [
            'accessibilityLabel',
            'accessible',
            'children',
            'defaultSource',
            'draggable',
            'onLayout',
            'source',
            'testID',
            'onError',
            'onLoad',
            'onLoadEnd',
            'onLoadStart',
            'resizeMode'
          ]);
        const displayImage = resolveAssetSource(shouldDisplaySource ? source : defaultSource);
        const imageSizeStyle = resolveAssetDimensions(shouldDisplaySource ? source : defaultSource);
        const backgroundImage = displayImage ? 'url("' + displayImage + '")' : null;
        const originalStyle = _StyleSheet2.default.flatten(this.props.style);
        const finalResizeMode =
          resizeMode || originalStyle.resizeMode || _ImageResizeMode2.default.cover;
        const style = _StyleSheet2.default.flatten([
          styles.initial,
          imageSizeStyle,
          originalStyle,
          resizeModeStyles[finalResizeMode],
          this.context.isInAParentText && styles.inline,
          backgroundImage && { backgroundImage: backgroundImage }
        ]);
        delete style.overlayColor;
        delete style.resizeMode;
        delete style.tintColor;
        const hiddenImage = displayImage
          ? (0, _createElement2.default)('img', {
              alt: accessibilityLabel || '',
              draggable: draggable,
              src: displayImage,
              style: styles.img
            })
          : null;
        return _react2.default.createElement(
          _View2.default,
          _extends({}, other, {
            accessibilityLabel: accessibilityLabel,
            accessible: accessible,
            onLayout: onLayout,
            style: style,
            testID: testID,
            __source: { fileName: _jsxFileName, lineNumber: 220 }
          }),
          hiddenImage,
          children
        );
      }
    },
    {
      key: '_createImageLoader',
      value: function _createImageLoader() {
        const _this2 = this;
        this._destroyImageLoader();
        this._loadRequest = (0, _requestIdleCallback2.default)(function() {
          const uri = resolveAssetSource(_this2.props.source);
          _this2._imageRequestId = _ImageLoader2.default.load(uri, _this2._onLoad, _this2._onError);
          _this2._onLoadStart();
        });
      }
    },
    {
      key: '_destroyImageLoader',
      value: function _destroyImageLoader() {
        if (this._loadRequest) {
          (0, _requestIdleCallback.cancelIdleCallback)(this._loadRequest);
          this._loadRequest = null;
        }
        if (this._imageRequestId) {
          _ImageLoader2.default.abort(this._imageRequestId);
          this._imageRequestId = null;
        }
      }
    },
    {
      key: '_onLoadEnd',
      value: function _onLoadEnd() {
        const onLoadEnd = this.props.onLoadEnd;
        if (onLoadEnd) {
          onLoadEnd();
        }
      }
    },
    {
      key: '_onLoadStart',
      value: function _onLoadStart() {
        const onLoadStart = this.props.onLoadStart;
        this._updateImageState(STATUS_LOADING);
        if (onLoadStart) {
          onLoadStart();
        }
      }
    },
    {
      key: '_updateImageState',
      value: function _updateImageState(status) {
        this._imageState = status;
        const shouldDisplaySource =
          this._imageState === STATUS_LOADED || this._imageState === STATUS_LOADING;
        if (shouldDisplaySource !== this.state.shouldDisplaySource) {
          if (this._isMounted) {
            this.setState(function() {
              return { shouldDisplaySource: shouldDisplaySource };
            });
          }
        }
      }
    }
  ]);
  return Image;
})(_react.Component);
Image.displayName = 'Image';
Image.contextTypes = { isInAParentText: _propTypes.bool };
Image.defaultProps = { style: emptyObject };
Image.resizeMode = _ImageResizeMode2.default;
var _initialiseProps = function _initialiseProps() {
  const _this3 = this;
  this._imageRequestId = null;
  this._imageState = null;
  this._isMounted = false;
  this._loadRequest = null;
  this._onError = function() {
    let _props2 = _this3.props,
      onError = _props2.onError,
      source = _props2.source;
    _this3._updateImageState(STATUS_ERRORED);
    if (onError) {
      onError({
        nativeEvent: { error: 'Failed to load resource ' + resolveAssetSource(source) + ' (404)' }
      });
    }
    _this3._onLoadEnd();
  };
  this._onLoad = function(e) {
    let _props3 = _this3.props,
      onLoad = _props3.onLoad,
      source = _props3.source;
    const event = { nativeEvent: e };
    _ImageUriCache2.default.add(resolveAssetSource(source));
    _this3._updateImageState(STATUS_LOADED);
    if (onLoad) {
      onLoad(event);
    }
    _this3._onLoadEnd();
  };
};
Image.propTypes =
  process.env.NODE_ENV !== 'production'
    ? _extends({}, _ViewPropTypes2.default, {
        children: _propTypes.any,
        defaultSource: ImageSourcePropType,
        draggable: _propTypes.bool,
        onError: _propTypes.func,
        onLayout: _propTypes.func,
        onLoad: _propTypes.func,
        onLoadEnd: _propTypes.func,
        onLoadStart: _propTypes.func,
        resizeMode: (0, _propTypes.oneOf)(Object.keys(_ImageResizeMode2.default)),
        source: ImageSourcePropType,
        style: (0, _StyleSheetPropType2.default)(_ImageStylePropTypes2.default)
      })
    : {};
var styles = _StyleSheet2.default.create({
  initial: {
    backgroundColor: 'transparent',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: 0
  },
  inline: { display: 'inline-flex' },
  img: _extends({}, _StyleSheet2.default.absoluteFillObject, {
    height: '100%',
    opacity: 0,
    width: '100%',
    zIndex: -1
  })
});
var resizeModeStyles = _StyleSheet2.default.create({
  center: { backgroundSize: 'auto', backgroundPosition: 'center' },
  contain: { backgroundSize: 'contain' },
  cover: { backgroundSize: 'cover' },
  none: { backgroundSize: 'auto' },
  repeat: { backgroundSize: 'auto', backgroundRepeat: 'repeat' },
  stretch: { backgroundSize: '100% 100%' }
});
exports.default = (0, _applyNativeMethods2.default)(Image);
