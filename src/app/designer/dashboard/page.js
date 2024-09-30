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
  Button,
  TextField,
  InputAdornment,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard'; // Import Dashboard Icon

const initialPosts = [
  {
    id: 1,
    user: 'John Doe',
    content: `I need a custom logo design for my new business. 
              Please contact me if you're interested in creating a unique 
              and professional logo. Looking forward to collaborating!`,
    timestamp: '2 hours ago',
    profilePicture: '/assets/image/user1.jpg',
  },
  {
    id: 2,
    user: 'Jane Smith',
    content: `Looking for a designer to create a unique wedding invitation. 
              Please reach out if you have experience with elegant 
              and personalized designs.`,
    timestamp: '5 hours ago',
    profilePicture: '/assets/image/user2.jpg',
  },
  {
    id: 3,
    user: 'Alice Johnson',
    content: `I need a custom T-shirt design for our upcoming family reunion. 
              Interested designers, please message me with your ideas 
              and portfolio.`,
    timestamp: '1 day ago',
    profilePicture: '/assets/image/user3.jpg',
  },
  {
    id: 4,
    user: 'Mark Williams',
    content: 'Can anyone recommend good design tools?',
    timestamp: '1 day ago',
    profilePicture: '/assets/image/user4.jpg',
  },
  {
    id: 5,
    user: 'Sophia Brown',
    content: 'Loving the new features in the latest update!',
    timestamp: '2 days ago',
    profilePicture: '/assets/image/user5.jpg',
  },
];

function Home() {
  const [posts, setPosts] = useState(initialPosts);
  const [searchQuery, setSearchQuery] = useState('');

  const handleApply = (id) => {
    console.log(`Applied to post ID: ${id}`);
  };

  const handleIgnore = (id) => {
    console.log(`Ignored post ID: ${id}`);
  };

  const filteredPosts = posts.filter((post) =>
    post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.user.toLowerCase().includes(searchQuery.toLowerCase())
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
          [`& .MuiDrawer-paper`]: {
            width: 200,
            boxSizing: 'border-box',
            backgroundColor: '#1E88E5',
            color: 'white',
          },
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
              <DashboardIcon sx={{ color: 'white' }} /> {/* Dashboard Icon */}
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

      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: 'white' }}>
        <Toolbar />

        {/* Smaller Search Bar with Icon */}
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small" // Make the size small
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2, width: '300px' }} // Set a specific width
        />

        <Box>
          {filteredPosts.map((post) => (
            <Box key={post.id} sx={{ mb: 2, padding: 2, border: '1px solid #ccc', borderRadius: 1, display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Avatar alt={post.user} src={post.profilePicture} sx={{ width: 40, height: 40, mr: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'black' }}>
                  {post.user}
                </Typography>
              </Box>
              <Typography sx={{ color: 'black' }}>{post.content}</Typography>
              <Typography variant="caption" color="gray">
                {post.timestamp}
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'green',
                    color: 'white',
                    mr: 1,
                    '&:hover': {
                      backgroundColor: 'blue', // Change to blue on hover
                    },
                  }}
                  onClick={() => handleApply(post.id)}
                >
                  Apply
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    background: 'red',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'blue', // Change to blue on hover
                      color: 'white', // Change text color to white on hover
                    },
                  }}
                  onClick={() => handleIgnore(post.id)}
                >
                  Ignore
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
