import React from "react";
type CompleteObj = {
  complete:Array<string>;
  realDelete:(i:number) => void;
  returnIncomplete:(i:number) => void;
};

export default function Complete({complete, realDelete, returnIncomplete}:CompleteObj){
  return(
    <>
      <div className='row justify-content-center completeArea'>
        <div className='col'>
          <div className="pb-1">
            <h2>完了したTodoリスト</h2>
          </div>
          <ul>
            {complete.map((todo, index) =>  (
              <li key={index}>{todo}
                <button className='btn btn-info' onClick={() => realDelete(index)} style={{ marginLeft:"10px" }}>終了</button>
                <button className='btn btn-warning' onClick={() => returnIncomplete(index)} style={{ marginLeft:"10px" }}>戻す</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};