import { readFileSync } from 'fs';
import { join } from 'path';

// Minimal Preact JSX runtime (inlined to avoid peer-dep issues at load time)
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

function getQuartzVersion() {
  try {
    const pkg = JSON.parse(readFileSync(join(process.cwd(), "package.json"), "utf-8"));
    return pkg.version ?? "";
  } catch {
    return "";
  }
}

var footer_css = `footer {
  text-align: left;
  margin-bottom: 4rem;
  opacity: 0.7;
}
footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: -1rem;
}
footer .licence,
footer .notice {
  font-size: 0.85em;
  margin-top: -0.5rem;
}`;

var Footer_default = ((opts) => {
  const version = getQuartzVersion();
  const Footer = ({ displayClass, cfg }) => {
    const year = new Date().getFullYear();
    const links = opts?.links ?? {};
    // copyrightHolder: null hides the copyright line; licence: null hides the licence line.
    // notice: optional free text shown as its own line under the copyright line.
    const holder = opts?.copyrightHolder === undefined ? "Michael Haupt & Associates" : opts.copyrightHolder;
    const notice = opts?.notice ?? null;
    const licence = opts?.licence === undefined ? { name: "CC BY-SA 4.0", url: "https://creativecommons.org/licenses/by-sa/4.0/" } : opts.licence;
    return u2("footer", { class: `${displayClass ?? ""}`, children: [
      u2("p", { children: [
        "Created with ",
        u2("a", { href: "https://quartz.jzhao.xyz/", children: [
          "Quartz",
          version ? ` v${version}` : ""
        ] }),
        holder ? ` © ${holder} ${year}` : ""
      ] }),
      notice ? u2("p", { class: "notice", children: notice }) : null,
      licence ? u2("p", { class: "licence", children: [
        "Content licensed under ",
        u2("a", { href: licence.url, rel: "license", children: licence.name }),
        " unless otherwise noted."
      ] }) : null,
      u2("ul", { children: Object.entries(links).map(([text, link]) => u2("li", { children: u2("a", { href: link, children: text }) })) })
    ] });
  };
  Footer.css = footer_css;
  return Footer;
});

export { Footer_default as Footer };
