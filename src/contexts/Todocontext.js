import React, { createContext, useReducer } from "react";
import TodoReducer from "./TodoReducer";

const initialState = {
   todos: [
      {
         id: 1,
         todo: "I want to run",
         status: true,
      },
      {
         id: 2,
         todo: "I want to walk",
         status: true,
      },
      {
         id: 3,
         todo: "I want to sleep",
         status: false,
      },
   ],
};

export const TodoContexts = createContext(initialState);

export const TodoProvider = ({ children }) => {
   const [state, dispatch] = useReducer(TodoReducer, initialState);

   const deleteTodo = (id) => {
      dispatch({
         type: "DELETE_TODO",
         payload: id,
      });
   };

   const addTodo = (todo) => {
      dispatch({
         type: "ADD_TODO",
         payload: todo,
      });
   };

   const todoStatus = (id) => {
      dispatch({
         type: "TODO_STATUS",
         payload: id,
      });
   };

   const todoEdit = (todo) => {
      dispatch({
         type: "TODO_EDIT",
         payload: todo,
      });
   };
   return (
      <TodoContexts.Provider
         value={{
            todos: state.todos,
            deleteTodo,
            addTodo,
            todoStatus,
            todoEdit,
         }}
      >
         {children}
      </TodoContexts.Provider>
   );
};
