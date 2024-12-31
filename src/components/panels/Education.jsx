import React, { useState } from "react";

export default function Education({
  isActive,
  onShow,
  educationData,
  updateData,
}) {
  const initialEducationState = {
    heading: "",
    subHeading: "",
    location: "",
    date: "",
    description: [],
  };
  const [thisEducation, setThisEducation] = useState({
    heading: "",
    subHeading: "",
    location: "",
    date: "",
    description: [],
  });

  function handleChange(detail, e) {
    const newValue = e.target.value;
    setThisEducation((prev) => ({
      ...prev,
      [detail]: newValue,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    educationData.push(thisEducation);
    updateData({ education: educationData });
    setThisEducation(initialEducationState);
  };

  const content = () => {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            School:
            <input
              type="text"
              value={thisEducation.heading}
              onChange={(e) => handleChange("heading", e)}
            />
          </label>
          <label>
            Degree:
            <input
              type="text"
              value={thisEducation.subHeading}
              onChange={(e) => handleChange("subHeading", e)}
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              value={thisEducation.location}
              onChange={(e) => handleChange("location", e)}
            />
          </label>
          <label>
            Date:
            <input
              type="text"
              value={thisEducation.date}
              onChange={(e) => handleChange("date", e)}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={thisEducation.description}
              onChange={(e) => handleChange("description", e)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };

  return (
    <section>
      <h2 onClick={onShow}>Education</h2>
      {isActive ? content() : null}
    </section>
  );
}
