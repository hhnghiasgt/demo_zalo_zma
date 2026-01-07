import { atom, selector } from "recoil";
import { getBlogs, getCategories, getStories, login } from "./services/blogs";

export const userState = atom({
    key: "user",
    default: null,
});

export const jwtState = atom({
    key: "jwt",
    default: null,
});

export const categoriesState = atom({
    key: "categories",
    default: [],
});

export const storiesState = atom({
    key: "stories",
    default: [],
});

export const latestBlogsState = atom({
    key: "latestBlogs",
    default: {
        limit: 10,
        skip: 0,
        data: [],
        hasMore: false,
    },
});

export const loadingState = atom({
    key: "loading",
    default: {
        categories: false,
        blogs: false,
        stories: false,
    },
});
