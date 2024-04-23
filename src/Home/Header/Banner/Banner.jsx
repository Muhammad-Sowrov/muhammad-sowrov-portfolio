import { CiLinkedin } from "react-icons/ci";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaSquareTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

const Banner = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center ">
      <div className="flex items-center justify-center">
      {/* <div className="grid grid-cols-2"> */}
        <div className="w-ful p-24 flex items-center justify-center ">
          <div className="flex gap-2">
            <div className="border-2 border-white h-32 md:h-44"></div>
            {/* <div>
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
            </div> */}
             <div>
            <h1 className="text-xl md:text-5xl font-bold">Hi, I'am</h1>
            <h1 className="text-xl md:text-4xl font-bold">Muhammad Sowrov</h1>
            {/* <h1 className="text-2xl font-bold">Sowrov</h1> */}

            <h1 className="text-xs md:text-2xl font-bold">
              <Typewriter
                options={{
                  strings: ["Frontend Developer.", "React Developer"],
                  autoStart: true,
                  loop: 3,
                }}
              />
            </h1>

            <div className="flex gap-2 md:gap-8 mt-3 md:mt-5">
              <Link  className="text-2xl" to="https://www.linkedin.com/in/muhammad-sowrov">
                <CiLinkedin />
              </Link>
              <Link  className="text-2xl" to="https://www.facebook.com/muhammadsowrov53">
                <RiFacebookBoxFill />
              </Link>
              <Link className="text-2xl" to="https://twitter.com/__Sowrov">
                <FaSquareTwitter />
              </Link>
            </div>
          </div>
          </div>
        </div>
        {/* <div className="w-full"></div> */}
      </div>
    </div>
  );
};

export default Banner;
