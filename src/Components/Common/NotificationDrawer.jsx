import React, { useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import AlertTitle from "@mui/material/AlertTitle";
import CloseIcon from "@mui/icons-material/Close";
import { useNotification } from "../../states/notifications/store";
import actions from "../../states/notifications/actions";
// import automateNotification from "../../states/notifications/automated";

const NotificationDrawer = () => {
  const { notificationState, dispatchNotification } = useNotification();

  const toggleDrawer = () => {
    dispatchNotification({
      type: actions.CLOSE_DRAWER,
    });
  };

  const removeNotification = (id) => {
    dispatchNotification({
      type: actions.REMOVE_NOTIFICATION,
      id,
    });
  };

  // useEffect(() => console.log({ notificationState }), [notificationState]);

  // automateNotification();

  return (
    <Drawer
      anchor='right'
      open={notificationState.isDrawerOpen}
      onClose={toggleDrawer}
    >
      <Grid container justifyContent={"space-between"}>
        <Typography variant='h5' p={3}>
          Notifications
        </Typography>
        <IconButton aria-label='close' onClick={toggleDrawer} size='large'>
          <CloseIcon />
        </IconButton>
      </Grid>
      <Divider />
      {notificationState.data?.length > 0 &&
        notificationState.data.map((notification, i) => (
          <Alert
            key={i}
            severity={notification.type}
            onClose={() => removeNotification(notification.id)}
          >
            <AlertTitle>{notification.title}</AlertTitle>
            {notification.description}
          </Alert>
        ))}
    </Drawer>
  );
};

export default NotificationDrawer;
