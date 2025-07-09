import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState({ name: "John Doe", age: 30 });

  return (
    <div className="component-a">
      <h1>Component A</h1>
      <h2>{`Hello ${user.name}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
