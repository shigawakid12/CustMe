import React from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
} from '@mui/material';

function Home() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Box
        sx={{
          backgroundColor: '#ffffff',
          padding: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', ml: 2 }}>
          <span style={{ color: '#1976d2' }}>C</span>
          <span style={{ color: '#1976d2' }}>u</span>
          <span style={{ color: '#1976d2' }}>s</span>
          <span style={{ color: '#ffeb3b' }}>t</span>
          <span style={{ color: '#1976d2' }}>M</span>
          <span style={{ color: '#ffeb3b' }}>e</span>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ fontWeight: 'medium', mr: 2 }}>Home</Typography>
          <Typography variant="body1" sx={{ fontWeight: 'medium', mr: 2 }}>About</Typography>
          <Typography variant="body1" sx={{ fontWeight: 'medium', mr: 2 }}>Services</Typography>
          <Button variant="contained" color="primary" href="home/register" sx={{ ml: 2 }}>
            Sign In
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Paper sx={{ padding: 4, width: 400, height: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            Personalize your world with
          </Typography>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mt: 1 }}>
            CusTMe
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', mt: 1 }}>
            Connect Designers and Printing providers
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button variant="contained" sx={{ backgroundColor: '#ffeb3b', color: '#000', mr: 2 }}>
              Sign Up
            </Button>
            <Button variant="outlined" sx={{ backgroundColor: '#ffffff', color: '#000' }}>
              Join
            </Button>
          </Box>
        </Paper>

        <Box sx={{ width: 400, height: 320, ml: 3 }}>
          <img
            src="/assets/image/artcat.jpg"
            alt="Your Image"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
