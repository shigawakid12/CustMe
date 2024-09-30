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
  TextField,
  Button,
  Grid,
  Paper,
  Box,
  IconButton as MuiIconButton,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatIcon from "@mui/icons-material/Chat";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PrintIcon from "@mui/icons-material/Print";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const items = [
  { src: "/assets/image/artist1.jpg", title: "Item 1", subtitle: "Zelma Diana" },
  { src: "/assets/image/artist2.jpg", title: "Item 2", subtitle: "Perrine Gerda" },
  { src: "/assets/image/artist3.jpg", title: "Item 3", subtitle: "Perrine Gerda" },
  { src: "/assets/image/artist4.jpg", title: "Item 4", subtitle: "Artist Name" },
  { src: "/assets/image/artist5.jpg", title: "Item 5", subtitle: "Artist Name" },
];

const printingShops = [
  { src: "/assets/image/print1.jpg", title: "Shop 1", subtitle: "Print Master" },
  { src: "/assets/image/print2.jpg", title: "Shop 2", subtitle: "Quick Print" },
  { src: "/assets/image/print3.jpg", title: "Shop 3", subtitle: "Design & Print" },
  { src: "/assets/image/print4.jpg", title: "Shop 4", subtitle: "Print Hub" },
  { src: "/assets/image/print5  .jpg", title: "Shop 5", subtitle: "Creative Prints" },
];

function SelectionCarousel({ items, handleNext, handlePrevious, currentIndex }) {
  const visibleItems = items.slice(currentIndex, currentIndex + 3);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "-40px",
        marginRight: "50px",
      }}
    >
      <IconButton onClick={handlePrevious} aria-label="previous" sx={{ mr: 1 }}>
        <ArrowBackIcon />
      </IconButton>

      <Box sx={{ flex: 1, overflow: "hidden" }}>
        <Grid container spacing={2}>
          {visibleItems.map((item, index) => (
            <Grid item xs={4} sm={4} key={index}>
              <Paper sx={{ p: 2, boxShadow: 3, textAlign: "center" }}>
                <img
                  src={item.src}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <Typography variant="subtitle1" fontWeight="bold" mt={1}>
                  {item.title}
                </Typography>
                <Typography variant="body2">{item.subtitle}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <IconButton onClick={handleNext} aria-label="next" sx={{ ml: 1 }}>
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
}

function Timeline() {
  return (
    <Box>
      <Typography variant="h6" fontWeight="bold" mb={2} color="black">
        Your Post
      </Typography>
  
      <Paper sx={{ p: 1, mb: 2, boxShadow: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Avatar alt="User Profile" src="/assets/image/artcat.jpg" sx={{ mr: 2 }} />
          <Box sx={{ ml: "auto" }}>
            <MuiIconButton sx={{ color: "green" }}>
              <EditIcon />
            </MuiIconButton>
            <MuiIconButton sx={{ color: "red" }}>
              <DeleteIcon />
            </MuiIconButton>
          </Box>
        </Box>
        <Typography variant="body2">
          Looking for a designer to create custom artwork for my new website. Interested designers, please share your portfolio and availability.
        </Typography>
      </Paper>

      <Paper sx={{ p: 2, mb: 2, boxShadow: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Avatar alt="User Profile" src="/assets/image/artcat.jpg" sx={{ mr: 2 }} />
          <Box sx={{ ml: "auto" }}>
            <MuiIconButton sx={{ color: "green" }}>
              <EditIcon />
            </MuiIconButton>
            <MuiIconButton sx={{ color: "red" }}>
              <DeleteIcon />
            </MuiIconButton>
          </Box>
        </Box>
        <Typography variant="body2">
          I need a custom T-shirt design for our upcoming family reunion. Interested designers, please message me with your ideas and portfolio.
        </Typography>
      </Paper>

      <Paper sx={{ p: 2, mb: 2, boxShadow: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Avatar alt="User Profile" src="/assets/image/artcat.jpg" sx={{ mr: 2 }} />
          <Box sx={{ ml: "auto" }}>
            <MuiIconButton sx={{ color: "green" }}>
              <EditIcon />
            </MuiIconButton>
            <MuiIconButton sx={{ color: "red" }}>
              <DeleteIcon />
            </MuiIconButton>
          </Box>
        </Box>
        <Typography variant="body2">
          Seeking a creative designer to develop a vibrant and eye-catching flyer for a community event. Contact me if you have relevant experience.
        </Typography>
      </Paper>

      <Paper sx={{ p: 2, mb: 2, boxShadow: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Avatar alt="User Profile" src="/assets/image/artcat.jpg" sx={{ mr: 2 }} />
          <Box sx={{ ml: "auto" }}>
            <MuiIconButton sx={{ color: "green" }}>
              <EditIcon />
            </MuiIconButton>
            <MuiIconButton sx={{ color: "red" }}>
              <DeleteIcon />
            </MuiIconButton>
          </Box>
        </Box>
        <Typography variant="body2">
          Need a professional business card design that stands out. Please get in touch if you can provide a modern and sleek design.
        </Typography>
      </Paper>
    </Box>
  );
}

function Home() {
  const [artistIndex, setArtistIndex] = useState(0);
  const [shopIndex, setShopIndex] = useState(0);

  const handleArtistPrevious = () => {
    setArtistIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 3 : prevIndex - 3
    );
  };

  const handleArtistNext = () => {
    setArtistIndex((prevIndex) =>
      prevIndex + 3 >= items.length ? 0 : prevIndex + 3
    );
  };

  const handleShopPrevious = () => {
    setShopIndex((prevIndex) =>
      prevIndex === 0 ? printingShops.length - 3 : prevIndex - 3
    );
  };

  const handleShopNext = () => {
    setShopIndex((prevIndex) =>
      prevIndex + 3 >= printingShops.length ? 0 : prevIndex + 3
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
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

      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "white" }}>
        <Toolbar />

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>

            <Paper sx={{ p: 2, mb: 4, boxShadow: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar alt="Profile" src="/assets/image/artcat.jpg" />
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Unsay idea nimo chuy?"
                  size="small"
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button variant="contained" color="primary">
                  Post
                </Button>
              </Box>
            </Paper>

            <Box sx={{ marginLeft: 1, marginRight: 2, padding: 1 }}>
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                sx={{ color: "black", textAlign: "left" }}
              >
                Top Artists
              </Typography>
              <SelectionCarousel
                items={items}
                handleNext={handleArtistNext}
                handlePrevious={handleArtistPrevious}
                currentIndex={artistIndex}
              />
            </Box>
            <Box sx={{ marginLeft: 1, marginRight: 2, padding: 1 }}>
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                sx={{ color: "black", textAlign: "left" }}
              >
                Top Printing Shops
              </Typography>
              <SelectionCarousel
                items={printingShops}
                handleNext={handleShopNext}
                handlePrevious={handleShopPrevious}
                currentIndex={shopIndex}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              <Timeline />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
