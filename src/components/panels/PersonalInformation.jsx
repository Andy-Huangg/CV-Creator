import React, { useState } from "react";

export default function PersonalInformation({ isActive, onShow, updateData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setlocation] = useState("");
  const [github, setgithub] = useState("");

  function handleChange(detail, e) {
    const newValue = e.target.value;
    switch (detail) {
      case "name":
        setName(newValue);
        break;
      case "location":
        setlocation(newValue);
        break;
      case "phone":
        setPhone(newValue);
        break;
      case "email":
        setEmail(newValue);
        break;
      case "github":
        setgithub(newValue);
        break;
      default:
        break;
    }
    updateData({ [detail]: newValue });
  }

  const content = () => {
    return (
      <div className={`card ${isActive ? "slide-out" : ""}`}>
        <div className="formContainer">
          <form>
            <div className="marginBottom center head">
              Add Personal Information
            </div>
            <div className="formGroup">
              <label className="center">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => handleChange("name", e)}
              />
            </div>
            <div className="formGroup">
              <label className="center">Email: </label>
              <input
                type="text"
                value={email}
                onChange={(e) => handleChange("email", e)}
              />
            </div>

            <div className="formGroup">
              <label className="center">Phone:</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => handleChange("phone", e)}
              />
            </div>

            <div className="formGroup">
              <label className="center">Location:</label>
              <input
                type="text"
                value={location}
                onChange={(e) => handleChange("location", e)}
              />
            </div>

            <div className="formGroup">
              <label className="center">Github link:</label>
              <input
                type="text"
                value={github}
                onChange={(e) => handleChange("github", e)}
              />
            </div>
          </form>
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
        Personal Information
      </h2>

      {isActive ? content() : null}
    </section>
  );
}
