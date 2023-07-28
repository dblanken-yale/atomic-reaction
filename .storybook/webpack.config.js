const globImporter = require('node-sass-glob-importer');
const { namespaces } = require('./setupTwig');
const { resolve } = require('path');

module.exports = async ({ config }) => {
  // Twig
  config.module.rules.push({
    test: /\.twig$/,
    use: [
      {
        loader: 'twig-loader',
        options: {
          twigOptions: {
            namespaces,
          },
        },
      },
    ],
  });

  // SCSS
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          sassOptions: {
            importer: globImporter(),
          },
        },
      },
    ],
  });

  // YAML
  config.module.rules.push({
    test: /\.ya?ml$/,
    loader: 'js-yaml-loader',
  });

  // Aliases
  config.resolve.alias = {
    ...config.resolve.alias,
    '@atoms': resolve(__dirname, '../', 'node_modules/@yalesites-org/component-library-twig/components/01-atoms'),
    '@molecules': resolve(__dirname, '../', 'node_modules/@yalesites-org/component-library-twig/components/02-molecules'),
    '@organisms': resolve(__dirname, '../', 'node_modules/@yalesites-org/component-library-twig/components/03-organisms'),
    '@page-layouts': resolve(__dirname, '../', 'node_modules/@yalesites-org/component-library-twig/components/04-page-layouts'),
    '@page-examples': resolve(__dirname, '../', 'node_modules/@yalesites-org/component-library-twig/components/05-page-examples'),
  };

  // Set resolve fallback for fs to false
  config.resolve.fallback = {
    fs: false,
    stream: require.resolve("stream-browserify"),
    constants: require.resolve("constants-browserify")
  };

  return config;
};

