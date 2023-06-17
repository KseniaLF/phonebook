import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 15px;
  border-bottom: 3px solid black;

  font-size: 20px;

  nav {
    display: flex;
    gap: 20px;

    a {
      color: black;
      text-decoration: none;
    }
  }

  > div {
    display: flex;
    gap: 20px;
  }
`;

export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;
