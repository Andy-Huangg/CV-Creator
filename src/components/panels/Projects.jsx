import React, { useState } from "react";
import ListItem from "../ListItem";
export default function Projects({
  isActive,
  onShow,
  projectData,
  updateData,
}) {
  const initialProjectState = {
    heading: "",
    link: "",
    subHeading: "",
    location: "",
    date: "",
    description: "",
  };
  const [thisProject, setThisProject] = useState(initialProjectState);
  const [editingIndex, setEditingIndex] = useState(null);

  function handleChange(detail, e) {
    const newValue = e.target.value;
    setThisProject((prev) => ({
      ...prev,
      [detail]: newValue,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingIndex !== null) {
      projectData[editingIndex] = thisProject;
      setEditingIndex(null);
    } else {
      projectData.push(thisProject);
    }
    updateData({ projects: projectData });
    setThisProject(initialProjectState);
  };

  function handleItemClick(index) {
    setEditingIndex(index);
    setThisProject(projectData[index]);
  }

  function moveItem(index, direction) {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= projectData.length) return;
    const updatedData = [...projectData];
    const [movedItem] = updatedData.splice(index, 1);
    updatedData.splice(newIndex, 0, movedItem);
    updateData({ projects: updatedData });
  }

  function handleDelete(index) {
    const updatedData = projectData.filter((_, i) => i !== index);
    updateData({ projects: updatedData });
  }

  const content = () => {
    return (
      <div className={`card ${isActive ? "slide-out" : ""}`}>
        <div className="formContainer">
          <h3 className="marginBottom center head">
            {editingIndex == null ? "Add project" : "Edit project"}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label>Project:</label>
              <input
                type="text"
                value={thisProject.heading}
                onChange={(e) => handleChange("heading", e)}
              />
            </div>
            <div className="formGroup">
              <label>Link:</label>
              <input
                type="text"
                value={thisProject.link}
                onChange={(e) => handleChange("link", e)}
              />
            </div>
            <div className="formGroup">
              <label>Role:</label>
              <input
                type="text"
                value={thisProject.subHeading}
                onChange={(e) => handleChange("subHeading", e)}
              />
            </div>
            <div className="formGroup">
              <label>Technologies:</label>
              <input
                type="text"
                value={thisProject.location}
                onChange={(e) => handleChange("location", e)}
              />
            </div>
            <div className="formGroup">
              <label>Date:</label>
              <input
                type="text"
                value={thisProject.date}
                onChange={(e) => handleChange("date", e)}
              />
            </div>
            <div className="formGroup">
              <label>Description:</label>
              <textarea
                type="text"
                value={thisProject.description}
                onChange={(e) => handleChange("description", e)}
              />
            </div>
            <button type="submit">
              {editingIndex !== null ? "Finish Editing" : "Add Project"}
            </button>
          </form>
        </div>

        <div className="marginTop">
          <ListItem
            itemData={projectData}
            editingIndex={editingIndex}
            moveItem={moveItem}
            handleItemClick={handleItemClick}
            handleDelete={handleDelete}
          ></ListItem>
        </div>
      </div>
    );
  };

  return (
    <section className="section">
      <h2
        onClick={() => (isActive ? onShow(null) : onShow(3))}
        className={`sectionHeader ${isActive ? "activeHeader" : ""}`}
      >
        Projects
      </h2>
      {isActive ? content() : null}
    </section>
  );
}
