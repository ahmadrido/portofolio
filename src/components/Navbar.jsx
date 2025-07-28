import React, { useState, useEffect } from 'react';
import { FaFlag, FaLock } from 'react-icons/fa';
import { MdMusicNote, MdMusicOff } from 'react-icons/md';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { BiXCircle } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router';
import { ListImages } from '../utils/ListImages';

const Menu = ['Base Camp', 'Char Info', 'Achievements', 'Abilities', 'Message'];

const Navbar = ({ handle, musicPlay, currentStep, maxStep, username, selectedTab }) => {
  const [activeTab, setActiveTab] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const usenav = useNavigate();

  // Menentukan apakah menu item dapat diakses atau belum berdasarkan progress
  const isMenuItemLocked = () => {
    // Menu item lain dikunci hingga mencapai step terakhir
    return currentStep < maxStep;
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTab = (tab) => () => {
    // Jika menu dikunci, tidak melakukan apa-apa
    if (isMenuItemLocked(tab)) {
      return;
    }
    // Jika tab yang sama diklik, tidak melakukan apa-apa
    if (activeTab === tab) {
      return;
    }

    // Jika tab berbeda diklik, set active tab dan tutup menu mobile
    usenav(`/${tab.replace(/\s+/g, '').toLowerCase()}`);
    selectedTab(`/${tab.replace(/\s+/g, '').toLowerCase()}`);
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4 border-b border-white/20 shadow-md z-50 bg-black/20 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none`}>
        <div className="flex items-center">
          <FaFlag className="text-2xl text-amber-500 mr-2" />
          <span className="text-amber-500 text-xl font-bold hidden md:block">{username ? username : 'Traveler'}</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {Menu.map((item, index) => (
            <div 
              key={index}
              className="relative flex items-center"
            >
              <Link
                to={`${isMenuItemLocked(item) ? '#' : `/${item.replace(/\s+/g, '').toLowerCase()}`}`}
                className={`cursor-pointer hover:scale-110 transition-all duration-200 px-2 py-1 ${
                  window.location.pathname === `/${item.replace(/\s+/g, '').toLowerCase()}` && currentStep >= maxStep 
                    ? 'pixelify' 
                    : isMenuItemLocked(item)
                      ? 'text-gray-600 cursor-not-allowed'
                      : 'text-gray-400 hover:text-gray-200'
                }`} 
                onClick={handleTab(item)}
              >
                {item}
              </Link>
              {isMenuItemLocked(item) && (
                <FaLock className="text-gray-600 text-xs ml-1" />
              )}
            </div>
          ))}
          <span className="text-gray-500">|</span>
          {musicPlay ? (
            // <MdMusicNote onClick={handle} className="text-2xl cursor-pointer text-amber-500 hover:text-amber-300" />
            <img src={ListImages[7].src} alt="" className="w-10 h-10 md:w-15 md:h-15 music-icon" onClick={handle} />
          ) : (
            // <MdMusicOff onClick={handle} className="text-2xl cursor-pointer text-gray-500 hover:text-gray-400" />
            <img src={ListImages[8].src} alt="" className="w-10 h-10 md:w-15 md:h-15 music-icon" onClick={handle} />
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          {musicPlay ? (
            <MdMusicNote onClick={handle} className="text-2xl cursor-pointer text-amber-500 mr-4" />
          ) : (
              <MdMusicOff onClick={handle} className="text-2xl cursor-pointer text-gray-500 mr-4" />
          )}
          <button 
            onClick={toggleMobileMenu} 
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenuAlt3 className="text-2xl" />
            )}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
  <div className="fixed inset-0 text-pixelify flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-4">
    <div className="bg-gray-900 border-2 border-amber-500 rounded-lg w-full max-w-xs shadow-2xl overflow-hidden animate-fadeIn">
      {/* Modal Header */}
      <div className="bg-gray-800 px-4 py-3 border-b border-amber-500/50 flex items-center justify-between">
        <h2 className="text-amber-400 font-bold pixelify text-xl">Menu</h2>
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <BiXCircle size={24} />
        </button>
      </div>
      
      {/* Modal Content */}
      <div className="p-3">
        {Menu.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-3 mb-2 rounded-md ${
            window.location.pathname === `/${item.replace(/\s+/g, '').toLowerCase()}` && currentStep >= maxStep
 
                ? 'bg-amber-500/20 border border-amber-500'
                : 'bg-gray-800/50 border border-gray-700 hover:border-gray-600'
            } ${isMenuItemLocked(item) ? 'opacity-60' : ''}`}
            onClick={isMenuItemLocked(item) ? undefined : handleTab(item)}
          >
            <div className="flex items-center gap-3">
              {/* You could add icons here based on menu item */}
              <p className={
                  window.location.pathname === `/${item.replace(/\s+/g, '').toLowerCase()}` && currentStep >= maxStep

                  ? 'text-amber-300 font-bold'
                  : isMenuItemLocked(item)
                    ? 'text-gray-500 cursor-not-allowed'
                    : 'text-gray-300'
              }>
                {item}
              </p>
            </div>
            
            {isMenuItemLocked(item) ? (
              <div className="bg-gray-800 p-1 rounded-md border border-gray-700">
                <FaLock className="text-gray-500" size={14} />
              </div>
            ) : (
                  window.location.pathname === `/${item.replace(/\s+/g, '').toLowerCase()}` 
            && (
                <div className="bg-amber-500 p-1 rounded-full">
                  <div className="h-2 w-2 bg-white rounded-full" />
                </div>
              )
            )}
          </div>
        ))}
      </div>
      
    </div>
  </div>
)}
    </>
  );
};

export default Navbar;