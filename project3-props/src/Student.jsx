import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className="student">
      <div className="studentCard">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Is Student: {props.isStudent ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  name: "Unknown",
  age: 0,
  isStudent: false,
};

export default Student;
