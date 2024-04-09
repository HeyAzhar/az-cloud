import React from "react";
import Box from "@mui/material/Box";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { useNotification } from "../../states/notifications/store";
import actions from "../../states/notifications/actions";

const Notifications = () => {
  const { dispatchNotification } = useNotification();

  const openNotificationDrawer = () => {
    dispatchNotification({
      type: actions.OPEN_DRAWER,
    });
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title='Notifications'>
        <IconButton onClick={openNotificationDrawer} sx={{ p: 0 }}>
          <NotificationsOutlinedIcon
            sx={{
              border: 1,
              borderRadius: 50,
              p: 0.5,
              fontSize: 40,
            }}
            color='secondary'
          />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Notifications;
