import React from "react";

const StarRating = ({ mytotalStars, myfilledStars }) => {
  const totalStars = mytotalStars ? mytotalStars : 5;
  const filledStars = myfilledStars ? myfilledStars : 4;

  return (
    <div className="flex space-x-2">
      {" "}
      {/* Increased spacing between stars */}
      {[...Array(totalStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={index < filledStars ? "yellow" : "gray"}
          className="w-10 h-10" // Increased size of stars
        >
          <path d="M12 2.25l2.734 7.234h7.641L15.854 14.78l2.657 7.219L12 17.577l-6.51 4.422 2.657-7.219-6.521-5.297h7.641L12 2.25z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
