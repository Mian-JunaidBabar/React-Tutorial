import React, { useState, useEffect, use } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // useEffect(() => { })           // Runs after every re-render (mount)
  // useEffect(() => { }, [])       // Runs only once after the initial render
  // useEffect(() => { }, [count])  // Runs only when 'count' changes + every re-render (mount)

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);

  function incCount() {
    setCount((c) => c + 1);
  }

  function decCount() {
    setCount((c) => c - 1);
  }

  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  // window.addEventListener("resize", handleResize);  // This will add an event listener to the window resize event

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    document.title = `Size: ${width}x${height}`;

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <div>
        <h1 style={{ color: color }}>Count: {count}</h1>
        <button onClick={incCount}>Increment</button>
        <button onClick={decCount}>Decrement</button>
        <br />
        <button onClick={changeColor}>Change Color</button>
      </div>

      <div>
        <p>Window Width: {width}</p>
        <p>Window Height: {height}</p>
      </div>
    </>
  );
}

export default MyComponent;
