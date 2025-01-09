import React, { useState } from "react";
import ListItem from "../ListItem";

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
    description: "",
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

  function handleDelete(index) {
    const updatedData = educationData.filter((_, i) => i !== index);
    updateData({ education: updatedData });
  }

  const content = () => {
    return (
      <div className={`card ${isActive ? "slide-out" : ""}`}>
        <div className="formContainer">
          <h3 className="marginBottom center head">
            {editingIndex == null ? "Add education" : "Edit education"}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label>School: </label>
              <input
                type="text"
                value={thisEducation.heading}
                onChange={(e) => handleChange("heading", e)}
              />
            </div>

            <div className="formGroup">
              <label>Degree: </label>
              <input
                type="text"
                value={thisEducation.subHeading}
                onChange={(e) => handleChange("subHeading", e)}
              />
            </div>

            <div className="formGroup">
              <label>Location: </label>
              <input
                type="text"
                value={thisEducation.location}
                onChange={(e) => handleChange("location", e)}
              />
            </div>

            <div className="formGroup">
              <label>Date: </label>
              <input
                type="text"
                value={thisEducation.date}
                onChange={(e) => handleChange("date", e)}
              />
            </div>

            <div className="formGroup">
              <label>Description: </label>
              <textarea
                type="text"
                value={thisEducation.description}
                onChange={(e) => handleChange("description", e)}
              />
            </div>

            <button type="submit">
              {editingIndex !== null ? "Finish Editing" : "Add Education"}
            </button>
          </form>
          <div className="marginTop">
            <ListItem
              itemData={educationData}
              editingIndex={editingIndex}
              moveItem={moveItem}
              handleItemClick={handleItemClick}
              handleDelete={handleDelete}
            ></ListItem>
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
        Education
      </h2>
      {isActive ? content() : null}
    </section>
  );
}
