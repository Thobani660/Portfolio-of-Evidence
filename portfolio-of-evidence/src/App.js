import React from 'react';
import PersonalIntroduction from './components/PersonalIntroduction';
import Resume from './components/Resume';
import SkillsMatrix from './components/SkillsMatrix';
import IndividualProjects from './components/IndividualProjects';

const App = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Portfolio of Evidence</h1>
      <PersonalIntroduction />
      <Resume />
      <SkillsMatrix />
      <IndividualProjects />
      {/* Add other sections as needed */}
    </div>
  );
};

export default App;
