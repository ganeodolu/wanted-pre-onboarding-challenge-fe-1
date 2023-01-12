import React from 'react'
import { Button } from 'elements'
import styled from 'styled-components'

interface Todo {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
interface Props {
  children: Todo[]
}

const TodoList = (props: Props) => {
  const { children: todos } = props;
  console.log(todos);

  return (
    <div>
      <h2>Todo List</h2>
      <TodoListContainer>
        {todos.map((todo) => {
          const { title } = todo;
          return (
            <TodoItemContainer>
              <h3>{title}</h3><Button>삭제</Button>
            </TodoItemContainer>
          )
        })}

      </TodoListContainer>
    </div>
  )
}

const TodoListContainer = styled.section`
  display: inline-flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
`
const TodoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
`

export default TodoList
