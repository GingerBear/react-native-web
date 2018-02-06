Object.defineProperty(exports, '__esModule', { value: true });
const _crossFade = require('inline-style-prefixer/static/plugins/crossFade');
const _crossFade2 = _interopRequireDefault(_crossFade);
const _cursor = require('inline-style-prefixer/static/plugins/cursor');
const _cursor2 = _interopRequireDefault(_cursor);
const _filter = require('inline-style-prefixer/static/plugins/filter');
const _filter2 = _interopRequireDefault(_filter);
const _flex = require('inline-style-prefixer/static/plugins/flex');
const _flex2 = _interopRequireDefault(_flex);
const _flexboxIE = require('inline-style-prefixer/static/plugins/flexboxIE');
const _flexboxIE2 = _interopRequireDefault(_flexboxIE);
const _flexboxOld = require('inline-style-prefixer/static/plugins/flexboxOld');
const _flexboxOld2 = _interopRequireDefault(_flexboxOld);
const _gradient = require('inline-style-prefixer/static/plugins/gradient');
const _gradient2 = _interopRequireDefault(_gradient);
const _imageSet = require('inline-style-prefixer/static/plugins/imageSet');
const _imageSet2 = _interopRequireDefault(_imageSet);
const _position = require('inline-style-prefixer/static/plugins/position');
const _position2 = _interopRequireDefault(_position);
const _sizing = require('inline-style-prefixer/static/plugins/sizing');
const _sizing2 = _interopRequireDefault(_sizing);
const _transition = require('inline-style-prefixer/static/plugins/transition');
const _transition2 = _interopRequireDefault(_transition);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const w = ['Webkit'];
const m = ['Moz'];
const ms = ['ms'];
const wm = ['Webkit', 'Moz'];
const wms = ['Webkit', 'ms'];
const wmms = ['Webkit', 'Moz', 'ms'];
exports.default = {
  plugins: [
    _crossFade2.default,
    _cursor2.default,
    _filter2.default,
    _flex2.default,
    _flexboxIE2.default,
    _flexboxOld2.default,
    _gradient2.default,
    _imageSet2.default,
    _position2.default,
    _sizing2.default,
    _transition2.default
  ],
  prefixMap: {
    animation: w,
    animationDelay: w,
    animationDirection: w,
    animationFillMode: w,
    animationDuration: w,
    animationIterationCount: w,
    animationName: w,
    animationPlayState: w,
    animationTimingFunction: w,
    appearance: wm,
    userSelect: wmms,
    textEmphasisPosition: w,
    textEmphasis: w,
    textEmphasisStyle: w,
    textEmphasisColor: w,
    boxDecorationBreak: w,
    clipPath: w,
    maskImage: w,
    maskMode: w,
    maskRepeat: w,
    maskPosition: w,
    maskClip: w,
    maskOrigin: w,
    maskSize: w,
    maskComposite: w,
    mask: w,
    maskBorderSource: w,
    maskBorderMode: w,
    maskBorderSlice: w,
    maskBorderWidth: w,
    maskBorderOutset: w,
    maskBorderRepeat: w,
    maskBorder: w,
    maskType: w,
    textDecorationStyle: w,
    textDecorationSkip: w,
    textDecorationLine: w,
    textDecorationColor: w,
    filter: w,
    fontFeatureSettings: w,
    breakAfter: wmms,
    breakBefore: wmms,
    breakInside: wmms,
    columnCount: wm,
    columnFill: wm,
    columnGap: wm,
    columnRule: wm,
    columnRuleColor: wm,
    columnRuleStyle: wm,
    columnRuleWidth: wm,
    columns: wm,
    columnSpan: wm,
    columnWidth: wm,
    flex: wms,
    flexBasis: w,
    flexDirection: wms,
    flexGrow: w,
    flexFlow: wms,
    flexShrink: w,
    flexWrap: wms,
    alignContent: w,
    alignItems: w,
    alignSelf: w,
    justifyContent: w,
    order: w,
    transform: w,
    transformOrigin: w,
    transformOriginX: w,
    transformOriginY: w,
    backfaceVisibility: w,
    perspective: w,
    perspectiveOrigin: w,
    transformStyle: w,
    transformOriginZ: w,
    backdropFilter: w,
    fontKerning: w,
    scrollSnapType: wms,
    scrollSnapPointsX: wms,
    scrollSnapPointsY: wms,
    scrollSnapDestination: wms,
    scrollSnapCoordinate: wms,
    shapeImageThreshold: w,
    shapeImageMargin: w,
    shapeImageOutside: w,
    hyphens: wmms,
    flowInto: wms,
    flowFrom: wms,
    regionFragment: wms,
    textAlignLast: m,
    tabSize: m,
    wrapFlow: ms,
    wrapThrough: ms,
    wrapMargin: ms,
    touchAction: ms,
    gridTemplateColumns: ms,
    gridTemplateRows: ms,
    gridTemplateAreas: ms,
    gridTemplate: ms,
    gridAutoColumns: ms,
    gridAutoRows: ms,
    gridAutoFlow: ms,
    grid: ms,
    gridRowStart: ms,
    gridColumnStart: ms,
    gridRowEnd: ms,
    gridRow: ms,
    gridColumn: ms,
    gridColumnEnd: ms,
    gridColumnGap: ms,
    gridRowGap: ms,
    gridArea: ms,
    gridGap: ms,
    textSizeAdjust: wms,
    borderImage: w,
    borderImageOutset: w,
    borderImageRepeat: w,
    borderImageSlice: w,
    borderImageSource: w,
    borderImageWidth: w,
    transitionDelay: w,
    transitionDuration: w,
    transitionProperty: w,
    transitionTimingFunction: w
  }
};
