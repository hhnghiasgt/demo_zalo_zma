import React from "react";
import { useNavigate } from "zmp-ui";
import { Text } from "zmp-ui";

import Card from "@components/ui/Card";
import Box from "@components/ui/Box";

import { Like, Time, Bookmark } from "@components/Icons";
import { shortenLargeNumber } from "@utils/number";
import moment from "moment";

const Post = ({
  loading,
  title,
  description,
  thumbnail,
  createdAt,
  like,
  liked,
  saved,
  style,
}) => {
  const navigate = useNavigate();

  const handleLike = (e) => {
    e.stopPropagation();
  };

  const handleSave = (e) => {
    e.stopPropagation();
  };

  if (loading) {
    return (
      <Box className="post my-3" style={style}>
        <Card className="p-3">
          <div className="flex">
            <div
              className="bg-gray-200"
              style={{ width: 92, height: 120 }}
            />
            <div className="flex-1 ml-3">
              <div className="bg-gray-200 h-5 w-4/5 mb-2" />
              <div className="bg-gray-200 h-10 w-full" />
            </div>
          </div>
        </Card>
      </Box>
    );
  }

  return (
    <Box
      className="post my-3"
      style={style}
      onClick={() => navigate("/detail")}
    >
      <Card inset>
        <div className="flex">
          <div
            className="overflow-hidden"
            style={{ width: 92, height: 120 }}
          >
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 p-3 flex flex-col">
            <Text className="font-bold text-blue mb-1">
              {title}
            </Text>

            <Text className="text-sm text-blue-dark line-clamp-2">
              {description}
            </Text>

            <div className="mt-auto flex justify-end items-center gap-3">
              <div className="flex items-center">
                <Like onClick={handleLike} liked={liked} />
                <Text className="text-xs ml-1">
                  {shortenLargeNumber(like, 1)}
                </Text>
              </div>

              <div className="flex items-center">
                <Time />
                <Text className="text-xs ml-1">
                  {moment(createdAt).fromNow()}
                </Text>
              </div>

              <Bookmark onClick={handleSave} saved={saved} />
            </div>
          </div>
        </div>
      </Card>
    </Box>
  );
};

export default Post;
