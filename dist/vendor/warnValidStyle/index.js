Object.defineProperty(exports, '__esModule', { value: true });
const emptyFunction = require('fbjs/lib/emptyFunction');
let warnValidStyle = emptyFunction;
if (process.env.NODE_ENV !== 'production') {
  const camelizeStyleName = require('fbjs/lib/camelizeStyleName');
  const warning = require('fbjs/lib/warning');
  function getComponentName(instanceOrFiber) {
    if (typeof instanceOrFiber.getName === 'function') {
      const instance = instanceOrFiber;
      return instance.getName();
    }
    if (typeof instanceOrFiber.tag === 'number') {
      const fiber = instanceOrFiber;
      const type = fiber.type;
      if (typeof type === 'string') {
        return type;
      }
      if (typeof type === 'function') {
        return type.displayName || type.name;
      }
    }
    return null;
  }
  const badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
  const badStyleValueWithSemicolonPattern = /;\s*$/;
  const warnedStyleNames = {};
  const warnedStyleValues = {};
  let warnedForNaNValue = false;
  let warnedForInfinityValue = false;
  const warnHyphenatedStyleName = function warnHyphenatedStyleName(name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }
    warnedStyleNames[name] = true;
    warning(
      false,
      'Unsupported style property %s. Did you mean %s?%s',
      name,
      camelizeStyleName(name),
      checkRenderMessage(owner)
    );
  };
  const warnBadVendoredStyleName = function warnBadVendoredStyleName(name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }
    warnedStyleNames[name] = true;
    warning(
      false,
      'Unsupported vendor-prefixed style property %s. Did you mean %s?%s',
      name,
      name.charAt(0).toUpperCase() + name.slice(1),
      checkRenderMessage(owner)
    );
  };
  const warnStyleValueWithSemicolon = function warnStyleValueWithSemicolon(name, value, owner) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }
    warnedStyleValues[value] = true;
    warning(
      false,
      "Style property values shouldn't contain a semicolon.%s " + 'Try "%s: %s" instead.',
      checkRenderMessage(owner),
      name,
      value.replace(badStyleValueWithSemicolonPattern, '')
    );
  };
  const warnStyleValueIsNaN = function warnStyleValueIsNaN(name, value, owner) {
    if (warnedForNaNValue) {
      return;
    }
    warnedForNaNValue = true;
    warning(
      false,
      '`NaN` is an invalid value for the `%s` css style property.%s',
      name,
      checkRenderMessage(owner)
    );
  };
  const warnStyleValueIsInfinity = function warnStyleValueIsInfinity(name, value, owner) {
    if (warnedForInfinityValue) {
      return;
    }
    warnedForInfinityValue = true;
    warning(
      false,
      '`Infinity` is an invalid value for the `%s` css style property.%s',
      name,
      checkRenderMessage(owner)
    );
  };
  var checkRenderMessage = function checkRenderMessage(owner) {
    let ownerName;
    if (owner != null) {
      ownerName = getComponentName(owner);
    } else {
    }
    if (ownerName) {
      return '\n\nCheck the render method of `' + ownerName + '`.';
    }
    return '';
  };
  warnValidStyle = function warnValidStyle(name, value, component) {
    let owner;
    if (component) {
    }
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name, owner);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name, owner);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value, owner);
    }
    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value, owner);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value, owner);
      }
    }
  };
}
exports.default = warnValidStyle;
