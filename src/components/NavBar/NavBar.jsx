import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";


const NavBar = () => {
  const links = (
    <>
      <li>
        <a>Home</a>
      </li>

      <li>
        <a>Statistics</a>
      </li>

      <li>
        <a>Dashboard</a>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="max-w-5xl mx-auto navbar bg-base-100 shadow-sm">
        <div className=" navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">


          <button className="btn btn-ghost btn-circle">
            <div className="indicator "> 
              <BsCart3 className="mt-1 mr-1 "></BsCart3>
              <span className=" badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>


          <button className="btn btn-ghost btn-circle">
            <div className="indicator "> 
              <FaRegHeart className="mt-1 mr-1"></FaRegHeart>
              <span className=" badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default NavBar;
