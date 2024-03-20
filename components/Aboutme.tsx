import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          Hello! I’m Abhishek, a dedicated and enthusiastic software engineer
          with a passion for both machine learning and web development. With a
          keen interest in leveraging the power of technology to solve
          real-world problems, I thrive on creating innovative solutions that
          combine the best of both worlds.
        </p>
        <p>
          I am always looking to improve my skills and stay up-to-date with the
          latest best practices in web development. I am excited to continue
          growing as a developer and making meaningful contributions to
          projects and teams.
        </p>
        <div className="flex gap-4">
         
          <a
            href="/aboutme/Resume-portfolio.pdf" 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            download 
          >
            Download Resume
          </a>
         
          <a
            href="/aboutme/CoverLetter-portfolio.pdf" 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            download 
          >
            Download Cover Letter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
