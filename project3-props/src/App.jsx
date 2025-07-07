import Student from "./Student.jsx";

function App() {
  let Students = [
    { name: "Nub", age: 20, isStudent: false },
    { name: "Nub2", age: 21, isStudent: true },
    { name: "Nub3", age: 22, isStudent: true },
    { name: "Nub4", age: 23, isStudent: false },
    { name: "Nub5", age: 24, isStudent: true },
    { name: "Nub6", age: 25, isStudent: false },
    { name: "Nub7", age: 26, isStudent: true },
    { name: "Nub8", age: 27, isStudent: false },
    { name: "Nub9", age: 28, isStudent: true },
    { name: "Nub10", age: 29, isStudent: false },
    { name: 213, age: "213", isStudent: "213" },
  ];

  return (
    <>
      <h1>Students</h1>
      <Student />
      {Students.map((student, index) => {
        return (
          <Student
            key={index}
            name={student.name}
            age={student.age}
            isStudent={student.isStudent}
          />
        );
      })}
    </>
  );
}

export default App;
