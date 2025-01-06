import { useState } from "react";
import PersonalInformation from "./panels/PersonalInformation";
import Education from "./panels/Education";
import Experience from "./panels/Experience";
import Projects from "./panels/Projects";
import Skills from "./panels/Skills";
import Referees from "./panels/Referees";
export default function CVInput({ cvData, setCvData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleDataChange = (newData) => {
    setCvData((prevData) => ({ ...prevData, ...newData }));
  };
  //console.log(cvData);
  return (
    <>
      <PersonalInformation
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
        updateData={handleDataChange}
      />
      <Education
        isActive={activeIndex === 1}
        onShow={() => {
          setActiveIndex(1);
        }}
        educationData={cvData.education}
        updateData={handleDataChange}
      />
      <Experience
        isActive={activeIndex === 2}
        onShow={() => {
          setActiveIndex(2);
        }}
        experienceData={cvData.experience}
        updateData={handleDataChange}
      />
      <Projects
        isActive={activeIndex === 3}
        onShow={() => {
          setActiveIndex(3);
        }}
        projectData={cvData.projects}
        updateData={handleDataChange}
      />
      <Skills
        isActive={activeIndex === 4}
        onShow={() => {
          setActiveIndex(4);
        }}
        skillData={cvData.skills}
        updateData={handleDataChange}
      />
      <Referees
        isActive={activeIndex === 5}
        onShow={() => {
          setActiveIndex(5);
        }}
        refereeData={cvData.referees}
        updateData={handleDataChange}
      />
    </>
  );
}
