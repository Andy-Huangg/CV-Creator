import React, { useState } from "react";
import ListItem from "../ListItem";
export default function Skills({ isActive, onShow, skillData, updateData }) {
  const [thisSkill, setThisSkill] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  function handleChange(e) {
    const newValue = e.target.value;
    setThisSkill(newValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingIndex !== null) {
      skillData[editingIndex] = thisSkill;
      setEditingIndex(null);
    } else {
      skillData.push(thisSkill);
    }
    updateData({ skills: skillData });
    setThisSkill("");
  };

  function handleItemClick(index) {
    setEditingIndex(index);
    setThisSkill(skillData[index]);
  }

  function moveItem(index, direction) {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= skillData.length) return;
    const tempVariable = skillData[newIndex];
    skillData[newIndex] = skillData[index];
    skillData[index] = tempVariable;
    updateData({ skillData });
  }

  function handleDelete(index) {
    const updatedData = skillData.filter((_, i) => i !== index);
    updateData({ skills: updatedData });
  }

  const content = () => {
    return (
      <div className={`card ${isActive ? "slide-out" : ""}`}>
        <div className="formContainer">
          <h3 className="marginBottom center head">
            {editingIndex == null ? "Add skill" : "Edit skill"}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label>Skill: </label>
              <input
                type="text"
                value={thisSkill}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <button type="submit">
              {editingIndex !== null ? "Finish Editing" : "Add Skill"}
            </button>
          </form>
          <div className="marginTop">
            <ListItem
              itemData={skillData}
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
        onClick={onShow}
        className={`sectionHeader ${isActive ? "activeHeader" : ""}`}
      >
        Skills
      </h2>
      {isActive ? content() : null}
    </section>
  );
}
