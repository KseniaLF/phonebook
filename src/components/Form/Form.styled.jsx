import { Form, ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;

  p {
    font-size: 25px;
  }

  button {
    font-size: 25px;
    border-radius: 5px;
    padding: 10px;
    background-color: #8387d186;
    border: 1px solid black;
    cursor: pointer;

    :hover {
      box-shadow: 0px 0px 10px black;
    }
  }
`;

export const Input = styled(Field)`
  font-size: 25px;
  border-radius: 5px;
  padding: 10px;
  outline: none;

  :focus {
    box-shadow: 0px 0px 5px black;
  }
`;

export const Errorform = styled(ErrorMessage)`
  color: tomato;
  margin: 0;
  font-size: 25px;
`;
