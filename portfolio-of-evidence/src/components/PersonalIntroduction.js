import React from "react";

const PersonalIntroduction = () => {
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
        Personal Introduction
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            backgroundImage:
              "url('../../res/be081e1b-9e67-4ea0-bb59-023c31deca64.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            border: "5px solid #007BFF",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
      <p
        style={{
          fontSize: "1.1rem",
          color: "#555",
          textAlign: "justify",
          padding: "0 15px",
        }}
      >
        Hi, my name is <strong>Thobani Zondi</strong>. I am a passionate developer
        focused on creating impactful solutions through technology. During my
        journey at CodeTribe Academy, I have developed skills in web and mobile
        application development.
      </p>
    </section>
  );
};

export default PersonalIntroduction;
