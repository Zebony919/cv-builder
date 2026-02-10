import "./resumeDisplay.css";
import UserInputBoxes from "./userInputBoxes.jsx";

function ResumeDisplay({ formData }) {
  return (
    <section className="resumeBody">
      <div className="top">
        <h1>{formData.name ? formData.name : "Name"}</h1>
      </div>

      <div className="personalInfo">
        <h2>Personal</h2>
        <p>Age: {formData.age}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phoneNumber}</p>
      </div>

      <div className="educationInfo">
        <h2>Education</h2>
        <p>School: {formData.school}</p>
        <p>Degree: {formData.degree}</p>
        <p>Expected Graduation: {formData.graduation}</p>
      </div>

      <div className="experienceInfo">
        <h2>Experience</h2>
        <p>Description: {formData.experience}</p>
      </div>
    </section>
  );
}

export default ResumeDisplay;
