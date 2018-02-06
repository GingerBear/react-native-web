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
const _animated = require('animated');
const _animated2 = _interopRequireDefault(_animated);
const _Image = require('../../components/Image');
const _Image2 = _interopRequireDefault(_Image);
const _ScrollView = require('../../components/ScrollView');
const _ScrollView2 = _interopRequireDefault(_ScrollView);
const _StyleSheet = require('../StyleSheet');
const _StyleSheet2 = _interopRequireDefault(_StyleSheet);
const _Text = require('../../components/Text');
const _Text2 = _interopRequireDefault(_Text);
const _View = require('../../components/View');
const _View2 = _interopRequireDefault(_View);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
_animated2.default.inject.FlattenStyle(_StyleSheet2.default.flatten);
const AnimatedImplementation = _extends({}, _animated2.default, {
  Image: _animated2.default.createAnimatedComponent(_Image2.default),
  ScrollView: _animated2.default.createAnimatedComponent(_ScrollView2.default),
  Text: _animated2.default.createAnimatedComponent(_Text2.default),
  View: _animated2.default.createAnimatedComponent(_View2.default)
});
exports.default = AnimatedImplementation;
