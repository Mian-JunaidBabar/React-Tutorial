import { useContext } from "react";
import ComponentA from "./components/ComponentA";

// useContext is a React hook that allows you to access the context value provided by a Context Provider. It is used to consume context in functional components.
// It takes a context object (created by React.createContext) as an argument and returns the current context value.

function App() {
  return (
    <>
      <ComponentA />
    </>
  );
}

export default App;
