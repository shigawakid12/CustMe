"use client";

import React, { useState } from 'react';
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
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const initialOrders = [
  { id: 1, name: 'John Doe', totalOrder: 5, date: '2024-09-20' },
  { id: 2, name: 'Jane Smith', totalOrder: 3, date: '2024-09-21' },
  { id: 3, name: 'Alice Johnson', totalOrder: 7, date: '2024-09-22' },
  { id: 4, name: 'Mark Williams', totalOrder: 4, date: '2024-09-23' },
  { id: 5, name: 'Sophia Brown', totalOrder: 2, date: '2024-09-24' },
  { id: 6, name: 'Lucas Green', totalOrder: 6, date: '2024-09-25' },
  { id: 7, name: 'Emma Davis', totalOrder: 8, date: '2024-09-26' },
  { id: 8, name: 'Michael Scott', totalOrder: 10, date: '2024-09-27' },
];

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [orders] = useState(initialOrders);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredOrders = orders.filter((order) =>
    order.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAccept = (id) => {
    console.log(`Order ${id} accepted`);
  };

  const handleReject = (id) => {
    console.log(`Order ${id} rejected`);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: 'white' }}>
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
            <Avatar alt="Profile" src="/assets/image/artcat.jpg" />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: 200,
          [`& .MuiDrawer-paper`]: { width: 200, boxSizing: 'border-box', backgroundColor: '#1E88E5', color: 'white' },
        }}
      >
        <Toolbar />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2, mb: 4 }}>
          <Avatar alt="Profile Picture" src="/assets/image/artcat.jpg" sx={{ width: 80, height: 80, mb: 1 }} />
          <Typography variant="h6" fontWeight="bold" color="white">
            Charles Shop
          </Typography>
        </Box>

        <List>
          <ListItem button>
            <ListItemIcon>
              <ChatIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: 'white' }}>
        <Toolbar />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'black' }}>
            Orders
          </Typography>
          <TextField
            variant="outlined"
            label="Search by Customer Name"
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ backgroundColor: 'white', borderRadius: 1, width: 300 }}
          />
        </Box>

        <Table sx={{ backgroundColor: 'white' }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #000' }}>ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #000' }}>Customer Name</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', borderBottom: '2px solid #000' }}>Total Order</TableCell>
              <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #000' }}>Date</TableCell>
              <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #000' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.name}</TableCell>
                <TableCell align="center">{order.totalOrder}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Button variant="contained" color="success" onClick={() => handleAccept(order.id)} sx={{ mr: 1 }}>
                    Accept
                  </Button>
                  <Button variant="contained" color="error" onClick={() => handleReject(order.id)}>
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}

export default Home;
