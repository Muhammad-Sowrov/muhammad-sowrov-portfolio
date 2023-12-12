import { CiLinkedin } from "react-icons/ci";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaSquareTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="min-h-screen flex items-center ">
      <div className="grid grid-cols-2">
        <div className="w-ful pl-24 ">
          <div className="flex gap-2">
            <div className="border-2 border-white h-52"></div>
            <div>
              <h1 className="text-2xl">Hi, I'am</h1>
              <h1 className="text-5xl font-bold">Muhammad</h1>
              <h1 className="text-5xl font-bold">Sowrov</h1>
              <div className="flex gap-8 mt-10">
                <Link to="https://www.linkedin.com/in/muhammad-sowrov">
                  <CiLinkedin />
                </Link>
                <Link to="https://www.facebook.com/muhammadsowrov53">
                  <RiFacebookBoxFill />
                </Link>
                <Link to="https://twitter.com/__Sowrov">
                  <FaSquareTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default Banner;
