import ComponentC from "./ComponentC";

function ComponentB(props) {
  return (
    <div className="component-b">
      <h1>Component B</h1>
      {/* <ComponentC user={props.user} /> */}
      <ComponentC />
    </div>
  );
}

export default ComponentB;
