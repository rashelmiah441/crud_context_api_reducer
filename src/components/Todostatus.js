import React from "react";
import { TodoContexts } from "../contexts/Todocontext";
import { useContext } from "react";

const Todostatus = ({ id, status }) => {
   const { todoStatus } = useContext(TodoContexts);

   return (
      <>
         <td>
            <button
               id={id}
               onClick={() => todoStatus(id)}
               className={status === false ? "btn btn-secondary text-light" : "btn btn-primary"}
            >
               {status === false ? "Mark Incomplete" : "Mark Complete"}
            </button>
         </td>
      </>
   );
};

export default Todostatus;
