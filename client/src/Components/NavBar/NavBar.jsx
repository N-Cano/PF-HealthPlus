// NavBar.jsx
import { Link } from "react-router-dom";
import logo from "../../assets/lg1.jpeg"
import Scroll from "../Scroll/Scroll";

const NavBar = () => {
  return (
    <nav className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-12 w-auto" src={logo} alt="Logo" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
               
                <div className="flex items-center">
                  <Link to="/login">
                    <a
                      href="#"
                      className="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      LOGIN
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contenedor de botones del componente Scroll */}
          <div className="flex items-center space-x-4">
            {/* Botones del componente Scroll */}
            <Scroll />
          </div>

          <div className="relative ml-3">
            <div>
              <button
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

