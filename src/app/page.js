'use client';
import React, { useState } from 'react';
import { FaSearch, FaGlobe, FaUserCircle, FaHeart } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { BsHouseDoor, BsTrophy } from 'react-icons/bs';
import { BiWater } from 'react-icons/bi';
import { MdOutlineBedroomParent, MdHouseboat } from 'react-icons/md';
import { GiMountainCave, GiPoolDive } from 'react-icons/gi';
import { TbBuildingCottage } from 'react-icons/tb';
import { RiTentLine } from 'react-icons/ri';
import { FaSliders } from 'react-icons/fa6';

const AirbnbClone = () => {
  const [showFavorite, setShowFavorite] = useState(false);
  const [displayTotalBeforeTaxes, setDisplayTotalBeforeTaxes] = useState(false);

  const listings = [
    {
      id: 1,
      location: 'Nashik, India',
      distance: '1,847 kilometers away',
      dates: 'Mar 24 - 29',
      price: '₹13,373',
      rating: 4.85,
      imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3',
      isFavorite: false
    },
    {
      id: 2,
      location: 'Abirim, Israel',
      distance: '5,196 kilometers away',
      dates: 'Apr 6 - 11',
      price: '₹33,773',
      rating: 5.0,
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3',
      isFavorite: false
    },
    {
      id: 3,
      location: 'Godawari, Nepal',
      distance: '417 kilometers away',
      dates: 'Mar 21 - 26',
      price: '₹2,832',
      rating: 5.0,
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3',
      isFavorite: true
    },
    {
      id: 4,
      location: 'Thambihalli, India',
      distance: '1,981 kilometers away',
      dates: 'Mar 23 - 28',
      price: '₹14,265',
      rating: 4.92,
      imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3',
      isFavorite: false
    }
  ];

  const categories = [
    { id: 1, name: 'Earth homes', icon: <BsHouseDoor size={24} />, active: true },
    { id: 2, name: 'Icons', icon: <TbBuildingCottage size={24} />, active: false },
    { id: 3, name: 'Lake', icon: <BiWater size={24} />, active: false },
    { id: 4, name: 'Rooms', icon: <MdOutlineBedroomParent size={24} />, active: false },
    { id: 5, name: 'Countryside', icon: <GiMountainCave size={24} />, active: false },
    { id: 6, name: 'Lakefront', icon: <BiWater size={24} />, active: false },
    { id: 7, name: 'Amazing pools', icon: <GiPoolDive size={24} />, active: false },
    { id: 8, name: 'Camping', icon: <RiTentLine size={24} />, active: false },
    { id: 9, name: 'Houseboats', icon: <MdHouseboat size={24} />, active: false },
  ];

  return (
    <div className="font-sans min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg width="102" height="32" fill="currentcolor" className="text-red-500">
              <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5z"></path>
            </svg>
          </div>
          
          <div className="hidden md:flex items-center">
            <div className="flex border border-gray-200 rounded-full shadow-sm">
              <button className="px-4 py-2 font-medium text-sm">Stays</button>
              <button className="px-4 py-2 font-medium text-sm text-gray-500">Experiences</button>
              <button className="px-4 py-2 font-medium text-sm text-gray-500">Airbnb your home</button>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 text-sm font-medium hover:bg-gray-100 p-2 rounded-full">
              <FaGlobe />
            </button>
            <div className="flex items-center border border-gray-200 rounded-full px-2 py-1 shadow-sm">
              <FiMenu className="text-gray-500 mr-2" />
              <FaUserCircle size={28} className="text-gray-500" />
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="flex justify-center mt-4 mb-8">
        <div className="flex items-center border border-gray-200 rounded-full shadow-sm w-full max-w-4xl">
          <div className="flex-1 px-6 py-3 border-r border-gray-200">
            <div className="text-xs font-medium">Where</div>
            <input
              placeholder="Search destinations"
              className="w-full text-sm outline-none mt-1"
            />
          </div>
          <div className="px-6 py-3 border-r border-gray-200">
            <div className="text-xs font-medium">Check in</div>
            <div className="text-sm text-gray-400 mt-1">Add dates</div>
          </div>
          <div className="px-6 py-3 border-r border-gray-200">
            <div className="text-xs font-medium">Check out</div>
            <div className="text-sm text-gray-400 mt-1">Add dates</div>
          </div>
          <div className="px-6 py-3 border-r border-gray-200">
            <div className="text-xs font-medium">Who</div>
            <div className="text-sm text-gray-400 mt-1">Add guests</div>
          </div>
          <div className="flex items-center justify-center px-3">
            <button className="bg-red-500 text-white p-3 rounded-full">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex items-center justify-between px-6 pb-4 border-b border-gray-200 overflow-x-auto">
        <div className="flex gap-8">
          {categories.map((category) => (
            <div key={category.id} className={`flex flex-col items-center gap-1 min-w-max ${category.active ? 'border-b-2 border-black pb-2' : ''}`}>
              <div className="text-gray-500">{category.icon}</div>
              <div className={`text-xs ${category.active ? 'font-medium' : 'text-gray-500'}`}>{category.name}</div>
            </div>
          ))}
        </div>
        <div className="min-w-max flex items-center gap-4">
          <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium">
            <FaSliders /> Filters
          </button>
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm">
            <span className="text-sm">Display total before taxes</span>
            <div 
              className={`w-10 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${displayTotalBeforeTaxes ? 'bg-black' : 'bg-gray-300'}`}
              onClick={() => setDisplayTotalBeforeTaxes(!displayTotalBeforeTaxes)}
            >
              <div className={`bg-white h-4 w-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${displayTotalBeforeTaxes ? 'translate-x-4' : ''}`}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {listings.map((listing) => (
          <div key={listing.id} className="relative">
            <div className="relative">
              <img
                src={listing.imageUrl}
                alt={listing.location}
                className="w-full h-64 object-cover rounded-xl"
              />
              <button className="absolute top-3 right-3 text-white">
                {listing.isFavorite ? (
                  <div className="absolute top-0 left-0 mt-2 ml-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                    <BsTrophy className="mr-1" /> Guest favorite
                  </div>
                ) : null}
                <FaHeart size={24} className={listing.isFavorite ? "text-red-500" : "text-white"} />
              </button>
              <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/50'}`}></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex justify-between">
                <h3 className="font-semibold">{listing.location}</h3>
                <div className="flex items-center">
                  <span className="mr-1">★</span>
                  <span>{listing.rating}</span>
                </div>
              </div>
              <p className="text-gray-500 text-sm">{listing.distance}</p>
              <p className="text-gray-500 text-sm">{listing.dates}</p>
              <p className="mt-1 font-semibold">{listing.price} night</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirbnbClone;