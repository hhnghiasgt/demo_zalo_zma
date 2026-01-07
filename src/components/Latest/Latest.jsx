import React from "react";
import { Text } from "zmp-ui";
import Box from "@components/ui/Box";
import { useRecoilValue } from "recoil";
import { latestBlogsState, loadingState } from "../../state";
import Post from "@components/Post";
import { Link } from "react-router-dom";

const Latest = () => {
  const { data } = useRecoilValue(latestBlogsState);
  const loading = useRecoilValue(loadingState).blogs;

  if (loading) {
    return (
      <Box className="latest" px="4" m="0">
        <Box m="0" flex flexDirection="row" justifyContent="space-between">
          <Text>Latest News</Text>
        </Box>
        <div className="posts">
          <Post loading />
        </div>
      </Box>
    );
  }

  return (
    <Box className="latest" px="4" m="0">
      <Box m="0" flex flexDirection="row" justifyContent="space-between">
        <Text bold size="large" className="text-blue-dark">
          Latest News
        </Text>
        <Link to="/blogs">More</Link>
      </Box>
      <div className="posts">
        {data.slice(0, 5).map((item) => (
          <Post {...item} key={item.id} />
        ))}
      </div>
    </Box>
  );
};

export default Latest;
