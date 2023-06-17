import styled from 'styled-components';

export const ContactContainer = styled.div`
  margin-top: 15px;
  li {
    display: flex;
    justify-content: space-between;
    font-size: 25px;
    padding: 5px 10px;
    border-radius: 5px;
    :nth-child(2n + 1) {
      background-color: #8387d186;
    }
    :nth-child(2n + 2) {
      background-color: #babcdc86;
    }
    :not(:last-child) {
      margin-bottom: 5px;
    }
  }
`;

export const DeteleBtn = styled.button`
  display: flex;
  align-items: center;

  font-size: 25px;
  border-radius: 5px;
  background-color: #8387d186;
  border: 1px solid black;
  cursor: pointer;
  margin-left: 10px;

  :hover {
    box-shadow: 0px 0px 10px black;
  }
`;
