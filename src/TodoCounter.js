import React from "react";
import { TodoItem } from "./TodoItem";
function TodoCounter ({todos}){
    return(
        <>
        <h1>
            {todos} todos hechos de {todos}
            
        
        </h1>
        </>
    )
}

export { TodoCounter }