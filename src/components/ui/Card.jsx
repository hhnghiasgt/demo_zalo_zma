import React from "react";

const Card = ({ children, className = "", inset }) => {
  return (
    <div
      className={[
        "bg-white rounded-lg overflow-hidden",
        inset ? "shadow-md" : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default Card;
