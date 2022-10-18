import React from "react";



function TodoItem({item, setItems, items}) {

  const funcDelete = () => {
    items.filter((el)=>{
      return el.text === item;
    })
  }
  

  

  return (
    <div className="todo-item">
      <div>{item}</div>
      <button >수정</button>
      <button onClick={funcDelete}>삭제</button>
    </div>
  )
}


export default TodoItem;