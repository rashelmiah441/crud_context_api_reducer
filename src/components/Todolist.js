import React from "react";
import { useContext } from "react";
import { TodoContexts } from "../contexts/Todocontext";
import Deletetodo from "./Deletetodo";
import Todostatus from "./Todostatus";
import { Link } from "react-router-dom";

const Todolist = () => {
   const { todos, todoEdit } = useContext(TodoContexts);

   const newTodo = todos.sort(function (a, b) {
      return b.status - a.status;
   });

   const id = 10;

   return (
      <>
         <div className="row mt-5">
            <div className="col">
               <table className="table table-hover">
                  <thead>
                     <tr>
                        <th scope="col">Sl</th>
                        <th scope="col">To-Do</th>
                        <th scope="col">Mark</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                     </tr>
                  </thead>
                  <tbody>
                     {newTodo.map((todo, sl) => {
                        return (
                           <tr key={todo.id}>
                              <th scope="row" className="col">
                                 {sl + 1}
                              </th>
                              <td className={todo.status === false ? "text-decoration-line-through text-start" : "text-start"}>
                                 {todo.todo}
                              </td>

                              <Todostatus id={todo.id} status={todo.status} />

                              <td>
                                 {todo.status === false ? (
                                    <button className="btn btn-secondary disabled">Edit</button>
                                 ) : (
                                    <Link to={`/edit/${todo.id}`}>
                                       <button className="btn btn-primary">Edit</button>
                                    </Link>
                                 )}
                              </td>

                              <Deletetodo id={todo.id} status={todo.status} />
                           </tr>
                        );
                     })}
                  </tbody>
               </table>
            </div>
         </div>
      </>
   );
};

export default Todolist;
