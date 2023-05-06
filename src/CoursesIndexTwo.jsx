import React from "react";
import { useNavigate } from "react-router-dom";

export default function CoursesIndexTwo() {
  const navigate = useNavigate();

  let arr = ["mobile", "phone", "notebooks"];
  const changeRouter = (item) => {
    navigate(`${item}`, { replace: true });
  };
  return (
    <div>
      CoursesIndexTwo
      {arr.map((item) => {
        return <button onClick={() => changeRouter(item)}>{item} </button>;
      })}
    </div>
  );
}
