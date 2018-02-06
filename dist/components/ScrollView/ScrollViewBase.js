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
const _jsxFileName = 'src/components/ScrollView/ScrollViewBase.js';
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
const _debounce = require('debounce');
const _debounce2 = _interopRequireDefault(_debounce);
const _StyleSheet = require('../../apis/StyleSheet');
const _StyleSheet2 = _interopRequireDefault(_StyleSheet);
const _View = require('../View');
const _View2 = _interopRequireDefault(_View);
const _ViewPropTypes = require('../View/ViewPropTypes');
const _ViewPropTypes2 = _interopRequireDefault(_ViewPropTypes);
const _react = require('react');
const _react2 = _interopRequireDefault(_react);
const _propTypes = require('prop-types');
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
const normalizeScrollEvent = function normalizeScrollEvent(e) {
  return {
    nativeEvent: {
      contentOffset: {
        get x() {
          return e.target.scrollLeft;
        },
        get y() {
          return e.target.scrollTop;
        }
      },
      contentSize: {
        get height() {
          return e.target.scrollHeight;
        },
        get width() {
          return e.target.scrollWidth;
        }
      },
      layoutMeasurement: {
        get height() {
          return e.target.offsetHeight;
        },
        get width() {
          return e.target.offsetWidth;
        }
      }
    },
    timeStamp: Date.now()
  };
};
const ScrollViewBase = (function(_Component) {
  _inherits(ScrollViewBase, _Component);
  function ScrollViewBase() {
    let _ref;
    let _temp, _this, _ret;
    _classCallCheck(this, ScrollViewBase);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (
      (_ret = ((_temp = ((_this = _possibleConstructorReturn(
        this,
        (_ref = ScrollViewBase.__proto__ || Object.getPrototypeOf(ScrollViewBase)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this._debouncedOnScrollEnd = (0, _debounce2.default)(_this._handleScrollEnd, 100)),
      (_this._state = { isScrolling: false, scrollLastTick: 0 }),
      (_this._createPreventableScrollHandler = function(handler) {
        return function(e) {
          if (_this.props.scrollEnabled) {
            if (handler) {
              handler(e);
            }
          } else {
            e.preventDefault();
          }
        };
      }),
      (_this._handleScroll = function(e) {
        e.persist();
        e.stopPropagation();
        const scrollEventThrottle = _this.props.scrollEventThrottle;
        _this._debouncedOnScrollEnd(e);
        if (_this._state.isScrolling) {
          if (_this._shouldEmitScrollEvent(_this._state.scrollLastTick, scrollEventThrottle)) {
            _this._handleScrollTick(e);
          }
        } else {
          _this._handleScrollStart(e);
        }
      }),
      _temp)),
      _possibleConstructorReturn(_this, _ret)
    );
  }
  _createClass(ScrollViewBase, [
    {
      key: '_handleScrollStart',
      value: function _handleScrollStart(e) {
        this._state.isScrolling = true;
        this._state.scrollLastTick = Date.now();
      }
    },
    {
      key: '_handleScrollTick',
      value: function _handleScrollTick(e) {
        const onScroll = this.props.onScroll;
        this._state.scrollLastTick = Date.now();
        if (onScroll) {
          onScroll(normalizeScrollEvent(e));
        }
      }
    },
    {
      key: '_handleScrollEnd',
      value: function _handleScrollEnd(e) {
        const onScroll = this.props.onScroll;
        this._state.isScrolling = false;
        if (onScroll) {
          onScroll(normalizeScrollEvent(e));
        }
      }
    },
    {
      key: '_shouldEmitScrollEvent',
      value: function _shouldEmitScrollEvent(lastTick, eventThrottle) {
        const timeSinceLastTick = Date.now() - lastTick;
        return eventThrottle > 0 && timeSinceLastTick >= eventThrottle;
      }
    },
    {
      key: 'render',
      value: function render() {
        let _props = this.props,
          scrollEnabled = _props.scrollEnabled,
          style = _props.style,
          alwaysBounceHorizontal = _props.alwaysBounceHorizontal,
          alwaysBounceVertical = _props.alwaysBounceVertical,
          automaticallyAdjustContentInsets = _props.automaticallyAdjustContentInsets,
          bounces = _props.bounces,
          bouncesZoom = _props.bouncesZoom,
          canCancelContentTouches = _props.canCancelContentTouches,
          centerContent = _props.centerContent,
          contentInset = _props.contentInset,
          contentInsetAdjustmentBehavior = _props.contentInsetAdjustmentBehavior,
          contentOffset = _props.contentOffset,
          decelerationRate = _props.decelerationRate,
          directionalLockEnabled = _props.directionalLockEnabled,
          endFillColor = _props.endFillColor,
          indicatorStyle = _props.indicatorStyle,
          keyboardShouldPersistTaps = _props.keyboardShouldPersistTaps,
          maximumZoomScale = _props.maximumZoomScale,
          minimumZoomScale = _props.minimumZoomScale,
          onMomentumScrollBegin = _props.onMomentumScrollBegin,
          onMomentumScrollEnd = _props.onMomentumScrollEnd,
          onScrollBeginDrag = _props.onScrollBeginDrag,
          onScrollEndDrag = _props.onScrollEndDrag,
          overScrollMode = _props.overScrollMode,
          pinchGestureEnabled = _props.pinchGestureEnabled,
          removeClippedSubviews = _props.removeClippedSubviews,
          scrollEventThrottle = _props.scrollEventThrottle,
          scrollIndicatorInsets = _props.scrollIndicatorInsets,
          scrollPerfTag = _props.scrollPerfTag,
          scrollsToTop = _props.scrollsToTop,
          showsHorizontalScrollIndicator = _props.showsHorizontalScrollIndicator,
          showsVerticalScrollIndicator = _props.showsVerticalScrollIndicator,
          snapToInterval = _props.snapToInterval,
          snapToAlignment = _props.snapToAlignment,
          zoomScale = _props.zoomScale,
          other = _objectWithoutProperties(_props, [
            'scrollEnabled',
            'style',
            'alwaysBounceHorizontal',
            'alwaysBounceVertical',
            'automaticallyAdjustContentInsets',
            'bounces',
            'bouncesZoom',
            'canCancelContentTouches',
            'centerContent',
            'contentInset',
            'contentInsetAdjustmentBehavior',
            'contentOffset',
            'decelerationRate',
            'directionalLockEnabled',
            'endFillColor',
            'indicatorStyle',
            'keyboardShouldPersistTaps',
            'maximumZoomScale',
            'minimumZoomScale',
            'onMomentumScrollBegin',
            'onMomentumScrollEnd',
            'onScrollBeginDrag',
            'onScrollEndDrag',
            'overScrollMode',
            'pinchGestureEnabled',
            'removeClippedSubviews',
            'scrollEventThrottle',
            'scrollIndicatorInsets',
            'scrollPerfTag',
            'scrollsToTop',
            'showsHorizontalScrollIndicator',
            'showsVerticalScrollIndicator',
            'snapToInterval',
            'snapToAlignment',
            'zoomScale'
          ]);
        return _react2.default.createElement(
          _View2.default,
          _extends({}, other, {
            onScroll: this._handleScroll,
            onTouchMove: this._createPreventableScrollHandler(this.props.onTouchMove),
            onWheel: this._createPreventableScrollHandler(this.props.onWheel),
            style: [style, !scrollEnabled && styles.scrollDisabled],
            __source: { fileName: _jsxFileName, lineNumber: 175 }
          })
        );
      }
    }
  ]);
  return ScrollViewBase;
})(_react.Component);
ScrollViewBase.defaultProps = { scrollEnabled: true, scrollEventThrottle: 0 };
exports.default = ScrollViewBase;
ScrollViewBase.propTypes =
  process.env.NODE_ENV !== 'production'
    ? _extends({}, _ViewPropTypes2.default, {
        onMomentumScrollBegin: _propTypes.func,
        onMomentumScrollEnd: _propTypes.func,
        onScroll: _propTypes.func,
        onScrollBeginDrag: _propTypes.func,
        onScrollEndDrag: _propTypes.func,
        onTouchMove: _propTypes.func,
        onWheel: _propTypes.func,
        removeClippedSubviews: _propTypes.bool,
        scrollEnabled: _propTypes.bool,
        scrollEventThrottle: _propTypes.number,
        showsHorizontalScrollIndicator: _propTypes.bool,
        showsVerticalScrollIndicator: _propTypes.bool
      })
    : {};
var styles = _StyleSheet2.default.create({ scrollDisabled: { touchAction: 'none' } });
