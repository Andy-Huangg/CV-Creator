import React, { useState } from "react";

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
    updateData({ project: projectData });
    setThisProject(initialProjectState);
  };

  function handleItemClick(index) {
    setEditingIndex(index);
    setThisProject(projectData[index]);
  }

  function moveItem(index, direction) {
    console.log(index);
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= projectData.length) return;
    const updatedData = [...projectData];
    const [movedItem] = updatedData.splice(index, 1);
    updatedData.splice(newIndex, 0, movedItem);
    updateData({ project: updatedData });
  }

  function handleDelete(index) {
    const updatedData = projectData.filter((_, i) => i !== index);
    updateData({ project: updatedData });
  }

  function ListProject() {
    const listProject = projectData.map((project, index) => (
      <li key={crypto.randomUUID()}>
        {project.heading}
        {index != 0 && index != null ? (
          <button onClick={() => moveItem(index, -1)}>Up</button>
        ) : null}
        {index != projectData.length - 1 && index != null ? (
          <button onClick={() => moveItem(index, 1)}>Down</button>
        ) : null}
        <button onClick={() => handleItemClick(index)}>Edit</button>
        <button onClick={() => handleDelete(index)}>Delete</button>
      </li>
    ));
    return listProject;
  }

  const content = () => {
    return (
      <div>
        <h3>Add project</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Project:
            <input
              type="text"
              value={thisProject.heading}
              onChange={(e) => handleChange("heading", e)}
            />
          </label>
          <label>
            Link:
            <input
              type="text"
              value={thisProject.link}
              onChange={(e) => handleChange("link", e)}
            />
          </label>
          <label>
            Role:
            <input
              type="text"
              value={thisProject.subHeading}
              onChange={(e) => handleChange("subHeading", e)}
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              value={thisProject.location}
              onChange={(e) => handleChange("location", e)}
            />
          </label>
          <label>
            Date:
            <input
              type="text"
              value={thisProject.date}
              onChange={(e) => handleChange("date", e)}
            />
          </label>
          <label>
            Description:
            <textarea
              type="text"
              value={thisProject.description}
              onChange={(e) => handleChange("description", e)}
            />
          </label>
          <button type="submit">
            {editingIndex !== null ? "Finish Editing" : "Add Project"}
          </button>
        </form>

        <div>
          <ListProject></ListProject>
        </div>
      </div>
    );
  };

  return (
    <section>
      <h2 onClick={onShow}>Projects</h2>
      {isActive ? content() : null}
    </section>
  );
}
