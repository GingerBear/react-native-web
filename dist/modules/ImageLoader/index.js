Object.defineProperty(exports, '__esModule', { value: true });
let id = 0;
const requests = {};
var ImageLoader = {
  abort: function abort(requestId) {
    let image = requests['' + requestId];
    if (image) {
      image.onerror = image.onload = image = null;
      delete requests['' + requestId];
    }
  },
  getSize: function getSize(uri, success, failure) {
    let complete = false;
    const interval = setInterval(callback, 16);
    const requestId = ImageLoader.load(uri, callback, callback);
    function callback() {
      const image = requests['' + requestId];
      if (image) {
        let naturalHeight = image.naturalHeight,
          naturalWidth = image.naturalWidth;
        if (naturalHeight && naturalWidth) {
          success(naturalWidth, naturalHeight);
          complete = true;
        }
      }
      if (complete) {
        ImageLoader.abort(requestId);
        clearInterval(interval);
      }
    }
  },
  load: function load(uri, onLoad, onError) {
    id += 1;
    const image = new window.Image();
    image.onerror = onError;
    image.onload = onLoad;
    image.src = uri;
    requests['' + id] = image;
    return id;
  },
  prefetch: function prefetch(uri) {
    return new Promise(function(resolve, reject) {
      ImageLoader.load(uri, resolve, reject);
    });
  }
};
exports.default = ImageLoader;
