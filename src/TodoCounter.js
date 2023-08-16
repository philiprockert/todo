import React from "react";
import { TodoItem } from "./TodoItem";
function TodoCounter ({completed, total}){
    return(
        <>
        <h1>
            {completed} todos hechos de {total}
            
        
        </h1>
        </>
    )
}

export { TodoCounter }