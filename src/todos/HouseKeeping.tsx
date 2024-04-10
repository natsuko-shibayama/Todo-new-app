import React from "react";
import TodoList from "../components/TodoList";
import { SelectObj } from "../App";

const hkSelect:{name:string, value:string}[] = [
  {name:"", value:""},
  {name:"洗濯", value:"洗濯"},
  {name:"料理", value:"料理"},
  {name:"買い物", value:"買い物"},
  {name:"ペットの世話", value:"ペットの世話"},
  {name:"掃除", value:"掃除"},
];

export default function HouseKeeping ({changeSelect,addSelect}:SelectObj){
  return(
    <>
      <TodoList todoSelect={hkSelect} changeSelect={changeSelect} addSelect={addSelect}/>
    </>
  );
};