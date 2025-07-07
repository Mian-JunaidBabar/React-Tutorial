function Button() {
  let count = 0;

  const handleClick = (name) => {
    if (count < 5) {
      count++;
      console.log(`${name} clicked ${count} times`);
    } else {
      console.log(`${name} STOP CLICKING ME!`);
    }
  };

  const handleClick2 = (e) => (e.target.textContent = "OUCH!");

  return (
    <button
      onClick={() => handleClick("POLA")}
      onDoubleClick={(e) => handleClick2(e)}
    >
      Click me PLEJ!!
    </button>
  );
}

export default Button;
