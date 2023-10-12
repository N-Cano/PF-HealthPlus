import { Link } from "react-router-dom";
import logo2 from "../../assets/logo2sinfond0.png";

const Nav = () => {
  return (
    <nav className="bg-blue-900 text-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link to="/home" className="flex flex-shrink-0 items-center">
              <img className="h-10 w-auto" src={logo2} alt="Logo" />
            </Link>

            <div className="ml-8 flex items-center justify-center">
              <Link to="/home">
                <a
                  href="#"
                  className="font-bold hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 text-sm"
                >
                  HOME
                </a>
              </Link>
            </div>
          </div>
          <div className="text-center">
            {" "}
            <h1 className="font-bold">HEALTHPLUS</h1>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
