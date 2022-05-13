import React from "react";
import { Link } from "react-router-dom";

const About = () => {
   const id = 123;
   return (
      <div>
         <h1>About</h1>
         <Link to={`/contact/${id}`}>
            <h3>Please Contact</h3>
         </Link>
      </div>
   );
};

export default About;
