import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <div id="quartz-body">
      {children}
      <div class="gtranslate_wrapper"></div>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.gtranslateSettings = {"default_language":"en","detect_browser_language":true,"languages":["en","af"],"wrapper_selector":".gtranslate_wrapper"};`,
        }}
      />
      <script src="https://cdn.gtranslate.net/widgets/latest/float.js" defer></script>
    </div>
  )
}

export default (() => Body) satisfies QuartzComponentConstructor
