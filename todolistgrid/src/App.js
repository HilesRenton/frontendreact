import React, { useState, useRef } from 'react';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';


const App = () => {
  const [todo, setTodo] = useState({description: '', date: '', priority:''});
  const [todos, setTodos] = useState([]);

  const gridRef= useRef();

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const deleteTodo = () => {
    
    if (gridRef.current.getSelectedNodes().length > 0) {
     
      setTodos(todos.filter((todo, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex)) 
    } 
    else {

      alert('Select row first');
    }

  } 

  const columns =[
    {headerName: 'Date', field: 'date', sortable: true, filter: true},
    {headerName: 'Description', field: 'description', sortable: true, filter: true},
    {headerName: 'Priority', field: 'priority', sortable: true, filter: true ,
    cellStyle: params=> params.value ===   "High"? {color: 'red'} : {color:'black'}}
  ]

  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description}/>
        <input type="text" onChange={inputChanged} placeholder="Date" name="date" value={todo.date}/>
        <input type="text" onChange={inputChanged} placeholder="Priority" name="priority" value={todo.priority}/>

        <input type="submit" value="Add"/>
        
      </form>
      <button onClick = {deleteTodo}>Delete</button>

      <div
      className="ag-theme-material" 
      style={ { height: 400, width: '60%', margin: 'auto' }}
      
      >
     <AgGridReact
     ref = {gridRef}
     onGridReady={ params =>  gridRef.current = params.api}
     rowSelection= "single"
     columnDefs={columns}
     rowData={todos}>
     </AgGridReact>
    </div>
    </div>
  );
};

export default App;