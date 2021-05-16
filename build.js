const {build} = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass');

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
      }
    },
  },
  outfile: './dist/bundle.js',
  plugins: [sassPlugin()],
};

build(options).catch(err => {
  process.stderr.write(err.stderr);
  process.exit(1);
});
