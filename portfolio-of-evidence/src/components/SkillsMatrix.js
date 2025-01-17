import React from "react";

const skills = [
  { skill: "HTML", level: "Intermediate", notes: "Used in multiple projects" },
  { skill: "CSS", level: "Advanced", notes: "Styled responsive layouts" },
  { skill: "JavaScript", level: "Intermediate", notes: "Built dynamic web applications" },
  { skill: "React Native", level: "Intermediate", notes: "Developed a to-do list app" },
  { skill: "TypeScript", level: "Beginner", notes: "Applied in API integrations" },
];

const SkillsMatrix = () => {
  return (
    <section
      style={{
        maxWidth: "800px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
        fontFamily: "'Arial', sans-serif",
        lineHeight: "1.6",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        Skills Matrix
      </h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          margin: "0 auto",
          fontSize: "1rem",
          textAlign: "left",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                borderBottom: "2px solid #007BFF",
                padding: "10px",
                color: "#007BFF",
                textAlign: "left",
              }}
            >
              Skill
            </th>
            <th
              style={{
                borderBottom: "2px solid #007BFF",
                padding: "10px",
                color: "#007BFF",
                textAlign: "left",
              }}
            >
              Proficiency Level
            </th>
            <th
              style={{
                borderBottom: "2px solid #007BFF",
                padding: "10px",
                color: "#007BFF",
                textAlign: "left",
              }}
            >
              Notes/Examples
            </th>
          </tr>
        </thead>
        <tbody>
          {skills.map((item, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#f1f1f1" : "#fff",
                transition: "background-color 0.3s",
              }}
            >
              <td
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {item.skill}
              </td>
              <td
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {item.level}
              </td>
              <td
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {item.notes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default SkillsMatrix;
