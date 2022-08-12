import React, { ReactNode } from 'react'
import styled from "styled-components";

interface Props {
  type: string;
  name: string;
  value: string;
  placeholderText: string;
  children: ReactNode;
  marginBottom: string;
  width: string;
  onChange: any;
  // onKeyPress: any;
  onSubmit: any;
}

const Input = (props: Props) => {
  const {
    type,
    name,
    value,
    placeholderText,
    onChange,
    // onKeyPress,
    children,
    marginBottom,
    onSubmit,
    width
  } = props;
  const outerStyles = { marginBottom };
  const innerStyles = { width };

  return (
    <InputOuter {...outerStyles}>
      <label htmlFor={name}>{children}</label>
      <div></div>
      <InputInner
        {...innerStyles}
				type={type}
        name={name}
        onChange={(e) => onChange(e)}
        value={value}
        placeholder={placeholderText + " 입력하세요"}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onSubmit(e);
          }
        }}
      ></InputInner>
    </InputOuter>
  )
}

Input.defaultProps = {
  type: "text",
  width: "80vw",
  marginBottom: "20px",
  value: "",
  onChange: () => { },
  onSubmit: () => { },
}

const InputOuter = styled.div<{marginBottom: string}>`
	margin-bottom: ${({marginBottom}) => marginBottom};
`;

const InputInner = styled.input`
	width: ${({ width }) => width};
`;

export default Input
