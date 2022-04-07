import React, {useEffect,useState} from "react";
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

function EditTodo() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [responsible, setResponsible] = useState("");
  const [priority, setPriority] = useState("");
  const [completed, setCompleted] = useState(false);



  const Submit = () => {
    const updateTodo = {
      todo_description: description,
      todo_responsible: responsible,
      todo_priority: priority,
      todo_completed: completed
    }
    axios.post('http://localhost:4000/todos/update/'+id, updateTodo)
        .then(res => console.log(res.data));
    setDescription("");
    setResponsible("");
    setPriority("");
    setCompleted(false);
    navigate('/');
  }

  useEffect(()=>{
    axios.get("http://localhost:4000/todos/"+id)
          .then(res=>{
            setDescription(res.data.todo_description);
            setResponsible(res.data.todo_responsible);
            setPriority(res.data.todo_priority);
            setCompleted(res.data.todo_completed);
          })
          .catch(function(error){
            console.log(error);
          })
  },[]);



  return (
    <>
      <h3 align="center">Update Todo</h3>
      <form>
          <div className="form-group"> 
              <label>Description: </label>
              <input  type="text"
                className="form-control"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
              />
          </div>
          <div className="form-group">
              <label>Responsible: </label>
              <input 
                type="text" 
                className="form-control"
                value={responsible}
                onChange={(e)=>setResponsible(e.target.value)}
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
                      onChange={(e)=>setPriority(e.target.value)}
                    />
                  <label className="form-check-label">Low</label>
              </div>
              <div className="form-check form-check-inline">
                  <input  className="form-check-input" 
                      type="radio" 
                      name="priorityOptions" 
                      id="priorityLow" 
                      value="Medium"
                      checked={priority==='Medium'} 
                      onChange={(e)=>setPriority(e.target.value)}
                    />
                  <label className="form-check-label">Medium</label>
              </div>
              <div className="form-check form-check-inline">
                  <input  className="form-check-input" 
                      type="radio" 
                      name="priorityOptions" 
                      id="priorityLow" 
                      value="High"
                      checked={priority==='High'} 
                      onChange={(e)=>setPriority(e.target.value)}
                    />
                  <label className="form-check-label">High</label>
              </div>
          </div>
          <div className="form-check">
              <input  className="form-check-input"
                  id="completedCheckbox"
                  type="checkbox"
                  name="completedCheckbox"
                  onChange={()=>setCompleted(!completed)}
                  checked={completed}
                  value={completed}
              />
              <label className="form-check-label" htmlFor="completedCheckbox">
                  Completed
              </label>                        
          </div>

          <br />

          <div className="form-group">
              <input type="button" value="Update Todo" onClick={()=>Submit()} className="btn btn-primary" />
          </div>
      </form>
    </>
  );
}

export default EditTodo;
