const path = require('path');

module.exports = {
   entry: {
      'CanvasTools': './src/canvas-tools.ts'
   },
   devtool: 'inline-source-map',
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         }
      ],
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
   },
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      libraryTarget: 'umd',
      library: 'CanvasTools',
      umdNamedDefine: true
   },
   optimization: {
      minimize:true,
   }
};