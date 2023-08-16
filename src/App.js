import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { Todos } from './Todos';
import { CreateTodoButton } from './CreateTodoButton'
import './App.css';
const todos = [];
function App() {
  const [suprimeState, setSuprimeState] = React.useState('true');
  const [addState, setAddState] = React.useState();
  const agregar = ()=>{setAddState('true');
            setSuprimeState()}
  let [t, setT] = React.useState(todos);  
  function agregart (e) {todos.push({text:textState, completed:false});
{setTextState(e.target.value)};
    
  }
  
  
  
  const [textState, setTextState] = React.useState('');
  const texting = (event)=>{setTextState(event.target.value)};
  const cancelar = ()=>{setAddState('');
    setSuprimeState('true')};
    
  return (
    <>
      <TodoCounter completed={t.map((todo) => todo.completed).length} total={t.length}/> 
      <TodoItem ft={texting} fa={agregart} cancelar={cancelar} addState={addState}>
      {t.map(todo =>(<Todos key={todo.text} todo={todo.text}/>))}
      </TodoItem>
      <CreateTodoButton f={agregar}/>
        
        
      
      
    </>
  )
}

export default App;
