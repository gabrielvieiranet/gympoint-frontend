/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispath = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispath(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Gympoint" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="email">
          Seu e-mail
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Seu e-mail"
          />
        </label>
        <label htmlFor="password">
          Sua senha
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Sua senha"
          />
        </label>
        <button type="submit">
          {loading ? 'Carregando...' : 'Entrar no sistema'}
        </button>
      </Form>
    </>
  );
}
