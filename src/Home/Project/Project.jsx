import { ImGithub } from "react-icons/im";
import { FaExternalLinkAlt } from "react-icons/fa";
import projects from "../../Data/Projects";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
const Project = () => {
  return (
    <div id="project">
      <div className="pt-20">
        <Title value={"Projects"}></Title>
      </div>
      <div className="min-h-screen flex justify-center items-center mx-10 flex-col gap-3">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 ">
          {projects.map((item) => (
            <div key={item.id}>
              <div className="car h-auto md:h-96 lg:h-96 bg-gray-700 text-white shadow-xl">
                <figure className="px-1 pt-1 flex-1 h-32">
                  <img
                    src={item.image}
                    alt="web"
                    className="rounded w-full h-28 bg-cover md:max-h-32"
                  />
                </figure>
                <div className="px-5 py-5 h-30">
                  <h2 className="card-title">{item.name}</h2>
                  <p className="h-auto md:h-auto lg:h-24">{item.description}</p>
                  <div className="flex justify-around my-10">
                    <a href={item.live}>
                      <FaExternalLinkAlt />
                    </a>
                    <a href={item.code}>
                      <ImGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to="https://github.com/Muhammad-Sowrov">
          <Button value={"Show All"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
