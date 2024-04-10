import React from "react";
import TodoList from "../components/TodoList";
import { SelectObj } from "../App";

const studySelect:{name:string, value:string}[] = [
  {name:"", value:""},
  {name:"HTML&CSS", value:"HTML&CSS"},
  {name:"Javascript", value:"Javascript"},
  {name:"Ruby", value:"Ruby"},
  {name:"SQL", value:"SQL"},
  {name:"Git", value:"Git"},
];

export default function ProgrammingStudy ({changeSelect, addSelect}:SelectObj){
  return(
    <>
      <TodoList todoSelect={studySelect} changeSelect={changeSelect} addSelect={addSelect}/>
    </>
  );
};