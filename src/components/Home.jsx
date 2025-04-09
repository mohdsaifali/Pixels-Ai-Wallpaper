import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../components/Navbar";
import { motion } from "framer-motion"; // Import framer-motion for animations

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate
  const observerRef = useRef(null); // Ref for IntersectionObserver

  const imagesPerPage = 30; // Images to load per page

  // State to hold shuffled image URLs and current page
  const [shuffledImageUrls, setShuffledImageUrls] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Function to generate and shuffle image URLs
  const generateShuffledImageUrls = (page) => {
    const startIndex = (page - 1) * imagesPerPage;
    const imageUrls = Array.from(
      { length: imagesPerPage },
      (_, index) => `/assets/images/${startIndex + index + 1}.jpg`
    );
    return imageUrls.sort(() => Math.random() - 0.5); // Shuffle the images
  };

  // Load images when component mounts or when currentPage changes
  useEffect(() => {
    setLoading(true);
    const shuffledImages = generateShuffledImageUrls(currentPage);
    setShuffledImageUrls((prevImages) => [...prevImages, ...shuffledImages]);
    setLoading(false);
  }, [currentPage]);

  // Function to handle image click
  const handleImageClick = (url) => {
    navigate("/showimage", { state: { imageUrl: url } });
  };

  // Infinite scroll observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loading]);

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          // marginTop: "10px",
        }}
      >
        {shuffledImageUrls.map((url, index) => (
          <motion.div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "5px",
              marginTop: "12px",
            }}
            initial={{ opacity: 0, scale: 0.8 }} // Animation starts with opacity 0 and scale 0.8
            animate={{ opacity: 1, scale: 1 }} // Animate to opacity 1 and scale 1
            transition={{ duration: 0.5 }} // Duration of the animation
          >
            {/* OnClick handler for images */}
            <img
              src={url}
              alt={`Image ${index}`}
              height="200px"
              width="200px"
              style={{
                borderRadius: "10px",
                objectFit: "cover", // This ensures the images maintain aspect ratio and don't stretch
                cursor: "pointer",
              }}
              onError={(e) => (e.target.style.display = "none")} // Hide broken images
              onClick={() => handleImageClick(url)} // Call navigate function
            />
          </motion.div>
        ))}
      </div>

      {/* Infinite Scroll Trigger */}
      <div
        ref={observerRef}
        style={{ height: "20px", margin: "20px", textAlign: "center" }}
      >
        {loading && (
          <div
            style={{
              display: "inline-block",
              padding: "10px 20px",
              color: "purple", // Blue color for text
              fontSize: "18px",
              fontWeight: "500",
              textAlign: "center",
              animation: "fadeIn 1s ease-in-out infinite", // Fade-in animation
              opacity: 0.9,
            }}
          >
            Loading...
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
