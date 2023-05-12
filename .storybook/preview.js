import Twig from 'twig';
import { setupTwig } from './setupTwig';
import '@yalesites-org/component-library-twig/dist/style.css';

setupTwig(Twig);

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
