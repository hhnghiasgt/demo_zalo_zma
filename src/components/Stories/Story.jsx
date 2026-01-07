import React from "react";
import propTypes, { any, string } from "prop-types";
import { Avatar, Box, Text } from "zmp-ui";
import classNames from "classnames";
import avatar1 from "@static/images/user-1.png";
import avatar2 from "@static/images/user-2.png";
import avatar3 from "@static/images/user-3.png";
import avatar4 from "@static/images/user-4.png";
import avatar5 from "@static/images/user-5.png";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

const Story = ({ user, seen, loading }) => {
  if (loading) {
    return (
      <Box m="0" className="story" flex flexDirection="column" alignItems="center">
        <Box m="0" className="relative avatar-wrapper">
          <Box className="bg-gray-200 rounded-full" style={{ width: 68, height: 68 }} />
        </Box>
        <Text size="xsmall" className="story-name text-blue-dark-text mt-1">
          Loading...
        </Text>
      </Box>
    );
  }

  const classes = classNames("absolute avatar-border", {
    "avatar-seen": seen,
    "avatar-not-seen": !seen,
  });
  const avatarIndex = (user.id % 4) + 1;

  return (
    <Box m="0" className="story" flex flexDirection="column" alignItems="center">
      <Box m="0" className="relative avatar-wrapper">
        <Avatar src={avatars[avatarIndex]} />
        <div className={classes}></div>
      </Box>
      <Text size="xsmall" className="story-name text-blue-dark-text mt-1">{user.firstName}</Text>
    </Box>
  );
};

Story.propTypes = {
  user: propTypes.shape({
    avatar: any,
    firstName: string,
  }),
  seen: propTypes.bool,
  loading: propTypes.bool,
};

export default Story;
