import Button from "../../components/Button/Button";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex justify-center items-center mx-10"
    >
      <div className="flex flex-col-reverse md:flex-row lg:flex-row sm:items-center justify-center gap-10">
        <div className="md:w-1/2">
          <div className="">
            <p className="font-sm lg:font-bold mb-5 md:pl-5">
              Hi, I'm Sowrov, a dedicated React front-end developer with a
              passion for creating captivating user experiences. Over the last
              six months, I've immersed myself in the world of web development,
              focusing on mastering React.js for the front end, Express.js for
              the server side, and MongoDB for database management. This
              comprehensive skill set allows me to design and develop full-stack
              websites with a keen eye for detail and functionality.
            </p>
          </div>
          <div className="sm:pl-10 md:pl-5 flex gap-10 md:gap-20">
            <Button value={"Resume"}></Button>
            <Button value={"Hire Me"}></Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://i.ibb.co/3Cycq5Y/IMG-20231211-221702.jpg"
            className="w-80 rounded-2xl bg-gray-500 hover:bg-gray-50 mt-20 md:mt-0 ml-1 md:ml-0"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;