# Documentation

This is the place where I put all the resources that I find useful to build this project. This can be used for future reference or help anyone that is doing this challenge.

## Notes

It is worth knowing that `bg-pattern-design-pages-intro-tablet.svg` is the same background pattern as `bg-pattern-intro-web.svg`. The site uses the `bg-pattern-intro-web.svg` as the main background pattern for the web design card while using the other one as the default background pattern of the card (`.champion__card`).

The screenshots are not the representing the actual look of the site. So, see the website to know the look of the site.

## Web Documentation

- [`<footer>` - HTML: HyperText Markup Language | MDN #accessibility_concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer#accessibility_concerns) - Prior to the release of Safari 13, the `contentinfo` [landmark role](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics#signpostslandmarks) was not properly exposed by [VoiceOver](https://help.apple.com/voiceover/info/guide/). If needing to support legacy Safari browsers, add `role="contentinfo"` to the footer element to ensure the landmark will be properly exposed.
- [HTML Standard #the-address-element](https://html.spec.whatwg.org/multipage/sections.html#the-address-element) - The `address` element must not be used to represent arbitrary addresses (e.g. postal addresses), unless those addresses are in fact the relevant contact information. (The `p` element is the appropriate element for marking up postal addresses in general.)
- [HTMLElement.inert - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert) - The [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) property `inert` is a boolean value that, when present, makes the browser "ignore" user input events for the element, including focus events and events from assistive technologies.
- [HTML Standard #the-inert-attribute](https://html.spec.whatwg.org/multipage/interaction.html#the-inert-attribute)
- [Attribute selectors - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
- [General sibling combinator - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator)
- [Window.matchMedia() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
- [CSS API update  |  Google Fonts  |  Google Developers #optimizing_your_font_requests](https://developers.google.com/fonts/docs/css2#optimizing_your_font_requests) - Use the `text=` to get necessary bold font.
- [`<picture>`: The Picture element - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
- [`:nth-of-type()` - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type) - I used this to make the first `.information` has no `margin-top` on mobile breakpoint.
- [Basic writing and formatting syntax - GitHub Docs #specifying-the-theme-an-image-is-shown-to](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#specifying-the-theme-an-image-is-shown-to)

## Articles

- [Contextually Marking up accessible images and SVGs](https://www.scottohara.me/blog/2019/05/22/contextual-images-svgs-and-a11y.html)
  - Prior to macOS 10.14.4, `aria-hidden="true"` would also be necessary to completely hide a decorative image to VoiceOver when paired with Chrome. Without the ARIA attribute, VoiceOver would still focus the image, but provide no announcement.
  - A SVG that does not add important information to a document should be considered decorative. The following markup pattern uses `aria-hidden="true"` to hide the SVG from screen readers. `focusable="false"` is also used to ensure Internet Explorer won’t allow the Tab key to navigate into the SVG.
- [Ten modern layouts in one line of CSS | web.dev](https://web.dev/one-line-layouts/)
- [Build a fully-responsive, progressively enhanced burger menu - Piccalilli](https://piccalil.li/tutorial/build-a-fully-responsive-progressively-enhanced-burger-menu/)
  - We remove focus styles from the `<main>` element because when someone activates the skip link from before, it programatically focuses the `<main>` because it’s the `:target`. The focus ring is unnecessary though, because making the `<main>` focusable, programatically, is purely for making tabbing on the keyboard more predictable for users who want to skip navigation. If we didn’t move focus, they could end up in a situation where hitting the tab key sends them back up the the navigation!
  - What’s handy with this approach is that using `tabindex="-1"` prevents the user from being able to tab to the element with their keyboard too, so it’s really helpful with focus management of interactive elements, which we’ll get on to later in this tutorial.
- [Landmark Regions | APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/) - If a specific landmark role is used more than once on a page, provide each instance of that landmark with a unique label.
- [WebAIM: Usable and Accessible Form Validation and Error Recovery](https://webaim.org/techniques/formvalidation/)
- ["Fixing" Lists | scottohara.me](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html) - As [Adrian Roselli notes on Twitter](https://twitter.com/aardrian/status/1083889915417559040) a lack of list semantics “…may not be a big deal unless user testing says you really need a list.”

## Tools

- [SVGOMG - SVGO's Missing GUI](https://jakearchibald.github.io/svgomg/) - Optimize icon from IcoMoon.
- [Canva](https://www.canva.com/) - Design the favicon and other things.
- [Colorable](https://colorable.jxnblk.com/e7816b/1d1c1e) - Test the color contrast between the icon and the background color for the favicon.
- [Free Background Image Remover: Remove BG from HD Images Online - Erase.bg](https://www.erase.bg/) - Clear the background color of the favicon.
- [Favicon Generator for perfect icons on all browsers](https://realfavicongenerator.net/) - Generate different sizes for the favicon.
- [font-face generator](https://everythingfonts.com/font-face) - Convert `ttf` to `woff` and `woff2`.
- [Fluid type scale calculator | Utopia (Designo Settings)](https://utopia.fyi/type/calculator/?c=320,28,1.2,1350,40,1.414,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l)
- [Fluid Space Calculator | Utopia (Designo Settings)](https://utopia.fyi/space/calculator/?c=320,80,1.2,1350,140,1.25,5,2,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l)
- [Paraphrasing Tool | QuillBot AI](https://quillbot.com/) - Help me find an idea for the `meta` description for each page.
- [Grammarly: Free Online Writing Assistant](https://www.grammarly.com/) - Prevent me from doing typo and grammar errors.
- [Lingva Translate](https://lingva.ml/) - It works the same as [Google Translate](https://translate.google.com/). I used this to translate English to Bahasa Indonesia and vice versa.
- [Meta Tags — Preview, Edit and Generate](https://metatags.io/) - Preview social media cards for the website.
- [Chicago - Title Capitalization Tool - Capitalize My Title - Title Case Tool](https://capitalizemytitle.com/style/Chicago/)
- [Url Encoder - Online Tool](https://www.urlencoder.net/) - Encode the text for the 700 font weight.
- [Pixel and REM Converter](https://pixelandrem.netlify.app/) - If I forget about the pixel of value of the `clamp` functions (fluid space), I will use this tool.
- [Site-Shot - Capture a Website screenshot via API](https://www.site-shot.com/) - Take full screenshot of each page.
- [Squoosh](https://squoosh.app/) - Optimize the file sizes of the screenshots.
- [RegExr: Learn, Build, & Test RegEx](https://regexr.com/) - Improve the email regular expression by removing `{1}`.

## Validations

- [The W3C Markup Validation Service](https://validator.w3.org/)
  - [Showing results for https://officialdesigno.netlify.app/ - Nu Html Checker](https://validator.w3.org/nu/?doc=https%3A%2F%2Fofficialdesigno.netlify.app%2F)
  - [Showing results for https://officialdesigno.netlify.app/about.html - Nu Html Checker](https://validator.w3.org/nu/?doc=https%3A%2F%2Fofficialdesigno.netlify.app%2Fabout.html)
  - [Showing results for https://officialdesigno.netlify.app/locations.html - Nu Html Checker](https://validator.w3.org/nu/?doc=https%3A%2F%2Fofficialdesigno.netlify.app%2Flocations.html)
  - [Showing results for https://officialdesigno.netlify.app/contact.html - Nu Html Checker](https://validator.w3.org/nu/?doc=https%3A%2F%2Fofficialdesigno.netlify.app%2Fcontact.html)
  - [Showing results for https://officialdesigno.netlify.app/web-design.html - Nu Html Checker](https://validator.w3.org/nu/?doc=https%3A%2F%2Fofficialdesigno.netlify.app%2Fweb-design.html)
  - [Showing results for https://officialdesigno.netlify.app/app-design.html - Nu Html Checker](https://validator.w3.org/nu/?doc=https%3A%2F%2Fofficialdesigno.netlify.app%2Fapp-design.html)
  - [Showing results for https://officialdesigno.netlify.app/graphic-design.html - Nu Html Checker](https://validator.w3.org/nu/?doc=https%3A%2F%2Fofficialdesigno.netlify.app%2Fgraphic-design.html)
- [The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) - [W3C CSS Validator results for https://officialdesigno.netlify.app/ (CSS level 3 + SVG)](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fofficialdesigno.netlify.app%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- [Checklist - The A11Y Project](https://www.a11yproject.com/checklist/)
- [GTmetrix | Website Performance Testing and Monitoring](https://gtmetrix.com/) - [Latest Performance Report for: https://officialdesigno.netlify.app/ | GTmetrix](https://gtmetrix.com/reports/officialdesigno.netlify.app/oagG3cFj/)
- [PageSpeed Insights](https://pagespeed.web.dev/) - [Report for: https://officialdesigno.netlify.app/ | PageSpeed Insights](https://pagespeed.web.dev/report?url=https%3A%2F%2Fofficialdesigno.netlify.app%2F&)
- [WAVE Web Accessibility Evaluation Tools](https://wave.webaim.org/) - [WAVE Report of Craft Designs That Make Real Impact - Designo](https://wave.webaim.org/report#/https://officialdesigno.netlify.app/)
- [The Front-End Checklist - ✨ Your best Front-End Tool ✨](https://frontendchecklist.io/)
- [WebPageTest - Website Performance and Optimization Test](https://www.webpagetest.org/) - [officialdesigno.net...irginia USA - EC2 - WebPageTest Result](https://www.webpagetest.org/result/221208_BiDc43_8WC/)

## Map locations

- [3886 Wellington Street Toronto Ontario | OpenStreetMap](https://www.openstreetmap.org/search?query=3886%20Wellington%20Street%20Toronto%20Ontario#map=19/43.64651/-79.38355)
- [19 Balonne Street New South Wales | OpenStreetMap](https://www.openstreetmap.org/search?query=19%20Balonne%20Street%20New%20South%20Wales#map=17/-30.31998/149.78324)
- [13 Colorado Way United Kingdom | OpenStreetMap](https://www.openstreetmap.org/search?query=13%20Colorado%20Way%20United%20Kingdom#map=17/53.70970/-1.34114)
- [Rhyd-y-fro United Kingdom | OpenStreetMap](https://www.openstreetmap.org/search?query=Rhyd-y-fro%20United%20Kingdom#map=13/51.7372/-3.8669)

## Others

- [Frontend Mentor | Designo multi-page website coding challenge](https://www.frontendmentor.io/challenges/designo-multipage-website-G48K6rfUT)
- [Icon Font & SVG Icon Sets ❍ IcoMoon](https://icomoon.io/) - Get an icon for the website's favicon.
- [Jost - Google Fonts](https://fonts.google.com/specimen/Jost) - The font family of the website.
- [HTMLElement API: `inert` | Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/mdn-api_htmlelement_inert) - The global support for `inert` attribute is 83.95% by the time I am writing this.
- [CSS selector: Negation pseudo-class selector (`:not()`) | Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/mdn-css_selectors_not) - The global support for `:not()` pseudo-class selector is 98% by the time I am writing this.
- [CSS selector: Adjacent sibling combinator (`A + B`) | Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/mdn-css_selectors_adjacent_sibling) - The global support for adjacent sibling combinator (`+`) is 97.54% by the time I am writing this.
- [1-Line Layouts](http://1linelayouts.glitch.me/) - 10 modern CSS code snippets.
- [instant.page](https://instant.page/) - Preloaded pages when only there is a good chance that a user will visit them, and only the HTML is preloaded.
- [WICG/inert](https://github.com/WICG/inert) - Another polyfill for the `inert` attribute and property.
- [Be the browser’s mentor, not its micromanager. - Build Excellent Websites](https://buildexcellentwebsit.es/) - I often inspect the website as a guide to build Designo.
