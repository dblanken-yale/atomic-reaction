import React from 'react';
import PropTypes from 'prop-types';
import DividerTwig from '@yalesites-org/component-library-twig/components/01-atoms/divider/yds-divider.twig';
import '@yalesites-org/component-library-twig/components/01-atoms/divider/_yds-divider.scss';

export const Divider = ({ thickness, color, width, position }) => {
  return (
    <div data-component-width="site">
      <div style={{ "--color-divider": `var(--color-${color})`, '--width-theme-divider': `var(--layout-width-${width})`, '--thickness-divider': `var(--size-thickness-${thickness})` }} dangerouslySetInnerHTML={{ __html: DividerTwig({ thickness, color, 'divider__width': width, 'divider__position': position, 'divider__component__width': 'site' }) }} />
    </div>
  );
};

Divider.propTypes = {
  thickness: PropTypes.oneOf(['1', '2', '4', '6', '8', 'hairline']),
  color: PropTypes.oneOf(['gray-500', 'blue-yale', 'basic-brown-gray']),
  width: PropTypes.oneOf(['25', '50', '75', '100']),
  position: PropTypes.oneOf(['left', 'center']),
};

Divider.defaultProps = {
  thickness: 'hairline',
  color: 'gray-500',
  width: '100',
  position: 'center',
};
