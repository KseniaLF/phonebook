import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormWrapper = styled(Form)`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  font-size: 25px;

  button {
    margin: 0 auto;
    width: 200px;
    padding: 10px;

    font-size: 20px;
    color: #fff;

    background-color: #1c1c80;
    border-radius: 5px;

    cursor: pointer;
    transition: all 300ms ease;

    :hover {
      background-color: #1c1c80e5;
    }
  }
`;

export const Input = styled(Field)`
  padding: 10px;
  border-radius: 5px;

  font-size: 20px;

  :focus {
    outline: 1px solid #1c1c80;
  }
`;
