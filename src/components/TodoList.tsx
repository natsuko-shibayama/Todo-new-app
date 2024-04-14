import React, { ChangeEvent } from "react";
import { TodoType } from "../App";

type todoProps = {
  select:string,
  changeSelect:(event: ChangeEvent<HTMLSelectElement>) => void,
  addSelect:(newTodo: TodoType) => void,
  todoSelect:{name:string, value:string}[]
};

export default function TodoList({select,todoSelect, changeSelect, addSelect}: todoProps){
  return(
    <>
      <div className="pt-5">
        <h5 className="pb-1">Todoリストを登録</h5>
        <div className="pb-3">
          <select value={select} onChange={changeSelect} style={{ marginRight:"10px" }}>
            {todoSelect.map((h, i)=>(<option key={i} value={h.value}>{h.name}</option>))}
          </select>
          <button className='btn btn-primary' onClick={() => addSelect} >追加</button>
        </div>
      </div>
    </>
  );
};