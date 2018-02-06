Object.defineProperty(exports, '__esModule', { value: true });
function StyleSheetPropType(shape) {
  const createStrictShapeTypeChecker = require('./createStrictShapeTypeChecker').default;
  const StyleSheet = require('../apis/StyleSheet').default;
  const shapePropType = createStrictShapeTypeChecker(shape);
  return function(props, propName, componentName, location) {
    let newProps = props;
    if (props[propName]) {
      newProps = {};
      const flatStyle = StyleSheet.flatten(props[propName]);
      const nextStyle = Object.keys(flatStyle).reduce(function(acc, curr) {
        if (curr.indexOf('--') !== 0) {
          acc[curr] = flatStyle[curr];
        }
        return acc;
      }, {});
      newProps[propName] = nextStyle;
    }
    for (
      var _len = arguments.length, rest = Array(_len > 4 ? _len - 4 : 0), _key = 4;
      _key < _len;
      _key++
    ) {
      rest[_key - 4] = arguments[_key];
    }
    return shapePropType.apply(
      undefined,
      [newProps, propName, componentName, location].concat(rest)
    );
  };
}
exports.default = StyleSheetPropType;
