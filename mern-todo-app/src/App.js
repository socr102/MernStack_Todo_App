import React from "react";
import { Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.compomemt";
import NavBar  from "./components/navbar";
import logo from './logo.svg';
function App() {
  return (
    <>
      <Container>
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<TodosList/>}/>
          <Route path="/edit/:id" element={<EditTodo/>}/>
          <Route path="/create" element={<CreateTodo/>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
