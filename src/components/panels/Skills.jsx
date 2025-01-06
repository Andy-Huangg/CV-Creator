import React, { useState } from "react";

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
    updateData({ skill: skillData });
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
    updateData({ skill: updatedData });
  }

  function ListSkill() {
    const listSkill = skillData.map((skill, index) => (
      <li key={crypto.randomUUID()}>
        {skill}
        {index != 0 && index != null ? (
          <button onClick={() => moveItem(index, -1)}>Up</button>
        ) : null}
        {index != skillData.length - 1 && index != null ? (
          <button onClick={() => moveItem(index, 1)}>Down</button>
        ) : null}
        <button onClick={() => handleItemClick(index)}>Edit</button>
        <button onClick={() => handleDelete(index)}>Delete</button>
      </li>
    ));
    return listSkill;
  }

  const content = () => {
    return (
      <div>
        <h3>Add skill</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Skill:
            <input
              type="text"
              value={thisSkill}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <button type="submit">
            {editingIndex !== null ? "Finish Editing" : "Add Skill"}
          </button>
        </form>

        <div>
          <ListSkill></ListSkill>
        </div>
      </div>
    );
  };

  return (
    <section>
      <h2 onClick={onShow}>Skills</h2>
      {isActive ? content() : null}
    </section>
  );
}
