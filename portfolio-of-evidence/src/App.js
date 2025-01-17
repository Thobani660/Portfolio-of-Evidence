import React from 'react';
import PersonalIntroduction from './components/PersonalIntroduction';
import Resume from './components/Resume';
import SkillsMatrix from './components/SkillsMatrix';
import IndividualProjects from './components/IndividualProjects';

const App = () => {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        background: "lightblue",
        color: "#343a40",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#007BFF",
          marginBottom: "40px",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        Portfolio of Evidence
      </h1>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          backgroundColor: "#2c3e50",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "30px",
        }}
      >
        <PersonalIntroduction />
        <hr style={{ margin: "30px 0", borderColor: "#dee2e6" }} />
        <Resume />
        <hr style={{ margin: "30px 0", borderColor: "#dee2e6" }} />
        <SkillsMatrix />
        <hr style={{ margin: "30px 0", borderColor: "#dee2e6" }} />
        <IndividualProjects />
        {/* Add other sections as needed */}
      </div>
    </div>
  );
};

export default App;
