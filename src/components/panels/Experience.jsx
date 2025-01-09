import React, { useState } from "react";
import ListItem from "../ListItem";

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

  const content = () => {
    return (
      <div className={`card ${isActive ? "slide-out" : ""}`}>
        <div className="formContainer">
          <h3 className="marginBottom center head">
            {editingIndex == null ? "Add experience" : "Edit experience"}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label>Experience:</label>
              <input
                type="text"
                value={thisExperience.heading}
                onChange={(e) => handleChange("heading", e)}
              />
            </div>
            <div className="formGroup">
              <label>Role:</label>
              <input
                type="text"
                value={thisExperience.subHeading}
                onChange={(e) => handleChange("subHeading", e)}
              />
            </div>
            <div className="formGroup">
              <label>Location:</label>
              <input
                type="text"
                value={thisExperience.location}
                onChange={(e) => handleChange("location", e)}
              />
            </div>
            <div className="formGroup">
              <label>Date:</label>
              <input
                type="text"
                value={thisExperience.date}
                onChange={(e) => handleChange("date", e)}
              />
            </div>
            <div className="formGroup">
              <label>Description:</label>
              <textarea
                type="text"
                value={thisExperience.description}
                onChange={(e) => handleChange("description", e)}
              />
            </div>
            <button type="submit">
              {editingIndex !== null ? "Finish Editing" : "Add Experience"}
            </button>
          </form>
          <div className="marginTop">
            <ListItem
              itemData={experienceData}
              editingIndex={editingIndex}
              moveItem={moveItem}
              handleItemClick={handleItemClick}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="section">
      <h2
        onClick={() => (isActive ? onShow(null) : onShow(1))}
        className={`sectionHeader ${isActive ? "activeHeader" : ""} `}
      >
        Experience
      </h2>
      {isActive ? content() : null}
    </section>
  );
}
