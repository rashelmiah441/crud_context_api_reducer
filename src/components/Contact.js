import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Contact = () => {
   const [result, myResult] = useState("");
   const { id } = useParams();
   const location = useLocation();
   console.log(location);

   console.log(id);

   return (
      <div>
         <h5>This is contact page.</h5>
         <button className="btn btn-primary">Testing</button>
      </div>
   );
};

export default Contact;
