import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Using react-icons for stars

const StarRating = ({ rating }) => {
  const maxStars = 5;

  const getStarIcon = (index) => {
    if (rating >= index + 1) {
      return <FaStar color="gold" />; // Full Star
    } else if (rating >= index + 0.5) {
      return <FaStarHalfAlt color="gold" />; // Half Star
    } else {
      return <FaRegStar color="gold" />; // Empty Star
    }
  };

  return (
    <div style={{ display: "flex", gap: "5px" }}>
      {[...Array(maxStars)].map((_, index) => (
        <span key={index}>{getStarIcon(index)}</span>
      ))}
    </div>
  );
};

export default StarRating;
