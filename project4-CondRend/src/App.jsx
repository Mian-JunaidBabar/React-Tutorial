import UserGreeting from "./Usergreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="JohnDoe" />
      <UserGreeting isLoggedIn={false} username="Guest" />
      <UserGreeting isLoggedIn={true} username="JaneSmith" />
      <UserGreeting isLoggedIn={false} username="Visitor" />
    </>
  );
}

export default App;
