import React ,{ useState } from "react";
import axios from 'axios';
function CreateTodo() {
  const [description, setDescription] = useState("");
  const [responsible, setResponsible] = useState("");
  const [priority, setPriority] = useState("");
  const [completed, setCompleted] = useState(false);

  const onSubmit = () => {
    const newTodo = {
      todo_description: description,
      todo_responsible: responsible,
      todo_priority: priority,
      todo_completed: completed
    }

    axios.post('http://localhost:4000/todos/add',newTodo)
         .then(res => console.log(res.data));

    setDescription("");
    setResponsible("");
    setPriority("");
    setCompleted(false);
  }
  return (
    <>
      <div style={{marginTop: 10}}>
          <h3>Create New Todo</h3>
          <form>
              <div className="form-group"> 
                  <label>Description: </label>
                  <input  type="text"
                          className="form-control"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          />
              </div>
              <div className="form-group">
                  <label>Responsible: </label>
                  <input 
                          type="text" 
                          className="form-control"
                          value={responsible}
                          onChange={(e) => setResponsible(e.target.value)}
                          />
              </div>
              <div className="form-group">
                  <div className="form-check form-check-inline">
                      <input  className="form-check-input" 
                              type="radio" 
                              name="priorityOptions" 
                              id="priorityLow" 
                              value="Low"
                              checked={priority==='Low'} 
                              onChange={(e) => setPriority(e.target.value)}
                              />
                      <label className="form-check-label">Low</label>
                  </div>
                  <div className="form-check form-check-inline">
                      <input  className="form-check-input" 
                              type="radio" 
                              name="priorityOptions" 
                              id="priorityMedium" 
                              value="Medium" 
                              checked={priority==='Medium'} 
                              onChange={(e) => setPriority(e.target.value)}
                              />
                      <label className="form-check-label">Medium</label>
                  </div>
                  <div className="form-check form-check-inline">
                      <input  className="form-check-input" 
                              type="radio" 
                              name="priorityOptions" 
                              id="priorityHigh" 
                              value="High" 
                              checked={priority==='High'} 
                              onChange={(e) => setPriority(e.target.value)}
                              />
                      <label className="form-check-label">High</label>
                  </div>
              </div>

              <div className="form-group">
                  <input type="button" value="Create Todo" onClick={()=> onSubmit()} className="btn btn-primary" />
              </div>
          </form>
      </div>
    </>
  );
}

export default CreateTodo;
