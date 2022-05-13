import React from "react";
import { TodoContexts } from "../contexts/Todocontext";
import { useContext } from "react";

const Deletetodo = ({ id, status }) => {
   const { deleteTodo } = useContext(TodoContexts);

   return (
      <>
         <td>
            <button className={status === true ? "btn btn-danger" : "btn btn-secondary disabled"} onClick={() => deleteTodo(id)}>
               X
            </button>
         </td>
      </>
   );
};

export default Deletetodo;
