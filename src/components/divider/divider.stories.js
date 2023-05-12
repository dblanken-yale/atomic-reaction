import tokens from '@yalesites-org/tokens/build/json/tokens.json';
import tokencss from '@yalesites-org/tokens/build/css/tokens.css';

import dividerTwig from 'Components/01-atoms/divider/yds-divider.twig';
import 'Components/01-atoms/divider/_yds-divider.scss';

const layoutOptions = ['left', 'center'];
const thicknessOptions = Object.keys(tokens.border.thickness);
const widths = Object.keys(tokens.layout.width);

export default {
  title: 'Atoms/Divider',
  argTypes: {
    thickness: {
      name: 'Line thickness',
      options: thicknessOptions,
      type: 'select',
      defaultValue: 'hairline',
    },
    dividerColor: {
      name: 'Line Color',
      options: ['gray-500', 'blue-yale', 'basic-brown-gray'],
      type: 'select',
      defaultValue: 'gray-500',
    },
    width: {
      name: 'Divider width',
      options: [...widths, 'View-All'],
      type: 'select',
      defaultValue: 'View-All',
    },
    position: {
      name: 'Divider position',
      options: layoutOptions,
      type: 'select',
      defaultValue: 'center',
    },
  },
};

export const Dividers = ({ position, thickness, dividerColor, width }) => {
  return ( 
    <div style={{'--thickness-divider': `var(--size-thickness-${thickness})`, '--color-divider': `var(--color-${dividerColor})`, '--width-divider': `var(--layout-width-${width})`}} >
      <div dangerouslySetInnerHTML={{ __html: dividerTwig({ divider__width: width, divider__position: position }) }} />
    </div>
  );
};
