import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <hr />

      <Outlet />
    </div>
  );
}
export default Layout;
