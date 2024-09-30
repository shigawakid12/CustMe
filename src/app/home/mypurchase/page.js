"use client";

import React, { useState } from "react";
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
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatIcon from "@mui/icons-material/Chat";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PrintIcon from "@mui/icons-material/Print";

const purchases = [
  {
    image: "https://cdn.logo.com/hotlink-ok/logo-social.png",
    item: "Black Mug",
    price: "₱150",
    quantity: 2,
    status: "Ready for pickup",
  },
  {
    image: "https://cdn.logo.com/hotlink-ok/logo-social.png",
    item: "Black Mug",
    price: "₱150",
    quantity: 2,
    status: "Processing",
  },
  {
    image: "https://cdn.logo.com/hotlink-ok/logo-social.png",
    item: "Black Mug",
    price: "₱150",
    quantity: 2,
    status: "Picked Up",
  },
];

function MainContent() {
  return (
    <Box
      sx={{
        marginLeft: "20px",
        marginTop: "64px",
        padding: 2,
        minHeight: "100vh",
        backgroundColor: "white",
        width: "calc(100% - 240px)", // Adjust width to cover remaining space
      }}
    >
      <Typography variant="h5" gutterBottom color="black">
        My Purchases
      </Typography>
      <TableContainer component={Paper} sx={{ width: "100%" }}>
        <Table aria-label="purchases table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #000' }}>Items</TableCell>
              <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #000' }}>Prices</TableCell>
              <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #000' }}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #000' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {purchases.map((purchase, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={purchase.image}
                      alt={purchase.item}
                      style={{ width: "50px", marginRight: "10px" }}
                    />
                    <Typography>{purchase.item}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{purchase.price}</TableCell>
                <TableCell>{purchase.quantity}</TableCell>
                <TableCell>{purchase.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

function Home() {
  return (
    <Box sx={{ display: "flex", backgroundColor: "white", minHeight: "100vh" }}>
      <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: "#7ab6ff" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h4"
            component="div"
            sx={{ fontWeight: "bold", color: "black" }}
          >
            <span style={{ color: "#FFEB3B" }}>Cus</span>
            <span style={{ color: "#FFEB3B" }}>tMe</span>
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
          [`& .MuiDrawer-paper`]: {
            width: 200,
            boxSizing: "border-box",
            backgroundColor: "#1E88E5",
            color: "white",
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button>
            <ListItemIcon sx={{ color: "white" }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ color: "white" }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: "white" }}>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Chat" sx={{ color: "white" }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: "white" }}>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="My Purchase" sx={{ color: "white" }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: "white" }}>
              <DesignServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Designer" sx={{ color: "white" }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: "white" }}>
              <PrintIcon />
            </ListItemIcon>
            <ListItemText primary="Printing Shops" sx={{ color: "white" }} />
          </ListItem>
        </List>
      </Drawer>

      <MainContent />
    </Box>
  );
}

export default Home;
