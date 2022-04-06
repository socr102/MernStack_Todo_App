import React, {useEffect} from "react";
function EditTodo() {
useEffect(()=>{
    console.log("todos list");
    },[]);
  return (
    <>
        <p>Welcome to Edit Todo Component!!</p>
    </>
  );
}

export default EditTodo;
