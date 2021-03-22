# Michiel Leunens -- Next.js template

This is an opinionated starter template in `Next.js v10` which uses all best practices as of 2021. This way you can churn more (static) websites with less code.

> :bulb: This project contains a lot of custom components. Everything is loosely coupled, so you can easily delete what you don't need. :warning: **IE11 is not supported**.

## Current Features :fire:

### Development

- :white_check_mark: Typescript
- :white_check_mark: Yarn
- :white_check_mark: ES-Lint / Prettier
- :white_check_mark: Husky
- :white_check_mark: Correct `*.ignore`
- :white_check_mark: `env`-variables

### Theming & Styles

- :white_check_mark: `scss`-modules
- :white_check_mark: Modern `reset.scss`
- :x: Fully featured design-system _(colors, typography,...)_
- :white_check_mark: Theming with `next-theming` (Complete with dark theme)
- :x: Animations with `Framer Motion`
- :x: Easy class toggling

### Components & Functionalities

- :x: Responsive skeleton
- :x: Dynamic layout
- :x: SEO-wrapper
- :x: Cookie consent
- :x: Internationalization (i18n)
- :x: Form validation
- :x: 404 page
- :x: Error page
- :x: Thank you page (forms)
- :x: Inline SVG support

### UI-components

- :x: Navigation
- :x: Footer
- :x: Modern, accessible Modal
- :x: Snackbar
- :x: Logo
- :x: Button
- :x: Links
- :x: Form
- :x: Input fields w/ checkbox and switch
- :x: Loading Placeholder
- :x: Spinner
- :x: Responsive Grid-system

### Other

- :x: `sitemap.xml`
- :x: `robots.txt`
- :x: SEO optimizations with custom image
- :x: Web manifest
- :x: Scaled favicons
- :x: Dynamic imports
- :x: Smooth scrolling with polyfill
- :x: Lighthouse optimizations
- :x: Chrome transitions bug fix
- :x: Inter-OS compatibility (no weird styling issues between MacOs & Windows)
- :x: Inter-browser compatibility
- :x: IE-11 no-support warning
- :x: Caching
- :x: Cookie management

### Maybe

- :x: Carousel
- :x: Page-transitions
- :x: Mapbox
- :x: Client-Authentication

## Getting Started

First, run the development server:

```bash
yarn dev
```

To run a production build, run:

```bash
yarn build
yarn start
```

## Formatting and Linting

This template makes use of `Husky`, which will run `es-lint` and `prettier` automatically before each commit.
In case you want to run these commands manually, you can do as follows:

```bash
yarn lint
```

```bash
yarn format
```

## Theming

This projects makes use of `next-theming`, which is a handly lightweight plugin that takes care of all modern theming-relatable features and fixes SSR hydratation problems.
To define a new theme, navigate to `styles/theme`. In the `colors` subfolder, make a `_paletteThemeName.scss`. Then make a `_theme.scss file` in the `theme` root.

Define your variables like this:

```scss
@use 'colors/paletteThemeName';

[data-theme='myTheme'] {
  --primary: #{paletteLight.$myColor};
  ...
}
```

The variables will overwrite those defined in `_light.scss`, which is the default theme.
Lastly, navigate to `pages/_app.tsx` and add your theme to the `ThemeProvider.themes` array.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
