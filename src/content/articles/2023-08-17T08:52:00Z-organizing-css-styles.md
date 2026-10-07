---
title: Organizing CSS Styles
brief: >
  Any web developer sooner or later encounters CSS. But what follows below is
  not about new properties or trendy CSS techniques, but about organizing styles
  in your application. Perhaps the term organizing styles might sound grander
  than it actually is
slug: organizing-css-styles
publishedAt: 2023-08-17T08:52:00Z
tags:
  - css
  - stylelint
lang: en
---

Any web developer sooner or later encounters CSS. But what follows below is not
about new properties or trendy CSS techniques (for that, there's the wonderful
[https://css-tricks.com](https://css-tricks.com/)), but about organizing styles
in your application. Perhaps the term "organizing styles" might sound grander
than it actually is

Since time immemorial, developers have tried to turn the vast mass of selectors
and CSS files into a concise structure. Many of you have heard about CSS
organization methodologies. I won't go through and explain each one here, but
I'll provide links for general overview
([link1](https://css-tricks.com/methods-organize-css/),
[link2](https://www.creativebloq.com/features/a-web-designers-guide-to-css-methodologies)).
As seen from the articles, the main methodologies are BEM, OOCSS, SMACSS, and
Atomic CSS. But despite existing for as long as CSS itself, according to the
infographic from [https://stateofcss.com](https://stateofcss.com/),
optimistically no more than 2/3 of surveyed developers know about them
([link1](https://2019.stateofcss.com/technologies/methodologies/),
[link2](https://2020.stateofcss.com/en-US/technologies/methodologies/)).
Interestingly, CSS methodologies were excluded from the survey starting in 2021
(or maybe the results just hadn't been added yet?). But looking at the
2019->2020 trend, it's declining. The topic is becoming less relevant for
developers today, so there's not much point in diving deep into the nuances of
each methodology

But the question remains open - how do you organize your styles to prevent
duplication, style overrides, and maximize reuse of existing ones? The answer
can be roughly divided into two categories:

### Use ready-made frameworks ([link](https://2022.stateofcss.com/en-US/css-frameworks/) to the most popular ones in 2022)

They eliminate the need, paradoxically, to describe styles at all, and
consequently there's no need to organize them in any way. Essentially, you
already have a ready-made set of selectors that combine well with each other and
allow you to implement your ideas.

The downside of this approach is weak flexibility and the need to hack together
solutions for tasks that go beyond the framework. This approach is great for
prototyping, PoC, and projects without designer-level customizations.

### Auto-build solutions

Currently, the most common approach to auto-building and generating CSS is
pre-/post-processors ([link](https://2022.stateofcss.com/en-US/other-tools/) to
the most popular in 2022) and CSS-in-JS
([link](https://2022.stateofcss.com/en-US/css-in-js/) to the most popular in
2022).

Both options are CSS at its maximum with all the implications, so the downside
(but is it a downside?) of this approach is the need to describe styles and
organize their storage. We've come full circle from where we started the post
But it's not all bad, because there's an increasing preference for CSS-in-JS,
and its main advantage is the isolation of the selector namespace (solving the
style override problem) and the ability to use styles like regular code (solving
the duplication problem with the addition of style reuse).

Regarding organizing styles in an application: the simplest and most powerful
structure is to keep styles as close as possible to where they're used. Ideally

- within the same folder or in the component file. Examples of such style
  organizations:
  [link1](https://blog.logrocket.com/styling-react-5-ways-style-react-apps/),
  [link2](https://www.taniarascia.com/react-architecture-directory-structure/),
  [link3](https://medium.com/@kmathy/angular-tips-and-tricks-for-css-structure-cb73fa50f0e8).
  But projects are all different, so google specifically for your situation
  and/or read the style recommendations for your frameworks
  ([example](https://nextjs.org/docs/app/building-your-application/styling) for
  next.js)

#### _Bonus: Stylelint_

Speaking of styles, one can't fail to mention
[Stylelint](https://stylelint.io/). Like the main code, the described styles
need to be checked for correctness and orderliness. If the question of checking
doesn't cause problems (since it's quite sufficient to use
[`stylelint-config-standard`](https://www.npmjs.com/package/stylelint-config-standard)
with its already battle-tested set of rules), then with property ordering
everything is not so straightforward, as it has been troubling minds for more
than one decade
([link](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)
to a post from 2012). But under the most popular "Grouped by type", everyone
understands it differently.

Today there are several variants of style ordering with ready-made
configurations for Stylelint. For convenience, I'll provide links to the modules
in an infographic on
[npmtrends](https://npmtrends.com/stylelint-config-clean-order-vs-stylelint-config-concentric-order-vs-stylelint-config-idiomatic-order-vs-stylelint-config-property-sort-order-smacss-vs-stylelint-config-rational-order-vs-stylelint-config-recess-order).
I won't describe each one, but personally I'm most drawn to
[`stylelint-config-property-sort-order-smacss`](https://www.npmjs.com/package/stylelint-config-property-sort-order-smacss),
[`stylelint-config-recess-order`](https://npmjs.com/package/stylelint-config-recess-order)
and
[`stylelint-config-concentric-order`](https://www.npmjs.com/package/stylelint-config-concentric-order).
They differ in minor details, but they share a common idea - the model of
property ordering. First come the properties that affect how the element is laid
out on the page, followed by properties that change the element's appearance.

Example of a ready configuration using `stylelint-config-recess-order`.
Applicable for [`styled-components`](https://styled-components.com/) and
[`emotion`](https://emotion.sh/):

```js title="stylelint.config.cjs"
/**
 *
 * @type {import('stylelint').Config}
 */
module.exports = {
  customSyntax: "postcss-styled-syntax",
  extends: [
    "stylelint-config-standard",
    "stylelint-config-styled-components",
    "stylelint-config-recess-order",
    "stylelint-prettier/recommended",
  ],
  plugins: ["stylelint-csstree-validator"],
  rules: {
    "csstree/validator": {
      syntaxExtensions: ["sass"],
    },
  },
};
```
