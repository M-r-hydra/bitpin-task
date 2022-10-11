import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/task1">To See Task 1 Click Here</Link>
      <br />
      <br />
      <br />
      <br />
      <Link to="/task2">To See Task 2 Click Here</Link>
    </div>
  );
};

export default Home;
