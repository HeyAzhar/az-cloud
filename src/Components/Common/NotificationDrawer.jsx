import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";

const NotificationDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button onClick={toggleDrawer()}>Open drawer</Button>

      <Drawer anchor='right' open={open} onClose={toggleDrawer()}>
        <Typography variant='h1'>Hello</Typography>
      </Drawer>
    </div>
  );
};

export default NotificationDrawer;
