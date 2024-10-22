import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Button, Avatar, Box, useMediaQuery } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

const Header = observer(() => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        {/* Left section: Logo and Search bar */}
        <Box display="flex" alignItems="center" flexGrow={1}>
          <img
            src="cyi_logo.webp" // Replace with your logo
            alt="CYI"
            style={{ height: '30px', marginRight: '20px' }}
          />
          <Box
            display="flex"
            alignItems="center"
            sx={{
              backgroundColor: '#f5f5f5',
              borderRadius: '25px',
              padding: '5px 10px',
              flexGrow: 1,
            }}
          >
            <SearchIcon style={{ color: '#757575' }} />
            <InputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ marginLeft: '10px', color: 'black', width: '100%' }}
            />
          </Box>
        </Box>

        {/* Right section: Links, Write button, notification, and profile */}
        <Box display="flex" alignItems="center">
          {/* Navigation Links */}
          {!isSmallScreen && (
            <>
              <Button color="inherit" component={Link} to="/home" sx={{ marginRight: '15px' }}>
                HOME
              </Button>
              <Button color="inherit" component={Link} to="/about" sx={{ marginRight: '15px' }}>
                ABOUT
              </Button>
              <Button color="inherit" component={Link} to="/contact" sx={{ marginRight: '15px' }}>
                CONTACT
              </Button>
            </>
          )}

          {/* Write button */}
          <Button variant="outlined" sx={{ marginRight: '20px' }}>
            Write
          </Button>

          {/* Notification icon */}
          <IconButton>
            <NotificationsIcon />
          </IconButton>

          {/* Profile Avatar */}
          <IconButton>
            <Avatar src="https://i.pravatar.cc/300" alt="Profile" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
});

export default Header;
