import { Outlet, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__content">
          <nav className="header__content__nav">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
