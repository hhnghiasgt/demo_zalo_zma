import React from "react";
import { Page, Button, useNavigate } from "zmp-ui";
import Box from "@components/ui/Box";
import Card from "@components/ui/Card";

const MenuPage = () => {
  const navigate = useNavigate();

  return (
    <Page className="menu-page">
      <Card title="Menu">
        <Box textAlign="center">
          <Box>
            <Button
              fullWidth
              onClick={() => {
                navigate("/blogs");
              }}
            >
              Open Blogs
            </Button>
          </Box>
        </Box>
      </Card>
    </Page>
  );
};

export default MenuPage;
