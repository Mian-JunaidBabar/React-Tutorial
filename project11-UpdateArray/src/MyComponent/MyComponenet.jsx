import React, { useState } from "react";

function MyComponent() {
  const [food, setFood] = useState(["Pizza", "Burger", "Pasta"]);

  function handleAddFood() {
    const foodInput = document.getElementById("foodInput");
    const newFood = foodInput.value;

    console.log("Adding food:", newFood);

    foodInput.value = "";

    setFood((f) => [...f, newFood]);
  }

  function handleRemoveFood(index) {
    setFood(food.filter((_, i) => i !== index));
  }

  return (
    <>
      <h1>List of Food</h1>
      <ul>
        {food.map((food, i) => (
          <li key={i} onDoubleClick={() => handleRemoveFood(i)}>
            {food}
          </li>
        ))}
      </ul>

      <input type="text" placeholder="Add food item" id="foodInput" />
      <button onClick={handleAddFood}>Add Food</button>
    </>
  );
}

export default MyComponent;
