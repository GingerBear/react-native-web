Object.defineProperty(exports, '__esModule', { value: true });
const _ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
const initialURL = _ExecutionEnvironment.canUseDOM ? window.location.href : '';
const Linking = {
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  canOpenURL: function canOpenURL() {
    return Promise.resolve(true);
  },
  getInitialURL: function getInitialURL() {
    return Promise.resolve(initialURL);
  },
  openURL: function openURL(url) {
    try {
      iframeOpen(url);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }
};
var iframeOpen = function iframeOpen(url) {
  const noOpener = url.indexOf('mailto:') !== 0;
  const body = document.body;
  if (body) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    body.appendChild(iframe);
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    const iframeBody = iframeDoc.body;
    if (iframeBody) {
      const script = iframeDoc.createElement('script');
      const openerExpression = noOpener ? 'child.opener = null' : '';
      script.text =
        '\n        window.parent = null; window.top = null; window.frameElement = null;\n        var child = window.open("' +
        url +
        '"); ' +
        openerExpression +
        ';\n      ';
      iframeBody.appendChild(script);
    }
    body.removeChild(iframe);
  }
};
exports.default = Linking;
