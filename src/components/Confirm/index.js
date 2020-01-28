import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import ButtonDefault from '~/components/ButtonDefault';

export default function ConfirmStatusChange({ children, title, description }) {
  const [open, setOpen] = useState(false);
  const [callback, setCallback] = useState(null);
  const [param, setParam] = useState(null);

  const show = (cb, pr) => {
    setOpen(true);
    setCallback(() => cb);
    setParam(pr);
  };

  const hide = () => {
    setOpen(false);
    setCallback(null);
    setParam(null);
  };

  const confirm = () => {
    if (callback) callback(param);
    hide();
  };

  return (
    <>
      {children(show)}

      {open && (
        <Container aria-label="dialog">
          <h1>{title}</h1>
          <p>{description}</p>

          <ButtonDefault type="button" onClick={hide} alternative>
            Cancelar
          </ButtonDefault>
          <ButtonDefault type="button" onClick={confirm}>
            OK
          </ButtonDefault>
        </Container>
      )}
    </>
  );
}

ConfirmStatusChange.propTypes = {
  children: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
};

ConfirmStatusChange.defaultProps = {
  children: null,
  title: '',
  description: '',
};
