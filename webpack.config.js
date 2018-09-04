var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
    resolve: {
        alias: {
            'react': path.resolve(__dirname, './node_modules/react') ,
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
            // 'Observable': path.resolve(__dirname, './node_modules/rxjs/Observable'),
            'rxjs': path.resolve(__dirname, './node_modules/rxjs'),
            'prop-types': path.resolve(__dirname, './node_modules/prop-types'),
            // 'react-pure-time': path.resolve(__dirname, './node_modules/react-pure-time'),
            'qs': path.resolve(__dirname, './node_modules/qs'),
            'normalizr': path.resolve(__dirname, './node_modules/normalizr'),
            'lodash': path.resolve(__dirname, './node_modules/lodash'),
            // 'mergeMap': path.resolve(__dirname, './node_modules/rxjs/operator/mergeMap'),
            // 'of': path.resolve(__dirname, './node_modules/rxjs/observable/of')
        }
    },
  externals: {
    'react': 'commonjs react',
    'react-dom': 'commonjs react-dom',
    'prop-types': 'commonjs prop-types',
    // 'react-pure-time': 'commonjs react-pure-time',
    'qs': 'commonjs qs',
    // 'lodash': {
    //   commonjs: 'lodash',
    //   amd: 'lodash',
    //   root: '_' // indicates global variable
    // },
    'lodash/get': 'commonjs lodash/get',
    'normalizr': 'commonjs normalizr',
    'rxjs': 'commonjs rxjs',
    'rxjs/Observable': 'commonjs rxjs/Observable',
    'rxjs/operator/mergeMap': 'commonjs rxjs/operator/mergeMap',
    'rxjs/operator/concatMap': 'commonjs rxjs/operator/concatMap',
    'rxjs/operator/switchMap': 'commonjs rxjs/operator/switchMap',
    'rxjs/operator/map': 'commonjs rxjs/operator/map',
    'rxjs/operator/takeUntil': 'commonjs rxjs/operator/takeUntil',
    'rxjs/operator/filter': 'commonjs rxjs/operator/filter',
    'rxjs/observable/of': 'commonjs rxjs/observable/of',
  }
};
