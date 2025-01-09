import React, { useState } from "react";
import ListItem from "../ListItem";

export default function Referees({
  isActive,
  onShow,
  refereeData,
  updateData,
}) {
  const initialProjectState = {
    heading: "",
    title: "",
    company: "",
    phone: "",
  };
  const [thisReferee, setThisReferee] = useState(initialProjectState);
  const [editingIndex, setEditingIndex] = useState(null);

  function handleChange(detail, e) {
    const newValue = e.target.value;
    setThisReferee((prev) => ({
      ...prev,
      [detail]: newValue,
    }));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingIndex !== null) {
      refereeData[editingIndex] = thisReferee;
      setEditingIndex(null);
    } else {
      refereeData.push(thisReferee);
    }
    updateData({ referees: refereeData });
    setThisReferee(initialProjectState);
  };

  function handleItemClick(index) {
    setEditingIndex(index);
    setThisReferee(refereeData[index]);
  }

  function moveItem(index, direction) {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= refereeData.length) return;
    const updatedData = [...refereeData];
    const [movedItem] = updatedData.splice(index, 1);
    updatedData.splice(newIndex, 0, movedItem);
    updateData({ referees: updatedData });
  }

  function handleDelete(index) {
    const updatedData = refereeData.filter((_, i) => i !== index);
    updateData({ referees: updatedData });
  }

  const content = () => {
    return (
      <div className={`card ${isActive ? "slide-out" : ""}`}>
        <div className="formContainer">
          <h3 className="marginBottom center head">
            {editingIndex == null ? "Add referee" : "Edit referee"}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label>Referee:</label>
              <input
                type="text"
                value={thisReferee.heading}
                onChange={(e) => handleChange("heading", e)}
              />
            </div>

            <div className="formGroup">
              <label>Title:</label>
              <input
                type="text"
                value={thisReferee.title}
                onChange={(e) => handleChange("title", e)}
              />
            </div>
            <div className="formGroup">
              <label>Company:</label>
              <input
                type="text"
                value={thisReferee.company}
                onChange={(e) => handleChange("company", e)}
              />
            </div>
            <div className="formGroup">
              <label>Phone:</label>
              <input
                type="text"
                value={thisReferee.phone}
                onChange={(e) => handleChange("phone", e)}
              />
            </div>
            <button type="submit">
              {editingIndex !== null ? "Finish Editing" : "Add Referee"}
            </button>
          </form>
          <div className="marginTop">
            <ListItem
              itemData={refereeData}
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
        onClick={() => (isActive ? onShow(null) : onShow(5))}
        className={`sectionHeader ${isActive ? "activeHeader" : ""}`}
      >
        Referees
      </h2>
      {isActive ? content() : null}
    </section>
  );
}
