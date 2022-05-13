import React, { useEffect } from "react";
import { TodoContexts } from "../contexts/Todocontext";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todoform = () => {
   const [newTodo, setNewToDo] = useState("");
   const id = uuidv4();

   const { addTodo } = useContext(TodoContexts);

   const handleSubmit = (e) => {
      e.preventDefault();

      const latestTodo = {
         id: id,
         todo: newTodo,
         status: true,
      };

      addTodo(latestTodo);
      setNewToDo("");
   };

   return (
      <>
         <div className="row mt-5">
            <div className="col"></div>
            <div className="col-8">
               <form>
                  <input
                     type="text"
                     value={newTodo}
                     onChange={(e) => setNewToDo(e.target.value)}
                     className="form-control"
                     placeholder="Type ToDo"
                  />
                  <button className="btn btn-primary mt-3" onClick={handleSubmit}>
                     Click To Add ToDo
                  </button>
               </form>
            </div>
            <div className="col"></div>
         </div>
      </>
   );
};

export default Todoform;
