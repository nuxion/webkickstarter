const {build} = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass');
const fs = require('fs');

const finalDir = './dist/';

if (!fs.existsSync(finalDir)){
    fs.mkdirSync(finalDir);
}

const options = {
  entryPoints: ['./src/index.js'],
  minify: process.env.NODE_ENV === 'production',
  sourcemap: true,
  bundle: true,
  outfile: './dist/bundle.js',
  plugins: [sassPlugin()],
};

fs.copyFile('./src/index.html', 'dist/index.html', (err) => {
  if (err) throw err;
});
fs.copyFile('./src/assets/favicon.ico', 'dist/favicon.ico', (err) => {
  if (err) throw err;
});

build(options).catch(err => {
  process.stderr.write(err.stderr);
  process.exit(1);
});

console.log('Files generated in dist/ folder');
