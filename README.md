![](./images/banner.jpg)

<p align="left">
  <a href="https://www.frontendmentor.io/challenges?difficulties=5"><img src="https://img.shields.io/badge/Difficulty-Guru-ED2C49?style=for-the-badge&logo=frontendmentor" alt="Challenge Difficulty - Guru"></a>
  <img alt="Repo size" src="https://img.shields.io/github/repo-size/vanzasetia/designo-multi-page-website?style=for-the-badge&logo=github">
  <a href="https://twitter.com/vanzasetia"><img src="https://img.shields.io/twitter/follow/vanzasetia?logo=twitter&style=for-the-badge" alt="Twitter - Vanza Setia" /></a>
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/vanzasetia/designo-multi-page-website?style=for-the-badge&logo=git">
  <img alt="Netlify" src="https://img.shields.io/netlify/d2056645-4d19-4874-a300-ef1c292ff3a5?style=for-the-badge&logo=netlify">
  <img alt="MIT License" src="https://img.shields.io/github/license/vanzasetia/designo-multi-page-website?color=green&style=for-the-badge&logo=github">
</p>

# Designo Multi-Page Website

## Table of Contents

- [Overview](#overview)
  - [Introduction](#introduction)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgements](#acknowledgements)
- [License](#license)
- [References](#references)

## Overview

[(Back to top)](#table-of-contents)

### Introduction

I did this project to sharpen my HTML and CSS skills. It was the first time I created a 7-page website. I hoped this project proved that now I am ready to work in the professional world.

Now about this `README`, I wrote everything starting from tools that I used, useful articles, what I had learned, and much more.

### The Challenge

My challenge is to build out this multi-page website and get it looking as close to the design as possible.

My users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
  - The Name, Email Address, or Your Message fields are empty should show "Can't be empty"
  - The Email Address is not formatted correctly should show "Please use a valid email address"
- View actual locations on the locations page maps
- See visible focus states for interactive elements when navigating by keyboard
- Understand and be able to navigate page content while using assistive technology
- Access the website without JavaScript

### Links

- [Live Review](https://officialdesigno.netlify.app/)
- [Frontend Mentor Solution Page]()

## My Process

[(Back to top)](#table-of-contents)

### Built With

- HTML Semantic Tags
- [BEM (Block, Element, Modifier)](https://sparkbox.com/foundry/bem_by_example)
- [Sass](https://sass-lang.com/)
- JavaScript
- CSS Flexbox
- CSS Grid
- Fluid Typography
- Fluid Space
- Mobile-first workflow
- No-motion-first approach to animations - Learn more — [prefers-reduced-motion: Taking a no-motion-first approach to animations](https://www.tatianamac.com/posts/prefers-reduced-motion)
- [instantpage/instant.page](https://github.com/instantpage/instant.page) - Preload pages only when the users interact with the link.
- [scriptex/hover-media-query](https://github.com/scriptex/hover-media-query) - A progressively enhanced "hover" media query.
- [GoogleChrome/inert-polyfill](https://github.com/GoogleChrome/inert-polyfill) - Polyfill for the HTML `inert` attribute. (modified)

### What I Learned

#### Labeling Navigation Landmarks

It is important to know that there are two navigation landmarks. Narrator listed both navigation landmarks as "navigation". This can confuse screen reader users because they can think of it as duplicate content.

![](./screenshots/narrator-landmark-list-duplicate-navigation.png)

"If a specific landmark role is used more than once on a page, provide each instance of that landmark with a unique label." — [Landmark Regions | APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/)

I needed to label each navigation landmark so that the screen reader users can differentiate them.

```html
<!-- header navigation -->
<nav aria-labelledby="primary-navigation">
  <p id="primary-navigation" hidden>primary</p>
</nav>

<!-- footer navigation -->
<nav aria-labelledby="secondary-navigation">
  <p id="secondary-navigation" hidden>secondary</p>
</nav>
```

As a result, Narrator will read the first navigation as "primary navigation" and the second one as "secondary navigation".

![](./screenshots/narrator-landmark-list-unique-navigation.png)

For your information, I used Narrator on Edge browser.

"Narrator works best with Microsoft Edge." — [Narrator Keyboard Shortcuts | Screen Reader Keyboard Shortcuts and Gestures](https://dequeuniversity.com/screenreaders/narrator-keyboard-shortcuts)

By the way, I could use `aria-label` to do that. But, the value of it does not always get translated. So, I decided to use that approach instead.

Read more — [aria-label Does Not Translate](https://adrianroselli.com/2019/11/aria-label-does-not-translate.html)

#### Hamburger Menu Is Not The Ultimate Solution

Hamburger menu is a button with three horizontal lines. When it is clicked it opens navigation links. In this case, it is on the top right corner of a web page on mobile screen sizes.

There are pros and cons to the hamburger menu. But, one thing that is sure is that it takes at least two clicks for the users to navigate to another page.

Research shows that users prefer visible navigation than hidden navigation (like those behind a hamburger menu).

Read more — [Hamburger Menus and Hidden Navigation Hurt UX Metrics](https://www.nngroup.com/articles/hamburger-menus/)

As a developer, I prefer visible navigation. It does not need a lot of styling. It does not need JavaScript. It is less code to write.

"Less is more." — Ludwig Mies van der Rohe

#### How to Create a Hamburger Menu?

I had seen that people have two HTML markups for the navigation links. One markup for the hamburger menu and one markup for visible navigation. Usually, they have a `hide-on-desktop` and `hide-on-mobile` classes. 

The `hide-on-desktop` class has `display: none` and wraps inside a media query (assuming that they write the CSS with the mobile-first approach). Then, the `hide-on-mobile` class has `display: none` as the default styling, then switch to `display: block` to make the menu visible (it doesn't have to be `display: block`).

That was the first idea that I had when I was thinking to create the hamburger menu. But, duplicate HTML markup is not good. More code to write, more things to maintain.

So, I challenged myself to only have one HTML markup for the hamburger menu. But, how? I found the answer by trying it myself. The first thing that I did was to code the HTML without thinking about the hamburger menu. Then, I added a `<button>` above the list for the menu button.

```html
<!-- Inside the <nav> -->
<button type="button">
  <span>Menu</span>
  <img
    src="/svg/icon-hamburger.svg"
    alt=""
    width="24"
    height="20"
  />
</button>
<ul>
  <li>
    <a href="/about.html">
      Our Company
    </a>
  </li>
  <li>
    <a href="/locations.html">
      Locations
    </a>
  </li>
  <li>
    <a href="/contact.html">
      Contact
    </a>
  </li>
</ul>
```

With the following HTML markup, it was not a hamburger menu, it was a list of links. After thinking more about it, I realized that it was not about HTML. It was about the styling.

Hamburger menu was made possible by CSS. I should manipulate the look of the menu. Not the HTML. Then, I used JavaScript to toggle the visibility of the menu. So, there is no need for two HTML markups to create it.

Now, the HTML markup that I had lacked things. There was no way for screen readers to know whether the menu button was expanded or collapsed. I could improve the experience for the screen reader users by providing ARIA (Accessible Rich Internet Applications) attributes. 

I added `aria-expanded` attribute to the `<button>` to tell screen readers its state of it. By default, I set it to `false` which will tell screen readers that the menu button is collapsed.

Learn more — [`aria-expanded` - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)

```html
<button type="button" aria-expanded="false">
  <span>Menu</span>
  <img
    src="/svg/icon-hamburger.svg"
    alt=""
    width="24"
    height="20"
  />
</button>
```

Then, I added `aria-controls` to the `<button>` to tell screen readers that this button is controlling the `<ul>`.

```html
<button
  type="button"
  aria-expanded="false"
  aria-controls="menu-list"
>
  <span class="sr-only">Menu</span>
  <img
    src="/svg/icon-hamburger.svg"
    alt=""
    class="header__icon js-menu-button-icon"
    width="24"
    height="20"
    aria-hidden="true"
  />
</button>
<ul id="menu-list">
```

Next, I added `role="menu"` to the `<ul>` so the screen readers pronounce it as a menu. Then, I gave each `<li>` a `role="presentation"` to remove the list semantic meaning. Finally, I added `role="menuitem"` to each `<a>`.

```html
<ul id="menu-list" role="menu">
  <li role="presentation">
    <a href="/about.html" role="menuitem">
      Our Company
    </a>
  </li>
  <li role="presentation">
    <a href="/locations.html" role="menuitem">
      Locations
    </a>
  </li>
  <li role="presentation">
    <a href="/contact.html" role="menuitem">
      Contact
    </a>
  </li>
</ul>
```

I knew this from the Inclusive Components article to create menu.

"A true menu (in the WAI-ARIA sense) should identify itself as such using the menu role (for the container) and, typically, menuitem children (other child roles may apply). These parent and child roles work together to provide information to assistive technologies." — [Menus & Menu Buttons](https://inclusive-components.design/menus-menu-buttons/)

The example ARIA Authoring Practices Guide (APG) website does the same thing.

See the example — [Navigation Menu Button Example | APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/example-index/menu-button/menu-button-links.html)

HTML was done. Now, I needed to take care of the styling.

I needed to use fixed positioning and then style the links. Then, set the background color of the menu which was black. After that, I added some `padding` to prevent the links from touching the edges of the browser. After I had done styling the menu, I needed to hide the menu.

I noticed some people only hide the menu visually. Sometimes they set the menu to `opacity: 0` or use `transform` with `translate()` function to place it outside the browser's window. It was only visually hidden. It created issues. The menu items were still accessible with the keyboard by tabbing and screen readers.

So, I thought of two ways to make sure the menu was truly hidden. It was either to set `display: none` or `visibility: hidden`. Both will make the menu inaccessible or disappear from the accessibility tree.

Learn more about accessibility tree — [The Accessibility Tree](https://web.dev/the-accessibility-tree/)

I used `visibility` property to hide the menu. This way, I could use `transition`. Then, I set `transform: translateY(-100%)` to make it move outside of the browser's window.

```css
/* <ul id="menu-list" class="header__list" role="menu"> */
.header__list {
  transform: translateY(-100%);
  visibility: hidden;
}
```

Next, to make the menu visible, I could think of two ways. The first way, I could use JavaScript by adding a class like `is-open` to the `<ul>`. The second way, I could use the `aria-expanded` as the state and for the styling hook at the same time.

The first approach required more JavaScript. I had to use `classList` to toggle the class. While, with the second approach, I did not need to do that. I only needed to change the value of the `aria-expanded` with JavaScript and the styling would get applied.

I used the attribute selector (`[aria-expanded="true"]`) and general sibling combinator (`~`) to make the menu visible.

Learn more — [Attribute selectors - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

Learn more — [General sibling combinator - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator)

```css
/**
 * <button type="button" class="header__menu-button" aria-expanded="true">
 * <ul id="menu-list" class="header__list" role="menu">
 */
.header__menu-button[aria-expanded="true"] ~ .header__list {
  transform: translate(0);
  visibility: visible;
}
```

Once the styling was done, I wrote some JavaScript to make it work.

I grabbed the menu button, `<body>`, and `<img>` inside the menu button. The menu button was needed to toggle the `aria-expanded` value (`true` or `false`). The `<body>` was needed to prevent the page from scrolling while the menu was opened. The `<img>` inside the menu button was needed to switch the hamburger menu icon to a close icon.

Then, I also grabbed `<main>` and `<footer>` to add `inert` attribute. The purpose is to trap focus on the `<header>`. It means the users can not focus on the interactive elements outside the `<header>`.

With all those things, I managed to create the hamburger menu.

But, there is one more thing. The users can resize the browser's window. Desktop users can resize the browser's window using the cursor. Mobile users can rotate their phones to landscape mode or to portrait mode. There is a situation when the menu is opened and then the users make their screen larger than `650px`, the hamburger menu will turn into visible navigation or horizontal menu. But, the page will not be scrollable. 

Remember, I grabbed the `<body>` to prevent the page from scrolling while the menu was opened. This made the page would not be scrollable in other words, there will be no vertical scrollbar. This is a bad user experience.

The solution to that was to use a media query inside JavaScript. I used the `matchMedia()` method and then gave `(min-width: 40.625em)` as the parameter. Here is the code snippet.

```javascript
const onLargeScreen = window.matchMedia("(min-width: 40.625em)");

// Note: This is not the full code for the function
const closeMenu = () => {
  body.classList.remove("is-menu-open");
};

onLargeScreen.addEventListener("change", closeMenu);
```

So, when the users' screen size is changed, it will run the `closeMenu()` function. Then, it will remove the `is-menu-open` styling — `body.is-menu-open { overflow: hidden }`. Now, the page is scrollable when the opened hamburger menu turns into visible navigation.

#### Hamburger Menu Has a Problem

If you increase the zoom level to 250%, the "CONTACT" link is not visible. You can not scroll to see the link.

When I tried to solve this, I set an `overflow-y: auto`. The result was nothing. It did not give me a vertical scrollbar. It was because the list was not having an overflowing element. It was the `<body>` that had overflowing content.

Also, because of the way the menu is treated where the users should not be able to scroll the page while the menu is opened, I can not set `overflow-y: auto` to the `<body>` either.

So, I could not solve the issue. If anyone knows how to solve the problem or wants to discuss this with me, please do let me know. We can have a discussion on the solution page.

<!-- TODO: Add solution page URL -->

Discuss the issue with me — []()

#### Card Above Footer

![](./screenshots/card-above-footer.png)

I could think of three ways to position the card above the `<footer>`.

First, I could use relative positioning on the card to position it about the `<footer>`. But, there was one problem with this approach. I had to set a lot of `padding` on the `<footer>` to give some space for the card. This would make the spacing not consistent. I also had to calculate how much extra spacing was needed for the card.

For your information, a year ago, I was using this approach when I built "Fylo dark theme landing page".

See the solution for the challenge — [Frontend Mentor | Fylo Dark Theme Landing Page HTML5 CSS3 Sass coding challenge solution](https://www.frontendmentor.io/solutions/fylo-dark-theme-landing-page-html5-css3-sass-71fZb3LhF)

Second, I could create a pseudo-element on the card to create a black background. So, it makes the card visually above the `<footer>`. This was the worst way. Here are the proofs:

- The card was not filling the entire page on large screen sizes. The same behavior applied to its pseudo-element.
- I set `width: 100vw` and it made a horizontal scrollbar showing up.
- I set `left: -5vw` and it only looked good on my screen. Once I resized, the screen the pseudo-element became misaligned.
- I gave up.

<details>

<summary>Preview the result of the approach</summary>

![The pseudo-element is never filling the entire page and misaligned on all screen sizes](./screenshots/pseudo-element-on-the-card.gif)

</details>

Third, I used a pseudo-element from the `<footer>` to make black background below the card. This made the card visually above the `<footer>` when it was actually above the pseudo-element of the `<footer>`. Here is the CSS to create the pseudo-element:

```css
/* <footer class="footer js-landmark" role="contentinfo"> */
.footer::after {
  display: block;
  position: absolute;
  top: -9rem;
  left: 0;
  z-index: -1;
  background-color: var(--dark-grey);
  width: 100%;
  height: 100%;
  content: "";
}
```

Now, you can see the result by visiting the site. It is responsive with no media query and works on all screen sizes.

#### Fake Horizontal Rule

There is a horizontal line in the `<footer>`. It is one pixel height (`0.0625rem`) and has 10% opacity. I was hard to notice. But, it was easy to create.

I managed to create it with pseudo-element and it was responsive with no media query. Here is the code snippet:

```css
/* <div class="footer__line footer__container"> */
.footer__line::before {
  display: block;
  position: absolute;
  top: 3.75rem;
  left: 0;
  opacity: 0.1;
  background-color: var(--white);
  width: 100%;
  height: 0.0625rem;
  content: "";
}
```

#### No JavaScript, No Problem

The site can work even when the users disable JavaScript. You can try it yourself.

First, if the mobile users enable JavaScript, they get a hamburger menu. If they disable the JavaScript, they get visible navigation or a horizontal menu.

### Useful Resources

- [Ten modern layouts in one line of CSS | web.dev](https://web.dev/one-line-layouts/) - There ten modern CSS code snippets. I used the "Sidebar Says" code snippet to create the layout for the `feature__item` on the tablet design.
- [Frontend Mentor | Responsive Multi-Page Website with Grid and Flexbox coding challenge solution](https://www.frontendmentor.io/solutions/responsive-multipage-website-with-grid-and-flexbox-MgG8IlyIbc) - This is my previous solution before this one. It helped me to create the hamburger menu. I would say that my past self help me create it. So, by the time I was building it for this challenge, most of it I did copy-paste from the previous solution.

## Author

[(Back to top)](#table-of-contents)

- Frontend Mentor - [@vanzasetia](https://frontendmentor.io/profile/vanzasetia)
- Twitter - [@vanzasetia](https://twitter.com/vanzasetia)
- Code Newbie - [@vanzasetia](https://community.codenewbie.org/vanzasetia)
- Want to see me on other platforms? [Check my linktree!](https://linktr.ee/vanzasetia)

## Acknowledgements

[(Back to top)](#table-of-contents)

## License

[(Back to top)](#table-of-contents)

> You can check out [the full license](./LICENSE)

## References

[(Back to top)](#table-of-contents)

> See the [documentation.](./docs/README.md)
