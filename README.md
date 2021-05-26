# Simple Web builder

A template **only** to be used as a basic & simple web kickstarter. 

Framework agnostic at first, but should be easy to adapt for **react**, **alpinejs** or **vuejs**.

Based on this [article](https://stagerightlabs.com/blog/you-might-not-need-laravel-mix) I decided to have a template repository to start from. 

For now it is only for sketching componentes, layouts or testing new tools.

## Requirements

An unix like environment (MacOS, any linux, *BSD or Windows with WSL).

Tools used: 

    - ESbuild
    - Yarn
    - NodeJS
    - eslint
    - Javascript ES6
    - SASS, SCSS compilation
    - Nginx, Docker

## Features

- Alpinejs 
- tailwind.css
- automatic build.
- production tree sheeking (esbuild) and minifying(cssnano).
- nginx web server
- Watch script. 

## How it works

### Build process

The simplest way to generate a build is running `yarn run build` or `npm build`.

Other commands are:
- `yarn run watch` detects and change and build continuously.
- `yarn run web` will start a nginx server on address `127.0.0.1:3005` by default. *docker is required*.

**Where are my files?**
Files goes to `dist/` folder. 

**How can I add new files to be build?**
The entrypoint for **esbuild** to work, is `src/index.js`, every file to be built should be linked there as an import like we did for `main.scss`.

**What is the difference between build.js and watch.js**

`watch.js` only copy *.js and *.css related files, meanwhile keeps re-building it at any change made in those files, but.. doesn't update statics files like assets or `index.html`.
`src/index.html` is  provided with the css files and javascript file linked to it.

**Finally...**
Any suggestion or changes are welcome, but the scope of this project is very limited. 

## References and materials

- [Favicon generator](https://favicon.io/)
- [You might not need laravel](https://stagerightlabs.com/blog/you-might-not-need-laravel-mix)
- [Build options for ESbuild](https://github.com/evanw/esbuild/issues/39)
- [Template HTML](https://github.com/evanw/esbuild/issues/96)
- [Deploying ES2015 code today](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/)

## License

Feel free to fork or copy any part of this. See [LICENSE](LICENSE.md)
