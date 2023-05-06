import { Link, useParams } from "react-router-dom";
function capitalizeString(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function Course() {
  let { id } = useParams();

  return (
    <div>
      <h2>
        Welcome to the {id.split("-").map(capitalizeString).join(" ")} course!
      </h2>

      <p>This is a great course. You're gonna love it!</p>

      <Link to="/courses">See all courses</Link>
    </div>
  );
}

export default Course;
