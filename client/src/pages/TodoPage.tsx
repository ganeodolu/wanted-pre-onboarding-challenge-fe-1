import { Input } from 'elements'
import React, { useState, useEffect } from 'react'
import TodoList from '../components/TodoList';
import TodoDetail from '../components/TodoDetail';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import * as todo from "../lib/api/todo";

interface Props {
  
}

const TodoPage = (props: Props) => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  const onClickButton = async (e: any) => {
    e.preventDefault();

  }

  useEffect(() => {
    const userToken = localStorage.getItem('user');
    console.log(userToken);
    if(!userToken){
      navigate("/auth/login");
    }
    (async () => {
      const { data } = await todo.getTodos();
      console.log(data);
      setTodos(data)
    })()

  }, [])
  // console.log(todos);

  return (
    <>
    <div style={{ padding: "16px" }}>
      <h1>Todo</h1>
    </div>
    <TodoPageContainer>
      <TodoList>{todos}</TodoList>
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
