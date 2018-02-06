Object.defineProperty(exports, '__esModule', { value: true });
const _slicedToArray = (function() {
  function sliceIterator(arr, i) {
    const _arr = [];
    let _n = true;
    let _d = false;
    let _e;
    try {
      for (
        var _i = arr[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i['return']) _i['return']();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((typeof Symbol === 'function' ? Symbol.iterator : '@@iterator') in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError('Invalid attempt to destructure non-iterable instance');
    }
  };
})();
const _requestAnimationFrame = require('fbjs/lib/requestAnimationFrame');
const _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);
const _setImmediate = require('fbjs/lib/setImmediate');
const _setImmediate2 = _interopRequireDefault(_setImmediate);
const _setValueForStyles = require('../../vendor/setValueForStyles');
const _setValueForStyles2 = _interopRequireDefault(_setValueForStyles);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const getRect = function getRect(node) {
  const height = node.offsetHeight;
  const width = node.offsetWidth;
  let left = 0;
  let top = 0;
  while (node && node.nodeType === 1) {
    left += node.offsetLeft;
    top += node.offsetTop;
    node = node.offsetParent;
  }
  return { height: height, left: left, top: top, width: width };
};
let hasRequestedAnimationFrame = false;
const measureLayoutQueue = [];
const processLayoutQueue = function processLayoutQueue() {
  measureLayoutQueue.splice(0, 250).forEach(function(item) {
    let _item = _slicedToArray(item, 3),
      node = _item[0],
      relativeToNativeNode = _item[1],
      callback = _item[2];
    const relativeNode = relativeToNativeNode || (node && node.parentNode);
    if (node && relativeNode) {
      const relativeRect = getRect(relativeNode);
      let _getRect = getRect(node),
        height = _getRect.height,
        left = _getRect.left,
        top = _getRect.top,
        width = _getRect.width;
      const x = left - relativeRect.left;
      const y = top - relativeRect.top;
      callback(x, y, width, height, left, top);
    }
  });
  if (measureLayoutQueue.length > 0) {
    (0, _setImmediate2.default)(processLayoutQueue);
  }
};
const _measureLayout = function _measureLayout(node, relativeToNativeNode, callback) {
  if (!hasRequestedAnimationFrame) {
    (0, _requestAnimationFrame2.default)(function() {
      hasRequestedAnimationFrame = false;
      processLayoutQueue();
    });
  }
  hasRequestedAnimationFrame = true;
  measureLayoutQueue.push([node, relativeToNativeNode, callback]);
};
const UIManager = {
  blur: function blur(node) {
    try {
      node.blur();
    } catch (err) {}
  },
  focus: function focus(node) {
    try {
      node.focus();
    } catch (err) {}
  },
  measure: function measure(node, callback) {
    _measureLayout(node, null, callback);
  },
  measureInWindow: function measureInWindow(node, callback) {
    (0, _requestAnimationFrame2.default)(function() {
      if (node) {
        let _getRect2 = getRect(node),
          height = _getRect2.height,
          left = _getRect2.left,
          top = _getRect2.top,
          width = _getRect2.width;
        callback(left, top, width, height);
      }
    });
  },
  measureLayout: function measureLayout(node, relativeToNativeNode, onFail, onSuccess) {
    _measureLayout(node, relativeToNativeNode, onSuccess);
  },
  updateView: function updateView(node, props, component) {
    for (const prop in props) {
      if (!Object.prototype.hasOwnProperty.call(props, prop)) {
        continue;
      }
      const value = props[prop];
      switch (prop) {
        case 'style': {
          (0, _setValueForStyles2.default)(node, value, component._reactInternalInstance);
          break;
        }
        case 'class':
        case 'className': {
          node.setAttribute('class', value);
          break;
        }
        case 'text':
        case 'value':
          node.value = value;
          break;
        default:
          node.setAttribute(prop, value);
      }
    }
  }
};
exports.default = UIManager;
