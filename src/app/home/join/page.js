import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PrintIcon from '@mui/icons-material/Print';

function Home() {
  return (
    <div className="min-h-screen bg-gray-200">
 
      <div className="bg-white p-4 flex justify-between items-center shadow-md">

        <div className="text-black font-extrabold text-4xl ml-8">
          <span className="text-blue-500">C</span>
          <span className="text-blue-500">u</span>
          <span className="text-blue-500">s</span>
          <span className="text-yellow-500">t</span>
          <span className="text-blue-500">M</span>
          <span className="text-yellow-500">e</span>
        </div>

        <div className="flex justify-end items-center space-x-4 mr-8">
          <div className="text-black font-semibold">Home</div>
          <div className="text-black font-semibold">About</div>
          <div className="text-black font-semibold">Services</div>
        </div>
      </div>

      <Container maxWidth={false} className="flex items-center justify-center mt-16">
        <div className="bg-blue-400 p-6 rounded-lg shadow-lg w-[600px] h-[350px]">
          <Typography variant="h4" className="font-bold text-center mt-4 mb-6 text-white">
            Join Our Community
          </Typography>
          <div className="flex justify-evenly items-center h-full">
          <a href="/home/dashboard" className="w-[45%] h-[120px]">
              <Button
                variant="contained"
                className="bg-white text-black rounded-lg shadow-md hover:bg-gray-200 flex flex-col items-center justify-center w-full h-full p-4"
              >
                <PrintIcon fontSize="inherit" className="text-4xl mb-2" />
                <Typography variant="h5" className="text-xl font-bold text-center">
                  I AM A DESIGNER
                </Typography>
              </Button>
            </a>
            <a href="/home/dashboard" className="w-[45%] h-[120px]">
              <Button
                variant="contained"
                className="bg-white text-black rounded-lg shadow-md hover:bg-gray-200 flex flex-col items-center justify-center w-full h-full p-4"
              >
                <PrintIcon fontSize="inherit" className="text-4xl mb-2" />
                <Typography variant="h5" className="text-xl font-bold text-center">
                  I AM A PRINTING PROVIDER
                </Typography>
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
