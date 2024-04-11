import React from "react";
import CloudIcon from "@mui/icons-material/FilterDramaTwoTone";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import NavList from "../../utils/navlist";

const LargeScreenMenu = () => {
  return (
    <>
      <CloudIcon sx={{ display: { xs: "none", md: "flex" }, mr: 2 }} />
      <Typography
        variant='h6'
        noWrap
        component={NavLink}
        to='/'
        sx={{
          mr: 5,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        AzCloud
      </Typography>
      <Box
        id='desktopNavbar'
        sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
      >
        {NavList.map((page) => (
          <Button
            component={NavLink}
            to={page === "Home" ? "/" : page.toLowerCase()}
            key={page}
            sx={{ py: 2, px: 3, color: "inherit", display: "block" }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default LargeScreenMenu;
