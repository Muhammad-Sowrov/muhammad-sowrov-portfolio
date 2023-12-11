import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { RiMenu4Fill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";

import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="shadow-md w-full fixed z-30top-0 left-0">
      <div className="">
        <div className="md:flex items-center justify-between bg-gray-900 text-white py-4 px-4">
          <Link to="/">
            <img
              src="/logo.svg"
              className="w-5 md:w-8 rounded-full cursor-pointer"
              alt=""
            />
          </Link>
          <div
            onClick={() => setOpen(!open)}
            className="text-xl absolute right-5 top-5 cursor-pointer md:hidden"
          >
            {open ? <FaTimes /> : <RiMenu4Fill />}
          </div>
          <ul
            className={`md:flex items-center text-gray-300 gap-5 md:pb-0 pb-5 absolute md:static bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${
              open ? "top-8" : "top-[-490px]"
            }`}
          >
            <Link onClick={() => scroll("about")} to="#about">
              <li className="hover:text-gray-600 duration-500 md:my-0 my-5">
                About
              </li>
            </Link>
            <Link onClick={() => scroll("skill")} to="#skill">
              <li className="hover:text-gray-600 duration-500 md:my-0 my-5">
                Skill
              </li>
            </Link>
            <Link onClick={() => scroll("project")} to="#project">
              <li className="hover:text-gray-600 duration-500 md:my-0 my-5">
                Project
              </li>
            </Link>
            <Link onClick={() => scroll("contact")} to="#contact">
              <li className="hover:text-gray-600 duration-500 md:my-0 my-5">
                Contact
              </li>
            </Link>
            <Link to="#">
              <Button value={"Resume"}></Button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
