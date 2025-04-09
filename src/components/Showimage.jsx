import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Hooks to access state and navigate

const ShowImage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageUrl } = location.state || {}; // Get imageUrl from the passed state

  // Function to handle back button click
  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous screen
  };

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "ligtblue" }}>
      {/* Back Button with SVG Icon */}
      <button
        onClick={handleBackClick}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "10px",
          borderRadius: "50%", // Circular button shape
          transition: "background-color 0.3s", // Smooth hover effect
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#f0f0f0")} // Hover effect
        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")} // Reset hover
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          style={{ width: "24px", height: "24px", color: "#333" }} // Set size and color of the icon
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "80%", // Adjust width for responsiveness
          maxWidth: "600px", // Max width for the container
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            background: "linear-gradient(90deg, #ff7e5f, #feb47b)", // Gradient background
            WebkitBackgroundClip: "text", // Clip the background to text
            WebkitTextFillColor: "transparent", // Make the text color transparent to show the gradient
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontWeight: "bold",
            marginBottom: "20px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Subtle text shadow
          }}
        >
          Show Image
        </h1>
        {imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt="Display"
              style={{
                maxWidth: "100%", // Ensure the image doesn't overflow
                maxHeight: "70vh", // Keep it within the viewport height
                borderRadius: "10px",
                marginBottom: "20px",
                objectFit: "contain", // Maintain aspect ratio, no cropping
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
            <a
              href={imageUrl}
              download
              style={{
                padding: "10px 20px",
                backgroundColor: "green",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
                marginTop: "10px",
                display: "inline-block",
              }}
            >
              Download Image
            </a>
          </>
        ) : (
          <p
            style={{
              color: "#888",
              fontSize: "18px",
              textAlign: "center",
              padding: "20px",
              backgroundColor: "#f5f5f5",
              border: "2px dashed #ccc",
              borderRadius: "10px",
            }}
          >
            No image selected
          </p>
        )}
      </div>
    </div>
  );
};

export default ShowImage;
