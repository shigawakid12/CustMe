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
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const initialOrders = [
  { id: 1, orderNumber: 'ORD001', customer: 'John Doe', totalPrice: 150.00, date: '2024-09-20', paymentStatus: 'Paid' },
  { id: 2, orderNumber: 'ORD002', customer: 'Jane Smith', totalPrice: 75.50, date: '2024-09-21', paymentStatus: 'Pending' },
  { id: 3, orderNumber: 'ORD003', customer: 'Alice Johnson', totalPrice: 200.00, date: '2024-09-22', paymentStatus: 'Paid' },
  { id: 4, orderNumber: 'ORD004', customer: 'Mark Williams', totalPrice: 50.75, date: '2024-09-23', paymentStatus: 'Failed' },
  { id: 5, orderNumber: 'ORD005', customer: 'Sophia Brown', totalPrice: 120.00, date: '2024-09-24', paymentStatus: 'Paid' },
  { id: 6, orderNumber: 'ORD006', customer: 'Lucas Green', totalPrice: 90.25, date: '2024-09-25', paymentStatus: 'Pending' },
  { id: 7, orderNumber: 'ORD007', customer: 'Emma Davis', totalPrice: 130.00, date: '2024-09-26', paymentStatus: 'Paid' },
  { id: 8, orderNumber: 'ORD008', customer: 'Michael Scott', totalPrice: 250.00, date: '2024-09-27', paymentStatus: 'Paid' },
];

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [orders] = useState(initialOrders);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredOrders = orders.filter((order) =>
    order.customer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            Charles Designer
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
              <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #000' }}>Order Number</TableCell>
              <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #000' }}>Customer</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', borderBottom: '2px solid #000' }}>Total Price</TableCell>
              <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #000' }}>Date</TableCell>
              <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #000' }}>Payment Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.orderNumber}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell align="center">${order.totalPrice.toFixed(2)}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.paymentStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}

export default Home;
