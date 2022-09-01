import { Input } from 'elements'
import React, { useState, useEffect } from 'react'
import TodoList from '../components/TodoList';
import TodoDetail from '../components/TodoDetail';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface Props {
  
}

const TodoPage = (props: Props) => {
  const navigate = useNavigate();
  const [state, setState] = useState([]);

  useEffect(() => {
    const userToken = localStorage.getItem('user');
    console.log(userToken);
    if(!userToken){
      navigate("/auth/login");
    }
  }, [])

  return (
    <>
    <div style={{ padding: "16px" }}>
      <h1>Todo</h1>
      {/* <Input
        name="new-todo"

      ></Input> */}
    </div>
    <TodoPageContainer>
      <TodoList></TodoList>
      <TodoDetail></TodoDetail>
    </TodoPageContainer>
    </>
  )
}

const TodoPageContainer = styled.section`
  width: 100vw;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;


`

export default TodoPage
