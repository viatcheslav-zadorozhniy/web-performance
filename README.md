# Web performance

## Table of contents
- [Description](#description)
- [Demo](#demo)
  - [Details](#details)
  - [Installation](#installation)


## Description

[Performance](https://developer.chrome.com/docs/lighthouse/performance/) tips:
- Use assets compression:
  - [Brotli](https://github.com/google/brotli) more effective than gzip and deflate ([supported](https://caniuse.com/webp) by all major browser engines)
- [Apply efficient cache policy](https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl/):
  - Cache immutable assets for a long time (1 year or longer)
  - Embed hashes to the asset's filenames to allow updates
  - Support [back/forward cache](https://web.dev/bfcache/) (`cache-control:no-store` cannot enter back/forward cache)
- Inline critical CSS and lazy-load the rest:
  - [Critters](https://github.com/GoogleChromeLabs/critters) - inline all CSS used by the page
  - [Critical](https://github.com/addyosmani/critical) - inline above-the-fold CSS
- [Lazy load](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading) non-critical resources:
  - Defer offscreen images and iframes using `loading="lazy"` attribute
  - Split javascript using dynamic `import()`
- [Serve images in modern formats](https://developer.chrome.com/docs/lighthouse/performance/uses-webp-images/):
  - [WebP](https://developers.google.com/speed/webp/) - [supported](https://caniuse.com/webp) by all major browser engines
  - [AVIF](https://codelabs.developers.google.com/codelabs/avif#0) - has more limited [support](https://caniuse.com/avif), but the images are smaller even compare to WebP
- [Pre-render pages](https://developer.chrome.com/blog/prerender-pages/) for instant navigation:
  - [Speculation Rules API](https://github.com/WICG/nav-speculation/blob/main/triggers.md)
  - Static Site Generation
  - Service Worker ([Workbox](https://developer.chrome.com/docs/workbox/))
- Consider applying SSR or SSG (pre-rendering):
  - [Angular Universal](https://blog.angular-university.io/angular-universal/) for Angular
  - [Gatsby](https://www.gatsbyjs.com/) for React
- Investigate new [web features](https://whatwebcando.today/):
  - [What web can do today?](https://whatwebcando.today/)
  - [ECMAScript proposals](https://github.com/tc39/proposals)
  - [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) on MDN
  -
  - [CSS Containment](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Containment)
  - [content-visibility](https://web.dev/content-visibility/)


## Demo

### Details

### Installation
```
yarn install --frozen-lockfile
```
