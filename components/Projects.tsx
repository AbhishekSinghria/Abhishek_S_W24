import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  // Import the images directly in the Projects component
  const KaneImage = "/img/projects/Kane.jpeg";
  const WeatherAppImage = "/img/projects/weather-app-image.png";
  const BitcoinImage = "/img/projects/bitcoin.jpg";

  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {/* KANE Project */}
        <ProjectCard
          imgSrc={KaneImage} // Pass the image path as a string
          title="KANE"
          link="https://kaneproject.ca/"
        />
        
        {/* Weather App */}
        <ProjectCard
          imgSrc={WeatherAppImage} // Pass the image path as a string
          title="Weather App"
          link="https://github.com/AbhishekSinghria/Weather-App"
        />

        {/* Bitcoin Analysis Project */}
        <ProjectCard
          imgSrc={BitcoinImage} // Pass the image path as a string
          title="Bitcoin Analysis"
          link="https://github.com/AbhishekSinghria/Bitcoin_Analysis_Data/tree/master"
        />
      </div>
    </div>
  );
};

export default Projects;
