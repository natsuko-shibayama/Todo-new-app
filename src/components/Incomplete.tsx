import React from "react";

type IncompleteObj = {
  inComplete:Array<string>;
  completeBtn:(i:number) => void;
  inCompleteDelete:(i:number) => void;
};

export default function Incomplete({inComplete, completeBtn, inCompleteDelete}:IncompleteObj){
  return(
    <>
      <div className='row justify-content-center inCompleteArea'>
        <div className='col'>
          <div className="pb-1">
            <h2>未完了のTodoリスト</h2>
          </div>
          <ul>
            {inComplete.map((todo, index)=> (
              <li key={index}>{todo}
                <button className='btn btn-info' onClick={() => completeBtn(index)} style={{ marginLeft:"10px" }}>終了</button>
                <button className='btn btn-success' onClick={() => inCompleteDelete(index)} style={{ marginLeft:"10px" }}>削除</button>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </>
  );
}