import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllInstructorsView = (props) => {
  let { allInstructors, deleteInstructor } = props;
  if (!allInstructors.length) {
    return <div>There are no instructors.</div>;
  }

  return (
    <div>
      {allInstructors.map((instructor) => {
        let name = instructor.firstname + " " + instructor.lastname;
        return (
          <div key={instructor.id}>
            <Link to={`/instructor/${instructor.id}`}>
              <h1>{name}</h1>
            </Link>
            <p>{instructor.department}</p>
            <button onClick={() => deleteInstructor(instructor.id)}>Delete</button>
          </div>
        );
      })}
      <Link to={`/newinstructor`}>
        <button>Add New Instructor</button>
      </Link>
    </div>
  );
};

AllInstructorsView.propTypes = {
  allInstructors: PropTypes.array.isRequired,
};

export default AllInstructorsView;
