import React, { ChangeEvent } from "react";

type SelectObj = {
  changeSelect:(event: ChangeEvent<HTMLSelectElement>) => void,
  addSelect: () => void
};

export default function ProgrammingStudy ({changeSelect, addSelect}:SelectObj){
  return(
    <>
      <div className="pt-5">
        <h5 className="pb-1">下から選んでTodoリストを登録！</h5>
        <div className="pb-3">
          <select onChange={changeSelect} style={{ marginRight:"10px" }}>
            <option value={"HTML&CSS"}>HTML&CSS</option>
            <option value={"Javascript"}>Javascript</option>
            <option value={"Ruby"}>Ruby</option>
            <option value={"SQL"}>SQL</option>
            <option value={"Git"}>Git</option>
          </select>
          <button className='btn btn-primary' onClick={addSelect} >追加</button>
        </div>
      </div>
    </>
  );
};