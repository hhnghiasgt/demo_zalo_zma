import React, { useEffect } from "react";
import { Page, Text, Box, Button } from "zmp-ui";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState, storiesState, categoriesState, latestBlogsState, loadingState } from "../state";
import { getBlogs, getCategories, getStories } from "../services/blogs";
import NotificationIcon from "@components/Notification";
import Stories from "@components/Stories";
import Categories from "@components/Categories";
import Latest from "@components/Latest";

const HomePage = () => {
  const user = useRecoilValue(userState);
  const [stories, setStories] = useRecoilState(storiesState);
  const [categories, setCategories] = useRecoilState(categoriesState);
  const [latestBlogs, setLatestBlogs] = useRecoilState(latestBlogsState);
  const [loading, setLoading] = useRecoilState(loadingState);

  const fetchData = async () => {
    setLoading((prev) => ({ ...prev, stories: true, categories: true, blogs: true }));
    try {
      const [storiesData, categoriesData, blogsData] = await Promise.all([
        getStories(),
        getCategories(),
        getBlogs({ limit: 10, skip: 0 }),
      ]);
      setStories(storiesData);
      setCategories(categoriesData);
      setLatestBlogs({
        data: blogsData.blogs,
        skip: 0,
        limit: 10,
        hasMore: blogsData.blogs.length === 10,
      });
    } finally {
      setLoading((prev) => ({ ...prev, stories: false, categories: false, blogs: false }));
    }
  };

  useEffect(() => {
    if (stories.length === 0) {
      fetchData();
    }
  }, []);

  return (
    <Page className="home-page">
      <Box m="0" px="4" mt="4">
        <Box flex flexDirection="row" justifyContent="space-between">
          <Box>
            {user && (
              <Text size="large" className="text-blue-dark-text">
                Hi, {user.firstName}!
              </Text>
            )}
            <Text size="xlarge" bold className="text-blue-dark">
              Explore today’s
            </Text>
          </Box>
          <NotificationIcon hasNotification />
        </Box>
      </Box>
      <Box m="0" pt="2" px="0">
        <Stories />
      </Box>
      <Box m="0" pt="2" px="0">
        <Categories />
      </Box>
      <Box m="0">
        <Latest />
      </Box>
    </Page>
  );
};

export default HomePage;
