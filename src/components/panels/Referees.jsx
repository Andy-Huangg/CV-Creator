import React, { useState } from "react";

export default function Referees({
  isActive,
  onShow,
  refereeData,
  updateData,
}) {
  const initialProjectState = {
    name: "",
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

  function ListReferee() {
    const listReferee = refereeData.map((referee, index) => (
      <li key={crypto.randomUUID()}>
        {referee.name}
        {index != 0 && index != null ? (
          <button onClick={() => moveItem(index, -1)}>Up</button>
        ) : null}
        {index != refereeData.length - 1 && index != null ? (
          <button onClick={() => moveItem(index, 1)}>Down</button>
        ) : null}
        <button onClick={() => handleItemClick(index)}>Edit</button>
        <button onClick={() => handleDelete(index)}>Delete</button>
      </li>
    ));
    return listReferee;
  }

  const content = () => {
    return (
      <div>
        <h3>Add referee</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Referee:
            <input
              type="text"
              value={thisReferee.name}
              onChange={(e) => handleChange("name", e)}
            />
          </label>
          <label>
            Title:
            <input
              type="text"
              value={thisReferee.title}
              onChange={(e) => handleChange("title", e)}
            />
            <label>
              Company:
              <input
                type="text"
                value={thisReferee.company}
                onChange={(e) => handleChange("company", e)}
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                value={thisReferee.phone}
                onChange={(e) => handleChange("phone", e)}
              />
            </label>
          </label>
          <button type="submit">
            {editingIndex !== null ? "Finish Editing" : "Add Referee"}
          </button>
        </form>

        <div>
          <ListReferee></ListReferee>
        </div>
      </div>
    );
  };

  return (
    <section className="section">
      <h2 onClick={onShow} className={`sectionHeader `}>
        Referees
      </h2>
      {isActive ? content() : null}
    </section>
  );
}
