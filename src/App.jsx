import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Showimage from "./components/Showimage";
import Video from "./components/Video";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showimage" element={<Showimage />} />
        <Route path="/video" element={<Video />} />

        {/* Default fallback for 404 errors */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
