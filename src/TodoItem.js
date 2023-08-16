import React from "react";
import { PropsWithChildren } from "react";
import App from "./App";



function TodoItem({children, ft, fa, cancelar, addState}){

    const addtodo = document.getElementById('text');
    return(
        <> 
            {addState && <input  onChange={ft}id="todotext" type="text" placeholder="nueva tarea"></input>}
            {addState && <button onClick={cancelar} >X</button>}
            {addState&&<button onClick={fa} >+</button>}
            {children}

        </>
    )
}
export { TodoItem }