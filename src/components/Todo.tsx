import React, { ChangeEvent } from "react";
// import { TodoType } from "../App";

type TodoObj = {
  input:string,
  changeInput:(event:ChangeEvent<HTMLInputElement>) => void,
  clickRegister:()=>void,
};

export default function Todo ({input, changeInput, clickRegister}:TodoObj){
  return(
  <>
    <div className="pt-5">
      <h5 className="pb-1">Todoリストを登録</h5>
      <div className="pb-3">
        <input type='text' placeholder='入力してね' style={{ marginRight:"10px" }} value={input} onChange={changeInput}></input>
        <button className='btn btn-primary' onClick={clickRegister}>追加</button>
      </div>
    </div>
  </>
  );
}