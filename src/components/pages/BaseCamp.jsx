import React, { useState } from 'react'
import character from '../../assets/images/character.gif'
import { ListImages } from '../../utils/ListImages'
import ShootIcon from '../ShootIcon'
import { useRef } from 'react'
import VariableProximity from './../ui/VariableProximity';
import bg1 from '../../assets/images/bg1.mp4'
import Navbar from '../Navbar'

const BaseCamp = () => {
  const containerRef = useRef(null)
  const [musicPlay, setMusicPlay] = useState(false)
  const [selectedTab, setSelectedTab] = useState('')

  const storedUsername = localStorage.getItem('username'); 
  const [username, setUsername] = useState(storedUsername || 'Traveler')


  return (
    <div className='relative w-full h-screen overflow-hidden'>
          <video autoPlay muted={!musicPlay} loop id="myVideo" className='absolute top-0 left-0 w-full h-full object-cover -z-1'>
        <source src={bg1} type="video/mp4" />
      </video>

      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>

      {/* <Navbar 
        musicPlay={musicPlay} 
        handle={() => setMusicPlay(!musicPlay)}
        selectedTab={setSelectedTab}
        username={username}
      /> */}

    <div className="base-camp h-[85%] md:overflow-hidden overflow-y-scroll mt-20 text-white flex gap-5 p-5 md:flex-row-reverse flex-col text-pixelify">
    <div className="border border-white/20 text-pixelify text-white p-3 right-4 md:h-full rounded-lg">
    <div className="flex flex-row md:flex-col items-center justify-around md:h-full gap-5">
      {ListImages.filter((_, index) => index < 4).map((item, index) => (
        <div key={index} className="relative cursor-pointer hover:bg-amber-500 border p-2 rounded-xl bg-amber-500/50" >
          <img src={item.src} className="w-10 h-10 md:w-15 md:h-15" alt="" />
          <p className="absolute left-0 text-xs text-white bg-amber-500/50 px-1 rounded-full">{item.name}</p>
        <div className="absolute -top-1 right-0 w-3 h-3 text-white bg-red-700 px-1 rounded-full animate-pulse"></div>
        </div>
      ))}
    </div>
    </div>

    <div className="bio-info relative w-full h-full">
      <div className=" w-full flex flex-col md:flex-row">
        <img
          src={character}
          alt="profile"
          className='h-50 w-50 mx-auto'
        />

      </div>

      <div className="h-full md:h-100">
        <ShootIcon />
      </div>
      
    </div>
    
    </div>
    </div>
  )
}

export default BaseCamp