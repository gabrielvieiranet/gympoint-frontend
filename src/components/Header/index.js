import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo-mini.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(signOut());
  }

  const profile = useSelector(state => state.user.profile);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gympoint" />
          <Link to="/students">ALUNOS</Link>
          <Link to="/plans">PLANOS</Link>
          <Link to="/registrations">MATRÍCULAS</Link>
          <Link to="/helporders">PEDIDOS DE AUXÍLIO</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <button type="button" onClick={handleSignOut}>
                sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
