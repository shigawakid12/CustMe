"use client"; // Mark this file as a client component

import React, { useState } from 'react'; // Make sure useState is imported
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Drawer,
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Paper,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MessageIcon from '@mui/icons-material/Message';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Sample profile data
const profileData = {
  name: 'Charles Shop',
  location: 'Lapu-Lapu City',
  bio: 'Designing the future, one print at a time.',
  contactNumber: '+63 912 345 6789',
  email: 'charles.shop@example.com',
  profilePicture: '/assets/image/artcat.jpg',
  coverPhoto: '/assets/image/printcover.jpg',
};

// Sample collage images and their respective messages
const collageData = [
  { image: '/assets/image/tshirt1.jpg', message: 'Customized T-shirt for a local brand.' },
  { image: '/assets/image/tshirt2.jpg', message: 'Minimalist design with eco-friendly fabric.' },
  { image: '/assets/image/tshirt3.jpg', message: 'Collaboration with a streetwear designer.' },
  { image: '/assets/image/tshirt4.jpg', message: 'Exclusive print for the summer collection.' },
  { image: '/assets/image/tshirt5.jpg', message: 'Graphic tees inspired by urban culture.' },
];

function Home() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageMessage, setImageMessage] = useState(''); // State to hold image message

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  const handleMessageChange = (event) => {
    setImageMessage(event.target.value); // Update image message on input change
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
            <Avatar alt="Profile" src={profileData.profilePicture} />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: 200,
          '& .MuiDrawer-paper': { width: 200, boxSizing: 'border-box', backgroundColor: '#1E88E5', color: 'white' },
        }}
      >
        <Toolbar />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2, mb: 4 }}>
          <Avatar alt="Profile Picture" src={profileData.profilePicture} sx={{ width: 80, height: 80, mb: 1 }} />
          <Typography variant="h6" fontWeight="bold" color="white">
            {profileData.name}
          </Typography>
        </Box>

        <List>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
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

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <Grid container spacing={3}>
          {/* Top Section: Cover Photo and Profile Picture */}
          <Grid item xs={12}>
            <Box sx={{ position: 'relative', mb: 6 }}>
              {/* Cover Photo */}
              <img
                src={profileData.coverPhoto}
                alt="Cover"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              {/* Profile Picture - Overlapping on Cover Photo */}
              <Avatar
                alt="Profile Picture"
                src={profileData.profilePicture}
                sx={{
                  width: 150,
                  height: 150,
                  position: 'absolute',
                  bottom: -75,
                  left: '2%', // Positioned for overlap
                  border: '5px solid white',
                }}
              />
            </Box>
          </Grid>

          {/* Profile Details - Separate from Profile Picture */}
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Grid container spacing={2} alignItems="center">
                {/* Profile Information on the Left */}
                <Grid item xs={8}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {profileData.name}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">{profileData.bio}</Typography>
                  <Typography variant="body2" color="textSecondary">Location: {profileData.location}</Typography>
                  <Typography variant="body2" color="textSecondary">Contact: {profileData.contactNumber}</Typography>
                  <Typography variant="body2" color="textSecondary">Email: {profileData.email}</Typography>
                </Grid>

                {/* Buttons for Message and Location aligned to the right side */}
                <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <Button
                    variant="contained"
                    startIcon={<MessageIcon />}
                    color="primary"
                    sx={{ marginRight: 2 }}
                  >
                    Message
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<LocationOnIcon />}
                    color="secondary"
                  >
                    Location
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

{/* Image Upload Section */}
<Grid item xs={12}>
  <input
    accept="image/*"
    type="file"
    onChange={handleImageUpload}
    style={{ display: 'none' }}
    id="image-upload"
  />
  <label htmlFor="image-upload">
    <Button variant="contained" component="span" color="primary">
      Upload Image
    </Button>
  </label>
</Grid>


          {/* Timeline Feed */}
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'black' }}>Portfolio</Typography>
            <Grid container spacing={2}>
              {collageData.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper sx={{ padding: 2 }}>
                    <Typography variant="body1" fontWeight="bold">{item.message}</Typography>
                    <img
                      src={item.image}
                      alt={`Collage ${index + 1}`}
                      style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '8px',
                        marginTop: 8,
                        transition: 'transform 0.2s',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </Paper>
                </Grid>
              ))}

              {/* Display Uploaded Image in the Timeline */}
              {uploadedImage && (
                <Grid item xs={12} sm={6} md={4}>
                  <Paper sx={{ padding: 2 }}>
                    <Typography variant="body1" fontWeight="bold">{imageMessage || "Uploaded Image"}</Typography>
                    <img
                      src={uploadedImage}
                      alt="Uploaded Collage"
                      style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '8px',
                        marginTop: 8,
                        transition: 'transform 0.2s',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </Paper>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
