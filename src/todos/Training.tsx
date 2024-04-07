import React, { ChangeEvent } from "react";

type SelectObj = {
  changeSelect:(event:ChangeEvent<HTMLSelectElement>) => void,
  addSelect:() => void
};

export default function Training ({changeSelect,addSelect}:SelectObj){
  return(
    <>
      <div className="pt-5">
        <h5 className="pb-1">下から選んでTodoリストを登録！</h5>
        <div className="pb-3">
          <select onChange={changeSelect} style={{ marginRight:"10px" }}>
            <option value={"ウォーキング"}>ウォーキング</option>
            <option value={"ストレッチ"}>ストレッチ</option>
            <option value={"ヨガ"}>ヨガ</option>
            <option value={"上半身筋トレ"}>上半身筋トレ</option>
            <option value={"下半身筋トレ"}>下半身筋トレ</option>
            <option value={"体幹トレーニング"}>体幹トレーニング</option>
            <option value={"ヒートトレーニング"}>ヒートトレーニング</option>
          </select>
          <button className='btn btn-primary' onClick={addSelect} >追加</button>
        </div>
      </div>
    </>
  );
};