import React, { forwardRef } from "react";
import { Box } from "zmp-ui";

const Category = forwardRef(({ loading, categoryName, thumbnail, active }, ref) => {
  if (loading) {
    return (
      <Box my={0} mr={0} ml={2} ref={ref} className="category-wrapper">
        <Box className="category bg-gray-200" style={{ width: 80, height: 40 }} />
      </Box>
    );
  }

  return (
    <Box ref={ref} m={0} className="category-wrapper">
      <div className="category">
        <div className="category-shadow shadow-3"></div>
        <span className="category-name">{categoryName}</span>
      </div>
    </Box>
  );
});

export default Category;
