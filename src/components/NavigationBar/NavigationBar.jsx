import React, { useState, useEffect } from "react";
import { useNavigate } from "zmp-ui";

import { useLocation } from "react-router-dom";
import { BottomNavigation, Icon } from "zmp-ui";

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("/");

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  return (
    <BottomNavigation
      id="footer"
      fixed
      activeKey={activeTab}
      onChange={(key) => {
        setActiveTab(key);
        navigate(key);
      }}
    >
      <BottomNavigation.Item
        key="/"
        label="Home"
        icon={<Icon icon="zi-home" />}
        activeIcon={<Icon icon="zi-home-fill" />}
      />
      <BottomNavigation.Item
        key="/article"
        label="Article"
        icon={<Icon icon="zi-note" />}
        activeIcon={<Icon icon="zi-note-fill" />}
      />
      <BottomNavigation.Item
        key="/search"
        label="Search"
        icon={<Icon icon="zi-search" />}
        activeIcon={<Icon icon="zi-search-fill" />}
      />
      <BottomNavigation.Item
        key="/menu"
        label="Menu"
        icon={<Icon icon="zi-more-grid" />}
        activeIcon={<Icon icon="zi-more-grid-fill" />}
      />
    </BottomNavigation>
  );
};

export default NavigationBar;
