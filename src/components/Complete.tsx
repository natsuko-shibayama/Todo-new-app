import React from "react";
import { TodoType } from "../App";
type CompleteObj = {
  complete:TodoType[];
  // realDelete:(i:number) => void;
  // returnIncomplete:(i:number) => void;
};

export default function Complete(
  {
    complete, 
    // realDelete, returnIncomplete
  }:CompleteObj){
  return(
    <>
      <div className='row justify-content-center completeArea'>
        <div className='col'>
          <div className="pb-1">
            <h4>完了したTodoリスト</h4>
          </div>

          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>メニュー</th>
                  <th>種別</th>
                  <th>todo名</th>
                  <th>ステータス</th>
                  <th>優先度</th>
                  <th>登録日</th>
                  <th>期限</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* あとで上のtbody内でmapで回す */}
          {/* <ul>
            {complete.map((todo, index) =>  (
              <li key={index}>{todo}
                <button className='btn btn-info' onClick={() => realDelete(index)} style={{ marginLeft:"10px" }}>終了</button>
                <button className='btn btn-warning' onClick={() => returnIncomplete(index)} style={{ marginLeft:"10px" }}>戻す</button>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </>
  );
};