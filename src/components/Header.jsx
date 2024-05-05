import { AppBar, Toolbar } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar color="action" position="sticky">
      <Toolbar>
        <img
          src="https://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_full_1.png"
          about="alt"
          style={{ width: 100 }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
