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
  const [thisEducation, setThisEducation] = useState(initialEducationState);
  const [editingIndex, setEditingIndex] = useState(null);

  function handleChange(detail, e) {
    const newValue = e.target.value;
    setThisEducation((prev) => ({
      ...prev,
      [detail]: newValue,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingIndex !== null) {
      educationData[editingIndex] = thisEducation;
      setEditingIndex(null);
    } else {
      educationData.push(thisEducation);
    }
    updateData({ education: educationData });
    setThisEducation(initialEducationState);
  };

  function handleItemClick(index) {
    setEditingIndex(index);
    setThisEducation(educationData[index]);
  }

  function moveItem(index, direction) {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= educationData.length) return;
    const updatedData = [...educationData];
    const [movedItem] = updatedData.splice(index, 1);
    updatedData.splice(newIndex, 0, movedItem);
    updateData({ education: updatedData });
  }

  function ListEducation() {
    const listEducation = educationData.map((education, index) => (
      <li key={crypto.randomUUID()}>
        {education.heading}
        <button onClick={() => moveItem(index, -1)}>Up</button>
        <button onClick={() => moveItem(index, 1)}>Down</button>
        <button onClick={() => handleItemClick(index)}>Edit</button>
      </li>
    ));
    return listEducation;
  }

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
          <button type="submit">
            {editingIndex !== null ? "Finish Editing" : "Submit"}
          </button>
        </form>

        <div>
          <ListEducation></ListEducation>
        </div>
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
