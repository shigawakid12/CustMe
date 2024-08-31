import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-200 flex">

      <div className="bg-white p-4 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="text-black font-extrabold text-4xl ml-8">
          <span className="text-blue-500">C</span>
          <span className="text-blue-500">u</span>
          <span className="text-blue-500">s</span>
          <span className="text-yellow-500">t</span>
          <span className="text-blue-500">M</span>
          <span className="text-yellow-500">e</span>
        </div>

        <div className="flex items-center space-x-4">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 7 8.97 7 11v3.159c0 .538-.214 1.055-.595 1.436L5 17h10z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 21h-2a2 2 0 01-2-2h6a2 2 0 01-2 2z"
              />
            </svg>
          </button>

          <img
            src="/assets/image/artcat.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="bg-blue-500 w-64 min-h-screen p-6 text-white mt-16 fixed top-0 left-0 z-40">
        <div className="space-y-6 mt-16">

          <a href="#" className="flex items-center space-x-4 hover:bg-blue-600 p-2 rounded-lg">
            <img
              src="/assets/image/dashboardlogo.png"
              alt="Dashboard Logo"
              className="h-8 w-8"
            />
            <span className="text-lg font-medium">Dashboard</span>
          </a>

          <a href="#" className="flex items-center space-x-4 hover:bg-blue-600 p-2 rounded-lg">
            <img
              src="/assets/image/chatlogo.png"
              alt="Chat Logo"
              className="h-8 w-8"
            />
            <span className="text-lg font-medium">Chat</span>
          </a>

          <a href="#" className="flex items-center space-x-4 hover:bg-blue-600 p-2 rounded-lg">
            <img
              src="/assets/image/mypurchaselogo.png"
              alt="Purchase Logo"
              className="h-8 w-8"
            />
            <span className="text-lg font-medium">My Purchase</span>
          </a>

          <a href="#" className="flex items-center space-x-4 hover:bg-blue-600 p-2 rounded-lg">
            <img
              src="/assets/image/designerlogo.png"
              alt="Designer Logo"
              className="h-8 w-8"
            />
            <span className="text-lg font-medium">Designer</span>
          </a>

          <a href="#" className="flex items-center space-x-4 hover:bg-blue-600 p-2 rounded-lg">
            <img
              src="/assets/image/printshopslogo.png"
              alt="Print Shop Logo"
              className="h-8 w-8"
            />
            <span className="text-lg font-medium">Printing Shops</span>
          </a>

        </div>
      </div>

      <div className="flex-1 flex flex-col ml-64 pt-20">
        <div className="flex flex-col items-start flex-1 mt-4 p-4">
          
          <div className="bg-white w-full max-w-2xl p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <img
                src="/assets/image/artcat.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <input
                type="text"
                placeholder="Unsay idea nimo chuy?"
                className="w-full p-2 border border-gray-300 text-gray-950 rounded-lg focus:outline-none"
              />
            </div>
            <div className="flex justify-end mt-3">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
                Post
              </button>
            </div>
          </div>

          <div className="max-w-2xl mt-8">
            <h3 className="text-xl font-bold mb-4 text-black">Top Artists</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src="/assets/image/artist1.jpg"
                  alt="Artist 1"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <h4 className="text-lg font-semibold mt-2">Item 1</h4>
                <p className="text-gray-600 mt-1">Zelma Diana</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src="/assets/image/artist2.jpg"
                  alt="Artist 2"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <h4 className="text-lg font-semibold mt-2">Item 2</h4>
                <p className="text-gray-600 mt-1">Perrine Gerda</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src="/assets/image/artist3.jpg"
                  alt="Artist 3"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <h4 className="text-lg font-semibold mt-2">Item 3</h4>
                <p className="text-gray-600 mt-1">Perrine Gerda</p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mt-12">
            <h3 className="text-xl font-bold mb-4 text-black">Printing Shops</h3>
            <div className="grid grid-cols-3 gap-7">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src="/assets/image/artist1.jpg"
                  alt="Print Shop 1"
                  className="w-full h-24 object-cover rounded-lg"
                />
                <h4 className="text-lg font-semibold mt-2">Print Shop 1</h4>
                <p className="text-gray-600 mt-1">Best in town</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src="/assets/image/artist2.jpg"
                  alt="Print Shop 2"
                  className="w-full h-24 object-cover rounded-lg"
                />
                <h4 className="text-lg font-semibold mt-2">Print Shop 2</h4>
                <p className="text-gray-600 mt-1">Quality prints</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src="/assets/image/artist3.jpg"
                  alt="Print Shop 3"
                  className="w-full h-24 object-cover rounded-lg"
                />
                <h4 className="text-lg font-semibold mt-2">Print Shop 3</h4>
                <p className="text-gray-600 mt-1">Affordable prices</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
