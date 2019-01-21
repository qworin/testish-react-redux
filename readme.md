# Test project @Webpack react minimal boilerplate

## Table of contents

[Project structure](#project-structure)

[Installation](#installation)

[Configuration](#configuration)

[Technologies used](#technologies-used)

## Project structure

```
build/
src/
|- index.jsx ____________________________ # Application entry
|- app.jsx ______________________________ # Application init
|- constants.js _________________________ # Constants exports file
|  |- components/
|    |- jobs-section/
|       |- jobs-section.jsx _____________ # A unique component
|    |- common/
|       |- input.jsx ____________________ # Generic reusable component
|  |- store/ ____________________________ # Redux store configs
|  |- reducers/ _________________________ # Redux store reducers
|    |- root-reducer.js _________________ # Root reducer to contain another ones
|  |- actions/ __________________________ # Redux store actions
|  |- styles/
|    |- global.scss _____________________ # Whole app styles
|    |- variables.scss __________________ # App theme SASS variables

webpack
|- paths.js _____________________________ # webpack paths needed
|- webpack.common.js ____________________ # common webpack config
|- webpack.dev.js _______________________ # development config
|- webpack.prod.js ______________________ # production config
```

## Installation

1. Clone repo `git clone https://github.com/qworin/testish-react-redux.git`.

2. `npm install` or `yarn` to install npm packages.

3. start dev server using `npm start` or `yarn start`.

4. build and bundling your resources for production `npm run build` or `yarn build`.

## Configuration

- Webpack Config paths based on your file structure you can go to `webpack/paths.js` and modify the source and file names based on your need.
- `webpack/webpack.common.js` config common webpack for both dev and production environments.
- webpack/webpack.dev.js config webpack for dev environment.
- `webpack/webpack.prod.js` config webpack for production environment.
- `/webpack.config.js` main webpack config that merge common and webpack environment based config.
- Enzyme config `/setupTest.js` here you will have all setup for enzyme to test your component.
- Prettier config `/.prettierc`.
- Browsers list config `/.browserslistrc`.

## Technologies used

- [Webpack 4](https://github.com/webpack/webpack)
- [Babel 7](https://github.com/babel/babel) [ transforming JSX and ES6,ES7,ES8 ]
- [React](https://github.com/facebook/react) `16.6`
- [Lodash](https://github.com/lodash/lodash)
- [Enzyme](http://airbnb.io/enzyme/) for UI testing.
- [Eslint](https://github.com/eslint/eslint/) with airbnb config
- [Prettier](https://github.com/prettier/prettier) [ Code formatter ]
- [Style](https://github.com/webpack-contrib/style-loader) & [CSS Loader](https://github.com/webpack-contrib/css-loader) & [SASS-loader](https://github.com/webpack-contrib/sass-loader)
- [CSS modules](https://github.com/css-modules/css-modules) [ Isolated style based on each component ]
- [Browsers list](https://github.com/browserslist/browserslist) [ Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env ]
- [React hot loader](https://github.com/gaearon/react-hot-loader)
- [Webpack dev serve](https://github.com/webpack/webpack-dev-server)
