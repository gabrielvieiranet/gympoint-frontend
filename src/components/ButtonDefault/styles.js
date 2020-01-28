import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  height: 36px;
  padding: 0 16px;
  background: ${props => (props.alternative ? '#ccc' : '#ee4d64')};
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background 0.2s;

  &:hover {
    background: ${props =>
      props.alternative ? darken(0.05, '#ccc') : darken(0.05, '#ee4d64')};
  }
`;
