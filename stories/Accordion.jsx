import React from 'react';
import PropTypes from 'prop-types';
import AccordionTwig from '@molecules/accordion/yds-accordion.twig';
import '@molecules/accordion/yds-accordion.js';
import '@molecules/accordion/_yds-accordion.scss';

export const Accordion = ({ content, heading }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: AccordionTwig({
      'accordion__items': [
        {
          'accordion__item__heading': heading,
          'accordion__item__content': content,
        },
        {
          'accordion__item__heading': heading,
          'accordion__item__content': content,
        },
        {
          'accordion__item__heading': heading,
          'accordion__item__content': content,
        },
      ]
    }) }} />
  );
};

Accordion.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
}

Accordion.defaultProps = {
  heading: 'Art Collections',
  content: '<p>The Yale Center for British Art will present <em><a href="https://britishart.yale.edu/exhibitions-programs/bridget-riley-perceptual-abstraction">Bridget Riley: Perceptual Abstraction</a></em> from March 3 through July 24, 2022. Born in Britain in 1931, Riley is among the most important and influential painters in Britain and the world. Displayed on two floors, this major survey traces Riley’s oeuvre from the 1960s through the present by featuring over fifty works that were selected by the artist in collaboration with the YCBA.</p><p>Also, revisit an exhibition hosted at the Yale University Art Gallery, <a href="https://artgallery.yale.edu/exhibitions/exhibition/basis-art-150-years-women-yale">On the Basis of Art: 150 Years of Women at Yale</a>, including a related audio guide, publication, and more.</p>',
}
