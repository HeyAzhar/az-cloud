import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import LargeScreenMenu from "./LargeScreenMenu";
import SmallScreenMenu from "./SmallScreenMenu";
import Accounts from "./Accounts";
import Notifications from "./Notifications";

function NavBar() {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <LargeScreenMenu />
          <SmallScreenMenu />
          <Accounts />
          <Notifications />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
