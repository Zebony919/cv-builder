import { useState } from "react";
import "./App.css";
import Header from "./components/header.jsx";
import UserInputBoxes from "./components/userInputBoxes.jsx";

function App() {
  return (
    <>
      <div className="body">
        <Header />

        <div className="main-content">
          <div className="userInput">
            <UserInputBoxes />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
