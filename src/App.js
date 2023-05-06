import * as React from "react";
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";
import Course from "./Course";
import Courses from "./Courses";
import CoursesIndex from "./CoursesIndex";
import CoursesIndexTwo from "./CoursesIndexTwo";
import Footer from "./Footer";
import Home from "./Home";
import Layout from "./Layout";
import Nav from "./Nav";
import Product from "./Product";
import Products from "./Products";

export default function App() {
  let routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/builder",
          element: <Courses />,
          children: [
            { index: true, element: <CoursesIndex /> },
            { path: "/builder/:id", element: <Course /> },
          ],
        },
        {
          path: "/builder/catalog",
          element: <Products />,
          children: [
            { index: true, element: <CoursesIndexTwo /> },
            { path: "/builder/catalog/:id", element: <Product /> },
          ],
        },
        { path: "*", element: <NoMatch /> },
      ],
    },
  ];
  let element = useRoutes(routes);
  return (
    <div>
      <h1>Route Objects Example</h1>
      <Nav />
      {element}
      <Footer />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>It looks like you're lost...</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
