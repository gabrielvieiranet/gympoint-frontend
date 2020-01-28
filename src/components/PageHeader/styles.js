import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  div > * {
    margin-left: 16px;
  }

  div {
    label {
      position: relative;

      svg {
        position: absolute;
        top: 2px;
        left: 12px;
      }

      input {
        border: 1px solid #ddd;
        border-radius: 4px;
        height: 36px;
        padding: 0 15px 0 36px;
        color: #444;
        background: #fff;

        &::placeholder {
          color: #999;
        }
      }
    }
  }
`;
