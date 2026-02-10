import "./resumeDisplay.css";
import UserInputBoxes from "./userInputBoxes.jsx";

function ResumeDisplay({ formData }) {
  return (
    <section className="resumeBody">
      <h2>{formData.name}</h2>
      <p>Age: {formData.age}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phoneNumber}</p>
    </section>
  );
}

export default ResumeDisplay;
