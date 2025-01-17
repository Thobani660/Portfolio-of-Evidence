import React from "react";

const Resume = () => {
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
        Resume
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontSize: "1rem",
            color: "#555",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Click the link below to view my professional resume. It highlights my
          skills, experience, and accomplishments.
        </p>
        <a
          href="your-resume-link.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            textDecoration: "none",
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "5px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "#0056b3")
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "#007BFF")
          }
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
