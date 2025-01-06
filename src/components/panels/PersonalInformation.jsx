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
      <div className={`card ${!isActive ? "slide-out" : ""}`}>
        •
        <form>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => handleChange("name", e)}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => handleChange("email", e)}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              value={phone}
              onChange={(e) => handleChange("phone", e)}
            />
          </label>
          <label>
            location:
            <input
              type="text"
              value={location}
              onChange={(e) => handleChange("location", e)}
            />
          </label>
          <label className="c">
            github:
            <input
              type="text"
              value={github}
              onChange={(e) => handleChange("github", e)}
            />
          </label>
        </form>
      </div>
    );
  };
  return (
    <section>
      <h2 onClick={onShow} className="card">
        Personal Information
      </h2>

      {isActive ? content() : null}
    </section>
  );
}
