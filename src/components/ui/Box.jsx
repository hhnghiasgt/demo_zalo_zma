import React from "react";

const Box = ({ children, className = "", style, onClick }) => {
  return (
    <div className={className} style={style} onClick={onClick}>
      {children}
    </div>
  );
};

export default Box;
