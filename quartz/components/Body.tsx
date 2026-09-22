import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

// GTranslate settings. The widget renders into .gtranslate_wrapper.
const gtranslateSettings = `window.gtranslateSettings = {"default_language":"en","detect_browser_language":true,"languages":["en","af","xh","st","zu"],"wrapper_selector":".gtranslate_wrapper"};`

// Quartz's SPA router (enableSPA) replaces the page on every internal link:
// it empties .gtranslate_wrapper (the new page's copy is empty) and removes
// any <style> in <head> that is not marked data-persist, including the
// widget's CSS. float.js only runs once, so the selector disappears.
// This keeps the widget alive across SPA navigation:
//   prenav: mark GTranslate's <head> styles as persistent and keep a
//           reference to the rendered widget nodes;
//   nav:    put the same widget nodes back into the new, empty wrapper.
// Moving the existing nodes keeps their event listeners and the current
// language selection, so float.js never needs to run again.
const gtranslateSpaFix = `(function () {
  if (window.__gtSpaHook) return;
  window.__gtSpaHook = true;
  var saved = null;
  document.addEventListener("prenav", function () {
    document.head.querySelectorAll("style, link").forEach(function (el) {
      var text = el.textContent + (el.getAttribute("href") || "");
      if (/gt_float|gt_options|gt-selected|skiptranslate|goog-te|gtranslate/.test(text)) {
        el.setAttribute("data-persist", "");
      }
    });
    var w = document.querySelector(".gtranslate_wrapper");
    saved = w && w.childNodes.length ? Array.prototype.slice.call(w.childNodes) : null;
  });
  document.addEventListener("nav", function () {
    var w = document.querySelector(".gtranslate_wrapper");
    if (w && !w.childNodes.length && saved) {
      saved.forEach(function (n) { w.appendChild(n); });
    }
  });
})();`

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <div id="quartz-body">
      {children}
      <div class="gtranslate_wrapper"></div>
      <script dangerouslySetInnerHTML={{ __html: gtranslateSettings }} />
      <script dangerouslySetInnerHTML={{ __html: gtranslateSpaFix }} />
      <script src="https://cdn.gtranslate.net/widgets/latest/float.js" defer></script>
    </div>
  )
}

export default (() => Body) satisfies QuartzComponentConstructor
