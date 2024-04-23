import Title from "../../components/Title/Title";
import Skills from "../../Data/Skills";
import { Line } from "rc-progress";
// console.log(Skills);

const Skill = () => {
  return (
    <div id="skill">
      <div className="pt-20">
        <Title value={"Skills"}></Title>
      </div>
      <div className="min-h-screen flex justify-center items-center mx-10">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
          {Skills.map((skill) => (
            <div key={skill.id}>
              {/* <div className="w-72 md:w-80 lg:w-96 h-30 mt-5 bg-gray-700 shadow-zinc-900 text-white"> */}
              <div className="w-80 h-30 mt-5 bg-gray-700 shadow-zinc-900 text-white">
                <div className="card-body">
                  <div className="flex justify-between items-center">
                    <h2 className="card-title">{skill.name}</h2>
                    <h2 className="card-title">{skill.percent}%</h2>
                  </div>
                  <Line
                    percent={skill.percent}
                    strokeWidth={4}
                    strokeColor="#0091e4"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
