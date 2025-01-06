import React, { useState } from "react";

export default function Experience({
  isActive,
  onShow,
  experienceData,
  updateData,
}) {
  const initialExperienceState = {
    heading: "",
    subHeading: "",
    location: "",
    date: "",
    description: "",
  };
  const [thisExperience, setThisExperience] = useState(initialExperienceState);
  const [editingIndex, setEditingIndex] = useState(null);

  function handleChange(detail, e) {
    const newValue = e.target.value;
    setThisExperience((prev) => ({
      ...prev,
      [detail]: newValue,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingIndex !== null) {
      experienceData[editingIndex] = thisExperience;
      setEditingIndex(null);
    } else {
      experienceData.push(thisExperience);
    }
    updateData({ experience: experienceData });
    setThisExperience(initialExperienceState);
  };

  function handleItemClick(index) {
    setEditingIndex(index);
    setThisExperience(experienceData[index]);
  }

  function moveItem(index, direction) {
    console.log(index);
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= experienceData.length) return;
    const updatedData = [...experienceData];
    const [movedItem] = updatedData.splice(index, 1);
    updatedData.splice(newIndex, 0, movedItem);
    updateData({ experience: updatedData });
  }

  function handleDelete(index) {
    const updatedData = experienceData.filter((_, i) => i !== index);
    updateData({ experience: updatedData });
  }

  function ListExperience() {
    const listExperience = experienceData.map((experience, index) => (
      <li key={crypto.randomUUID()}>
        {experience.heading}
        {index != 0 && index != null ? (
          <button onClick={() => moveItem(index, -1)}>Up</button>
        ) : null}
        {index != experienceData.length - 1 && index != null ? (
          <button onClick={() => moveItem(index, 1)}>Down</button>
        ) : null}
        <button onClick={() => handleItemClick(index)}>Edit</button>
        <button onClick={() => handleDelete(index)}>Delete</button>
      </li>
    ));
    return listExperience;
  }

  const content = () => {
    return (
      <div>
        <h3>Add experience</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Experience:
            <input
              type="text"
              value={thisExperience.heading}
              onChange={(e) => handleChange("heading", e)}
            />
          </label>
          <label>
            Role:
            <input
              type="text"
              value={thisExperience.subHeading}
              onChange={(e) => handleChange("subHeading", e)}
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              value={thisExperience.location}
              onChange={(e) => handleChange("location", e)}
            />
          </label>
          <label>
            Date:
            <input
              type="text"
              value={thisExperience.date}
              onChange={(e) => handleChange("date", e)}
            />
          </label>
          <label>
            Description:
            <textarea
              type="text"
              value={thisExperience.description}
              onChange={(e) => handleChange("description", e)}
            />
          </label>
          <button type="submit">
            {editingIndex !== null ? "Finish Editing" : "Add Experience"}
          </button>
        </form>

        <div>
          <ListExperience></ListExperience>
        </div>
      </div>
    );
  };

  return (
    <section>
      <h2 onClick={onShow}>Experience</h2>
      {isActive ? content() : null}
    </section>
  );
}
