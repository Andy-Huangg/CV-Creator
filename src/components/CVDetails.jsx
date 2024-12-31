import { useState } from "react";
import PersonalInformation from "./panels/PersonalInformation";
import Education from "./panels/Education";

export default function CVDetails({ setCvData }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleInfoChange = (newData) => {
    setCvData((prevData) => ({ ...prevData, ...newData }));
  };
  return (
    <>
      <PersonalInformation
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
        updateData={handleInfoChange}
      />
      <Education
        isActive={activeIndex === 1}
        onShow={() => {
          setActiveIndex(1);
        }}
      />
    </>
  );
}
