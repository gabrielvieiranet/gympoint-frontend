import React from 'react';
import PropTypes from 'prop-types';

import { MdSentimentVerySatisfied } from 'react-icons/md';

import { Container } from './styles';

export default function PageContent({ children, loading }) {
  return (
    <Container>
      {loading ? (
        <MdSentimentVerySatisfied size={36} color="#ee4d64" />
      ) : (
        children
      )}
    </Container>
  );
}

PageContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
  loading: PropTypes.bool,
};

PageContent.defaultProps = {
  children: null,
  loading: false,
};
