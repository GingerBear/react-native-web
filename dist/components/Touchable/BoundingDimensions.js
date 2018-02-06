Object.defineProperty(exports, '__esModule', { value: true });
const _PooledClass = require('../../vendor/PooledClass');
const _PooledClass2 = _interopRequireDefault(_PooledClass);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const twoArgumentPooler = _PooledClass2.default.twoArgumentPooler;
function BoundingDimensions(width, height) {
  this.width = width;
  this.height = height;
}
BoundingDimensions.prototype.destructor = function() {
  this.width = null;
  this.height = null;
};
BoundingDimensions.getPooledFromElement = function(element) {
  return BoundingDimensions.getPooled(element.offsetWidth, element.offsetHeight);
};
_PooledClass2.default.addPoolingTo(BoundingDimensions, twoArgumentPooler);
exports.default = BoundingDimensions;
