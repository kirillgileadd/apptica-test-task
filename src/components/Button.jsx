import * as React from 'react';
import {styled} from "@mui/material";
import ButtonUnstyled, {buttonUnstyledClasses} from "@mui/base/ButtonUnstyled";

const blue = {
    500: '#007FFF',
};

const CustomButtonRoot = styled('button')`
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  font-size: 0.875rem;
  background-color: #fff;
  padding: 5px 18px;
  border-radius: 5px;
  text-transform: uppercase;
  color: ${blue[500]};
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  

  &.${buttonUnstyledClasses.active} {
    transform: translateY(1px);
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export function CustomButton(props) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}