Object.defineProperty(exports, '__esModule', { value: true });
const _invariant = require('fbjs/lib/invariant');
const _invariant2 = _interopRequireDefault(_invariant);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const twoArgumentPooler = function twoArgumentPooler(a1, a2) {
  const Klass = this;
  if (Klass.instancePool.length) {
    const instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};
const standardReleaser = function standardReleaser(instance) {
  const Klass = this;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};
const DEFAULT_POOL_SIZE = 10;
const DEFAULT_POOLER = twoArgumentPooler;
const addPoolingTo = function addPoolingTo(CopyConstructor, pooler) {
  const NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};
const PooledClass = { addPoolingTo: addPoolingTo, twoArgumentPooler: twoArgumentPooler };
exports.default = PooledClass;
