import React, { useState }  from 'react';
import './App.css';
import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


function App() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);
  const [selectedDate, handleDateChange] = useState(new Date());

  




const DateChange = (selectedDate) => {
  handleDateChange(new Date(selectedDate))

  const valueOfInput = selectedDate.getDate() + "." + (selectedDate.getMonth()+1) + "." + selectedDate.getFullYear();
    setTodo({...todo, date: valueOfInput });


}

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
    
  } 

  return (
    <div className="App">
      
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker name="date" label="Date" value={selectedDate} onChange = {DateChange} animateYearScrolling/>
      </MuiPickersUtilsProvider>
      
      <input label ="Description" type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
      <button onClick={addTodo}>Add</button>
      <table><tbody>
      {
      todos.map((todo, index) => 
        <tr key={index}>
          <td>{todo.date}</td>
          <td>{todo.desc}</td>
        </tr>)
      }
      </tbody></table>
    </div>
  );
}

export default App;
