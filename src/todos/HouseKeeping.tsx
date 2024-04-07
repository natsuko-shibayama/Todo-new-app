import React, { ChangeEvent } from "react";
type HouseObj = {
  changeSelect:(event: ChangeEvent<HTMLSelectElement>) => void,
  addSelect:() => void
};

export default function HouseKeeping ({changeSelect,addSelect}:HouseObj){
  return(
    <>
      <div className="pt-5">
        <h5 className="pb-1">下から選んでTodoリストを登録！</h5>
        <div className="pb-3">
          <select onChange={changeSelect} style={{ marginRight:"10px" }}>
            <option value={"洗濯"}>洗濯</option>
            <option value={"料理"}>料理</option>
            <option value={"買い物"}>買い物</option>
            <option value={"ペットの世話"}>ペットの世話</option>
            <option value={"掃除"}>掃除</option>
          </select>
          <button className='btn btn-primary' onClick={addSelect} >登録！</button>
        </div>
      </div>
    </>
  );
};