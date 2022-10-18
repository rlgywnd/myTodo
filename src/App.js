
import './App.css';
import React, {useState} from 'react';
import TodoBoard from './component/TodoBoard';
import data from "./db/data.json";

// 인풋창, 버튼이 있다.
// 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가된다.
// 아이템 삭제버튼을 누르면 삭제.


function App() {

  const [inputValue, setInputValue] = useState('');
  
  const [items, setItems] = useState(data)
  
  
  const A = (e) => {
    setInputValue(e.target.value);
  }
  const addItem = () => {
    if(inputValue){
      const list = {
        id: data.length,
        text: inputValue
      }

      setItems([...items, list]);
      
      setInputValue('');
    }
    else {
      alert('내용을 입력하세요!')
    }
  }
  console.log(items[3]);

  return (
    <main>
      <h1 className='header'>MY TODO LIST</h1>
      <input className='input' value={inputValue} type='text' onChange={A}/>
      <button className='submitBtn' onClick={addItem}>추가</button>

      <TodoBoard item={items} setItem={setItems}/>
    </main>
  );
}

export default App;
