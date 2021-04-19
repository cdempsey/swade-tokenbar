const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const project = require('./package.json');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

function transform(content) {
    return content.toString()
        .replace(/\$\{project.name\}/g, project.name)
        .replace(/\$\{project.version\}/g, project.version);
}

module.exports = {
  entry: './src/main.ts',
  mode: mode,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: `${project.name}.bundle.js`,
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
            from: path.resolve(__dirname, 'src', 'module.json'),
            to: path.resolve(__dirname, 'dist'),
            transform: {
                transformer(content, absoluteFrom) {
                    return transform(content);
                },
            }
        },
        { from: path.resolve(__dirname, 'src', 'lang'), to: path.resolve(__dirname, 'dist', 'lang') },
      ],
    })
  ],
};
