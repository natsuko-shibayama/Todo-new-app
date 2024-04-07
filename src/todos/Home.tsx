import React, { ChangeEvent } from "react";
import Todo from "../components/Todo";

type HomeObj = {
  input:string, 
  changeInput:(event: ChangeEvent<HTMLInputElement>) => void, 
  clickRegister:() => void
};

export default function Home ({input, changeInput, clickRegister}:HomeObj){
  return(
    <>
      {/* <div>ホームです！</div> */}
      <Todo input={input} changeInput={changeInput} clickRegister={clickRegister} />

    </>
  );
};