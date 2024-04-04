import React, { ChangeEvent, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import Incomplete from './components/Incomplete';
import Complete from './components/Complete';

export default function App() {
  const [input, setInput] = useState("");
  const changeInput = (event:ChangeEvent<HTMLInputElement>) => setInput(event.target.value);
  
  const [inComplete, setIncomplete] = useState<string[]>([]);
  const clickRegister = () => {
    setIncomplete([...inComplete, input]);
    setInput("");
  };
  const [complete, setComplete] = useState<string[]>([]);
  const completeBtn = (index:number) => {
    // 新しいinCompleteの内容を展開して、index番目を削除
    const newIncompleteContent = [...inComplete];
    newIncompleteContent.splice(index, 1);

    // 新しいcompleteの内容に削除したものを追加し、inCompleteとcompleteを更新する
    const newCompleteContent = [...complete, inComplete[index]];
    setIncomplete(newIncompleteContent);
    setComplete(newCompleteContent);
  };

  const inCompleteDelete = (index:number) => {
    const newTodo = [...inComplete];
    newTodo.splice(index, 1);
    setIncomplete(newTodo);
  };

  const realDelete = (index:number) => {
    const deleteTodo = [...complete];
    deleteTodo.splice(index, 1);
    setComplete(deleteTodo);
  };

  const returnIncomplete = (index:number) => {
    const returnTodo = [...complete];
    returnTodo.splice(index, 1);

    const newReturn = [...inComplete, complete[index]];
    setComplete(returnTodo);
    setIncomplete(newReturn);
  };

  return (
    <>
      {/* まずは全体の見た目を作っていく！ */}
      
      <div className='container'>
        <Todo input={input} changeInput={changeInput} clickRegister={clickRegister} />

        <Incomplete inComplete={inComplete} completeBtn={completeBtn} inCompleteDelete={inCompleteDelete}/>

        <Complete complete={complete} realDelete={realDelete} returnIncomplete={returnIncomplete}/>
      </div>
    </>
  );
}