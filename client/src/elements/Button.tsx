import React, { ReactNode } from 'react'
import styled from "styled-components";
// import { ButtonHTMLAttributes } from "react";

interface Props {
  width: string,
  height: string,
	type: "button" | "submit",
  // onClickButton: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  onClickButton: any;
  disabled: boolean;
  children: ReactNode;
}

const Button = (props: Props) => {
  const {
    width,
    height,
    type,
    disabled,
    onClickButton,
    children,
  } = props;
  const styles = { width, height };
  return (
    <ButtonBox
      {...styles}
      type={type}
      disabled={disabled}
      onClick={(e) => onClickButton(e)}
    >
      {children}
    </ButtonBox>
  )
}

Button.defaultProps = {
  width: "80 vw",
  height: "40px",
  type: "button",
  disabled: false,
  onClickButton: null,
}

const ButtonBox = styled.button<{ width: string, height: string}>`
	width: ${(props) => props.width};
	height: ${({ height }) => height};
`

export default Button
