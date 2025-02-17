import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Resume
        </Typography>
        <div>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ marginLeft: 2 }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/todo"
            sx={{ marginLeft: 2 }}
          >
            TODO
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/swapi"
            sx={{ marginLeft: 2 }}
          >
            SWAPI
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
