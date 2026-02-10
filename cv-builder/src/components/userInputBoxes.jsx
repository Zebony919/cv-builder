import { useState } from "react";
import "./userInputBoxes.css";

function UserInputBoxes() {
  const [currentForm, setCurrentForm] = useState(0);

  return (
    <section className="inputBody">
      {currentForm === 0 && (
        <div className="general">
          <h2>General</h2>

          <form>
            <label for="name">Name:</label>
            <input type="text" name="name" placeholder="John Smith"></input>
            <label for="age">Age:</label>
            <input type="text" name="age" placeholder="20"></input>
            <label for="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="eg: somethingCool@gmail.com"
            ></input>
            <label for="phoneNumber">Phone Number:</label>
            <input
              type="number"
              name="phoneNumber"
              placeholder="eg: 012 3456 7890"
            ></input>
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
            ></input>
            <label for="degree">Degree:</label>
            <input
              type="text"
              name="degree"
              placeholder="Computer Science"
            ></input>
            <label for="graduation">Date of Graduation:</label>
            <input type="date" name="graduation"></input>
          </form>
        </div>
        //keep format
      )}

      {currentForm === 2 && (
        <div className="experience">
          <h2>Experience</h2>

          <form>
            <label htmlFor="experienceDesc">Experience:</label>
            <textarea
              name="experienceDesc"
              id="experienceDesc"
              placeholder="Eg: Company Name, your roles, skills"
            />
          </form>
        </div>
        //keep format
      )}

      <div className="navigation-buttons">
        <button
          onClick={() => setCurrentForm(currentForm - 1)}
          disabled={currentForm === 0}
        >
          Previous
        </button>

        <button
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
