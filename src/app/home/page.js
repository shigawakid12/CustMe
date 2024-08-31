import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="bg-white-400 p-4 flex justify-between items-center">       
        <div className="text-black font-extrabold text-4xl ml-8">
          <span className="text-blue-500">C</span>
          <span className="text-blue-500">u</span>
          <span className="text-blue-500">s</span>
          <span className="text-yellow-500">t</span>
          <span className="text-blue-500">M</span>
          <span className="text-yellow-500">e</span>
        </div>
        <div className="flex justify-end items-center">
          <div className="text-black font-semibold mr-4">Home</div>
          <div className="text-black font-semibold">About</div>
          <div className="text-black font-semibold ml-4">Services</div>
          <a href="home/register">
            <button className="bg-yellow-500 rounded text-white ml-8 font-semibold px-5 py-2">
            Sign In
            </button>
          </a>
          
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <div className="bg-white-400 w-96 h-80 p-8 flex flex-col items-center justify-center">
          <div className="text-black font-bold text-xl">Personalize your world with</div>
          <div className="text-black font-bold mt-1 text-xl">CusTMe</div>
          <div className="text-black font-normal mt-1 text-xl text-center">
            Connect Designers and Printing providers
          </div>
          <div className="flex space-x-6 mt-7">
            <a href="home/register">
              <button className="bg-yellow-500 rounded text-black font-semibold px-5 py-2 -mr-4">
              Sign Up
              </button>
            </a>
            
            <button className="bg-white rounded text-black font-semibold px-5 py-2 border border-black">
              Join
            </button>
          </div>
        </div>

        <div className="w-96 h-80 ml-3">
          <img
            src="/assets/image/artcat.jpg"
            alt="Your Image"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
