import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* mobile dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">
                <a>Journey</a>
              </Link>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1ggf</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/">
          <ul>
            <p className="btn btn-ghost text-xl">Journey</p>
          </ul>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <p>Item 1</p>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <p>Submenu 1</p>
                </li>
                <li>
                  <p>Submenu 2</p>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <p>Item 3</p>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn">Sign Up / Log In</button>
      </div>
    </div>
  );
}
