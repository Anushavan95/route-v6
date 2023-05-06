import { Link, useNavigate } from "react-router-dom";

export default function CoursesIndex() {
  const navigate = useNavigate();
  let arr = ["react-fundamentals", "advanced-react", "react-router"];
  const changeRouter = (item) => {
    navigate(`${item}`, { replace: true });
  };
  return (
    <div>
      <p>Please choose a course:</p>

      <nav>
        <ul>
          {arr.map((item) => {
            return <button onClick={() => changeRouter(item)}>{item} </button>;
          })}
        </ul>
      </nav>
    </div>
  );
}
