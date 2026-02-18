import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <>
      <ul className="flex bg-blue-900 p-2 gap-4 rounded-md cursor-pointer">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "bg-yellow-300 text-black p-2" : "bg-blue-900"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "bg-yellow-300 text-black p-2" : "bg-blue-900"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "bg-yellow-300 text-black p-2" : "bg-blue-900"
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/github"
            className={({ isActive }) =>
              isActive ? "bg-yellow-300 text-black p-2" : "bg-blue-900"
            }
          >
            GitHub
          </NavLink>
        </li>
      </ul>
    </>
  );
}
