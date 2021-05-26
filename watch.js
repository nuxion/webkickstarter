// standard
const fs = require('fs');
// esbuild
const {build} = require('esbuild');
// CSS
const postCssPlugin = require("./plugins/postcss3.js");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const atImport = require("postcss-import");
// html
const finalDir = './dist/';

if (!fs.existsSync(finalDir)){
    fs.mkdirSync(finalDir);
}

const cssPlugins = [atImport, tailwindcss, autoprefixer, cssnano];
//const cssFile = fs.readFileSync("./src/tailwind.css", "utf8");

/*postcss(cssPlugins).process(cssFile,{ from: './src/tailwind.css', to: './dist/tailwind.css', }).then(result => {
  console.log(result.css);
});*/

const options = {
  entryPoints: ['./src/index.js'],
  minify: process.env.NODE_ENV === 'production',
  sourcemap: true,
  bundle: true,
  watch: {
    onRebuild: function(error, result) {
      if (error){
        console.error('watch build failed:', error);
      } else {
        console.log('watch build succeeded:', result);
        fs.copyFile('./src/index.html', 'dist/index.html', (err) => {
          if (err) throw err;
        });
        console.log("HTML copied");
      }
    },
  },
  // outdir: 'dist',
  outfile: './dist/bundle.js',
  plugins: [
    // sassPlugin(),'
    postCssPlugin({ plugins: cssPlugins}),
      ],
};

build(options).catch(err => {
  process.stderr.write(err.stderr);
  process.exit(1);
});
