import React from 'react';
import PropTypes from 'prop-types';
import CardTwig from '@molecules/cards/custom-card/yds-custom-card.twig';
import '@molecules/cards/custom-card/_yds-custom-card.scss';
import customCardData from '@molecules/cards/custom-card/custom-card.yml';

// Image atom component - generic images for demo
import imageData from '@atoms/images/image/image.yml';

export const Card = ({ heading, snippet, withImage, featured, url }) => {
  const showImage = withImage ? 'true' : 'false';
  return (
  <div className='custom-card-collection' data-component-width='site' data-collection-featured="${featured}">
    <div className='custom-card-collection__inner'>
      <ul className='custom-card-collection__cards'>
      <div dangerouslySetInnerHTML={{ __html: CardTwig({ ...imageData.responsive_images['3x2'], custom_card__heading: heading, custom_card__snippet: snippet, custom_card__image: showImage, custom_card__featured: featured, custom_card__url: url }) }} />
      </ul>
    </div>
  </div>
  );
};

Card.propTypes = {
  heading: PropTypes.string,
  snippet: PropTypes.string,
  withImage: PropTypes.bool,
  featured: PropTypes.bool,
  url: PropTypes.string,
};

Card.defaultProps = {
  heading: customCardData.custom_card__heading,
  snippet: customCardData.custom_card__snippet,
  withImage: true,
  featured: true,
  url: customCardData.custom_card__url,
};

