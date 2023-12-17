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
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col-reverse md:flex-row lg:flex-row sm:items-centr justify-center gap-10">
          <div className="md:w-1/2 pl-4 md:pl-8">
            <div className="">
              <p className="font-sm lg:font-bold mb-5 pl-2 md:pl-5">
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
            <div className="sm:pl-10 pl-2 md:pl-5 flex gap-10 md:gap-20">
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
              className="w-80 rounded-2xl bg-gray-500 hover:bg-gray-50 mt-20 md:mt-0 ml-14 md:ml-0"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
