---
title: Organizing CSS Styles
brief: >
  Sooner or later, every web developer runs into CSS. But what follows below
  isn't about new properties or trendy CSS techniques — it's about organizing
  the styles in your application. The term "organizing styles" might sound
  grander than it actually is 😁
slug: organizing-css-styles
publishedAt: 2023-08-17T08:52:00Z
tags:
  - css
  - stylelint
lang: en
---

Sooner or later, every web developer runs into CSS. But what follows below
isn't about new properties or trendy CSS techniques (for that, there's the
wonderful [https://css-tricks.com](https://css-tricks.com/)) — it's about
organizing the styles in your application. The term "organizing styles" might
sound grander than it actually is 😁

Since time immemorial, developers have tried to turn the vast mass of selectors
and CSS files into a concise structure. Many of you have heard about CSS
organization methodologies. I won't walk through each one here, but I'll share
links for a general overview
([CSS-Tricks](https://css-tricks.com/methods-organize-css/),
[Creative Bloq](https://www.creativebloq.com/features/a-web-designers-guide-to-css-methodologies)).
As you'll see from those articles, the main methodologies are BEM, OOCSS, SMACSS,
and Atomic CSS. Yet although they've been around for as long as CSS itself,
according to the infographic from
[https://stateofcss.com](https://stateofcss.com/), optimistically no more than
two-thirds of surveyed developers have heard of them
([2019](https://2019.stateofcss.com/technologies/methodologies/),
[2020](https://2020.stateofcss.com/en-US/technologies/methodologies/)).
Fun fact: CSS methodologies were dropped from the survey starting in 2021 (or
maybe the results just hadn't been added yet?). And judging by the 2019→2020
trend, the numbers were heading down. The topic is growing less relevant for
developers these days, so there's not much point in diving into the nuances of
each methodology 👹

But the question remains open: how do you organize your styles to prevent
duplication and style overrides while maximizing reuse of what you already have?
The answer can be roughly split into two categories:

### Use ready-made frameworks ([link](https://2022.stateofcss.com/en-US/css-frameworks/) to the most popular ones in 2022)

They eliminate the need — paradoxically — to describe styles at all, which also
means there's nothing to organize. You essentially get a ready-made set of
selectors that combine well together and let you build what you have in mind.

The downside of this approach is weak flexibility and the need to hack together
workarounds for tasks that fall outside the framework's scope. It's great for
prototyping, PoCs, and projects without designer-level customizations.

### Auto-build solutions

Today, the most common approach to auto-building and generating CSS is
pre-/post-processors ([link](https://2022.stateofcss.com/en-US/other-tools/) to
the most popular in 2022) and CSS-in-JS
([link](https://2022.stateofcss.com/en-US/css-in-js/) to the most popular in
2022).

Both options are CSS turned up to the max, with all the implications, so the
downside (but is it a downside?) of this approach is that you still have to
write styles and organize how they're stored. We've come full circle to where
this post started 🙃 But it's not all bad: CSS-in-JS keeps gaining ground, and
its main advantage is the isolation of the selector namespace (solving the
style-override problem) plus the ability to use styles like regular code
(solving the duplication problem through reuse).

When it comes to organizing styles in an application, the simplest and most
powerful rule is to keep styles as close as possible to where they're used.
Ideally

- within the same folder, or even in the component file itself. Examples of
  this style of organization:
  [LogRocket](https://blog.logrocket.com/styling-react-5-ways-style-react-apps/),
  [Tania Rascia](https://www.taniarascia.com/react-architecture-directory-structure/),
  [Medium](https://medium.com/@kmathy/angular-tips-and-tricks-for-css-structure-cb73fa50f0e8).
  But every project is different, so search for what fits your situation and/or
  read the styling recommendations for your frameworks
  ([example](https://nextjs.org/docs/app/building-your-application/styling) for
  Next.js)

#### _Bonus: Stylelint_

Speaking of styles, I can't leave out [Stylelint](https://stylelint.io/). Just
like your main code, your styles deserve checks for correctness and order. If
the checking part raises no questions (the battle-tested rule set in
[`stylelint-config-standard`](https://www.npmjs.com/package/stylelint-config-standard)
is more than enough), property ordering is another story — it has been stirring
debates for more than a decade
([link](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)
to a post from 2012). And even the most popular answer, "Grouped by type", means
different things to different people.

Today there are several ordering schemes with ready-made configurations for
Stylelint. For convenience, here are the modules compared side by side on
[npmtrends](https://npmtrends.com/stylelint-config-clean-order-vs-stylelint-config-concentric-order-vs-stylelint-config-idiomatic-order-vs-stylelint-config-property-sort-order-smacss-vs-stylelint-config-rational-order-vs-stylelint-config-recess-order).
I won't go through each one, but personally I'm drawn to
[`stylelint-config-property-sort-order-smacss`](https://www.npmjs.com/package/stylelint-config-property-sort-order-smacss),
[`stylelint-config-recess-order`](https://npmjs.com/package/stylelint-config-recess-order)
and
[`stylelint-config-concentric-order`](https://www.npmjs.com/package/stylelint-config-concentric-order).
They differ in minor details but share one core idea: a property-ordering model.
First come the properties that affect how the element is laid out on the page,
followed by those that change its appearance.

Here's a ready-made configuration built on `stylelint-config-recess-order`. It
works with [`styled-components`](https://styled-components.com/) and
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
