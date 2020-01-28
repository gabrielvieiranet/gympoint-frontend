import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 4px;
  text-align: center;

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  & > svg {
    margin: auto;
    animation: rotating 1s linear infinite;
  }

  p {
    color: #999;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    thead th {
      color: #444;
      text-align: left;
      text-transform: uppercase;
      font-size: 16px;
      padding: 16px 0;
    }

    tbody td {
      color: #666;
      font-size: 16px;
      padding: 16px 0;
      border-top: 1px solid #eee;
      text-align: left;
    }

    a {
      font-size: 15px;
      color: #4d85ee;
      border: none;
      background: transparent;
    }

    button {
      display: inline;
      font-size: 15px;
      color: #ee4d64;
      border: none;
      background: transparent;
      margin-left: 23px;
    }
  }
`;
