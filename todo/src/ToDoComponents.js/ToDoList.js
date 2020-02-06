import React, { useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/Reducers';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // console.log('state', state);
  // console.log('dispatch', dispatch);

  const addTodo = task => 
    dispatch({ type: 'ADD_TODO', payload: task });

  const toggleCompleted = id => 
    dispatch({ type: 'TOGGLE_COMPLETED', payload: id });

  const clearCompleted = () => 
    dispatch({ type: 'CLEAR_COMPLETED'});

  const handleChange = event =>
    dispatch({ type: 'HANDLE_CHANGE', payload: event.target.value })

  return (
    <div className='todo-list'>
      <ToDoForm 
        task={state.task}
        addTodo={addTodo}
        handleChange={handleChange}
        clearCompleted={clearCompleted}
      />
      {state.todo.map(todo => {
        return <ToDo {...todo} key={todo.id} toggleCompleted={toggleCompleted} />
      })}
    </div>
  )
}

export default TodoList;