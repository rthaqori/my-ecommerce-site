import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faBars,
  faX,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [transition, setTransition] = useState(false);

  function toggleMenu() {
    setShow(!show);
    setTransition(!transition);
  }

  return (
    <nav className="relative flex h-16 w-full flex-row items-center justify-between px-6 py-2 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
      <div className="flex flex-row items-center md:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl"
          onClick={toggleMenu}
        />
      </div>
      <a href="#" className="text-2xl font-extrabold md:text-3xl lg:text-4xl">
        rthaqori
      </a>
      <div
        className={`absolute top-0 z-10 h-screen w-11/12 bg-white drop-shadow ${
          transition ? "transition-all duration-300 ease-in-out" : ""
        } sm:w-full md:relative md:left-0 md:ml-auto md:mr-6 md:h-max md:w-max md:p-0 md:drop-shadow-none ${
          show ? "left-0" : "-left-full"
        }`}
      >
        <div className="mb-3 flex h-16 w-full items-center justify-end px-5 py-3 md:hidden">
          <button className="h-10 w-10" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faX} className="ml-auto mr-2 h-5 w-5" />
          </button>
        </div>
        <a href="#" className="px-8 py-4 md:hidden">
          <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
        </a>
        <ul className="mt-5 flex flex-col md:mt-0 md:flex-row">
          <li className="border-b-2 px-8 py-4 text-xl font-medium text-gray-500 transition-colors delay-150 ease-in-out md:border-b-0 md:px-4 md:py-2 md:hover:text-black">
            <a href="#">Home</a>
          </li>
          <li className="border-b-2 px-8 py-4 text-xl font-medium text-gray-500 transition-colors delay-150 ease-in-out md:border-b-0 md:px-4 md:py-2 md:hover:text-black">
            <a href="#">Shop</a>
          </li>
          <li className="border-b-2 px-8 py-4 text-xl font-medium text-gray-500 transition-colors delay-150 ease-in-out md:border-b-0 md:px-4 md:py-2 md:hover:text-black">
            <a href="#">My Account</a>
          </li>
          <li className="border-b-2 px-8 py-4 text-xl font-medium text-gray-500 transition-colors delay-150 ease-in-out md:border-b-0 md:px-4 md:py-2 md:hover:text-black">
            <a href="#">About</a>
          </li>
          <li className="border-b-2 px-8 py-4 text-xl font-medium text-gray-500 transition-colors delay-150 ease-in-out md:border-b-0 md:px-4 md:py-2 md:hover:text-black">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="relative flex">
        <span
          id="cart-quantity"
          className="absolute -right-2.5 -top-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-xs font-bold text-white"
        >
          10
        </span>
        <FontAwesomeIcon icon={faShoppingBag} className="h-6 w-6" />
      </div>
    </nav>
  );
};

export default Navbar;
