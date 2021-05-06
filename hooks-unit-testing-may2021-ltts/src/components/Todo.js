import React, { useRef, useReducer, use } from 'react';
import todoReducer from '../reducers/todoReducer';

const Todo = () => {

  // to capture input from form fields in fn comp
  const todoInputRef = useRef(null);

  // useReducer hook  -- will get take in reducer fn as input 
  const [ todoState, todoDispach ] = useReducer(todoReducer);

  const handleAddTodo = () => {
    console.log(todoInputRef.current.value);

    // send the data to rest api using axios 
    
    todoDispach( { type: 'ADD_TODO', data: todoInputRef.current.value })
  }

  console.log(todoState);

  let todoList = null;
  if(todoState && todoState.length > 0) {
    todoList = todoState.map( (todo, index) => {
      return( 
        <li key={index}>
          {todo.text}
          <button type="button" className="btn btn-sm btn-primary">Edit</button>
          <button type="button" className="btn btn-sm btn-danger">Delete</button>
        </li>
      )
    })

  }


  return (
    <div className="col-md-6 offset-md-3">
      <h2>Todo | useRef and useReducer Hooks Demo</h2>

      <input type="text" className="form-control" ref={todoInputRef}/>
      <button type="button" className="btn btn-sm btn-success" onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todoList}
      </ul>

    </div>
  )
}

export default Todo;
