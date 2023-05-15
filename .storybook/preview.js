import { useEffect } from '@storybook/client-api';
import Twig from 'twig';
import { setupTwig } from './setupTwig';
import '@yalesites-org/component-library-twig/dist/style.css';

import './_drupal.js';

setupTwig(Twig);

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    (Story) => {
      const searchParams = new URLSearchParams(window.location.search);
      useEffect(() => Drupal.attachBehaviors(), [searchParams]);
      return (<Story />);
    },
  ],
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
