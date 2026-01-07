import React from "react";
import { Page, Text } from "zmp-ui";
import Header from "@components/Header";
import Box from "@components/ui/Box";
import Card from "@components/ui/Card";

const Detail = () => {
  return (
    <Page className="detail-page">
      <Header back title="Lorem ipsum dolor sit amet" />
      <Box p={4}>
        <Card title="Blogs">
          <Text>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Text>
        </Card>
      </Box>
    </Page>
  );
};

export default Detail;
