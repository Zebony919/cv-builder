import { useState } from "react";
import "./App.css";
import Header from "./components/header.jsx";
import UserInputBoxes from "./components/userInputBoxes.jsx";
import ResumeDisplay from "./components/resumeDisplay.jsx";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phoneNumber: "",
  });

  return (
    <>
      <div className="body">
        <Header />

        <div className="main-content">
          <div className="userInput">
            <UserInputBoxes formData={formData} setFormData={setFormData} />
          </div>

          <div className="resumeDisplay">
            <ResumeDisplay formData={formData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
