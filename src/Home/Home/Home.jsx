import ScrollTop from "../../components/ScrollTop/ScrollTop";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";
import Skill from "../Skill/Skill";


const Home = () => {
    return (
        <div>
            <ScrollTop/>
            <About></About>
            <Skill></Skill>
            <Project></Project>
            <Contact></Contact>

        </div>
    );
};

export default Home;