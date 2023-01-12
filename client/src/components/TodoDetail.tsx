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
          name="title"
          placeholderText='할일을'
        >Title</Input>
        <Input
          name="content"
          placeholderText='내용을'
        >Content</Input>
        <Button>추가/수정</Button>
        <Button>삭제</Button>
      </section>
    </div>
  )
}

export default TodoDetail
