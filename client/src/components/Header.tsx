import { Button } from 'elements'
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

interface Props {

}

const Header = (props: Props) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false)

  const onClickButton = () => {
    localStorage.removeItem('user')
    setIsLogin(false);
  }

  useEffect(() => {
    const userToken = localStorage.getItem('user');
    if(userToken){
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }

  })

  if(isLogin){
    return (
      <div>
      <>
        <Button>홈</Button>
      </>
      <>
        <Button
          onClickButton={onClickButton}
        >로그아웃</Button>
      </>
    </div>
    )
  }

  return (
    <div>
      <>
        <Button>홈</Button>
      </>
      <>
        <Button
          onClickButton={() => navigate("/auth/signup")}
        >회원가입</Button>
        <Button
          onClickButton={() => navigate("/auth/login")}
        >로그인</Button>
      </>
    </div>
  )
}

export default Header
