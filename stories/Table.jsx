import React from 'react';
import PropTypes from 'prop-types';
import TableTwig from '@atoms/tables/example-tables.twig';
import '@atoms/tables/_table.scss';

export const Table = (props) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: TableTwig() }} />
  );
};
