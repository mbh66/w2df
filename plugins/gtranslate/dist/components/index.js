// Minimal Preact JSX runtime
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

var GTranslate_default = ((opts) => {
  const defaultLang = opts?.defaultLanguage ?? "en";
  const detectBrowser = opts?.detectBrowserLanguage ?? true;

  const GTranslate = ({ displayClass }) => {
    return u2("div", { class: `gtranslate_wrapper ${displayClass ?? ""}` });
  };

  GTranslate.css = `.gtranslate_wrapper { /* container styled by gtranslate float widget */ }`;

  GTranslate.afterDOMLoaded = `
    window.gtranslateSettings = {
      "default_language": "${defaultLang}",
      "detect_browser_language": ${detectBrowser},
      "wrapper_selector": ".gtranslate_wrapper"
    };
    var s = document.createElement("script");
    s.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
    s.defer = true;
    document.body.appendChild(s);
  `;

  return GTranslate;
});

export { GTranslate_default as GTranslate };
