import React from "react";

const projects = [
  {
    title: "Project 1",
    description: "A brief overview of the project.",
    techStack: ["React", "Node.js", "CSS"],
    features: ["Responsive design", "API integration"],
    challenges: "Faced CORS issues and resolved it by configuring the server properly.",
  },
];

const IndividualProjects = () => {
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
        Individual Projects
      </h2>
      {projects.map((project, index) => (
        <div
          key={index}
          style={{
            marginBottom: "30px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              color: "#007BFF",
              marginBottom: "10px",
            }}
          >
            {project.title}
          </h3>
          <p style={{ marginBottom: "15px" }}>{project.description}</p>
          <p style={{ marginBottom: "10px" }}>
            <strong>Tech Stack:</strong> {project.techStack.join(", ")}
          </p>
          <ul style={{ marginBottom: "10px", paddingLeft: "20px" }}>
            <strong>Features:</strong>
            {project.features.map((feature, i) => (
              <li key={i} style={{ marginBottom: "5px" }}>
                {feature}
              </li>
            ))}
          </ul>
          <p>
            <strong>Challenges:</strong> {project.challenges}
          </p>
        </div>
      ))}
    </section>
  );
};

export default IndividualProjects;
