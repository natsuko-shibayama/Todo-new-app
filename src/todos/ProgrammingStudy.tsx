import React from "react";
import TodoList from "../components/TodoList";
import { SelectObj } from "../App";

const studySelect:{name:string, value:string}[] = [
  {name:"", value:""},
  {name:"HTML&CSS", value:"HTML&CSS"},
  {name:"Javascript", value:"Javascript"},
  {name:"Typescript", value:"Typescript"},
  {name:"React", value:"React"},
  {name:"SQL", value:"SQL"},
  {name:"Git", value:"Git"},
  {name:"Command Line", value:"Command Line"},
  {name:"Ruby", value:"Ruby"},
  {name:"Ruby on Rails", value:"Ruby on Rails"},
];

export default function ProgrammingStudy ({select,changeSelect, addSelect}:SelectObj){
  return(
    <>
      <TodoList select={select} todoSelect={studySelect} changeSelect={changeSelect} addSelect={addSelect}/>
    </>
  );
};