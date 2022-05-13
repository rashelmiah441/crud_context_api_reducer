import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TodoContexts } from "../contexts/Todocontext";

const Editpage = () => {
   const history = useNavigate();
   const { id } = useParams();

   const [selectedTodo, setSelectedTodo] = useState({
      id: "",
      todo: "",
   });

   const currentId = id.toString();

   const { todos, todoEdit } = useContext(TodoContexts);

   useEffect(() => {
      // const currentId = id.toString();
      const selectedTodo = todos.find((todo) => {
         if (currentId === todo.id.toString()) {
            // console.log("Matched");
            return todo;
         } else {
            // console.log("Did not match");
         }
      });
      setSelectedTodo(selectedTodo);
   }, [currentId, todos]);

   const handleChange = (e) => {
      setSelectedTodo({ ...selectedTodo, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      todoEdit(selectedTodo);
      history("/");
   };

   return (
      <>
         <div className="row mt-5">
            <div className="col"></div>
            <div className="col-8">
               <form onSubmit={handleSubmit}>
                  <input
                     type="text"
                     name="todo"
                     value={selectedTodo.todo}
                     onChange={handleChange}
                     className="form-control"
                     placeholder="Type ToDo"
                  />
                  <button className="btn btn-primary mt-3">Click To Save Edit</button>
               </form>
            </div>
            <div className="col"></div>
         </div>
      </>
   );
};

export default Editpage;
