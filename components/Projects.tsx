import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import KaneImage from "../public/img/projects/Kane.jpeg";
import WeatherAppImage from "../public/img/projects/weather-app-image.png";
import BitcoinImage from "../public/img/projects/bitcoin.jpg"; // Import the Bitcoin Analysis project image
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {/* KANE Project */}
        <ProjectCard
          imgSrc={KaneImage}
          title="KANE"
          link="https://kaneproject.ca/"
        />
        
        {/* Weather App */}
        <ProjectCard
          imgSrc={WeatherAppImage}
          title="Weather App"
          link="https://github.com/AbhishekSinghria/Weather-App"
        />

        {/* Bitcoin Analysis Project */}
        <ProjectCard
          imgSrc={BitcoinImage}
          title="Bitcoin Analysis"
          link="https://github.com/AbhishekSinghria/Bitcoin_Analysis_Data/tree/master"
        />
      </div>
    </div>
  );
};

export default Projects;
