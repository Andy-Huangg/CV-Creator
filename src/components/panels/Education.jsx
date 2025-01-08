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
    console.log(index);
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

  function ListEducation() {
    const listEducation = educationData.map((education, index) => (
      <li key={crypto.randomUUID()}>
        <div className="listItems">
          <div className="center">• {education.heading}</div>

          {editingIndex == null ? (
            <div className="center">
              {index != 0 && index != null ? (
                <button onClick={() => moveItem(index, -1)}>Up</button>
              ) : null}
              {index != educationData.length - 1 && index != null ? (
                <button onClick={() => moveItem(index, 1)}>Down</button>
              ) : null}
              <button onClick={() => handleItemClick(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ) : null}
        </div>
      </li>
    ));
    return listEducation;
  }

  const content = () => {
    return (
      <div className={`card ${isActive ? "slide-out" : ""}`}>
        <div className="formContainer">
          <h3 className="marginBottom">
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
            <ListEducation
              itemData={educationData}
              editingIndex={editingIndex}
              moveItem={moveItem}
              handleItemClick={handleItemClick}
              handleDelete={handleDelete}
            ></ListEducation>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="section">
      <h2 onClick={onShow} className={`sectionHeader `}>
        Education
      </h2>
      {isActive ? content() : null}
    </section>
  );
}
