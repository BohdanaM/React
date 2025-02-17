import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        bottom: 0,
        top: "auto",
        backgroundColor: "#1976d2",
        color: "white",
      }}
    >
      <Toolbar sx={{ justifyContent: "center", padding: "10px 20px" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6">Contact:</Typography>
          <Typography variant="body2">
            Email: bohdanamatvieieva@gmail.com
          </Typography>
          <Typography variant="body2">Phone: 425-540-6644</Typography>
          <Typography variant="body2">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/bohdana-matvieieva/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              Bohdana Matvieieva
            </a>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
