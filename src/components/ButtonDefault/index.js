import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

export default function ButtonDefault({ children, alternative, onClick }) {
  return (
    <Button onClick={onClick} alternative={alternative}>
      {children}
    </Button>
  );
}

ButtonDefault.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
  alternative: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonDefault.defaultProps = {
  children: null,
  alternative: false,
  onClick: null,
};
