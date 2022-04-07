import React,{useEffect,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function TodosList() {
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:4000/todos/")
         .then(res=>{
           setTodos(res.data);
         })
         .catch(function(error){
           console.log(error);
         })
  },[]);

  const todoList = () => {
    if(todos!=null){
      const items =  todos.map(
        (todo,idx) => 
          <tr key={idx}>
            <td>{todo.todo_description}</td>
            <td>{todo.todo_responsible}</td>
            <td>{todo.todo_priority}</td>
            <td><Link to={"/edit/"+todo._id}>Edit</Link></td>
          </tr>
      );
      return items;
    }
  };


  return (
    <>
        <h3>Todo List</h3>
        <table className="table table-striped" style={{marginTop:20}}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todoList()}
          </tbody>
        </table>
    </>
  );
}

export default TodosList;
