React + Redux + Webpack Boilerplate
=======================================

Base project for setting up a frontend application using React and Redux.

Requirements
------------

* node `^4.2.0`
* npm `^3.0.0`

Installation
--------------------------------------
* npm install

Running the Dev Server
--------------------------------------
After setting up the project, type `npm run dev` to start the webpack dev server.

Visit http://localhost:8080/

Test
--------------------------------------
After setting up the project, type `npm test` to start Karma and run tests.

Compiling for production
---------------------------------------
To compile the Javascript bundle for production, use `npm run build`.

Getting Started
---------------

Just clone the repo and install the necessary node modules:

```shell
$ git clone https://github.com/maro1987/react-redux-starter-boilerplate.git
$ cd react-redux-starter-boilerplate
$ npm install                   # Install Node modules listed in ./package.json (may take a while the first time)
```

Features
--------

* [React](https://github.com/facebook/react) (`^0.14.7`)
* [Redux](https://github.com/rackt/redux) (`^3.3.1`)
  * react-redux (`^4.4.0`)
  * redux-devtools
  * redux-thunk middleware
* [react-router](https://github.com/rackt/react-router) (`^2.0.0`)
* [react-router-redux](https://github.com/rackt/react-router-redux) (`^4.0.0`)
* [Webpack](https://github.com/webpack/webpack)
  * Bundle splitting and CSS extraction
  * Sass w/ CSS modules, autoprefixer, and minification
* [Karma](https://github.com/karma-runner/karma)
  * Mocha w/ chai, sinon-chai, and chai-as-promised, and [chai-enzyme](https://github.com/producthunt/chai-enzyme)
  * Enzyme https://github.com/airbnb/enzyme
  * PhantomJS
  * Code coverage reports/instrumentation with [isparta](https://github.com/deepsweet/isparta-loader)
* [Babel](https://github.com/babel/babel) (`^6.5.1`)
  * [react-transform-hmr](https://github.com/gaearon/react-transform-hmr) hot reloading for React components
  * [babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime) so transforms aren't inlined
  * [babel-plugin-rewire](https://github.com/speedskater/babel-plugin-rewire)
* [SASS-LOADER](https://github.com/jtangelder/sass-loader) (`^3.1.2`)
* [ESLint](http://eslint.org)
  * Uses [Standard Style](https://github.com/feross/standard) by default, but you're welcome to change this.
