import React,{useEffect} from "react";
function TodosList() {
  useEffect(()=>{
    console.log("todos list");
  },[]);
  return (
    <>
        <p>Welcome to Todos List Component!!</p>
    </>
  );
}

export default TodosList;
