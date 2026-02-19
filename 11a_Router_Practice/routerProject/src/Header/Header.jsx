import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex bg-gray-800 p-4 text-2xl font-bold text-white justify-between">
        Dre. Mandeep Kaur
        <ul className="flex gap-15">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-gray-800 p-3 rounded-xl"
                  : "bg-gray-800"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-gray-800 p-3 rounded-xl"
                  : "bg-gray-800"
              }
              to="/bookappointment"
            >
              Book Appointment
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-gray-800 p-3 rounded-xl"
                  : "bg-gray-800"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-gray-800 p-3 rounded-xl"
                  : "bg-gray-800"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
