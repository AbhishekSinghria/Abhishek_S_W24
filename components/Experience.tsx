import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Education" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="Computer Programming and Analysis"
          subTitle="George Brown College 2022 - 2024"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="Computer Networking and technical support"
          subTitle="Seneca College 2017-2018"
          icon={<SiToptal />}
        />
      </div>
    </div>
  );
};

export default Experience;
