import React from "react";
import { Page, Text } from "zmp-ui";
import Box from "@components/ui/Box";
import Card from "@components/ui/Card";

const ArticlePage = () => {
  return (
    <Page className="article-pages">
      <Card title="Article">
        <Box textAlign="center">
          <Text>Coming soon</Text>
        </Box>
      </Card>
    </Page>
  );
};

export default ArticlePage;
