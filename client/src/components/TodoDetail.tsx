import React from 'react'
import { Input, Button } from 'elements'

interface Props {
  
}

const TodoDetail = (props: Props) => {
  return (
    <div>
      <h2>Todo Detail</h2>
      <section>
        <Input
          name="todo"
          placeholderText='할일을'
        >Todo</Input>
        <Button>추가/수정</Button>
        <Button>삭제</Button>
      </section>
    </div>
  )
}

export default TodoDetail
