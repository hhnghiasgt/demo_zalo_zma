import React, { useEffect } from "react";
import { Page, Box, Text } from "zmp-ui";
import { useRecoilState, useRecoilValue } from "recoil";
import { latestBlogsState, loadingState } from "../state";
import { getBlogs } from "../services/blogs";
import Post from "@components/Post";
import Header from "@components/Header";

const BlogsPage = () => {
  const [latestBlogs, setLatestBlogs] = useRecoilState(latestBlogsState);
  const loading = useRecoilValue(loadingState).blogs;

  useEffect(() => {
    if (latestBlogs.data.length === 0) {
      const fetchData = async () => {
        const blogsData = await getBlogs({ skip: 0, limit: 10 });
        setLatestBlogs({
          data: blogsData.blogs,
          skip: 0,
          limit: 10,
          hasMore: blogsData.blogs.length === 10,
        });
      };
      fetchData();
    }
  }, []);

  return (
    <Page className="blogs-page">
      <Header back title="Latest News" />
      <Box p={4}>
        {loading && latestBlogs.data.length === 0 ? (
          <Box flex justifyContent="center" alignItems="center" pt={10}>
            <Text>Loading...</Text>
          </Box>
        ) : (
          <div className="posts">
            {latestBlogs.data.map((item) => (
              <Post {...item} key={item.id} />
            ))}
          </div>
        )}
      </Box>
    </Page>
  );
};

export default BlogsPage;
