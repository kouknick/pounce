/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const shouldForwardProp = require('@styled-system/should-forward-prop');

module.exports = {
  require: [path.join(__dirname, 'styleguide.setup.js')],
  template: {
    favicon: 'https://dashboard.runpanther.io/favicon.ico',
  },
  styleguideComponents: {
    // Component to wrap around every individual example
    Wrapper: path.join(__dirname, 'src/utils/StyleguidistWrapper'),
  },
  title: 'Pounce UI Docs',
  pagePerSection: true,
  usageMode: 'expand',
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', {
    propFilter: prop => {
      const hasDescription = prop.description;
      const isAria = prop.name.includes('aria-');
      const isSystem = shouldForwardProp.props.includes(prop.name);

      return hasDescription && !isAria && !isSystem;
    },
  }).parse,
  components: 'src/components/**/[A-Z]*.tsx',
  getExampleFilename: componentPath => componentPath.replace('.tsx', '.mdx'),
  ignore: ['src/components/**/Base[A-Z]*.{ts,tsx}'],
  styleguideDir: '.styleguidist',
  serverPort: 9000,
  webpackConfig: {
    devtool: 'cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
};
