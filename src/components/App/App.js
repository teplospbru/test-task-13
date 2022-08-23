import Input from '../Input/Input';
import Menu from '../Menu/Menu';
import Todos from '../Todos/Todos';
import './App.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function App() {
  const { todos } = useSelector(state => state.todos);
  const [ isFilteredBy, setFilteredBy ] = useState('All');

  let filteredTodos;

  if(isFilteredBy === 'Active') {
    filteredTodos = todos.filter(todo => todo.isCompleted === false);
  } else if(isFilteredBy === 'Completed') {
    filteredTodos = todos.filter(todo => todo.isCompleted === true);
  } else if(isFilteredBy === 'All') {
    filteredTodos = [...todos];
  }

  return (
    <div className="App">
      <h1>todos</h1>
      <div className='note-1'>
        <div className='note-2'>
          <div className='note-3'>
            <Input />
            <Todos todos={ filteredTodos } />
            <Menu todos={ todos } isFilteredBy={ isFilteredBy } setFilteredBy={ setFilteredBy } />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;