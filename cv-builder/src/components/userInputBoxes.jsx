import { useState } from "react";
import "./userInputBoxes.css";

function UserInputBoxes({ formData, setFormData }) {
  const [currentForm, setCurrentForm] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="inputBody">
      {currentForm === 0 && (
        <div className="general">
          <h2>General</h2>

          <form>
            <label for="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="John Smith"
              value={formData.name}
              onChange={handleChange}
            />

            <label for="age">Age:</label>
            <input
              type="number"
              name="age"
              placeholder="20"
              value={formData.age}
              onChange={handleChange}
            />

            <label for="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="eg: somethingCool@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />

            <label for="phoneNumber">Phone Number:</label>
            <input
              type="number"
              name="phoneNumber"
              placeholder="eg: 012 3456 7890"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </form>
        </div>
      )}

      {currentForm === 1 && (
        <div className="education">
          <h2>Education</h2>

          <form>
            <label for="school">School:</label>
            <input
              type="text"
              name="school"
              placeholder="Harvard University"
              value={formData.school}
              onChange={handleChange}
            ></input>
            <label for="degree">Degree:</label>
            <input
              type="text"
              name="degree"
              placeholder="Computer Science"
              value={formData.degree}
              onChange={handleChange}
            ></input>
            <label for="graduation">Date of Graduation:</label>
            <input
              type="date"
              name="graduation"
              value={formData.graduation}
              onChange={handleChange}
            ></input>
          </form>
        </div>
      )}

      {currentForm === 2 && (
        <div className="experience">
          <h2>Experience</h2>

          <form>
            <label htmlFor="experienceDesc">Experience:</label>
            <textarea
              name="experience"
              id="experience"
              placeholder="Eg: Company Name, your roles, skills"
              value={formData.experience}
              onChange={handleChange}
            />
          </form>
        </div>
      )}

      <div className="navigation-buttons">
        <button
          className="previous-button"
          onClick={() => setCurrentForm(currentForm - 1)}
          disabled={currentForm === 0}
        >
          Previous
        </button>

        <button
          className="next-button"
          onClick={() => setCurrentForm(currentForm + 1)}
          disabled={currentForm === 2}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default UserInputBoxes;
