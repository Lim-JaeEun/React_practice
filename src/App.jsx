import React, {useState} from 'react';
import './App.css';
import TodoBoardWrap from './components/todoBoard'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [id_num, setId_num] = useState(1);
  const addItem = () =>{
    setId_num(id_num+1)
    setTodoList([...todoList,{
      test :inputValue,
      id : id_num,
      isDone: false,
      edit_chk:false
    }]);
    setInputValue(''); //입력필드 초기화
  }

  const updatechk = (targetId) => {
    setTodoList(todoList.map(el => 
      el.id === targetId ? { ...el, isDone: !el.isDone } : el
    ));
  };

  const delbtn = (targetId) => {
    setTodoList(todoList.filter((el) => el.id !== targetId));
  };

  const editBtn = (targetId) =>{
    setTodoList(todoList.map(el => 
      el.id === targetId ? { ...el, edit_chk: !el.edit_chk } : el
    ));
  }

  const editSaveBtn = (targetId, editVal) =>{
    setTodoList(todoList.map(el=>
      el.id === targetId ? {...el,edit_chk: !el.edit_chk,test:editVal} :el
    ))
  }
  return (
    <>
        <main>
         
          <div className='wrap'>
            <input value={inputValue} type="text" id='task-input' className="input_area" onChange={
                (event)=>setInputValue(event.target.value)
            }/>
            <button onClick={addItem} className='btn'>add</button>
          </div>

          <TodoBoardWrap todoList={todoList} editSaveBtn= {editSaveBtn} editBtn = {editBtn} updatechk = {updatechk} delbtn = {delbtn}/>

        </main>
    </>

  );
}

export default App;
