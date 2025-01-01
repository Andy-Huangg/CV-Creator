import { useState } from "react";
import PersonalInformation from "./panels/PersonalInformation";
import Education from "./panels/Education";

export default function CVDetails({ cvData, setCvData }) {
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
    </>
  );
}
