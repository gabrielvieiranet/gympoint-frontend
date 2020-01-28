import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  background: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 50px 30px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      display: flex;
      flex-direction: column;
      text-align: left;
      text-transform: uppercase;
      font-weight: bold;
      color: #444;
      margin-bottom: 10px;
    }

    input {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #444;
      margin: 5px 0 10px;

      &::placeholder {
        color: #999;
      }
    }

    span {
      color: #ee4d64;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #ee4d64;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#ee4d64')};
      }
    }
  }
`;
