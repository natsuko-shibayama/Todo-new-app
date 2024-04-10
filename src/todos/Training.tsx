import React from "react";
import TodoList from "../components/TodoList";
import { SelectObj } from "../App";

const trainingSelect :{name:string, value:string}[] = [
  {name:"", value:""},
  {name:"ウォーキング", value:"ウォーキング"},
  {name:"ストレッチ", value:"ストレッチ"},
  {name:"ヨガ", value:"ヨガ"},
  {name:"上半身筋トレ", value:"上半身筋トレ"},
  {name:"下半身筋トレ", value:"下半身筋トレ"},
  {name:"体幹トレーニング", value:"体幹トレーニング"},
  {name:"ヒートトレーニング", value:"ヒートトレーニング"},
];

export default function Training ({changeSelect,addSelect}:SelectObj){
  return(
    <>
      <TodoList todoSelect={trainingSelect} changeSelect={changeSelect} addSelect={addSelect}/>
    </>
  );
};