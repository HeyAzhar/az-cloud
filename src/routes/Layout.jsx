import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Container from "@mui/material/Container";
import NotificationDrawer from "../Components/Common/NotificationDrawer";

function Layout() {
  return (
    <>
      <NavBar />
      <NotificationDrawer />
      <Container maxWidth='xl' sx={{ mt: 5, pb: 5 }}>
        <Outlet />
      </Container>
    </>
  );
}
export default Layout;
