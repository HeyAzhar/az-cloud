import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import accounts from "../../utils/accounts";
import { useAccount } from "../../states/accounts/store";
import actions from "../../states/accounts/actions";

const Accounts = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { accountState, dispatchAccount } = useAccount();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleAccountChange = (event) => {
    dispatchAccount({
      type: actions.CHANGE_ACCOUNT,
      account: event.target.value,
    });
    handleCloseUserMenu();
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title='Accounts'>
        <>
          <Typography
            variant='subtitle2'
            sx={{
              display: { xs: "none", md: "inline" },
              color: "secondary.main",
              mr: 1,
            }}
          >
            {accountState}
          </Typography>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              sx={{
                bgcolor: "secondary.main",
                color: "primary.main",
                border: 1,
                mr: 2,
              }}
              alt={accountState}
              src='/brokenImg.jpg'
            />
          </IconButton>
        </>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id='menu-appbar'
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <FormControl sx={{ mx: 3 }}>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            value={accountState}
            name='radio-buttons-group'
            onChange={handleAccountChange}
          >
            {accounts.map((account) => (
              <FormControlLabel
                key={account}
                value={account}
                control={<Radio />}
                label={account}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <Divider />

        <MenuItem sx={{ width: "fitContent" }} onClick={handleCloseUserMenu}>
          <Typography color='danger.main' textAlign='center'>
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Accounts;
