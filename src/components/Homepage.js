import React from "react";
import Todoform from "./Todoform";
import Todolist from "./Todolist";

const Homepage = () => {
   return (
      <div className="container">
         <h1 className="text-danger">This is homepage</h1>
         <Todoform />
         <Todolist />
      </div>
   );
};

export default Homepage;
