import React from 'react'
import { Button } from 'elements'
import styled from 'styled-components'

interface Props {

}

const TodoList = (props: Props) => {
  return (
    <div>
      <h2>Todo List</h2>
      <TodoListContainer>
        <TodoItemContainer>
          <h3>목록1</h3><Button>삭제</Button>
        </TodoItemContainer>
        <TodoItemContainer>
          <h3>목록2</h3><Button>삭제</Button>
        </TodoItemContainer>        
        <TodoItemContainer>
          <h3>목록3</h3><Button>삭제</Button>
        </TodoItemContainer>
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
