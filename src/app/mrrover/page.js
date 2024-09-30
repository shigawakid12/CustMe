"use client"; // This marks the component as a Client Component

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
  TextField,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputAdornment,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import BookIcon from '@mui/icons-material/Book';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ChatIcon from '@mui/icons-material/Chat';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person'; // Icon for View
import EditIcon from '@mui/icons-material/Edit'; // Icon for Edit
import DeleteIcon from '@mui/icons-material/Delete'; // Icon for Delete
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'; // Icon for Trash

function ProfilePage() {
  const [selectedOwner, setSelectedOwner] = useState(null);

  // Sample data for the table
  const vehicleOwners = [
    { id: 1, firstName: 'Zeo', lastName: 'Dongallo', email: 'zeodongallo@gmail.com', phone: '09123456789' },
    { id: 2, firstName: 'Nicole Kate', lastName: 'Jumao-as', email: 'jumaaasolivya@gmail.com', phone: '09122535344' },
    { id: 3, firstName: 'Jhade', lastName: 'Sedillo', email: 'sedillojhade28@gmail.com', phone: '09465757578' },
    { id: 4, firstName: 'Mike', lastName: 'Sorono', email: 'soronojhonmike@gmail.com', phone: '09723534945' },
    { id: 5, firstName: 'Aubriana', lastName: 'Tugano', email: 'aubrianagaillejkufc@gmail.com', phone: '09624819578' },
  ];

  const handleDeleteClick = (owner) => {
    setSelectedOwner(owner);
    // Do not open dialog here, as it is always open
  };

  const handleConfirmDelete = () => {
    // Add delete logic here
    console.log(`Deleting user: ${selectedOwner.firstName} ${selectedOwner.lastName}`);
    setSelectedOwner(null); // Reset selection after deletion
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: 'white' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 80,
          '& .MuiDrawer-paper': {
            width: 80,
            boxSizing: 'border-box',
            backgroundColor: '#000000',
            color: 'white',
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button>
            <ListItemIcon sx={{ color: 'white' }}>
              <AccountCircleIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: 'white' }}>
              <SpeedIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: 'white' }}>
              <SettingsIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: 'white' }}>
              <BookIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: 'white' }}>
              <InsertDriveFileIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: 'white' }}>
              <ChatIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: 'white' }}>
              <ExitToAppIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: '#c4d9ee' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            {/* MR. ROVER Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src="/assets/MR-LOGO.jpg" alt="MR. ROVER Logo" style={{ height: '40px', marginRight: '16px' }} />
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: 'black' }}>
                MR. ROVER
              </Typography>
            </Box>

            {/* Admin Icon at the upper right */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body1" sx={{ color: 'black', marginRight: '10px' }}>
                ADMIN
              </Typography>
              <IconButton color="inherit">
                <Avatar alt="Admin" src="/assets/admin-avatar.jpg" />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Search Bar */}
        <Box sx={{ mt: 10, mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <TextField
            label="Search Vehicle Owner"
            variant="outlined"
            size="small"
            sx={{ width: '300px', backgroundColor: '#f3f3f3' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Vehicle Owners Table */}
        <TableContainer component={Paper} sx={{ backgroundColor: '#f7f7f7', mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'black' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Vehicle Owner</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>First Name</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Last Name</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Email</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Phone Number</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicleOwners.map((owner) => (
                <TableRow key={owner.id}>
                  <TableCell>{owner.id}</TableCell>
                  <TableCell>{owner.firstName}</TableCell>
                  <TableCell>{owner.lastName}</TableCell>
                  <TableCell>{owner.email}</TableCell>
                  <TableCell>{owner.phone}</TableCell>
                  <TableCell>
                    <IconButton sx={{ color: 'green' }}>
                      <PersonIcon />
                    </IconButton>
                    <IconButton color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton sx={{ color: 'black' }} onClick={() => handleDeleteClick(owner)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button variant="contained" color="primary" sx={{ mr: 1 }}>
            Update
          </Button>
          <Button variant="outlined" color="primary" sx={{ backgroundColor: '#7c8381', color: 'white' }}>
            Cancel
          </Button>
        </Box>

        {/* Static Delete Confirmation Dialog */}
        <Dialog open={true} onClose={() => {}}>
          <DialogTitle>
            <DeleteOutlineIcon sx={{ fontSize: '40px', float: 'left', marginRight: '10px' }} />
            Confirm Deletion
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete user {selectedOwner ? `${selectedOwner.firstName} ${selectedOwner.lastName}` : ''}?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => {}} color="error">
              Close
            </Button>
            <Button onClick={handleConfirmDelete} color="error">
              Yes, Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}

export default ProfilePage;
