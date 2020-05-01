import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Pluralsight Administrator</h1>
      <p>React, Flux, and React Router for ultra-responsive web apps.</p>
      <Link to="about">Go to About Page</Link>
    </div>
  );
}

export default HomePage;
