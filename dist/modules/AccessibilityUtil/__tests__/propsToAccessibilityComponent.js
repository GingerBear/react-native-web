const _propsToAccessibilityComponent = require('../propsToAccessibilityComponent');
const _propsToAccessibilityComponent2 = _interopRequireDefault(_propsToAccessibilityComponent);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
describe('modules/AccessibilityUtil/propsToAccessibilityComponent', function() {
  test('when missing accessibility props"', function() {
    expect((0, _propsToAccessibilityComponent2.default)({})).toBeUndefined();
  });
  test('when "accessibilityRole" is "button"', function() {
    expect(
      (0, _propsToAccessibilityComponent2.default)({ accessibilityRole: 'button' })
    ).toBeUndefined();
  });
  test('when "accessibilityRole" is "heading"', function() {
    expect((0, _propsToAccessibilityComponent2.default)({ accessibilityRole: 'heading' })).toEqual(
      'h1'
    );
  });
  test('when "accessibilityRole" is "heading" and "aria-level" is set', function() {
    expect(
      (0, _propsToAccessibilityComponent2.default)({
        accessibilityRole: 'heading',
        'aria-level': 3
      })
    ).toEqual('h3');
  });
  test('when "accessibilityRole" is "label"', function() {
    expect((0, _propsToAccessibilityComponent2.default)({ accessibilityRole: 'label' })).toEqual(
      'label'
    );
  });
});
