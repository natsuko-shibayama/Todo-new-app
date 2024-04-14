import React from "react";
import { TodoType } from "../App";

type IncompleteObj = {
  inComplete:TodoType[];
  completeBtn:(i:number) => void;
  inCompleteDelete:(i:number) => void;
};


export default function Incomplete(
  {
    inComplete,
     completeBtn, inCompleteDelete
  }:IncompleteObj){
  return(
    <>
      <div className='row justify-content-center inCompleteArea'>
        <div className='col'>
          <div className="pb-1">
            <h4>未完了のTodoリスト</h4>
          </div>
          <div>
            <table className="table">
              <thead>
                <tr className="text-center">
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
                {inComplete.map((todo:TodoType,index:number)=>(
                  <tr className="text-center" key={index}>
                    <td><img src="/public/menu-icon.png" alt="３点ボタンアイコン"/></td>
                    <td>タイプ</td>
                    <td>{todo.name}</td>
                    <td>ステータス
                      <button className='btn btn-info' onClick={() => completeBtn(index)} style={{ marginLeft:"10px" }}>終了</button>
                      {/* <button type="button" className="btn btn-warning">
                        未完了
                      </button> */}
                    </td>
                    <td>優先度
                      <button className='btn btn-success' onClick={() => inCompleteDelete(index)} style={{ marginLeft:"10px" }}>削除</button>
                      {/* <button type="button" className="btn btn-danger">
                        高
                      </button> */}
                    </td>
                    <td>2024-04-14</td>
                    <td>2024-04-14</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

           {/* あとで上のtbody内でmapで回す */}
            {/* <ul>
              {inComplete.map((todo, index)=> (
                <li key={index}>{todo}
                  <button className='btn btn-info' onClick={() => completeBtn(index)} style={{ marginLeft:"10px" }}>終了</button>
                  <button className='btn btn-success' onClick={() => inCompleteDelete(index)} style={{ marginLeft:"10px" }}>削除</button>
                </li>
              ))}
            </ul> */}
        </div>
      </div>
    </>
  );
}