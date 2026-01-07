import React from "react";
import { Header } from "zmp-ui";

export const CustomHeader = ({ title, back, children }) => {
  return (
    <Header
      title={children || title}
      showBackIcon={back}
    />
  );
};

export default CustomHeader;
