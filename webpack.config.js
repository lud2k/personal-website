module.exports = {
  entry: './src/index.tsx',
  target: 'web',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          '@teamsupercell/typings-for-css-modules-loader',
          'css-loader?modules',
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          configFileName: 'tsconfig.json',
        },
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
      },
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
}
