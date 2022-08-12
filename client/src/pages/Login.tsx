import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { validation } from "../utils/validation";
import { Input, Button } from "../elements";

interface Props {
  
}

const Login = (props: Props) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    id: "",
    password: "",
  });
  const onChangeInput = (e: any) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const isValidInputs = () => {
    if (!validation.textLength(state.id, 1)) {
      alert("아이디가 없습니다");
      return false;
    }
    if (!validation.textLength(state.password, 1)) {
      alert("비밀번호가 없습니다");
      return false;
    }
    if (!validation.email(state.id)) {
      return false;
    }

    return true;
  };
  const onClickButton = (e: any) => {
    e.preventDefault();
    if (isValidInputs()) {
      // dispatch(userActions.logInFB(state.id, state.password));
      navigate("/");
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (isValidInputs()) {
      // dispatch(userActions.logInFB(state.id, state.password));
      navigate("/");
    }
  };
  return (
    <div style = {{ padding: "16px" }}>
      <p>로그인</p>
      <Input
        name="id"
        placeholderText="아이디를"
        value={state.id}
        onChange={onChangeInput}
      >
        아이디
      </Input>
      <div />
      <Input
        name="password"
        type="password"
        placeholderText="비밀번호를"
        value={state.password}
        onChange={onChangeInput}
        onSubmit={onSubmit}
      >
        비밀번호
      </Input>
      <div />
      <Button
        type="submit"
        // width="80vw"
        onClickButton={onClickButton}
      >
        로그인하기
      </Button>
    </div>
  )
}

export default Login
