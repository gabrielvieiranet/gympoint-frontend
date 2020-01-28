import styled from 'styled-components';
import { Dialog } from '@reach/dialog';

export const Container = styled(Dialog)`
  border-radius: 4px;
  text-align: center;

  h1 {
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }

  button {
    margin: 0 10px;
  }
`;
