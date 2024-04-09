import React, { useState } from "react";
import CloudIcon from "@mui/icons-material/FilterDramaTwoTone";
import NavList from "../../utils/navlist";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";

const SmallScreenMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={handleOpenNavMenu}
          color='inherit'
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id='menu-appbar'
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {NavList.map((page) => (
            <MenuItem
              component={NavLink}
              to={page === "Home" ? "/" : page.toLowerCase()}
              key={page}
              onClick={handleCloseNavMenu}
            >
              <Typography textAlign='center'>{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <CloudIcon sx={{ display: { xs: "flex", md: "none" }, mr: 2 }} />
      <Typography
        variant='h5'
        noWrap
        component={NavLink}
        to='/'
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        AzCloud
      </Typography>
    </>
  );
};

export default SmallScreenMenu;
