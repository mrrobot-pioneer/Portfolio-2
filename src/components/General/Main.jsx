import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../../assets/styles/main.css";

export default function Main() {
  return (
    <main className="main">
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "menu active" : "menu")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) => (isActive ? "menu active" : "menu")}
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? "menu active" : "menu")}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "menu active" : "menu")}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "menu active" : "menu")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* the outlet */}
      <Outlet />
    </main>
  );
}
