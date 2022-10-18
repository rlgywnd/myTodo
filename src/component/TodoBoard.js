import React from "react";
import TodoItem from "./TodoItem";


function TodoBoard({items, setItems}) {
  
  return (
    <div className="board">
      <h1 className="list-header">LIST</h1>
      {items.map((ele) => <TodoItem key={ele.id} item={ele.text} setItem={setItems} items={items}/>)}
    </div>
  )
}

export default TodoBoard;