import React from "react";
import TodoList from "../components/TodoList";
import { SelectObj } from "../App";

const hkSelect:{name:string, value:string}[] = [
  {name:"", value:""},
  {name:"毛布と掛け布団の洗濯", value:"毛布と掛け布団の洗濯"},
  {name:"夫婦で料理", value:"夫婦で料理"},
  {name:"コストコに買い出し", value:"コストコに買い出し"},
  {name:"にゃんこの爪切り・お風呂", value:"にゃんこの爪切り・お風呂"},
  {name:"にゃんこのお風呂", value:"にゃんこのお風呂"},
  {name:"お風呂掃除", value:"お風呂掃除"},
  {name:"トイレ・洗面台掃除", value:"トイレ・洗面台掃除"},
];

export default function HouseKeeping ({select,changeSelect,addSelect}:SelectObj){
  return(
    <>
      <TodoList select={select} todoSelect={hkSelect} changeSelect={changeSelect} addSelect={addSelect}/>
    </>
  );
};