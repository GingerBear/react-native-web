Object.defineProperty(exports, '__esModule', { value: true });
const Platform = {
  OS: 'web',
  select: function select(obj) {
    return 'web' in obj ? obj.web : obj.default;
  }
};
exports.default = Platform;
