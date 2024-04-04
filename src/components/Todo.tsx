import React, { ChangeEvent } from "react";

type TodoObj = {
  input:string,
  changeInput:(event:ChangeEvent<HTMLInputElement>) => void,
  clickRegister:()=>void,
};

export default function Todo ({input, changeInput, clickRegister}:TodoObj){
  return(
  <>
    <div className='row d-flex justify-content-center align-items-center'>
      <div className='col'>
        <h1>todoアプリ</h1>
      </div>
    </div>
    <div>
      <h5>入力・選択してTodoリストを登録しよう！</h5>
      <div>
        <input type='text' placeholder='入力してね' style={{ marginRight:"10px" }} value={input} onChange={changeInput}></input>
        <button className='btn btn-primary' onClick={clickRegister}>登録！</button>
      </div>
      <div>
        <select style={{ marginRight:"10px" }}>
          <option></option>
        </select>
        <button className='btn btn-primary' onClick={clickRegister}>登録！</button>
      </div>
      
    </div>
  </>
  );
}