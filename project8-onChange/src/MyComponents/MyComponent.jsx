import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [message, setMessage] = useState("");
  const [nub, setNub] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <h1>Hello, {name}!</h1>
      </div>

      <div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <h2>Your message: {message}</h2>
      </div>

      <div>
        <h5>Am I a nub? {nub}</h5>
        <input
          type="radio"
          name="nub"
          value="yes"
          onChange={() => setNub("Yes")}
        />
        <label htmlFor="nub">Yes</label>

        <input
          type="radio"
          name="nub"
          value="maybe"
          onChange={() => setNub("Maybe")}
        />
        <label htmlFor="nub">Maybe</label>

        <input
          type="radio"
          name="nub"
          value="Surely"
          onChange={() => setNub("Surely")}
        />
        <label htmlFor="nub">Surely</label>
      </div>
    </>
  );
}

export default MyComponent;
