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
const _ListViewDataSource = require('./ListViewDataSource');
const _ListViewDataSource2 = _interopRequireDefault(_ListViewDataSource);
const _ScrollView = require('../ScrollView');
const _ScrollView2 = _interopRequireDefault(_ScrollView);
const _propTypes = require('prop-types');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
exports.default = _extends({}, _ScrollView2.default.propTypes, {
  dataSource: (0, _propTypes.instanceOf)(_ListViewDataSource2.default).isRequired,
  renderSeparator: _propTypes.func,
  renderRow: _propTypes.func.isRequired,
  initialListSize: _propTypes.number,
  onEndReached: _propTypes.func,
  onEndReachedThreshold: _propTypes.number,
  pageSize: _propTypes.number,
  renderFooter: _propTypes.func,
  renderHeader: _propTypes.func,
  renderSectionHeader: _propTypes.func,
  renderScrollComponent: _propTypes.func.isRequired,
  scrollRenderAheadDistance: _propTypes.number,
  onChangeVisibleRows: _propTypes.func,
  removeClippedSubviews: _propTypes.bool,
  stickyHeaderIndices: (0, _propTypes.arrayOf)(_propTypes.number)
});
