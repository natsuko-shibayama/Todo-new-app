import React, { ChangeEvent, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Todo from './components/Todo';
import Incomplete from './components/Incomplete';
import Complete from './components/Complete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HouseKeeping from './todos/HouseKeeping';
import ProgrammingStudy from './todos/ProgrammingStudy';
import Training from './todos/Training';
import Home from './todos/Home';

export type SelectObj = {
  changeSelect:(event:ChangeEvent<HTMLSelectElement>) => void,
  addSelect:() => void
};

export default function App() {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  const changeInput = (event:ChangeEvent<HTMLInputElement>) => setInput(event.target.value);
  const changeSelect = (event:ChangeEvent<HTMLSelectElement>) => setSelect(event.target.value);
  const [inComplete, setIncomplete] = useState<string[]>([]);
  const clickRegister = () => {
    setIncomplete([...inComplete, input]);
    setInput("");
  };
  const addSelect = () => {
    setIncomplete([...inComplete, select]);
    setSelect("");
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
    <BrowserRouter>
      <header>
        <div className='row d-flex justify-content-center align-items-center header-style'>
          <div className='col'>
            <p className='title'>todoアプリ</p>
          </div>
          <div className='col'>
            <ul className='nav-list'>
              <Link to="/" className='link'>Home</Link>
              <span className='link'> / </span>
              <Link to="/HouseKeeping" className='link'>HouseKeeping</Link>
              <span className='link'> / </span>
              <Link to="/ProgrammingStudy" className='link'>ProgrammingStudy</Link> 
              <span className='link'> / </span>
              <Link to="/Training" className='link'>Training</Link> 
            </ul>
          </div>
        </div>
      </header>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home input={input} changeInput={changeInput} clickRegister={clickRegister}/>}>
          </Route>
          <Route path="/HouseKeeping" element={<HouseKeeping changeSelect={changeSelect} addSelect={addSelect}/>}>
          </Route>
          <Route path="/ProgrammingStudy" element={<ProgrammingStudy changeSelect={changeSelect} addSelect={addSelect}/>}>
          </Route>
          <Route path="/Training" element={<Training changeSelect={changeSelect} addSelect={addSelect}/>}>
          </Route>
        </Routes>

        {/* ここから共通 */}
          <Incomplete inComplete={inComplete} completeBtn={completeBtn} inCompleteDelete={inCompleteDelete}/>

          <Complete complete={complete} realDelete={realDelete} returnIncomplete={returnIncomplete}/>
        {/* ここまで共通 */}
      </div>
    </BrowserRouter>
    </>
  );
}