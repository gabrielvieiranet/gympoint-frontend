import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function PageHeader({ children }) {
  return <Container>{children}</Container>;
}

PageHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
};

PageHeader.defaultProps = {
  children: null,
};
