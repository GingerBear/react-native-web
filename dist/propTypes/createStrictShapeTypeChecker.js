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
const _invariant = require('fbjs/lib/invariant');
const _invariant2 = _interopRequireDefault(_invariant);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function createStrictShapeTypeChecker(shapeTypes) {
  function checkType(isRequired, props, propName, componentName, location) {
    if (!props[propName]) {
      if (isRequired) {
        (0, _invariant2.default)(
          false,
          'Required object `' + propName + '` was not specified in `' + componentName + '`.'
        );
      }
      return;
    }
    const propValue = props[propName];
    const propType = typeof propValue;
    const locationName = location || '(unknown)';
    if (propType !== 'object') {
      (0, _invariant2.default)(
        false,
        'Invalid ' +
          locationName +
          ' `' +
          propName +
          '` of type `' +
          propType +
          '` ' +
          ('supplied to `' + componentName + '`, expected `object`.')
      );
    }
    const allKeys = _extends({}, props[propName], shapeTypes);
    for (
      var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5;
      _key < _len;
      _key++
    ) {
      rest[_key - 5] = arguments[_key];
    }
    for (const _key2 in allKeys) {
      const checker = shapeTypes[_key2];
      if (!checker) {
        (0, _invariant2.default)(
          false,
          'Invalid props.' +
            propName +
            ' key `' +
            _key2 +
            '` supplied to `' +
            componentName +
            '`.' +
            '\nBad object: ' +
            JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +
            JSON.stringify(Object.keys(shapeTypes), null, '  ')
        );
      }
      const error = checker.apply(
        undefined,
        [propValue, _key2, componentName, location].concat(rest)
      );
      if (error) {
        (0, _invariant2.default)(
          false,
          error.message + '\nBad object: ' + JSON.stringify(props[propName], null, '  ')
        );
      }
    }
  }
  function chainedCheckType(props, propName, componentName, location) {
    for (
      var _len2 = arguments.length, rest = Array(_len2 > 4 ? _len2 - 4 : 0), _key3 = 4;
      _key3 < _len2;
      _key3++
    ) {
      rest[_key3 - 4] = arguments[_key3];
    }
    return checkType.apply(
      undefined,
      [false, props, propName, componentName, location].concat(rest)
    );
  }
  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
}
exports.default = createStrictShapeTypeChecker;
