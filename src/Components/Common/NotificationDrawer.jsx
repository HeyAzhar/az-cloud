import React from "react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { useNotification } from "../../states/notifications/store";
import actions from "../../states/notifications/actions";

const NotificationDrawer = () => {
  const { notificationState, dispatchNotification } = useNotification();

  const toggleDrawer = () => {
    dispatchNotification({
      type: actions.CLOSE_DRAWER,
    });
  };

  return (
    <Drawer
      anchor='right'
      open={notificationState.isDrawerOpen}
      onClose={toggleDrawer}
    >
      <Typography variant='h1'>Hello</Typography>
    </Drawer>
  );
};

export default NotificationDrawer;
