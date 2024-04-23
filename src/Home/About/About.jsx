import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import resume from "/MD SOWROV'S RESUME.pdf";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "MD SOWROV'S RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="about">
      <div className=" pt-20 mx-auto ">
        <Title value={"About"}></Title>
      </div>
      <div className="min-h-scree min-h-[60vh] flex justify-center items-center">
        <div className="flex flex-col-reverse md:flex-row lg:flex-row sm:items-centr justify-center gap-10">
          <div className="md:w-1/2 pl-4 md:pl-8">
            <div className="">
              <p className="w-11/12 font-sm lg:font-bold mb-5 pl-2 md:pl-5 items-center justify-center text-center md:text-start">
                Hi, I'm Sowrov, a dedicated React front-end developer with a
                passion for creating captivating user experiences. Over the last
                six months, I've immersed myself in the world of web
                development, focusing on mastering React.js for the front end,
                Express.js for the server side, and MongoDB for database
                management. This comprehensive skill set allows me to design and
                develop full-stack websites with a keen eye for detail and
                functionality.
              </p>
            </div>
            <div className="pl-20 md:pl-4 lg:pl-8 flex gap-10 md:gap-14">
              {/* <Button value={"Resume"}></Button> */}
              {/* <button onClick={handleDownload} className="border border-white px-3 lg:px-5 py-1 rounded-lg hover:text-gray-600 duration-500 ">Resume</button> */}
              <a
                href={resume}
                download="MD SOWROV'S RESUME.pdf"
                className="border border-white px-3 lg:px-5 py-1 rounded-lg hover:text-gray-600 duration-500"
                onClick={handleDownload}
              >
                Resume
              </a>
              <Button value={"Hire Me"}></Button>
            </div>
          </div>
          <div className="md:w-1/2 lg:ml-32">
            <img
              src="https://i.ibb.co/3Cycq5Y/IMG-20231211-221702.jpg"
              className="w-80 md:w-72 lg:w-80 rounded-2xl bg-gray-500 hover:bg-gray-50 mt-20 md:mt-0 ml-14 md:ml-10"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
