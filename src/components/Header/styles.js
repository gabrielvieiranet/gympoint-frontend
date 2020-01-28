import styled from 'styled-components';

export const Container = styled.div`
  height: 64px;
  background: #fff;
  padding: 0 30px;
  border-bottom: 1px solid #ddd;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 30px;
      padding-right: 30px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #999;
      margin-right: 20px;
    }

    aside {
      display: flex;
      align-items: center;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  padding-left: 20px;

  div {
    text-align: right;

    strong {
      display: block;
      color: #666;
    }

    button {
      display: block;
      margin-top: 2px;
      font-size: 14px;
      color: #ee4d64;
      border: none;
      background: transparent;
    }
  }
`;
