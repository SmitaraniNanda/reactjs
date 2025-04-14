import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="left-pane">
        <RegistrationForm />
      </div>
      <div className="right-pane">
        <h1 className="right-text">QuestK2 Registration Form</h1>
      </div>
    </div>
  );
}

export default App;
