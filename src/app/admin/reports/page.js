"use client";

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Button,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PrintIcon from '@mui/icons-material/Print';

function Home() {
  return (
    <Box sx={{ display: 'flex', backgroundColor: 'white', height: '100vh' }}>
      <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: '#7ab6ff' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'black' }}>
            <span style={{ color: '#FFEB3B' }}>Cus</span>
            <span style={{ color: '#FFEB3B' }}>tMe</span>
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: 200,
          [`& .MuiDrawer-paper`]: {
            width: 200,
            boxSizing: 'border-box',
            backgroundColor: '#1E88E5',
            color: 'white',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
          <Avatar alt="User Profile" src="/assets/image/artcat.jpg" sx={{ width: 80, height: 80, mb: 1 }} />
          <Typography variant="h6" fontWeight="bold" sx={{ color: 'white', textAlign: 'center' }}>
            Charles Lee
          </Typography>
        </Box>
        <List>
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Manage Account" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PrintIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Generate Report" />
          </ListItem>
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          backgroundColor: 'white',
        }}
      >
        <Toolbar />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              width: '200px',
              height: '200px',
              fontSize: '18px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/assets/image/client.png"
              alt="Client"
              style={{ width: '80px', height: '80px', marginBottom: '8px' }}
            />
            Client
          </Button>
          <Button
            variant="contained"
            sx={{
              width: '200px',
              height: '200px',
              fontSize: '18px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/assets/image/designerlogo.png"
              alt="Designer"
              style={{ width: '80px', height: '80px', marginBottom: '8px' }}
            />
            Designer
          </Button>
          <Button
            variant="contained"
            sx={{
              width: '200px',
              height: '200px',
              fontSize: '18px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/assets/image/printshopslogo.png"
              alt="Printing Shops"
              style={{ width: '80px', height: '80px', marginBottom: '8px' }}
            />
            Printing Shops
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
