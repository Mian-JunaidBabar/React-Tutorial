import React, { useState } from "react";

function MyComponent() {
  const [car, setCar] = useState({
    year: 2025,
    make: "Toyota",
    model: "Supra",
  });

  return (
    <>
      <p>
        Your car specs are : {car.year} {car.make} {car.model}
      </p>

      <div>
        <input
          type="number"
          value={car.year}
          onChange={(e) => setCar({ ...car, year: e.target.value })}
        />
        <input
          type="text"
          value={car.make}
          onChange={(e) => setCar({ ...car, make: e.target.value })}
        />
        <input
          type="text"
          value={car.model}
          onChange={(e) => setCar({ ...car, model: e.target.value })}
        />
      </div>
    </>
  );
}

export default MyComponent;
