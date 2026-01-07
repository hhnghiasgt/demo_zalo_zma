import React from "react";
import { Box } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { Swiper, SwiperSlide } from "swiper/react";
import { categoriesState, loadingState } from "../../state";
import Category from "./Category";

import "swiper/css";

const Categories = () => {
  const categories = useRecoilValue(categoriesState);
  const loading = useRecoilValue(loadingState).categories;

  if (loading) {
    return (
      <Box m={0} className="categories">
        <Category loading />
      </Box>
    );
  }

  return (
    <Swiper slidesPerView="auto" className="categories">
      {categories.map((category) => (
        <SwiperSlide key={category.id}>
          <Category categoryName={category.name} thumbnail={category.thumbnail} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Categories;
