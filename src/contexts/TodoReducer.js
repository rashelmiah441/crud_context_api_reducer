const reducerFunction = (state, action) => {
   switch (action.type) {
      case "DELETE_TODO":
         return {
            ...state,
            todos: state.todos.filter((newtodo) => {
               return newtodo.id !== action.payload;
            }),
         };
      case "ADD_TODO":
         return {
            ...state,
            todos: [action.payload, ...state.todos],
         };

      case "TODO_STATUS":
         return {
            ...state,
            todos: state.todos.map((todo) => {
               if (todo.id === action.payload) {
                  if (todo.status === true) {
                     return {
                        id: todo.id,
                        todo: todo.todo,
                        status: false,
                     };
                  } else {
                     return {
                        id: todo.id,
                        todo: todo.todo,
                        status: true,
                     };
                  }
               } else {
                  return todo;
               }
            }),
         };

      case "TODO_EDIT":
         const editedTodo = action.payload;

         const editedTodos = state.todos.map((todo) => {
            if (todo.id.toString() === editedTodo.id.toString()) {
               return editedTodo;
            }
            return todo;
         });

         return {
            ...state,
            todos: editedTodos,
         };
      default:
         return state;
   }
};

export default reducerFunction;
