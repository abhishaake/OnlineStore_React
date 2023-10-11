import { Outlet, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Header;
