import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(10);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("QUACK QUACK");
  };

  const updateAge = () => {
    setAge(age + 1);
  };

  const toggleEmployment = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <>
      <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
      </div>

      <div>
        <p>Age: {age}</p>
        <button onClick={updateAge}>Set Age</button>
      </div>

      <div>
        <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={() => toggleEmployment()}>Toggle Employment</button>
      </div>
    </>
  );
}

export default MyComponent;
