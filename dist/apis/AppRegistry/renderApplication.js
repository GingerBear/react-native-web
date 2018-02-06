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
const _jsxFileName = 'src/apis/AppRegistry/renderApplication.js';
exports.default = renderApplication;
exports.getApplication = getApplication;
const _invariant = require('fbjs/lib/invariant');
const _invariant2 = _interopRequireDefault(_invariant);
const _reactDom = require('react-dom');
const _AppContainer = require('./AppContainer');
const _AppContainer2 = _interopRequireDefault(_AppContainer);
const _StyleSheet = require('../../apis/StyleSheet');
const _StyleSheet2 = _interopRequireDefault(_StyleSheet);
const _react = require('react');
const _react2 = _interopRequireDefault(_react);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function renderApplication(RootComponent, initialProps, rootTag) {
  (0, _invariant2.default)(rootTag, 'Expect to have a valid rootTag, instead got ', rootTag);
  (0, _reactDom.render)(
    _react2.default.createElement(
      _AppContainer2.default,
      { rootTag: rootTag, __source: { fileName: _jsxFileName, lineNumber: 26 } },
      _react2.default.createElement(
        RootComponent,
        _extends({}, initialProps, { __source: { fileName: _jsxFileName, lineNumber: 27 } })
      )
    ),
    rootTag
  );
}
function getApplication(RootComponent, initialProps) {
  const element = _react2.default.createElement(
    _AppContainer2.default,
    { rootTag: {}, __source: { fileName: _jsxFileName, lineNumber: 35 } },
    _react2.default.createElement(
      RootComponent,
      _extends({}, initialProps, { __source: { fileName: _jsxFileName, lineNumber: 36 } })
    )
  );
  const stylesheets = _StyleSheet2.default.getStyleSheets().map(function(sheet) {
    return _react2.default.createElement('style', {
      dangerouslySetInnerHTML: { __html: sheet.textContent },
      id: sheet.id,
      __source: { fileName: _jsxFileName, lineNumber: 41 }
    });
  });
  return { element: element, stylesheets: stylesheets };
}
