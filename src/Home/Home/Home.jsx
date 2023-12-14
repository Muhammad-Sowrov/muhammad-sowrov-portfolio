import ScrollTop from "../../components/ScrollTop/ScrollTop";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Banner from "../Header/Banner/Banner";
import Project from "../Project/Project";
import Skill from "../Skill/Skill";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <ScrollTop />
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
};

export default Home;
