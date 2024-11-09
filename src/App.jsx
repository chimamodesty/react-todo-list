import { useState } from "react"
import "./styles.css"
export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault()
    setTodos((currentTodos) => {
      return [
        ...currentTodos, 
        { id: crypto.randomUUID(), title: newItem, completed: false }
      ];
    });
    
      setNewItem("")
      
   }

   function toggleTodo(id, completed) {
    setTodos(currentTodos =>
      currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      })
    );
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    });
  }
  
  
  

  console.log(todos)
  
  return(<div>
    
    <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />

    </div>
    <button className="btn">Add</button>

  </form>
  <h2 className="header">To-Do-List</h2>
   
  <ul className="list">
  {todos.map(todo => (
  <li key={todo.id}>
    <label>
      <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
      {todo.title}
    </label>

    
    
      
    <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
    
  </li>
))}

  </ul>
  
  </div>
  );
}