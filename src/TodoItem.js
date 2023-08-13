import React from "react";
import { Todos } from './Todos';
import { eventWrapper } from "@testing-library/user-event/dist/utils";

function TodoItem(){

    const addtodo = document.getElementById('text');
    const [textState, serTextState] = React.useState();
    const texting = (event)=>{serTextState(event.target.value)}
    const [suprimeState, setSuprimeState] = React.useState('true');
    const [addState, setAddState] = React.useState();
    const agregar = ()=>{setAddState('true');
            setSuprimeState()

    };
    const cancelar = ()=>{setAddState('');
setSuprimeState('true')};
    return(
        <>  
            {addState && <input onChange={texting} id="todotext" type="text" placeholder="nueva tarea"></input>}
            {addState && <button onClick={cancelar} >X</button>}
            {addState && <button onClick={cancelar} >+</button>}
            {suprimeState && <button onClick={agregar}>agregar nueva tarea</button>}
            <Todos todo={textState}/>


        </>
    )
}
export { TodoItem }