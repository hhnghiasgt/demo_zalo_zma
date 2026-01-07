import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import NavigationBar from "./NavigationBar";
import HomePage from "../pages/index";
import ArticlePage from "../pages/article";
import SearchPage from "../pages/search";
import MenuPage from "../pages/menu";

const MyApp = () => {
  return (
    <App>
      <SnackbarProvider>
        <ZMPRouter>
          <AnimationRoutes>
            <Route path="/" element={<HomePage />} />
            <Route path="/article" element={<ArticlePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/menu" element={<MenuPage />} />
          </AnimationRoutes>
          <NavigationBar />
        </ZMPRouter>
      </SnackbarProvider>
    </App>
  );
};

export default MyApp;
