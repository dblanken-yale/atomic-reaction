const globImporter = require('node-sass-glob-importer');
import path from 'path';
const stylesHandler = "style-loader";

module.exports = async ({ config }) => {
  // Twig
  config.module.rules.push({
    test: /\.twig$/,
    use: [
      {
        loader: 'twig-loader',
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

  // Component alias
  config.resolve.alias.Components = path.resolve(__dirname, "..", "node_modules/@yalesites-org/component-library-twig/components/");

  return config;
};
