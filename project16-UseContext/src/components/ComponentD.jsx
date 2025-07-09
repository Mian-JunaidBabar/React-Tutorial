import React, { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD(props) {
  const user = useContext(UserContext);

  return (
    <div className="component-d">
      <h1>Component D</h1>
      <h2>{`User: ${user.name}, Age: ${user.age}`}</h2>
    </div>
  );
}

export default ComponentD;
