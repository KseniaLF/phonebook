import styled from 'styled-components';
import { SlMagnifier } from 'react-icons/sl';

export const Label = styled.label`
  position: relative;
  p {
    font-size: 25px;
  }

  input {
    font-size: 25px;
    border-radius: 5px;
    padding: 5px 10px;
    outline: none;
    margin-bottom: 20px;

    :focus {
      box-shadow: 0px 0px 5px black;
    }
  }
`;

export const Magnifier = styled(SlMagnifier)`
  width: 20px;
  position: absolute;
  right: 10px;
  bottom: 1px;
`;
