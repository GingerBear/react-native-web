Object.defineProperty(exports, '__esModule', { value: true });
exports.registerAsset = registerAsset;
exports.getAssetByID = getAssetByID;
const assets = [];
function registerAsset(asset) {
  return assets.push(asset);
}
function getAssetByID(assetId) {
  return assets[assetId - 1];
}
