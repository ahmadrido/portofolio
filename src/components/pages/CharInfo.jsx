import React, { useRef, useState } from 'react'
import bg1 from '../../assets/images/bg1.mp4'
import Navbar from '../Navbar'
import character from '../../assets/images/character.gif'
import VariableProximity from '../ui/VariableProximity'
import { ListImages } from '../../utils/ListImages'
import { IoMaleOutline } from 'react-icons/io5'
import { MdEmail, MdPhoneEnabled } from 'react-icons/md'
import { SiGithub, SiInstagram, SiLinkedin, SiTiktok } from 'react-icons/si'

const ContactTo = ({ icon, text, link }) => (
  <p className='p-3 backdrop-blur-md text-gray-400 flex items-center'>
    {icon}: {link ? <a href={link} target="_blank" rel="noopener noreferrer" className='ms-1'>{text}</a> : text}
  </p>
)

const CharInfo = () => {
    const [musicPlay, setMusicPlay] = useState(false)
    const [selectedTab, setSelectedTab] = useState('')
    const storedUsername = localStorage.getItem('username'); 
    const [username, setUsername] = useState(storedUsername || 'Traveler')
    const containerRef = useRef(null)

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
    
        <div className="CharInfo h-[85%] md:overflow-hidden overflow-y-scroll mt-20 text-white p-5 text-pixelify">
                  
            <div className="bio-info relative w-full h-full">
              <div className=" w-full flex flex-col md:flex-row">
                <img
                  src={character}
                  alt="profile"
                  className='h-50 w-50 mx-auto'
                />
                <div className="desc p-2" ref={containerRef}>
                  <h2 className="text-3xl pixelify font-bold text-amber-500">[Ahmad Rido Kamaludin]</h2>
                  <p className="text-pixelify text-gray-400">[Informatics student in Institut Teknologi Tangerang Selatan]</p>
                  <p className="text-pixelify">
                  
                  <VariableProximity
                    label={'[I live in Tangerang, Indonesia. As a novice Fullstack Developer, I have the ability to integrate various project components coherently and efficiently. I am skilled in collaborating within a team and bringing creative solutions to development challenges. I have a strong interest in continuously learning about the latest technologies, especially in the fields of open source and artificial intelligence (AI). I am ready to adapt and leverage these innovations to create impactful solutions that support community growth and business needs.]'}
                    className={'variable-proximity-demo'}
                    fromFontVariationSettings="'wght' 200, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={containerRef}
                    radius={130}
                    falloff='linear'
                  />
                  </p>
                </div>
              </div>

              <div className="info border mt-5 md:h-max p-3 flex md:flex-row flex-col gap-3 text-pixelify backdrop-blur-md">
                <div className="personal-info flex-1 flex gap-2">
                    <div className="hader-info text-center border flex-1">
                        <h1 className='p-3 bg-amber-600'>Age</h1>
                        <p className='p-3 backdrop-blur-md text-gray-400'>18</p>
                        <h1 className='p-3 bg-amber-600'>Location</h1>
                        <p className='p-3 backdrop-blur-md text-gray-400'>Tangerang</p>
                    </div>
                    <div className="hader-info text-center border flex-1">
                        <h1 className='p-3 bg-amber-600'>Gender</h1>
                        <p className='p-3 backdrop-blur-md text-gray-400 flex items-center flex-row-reverse justify-center gap-2 '>
                          <p>Male</p>
                           <IoMaleOutline className='text-amber-400'/>
                        </p>
                        <h1 className='p-3 bg-amber-600'>Specialy</h1>
                        <p className='p-3 backdrop-blur-md text-gray-400'>Programmer</p>
                    </div>
                </div>

                <div className="ability border flex-1">
                    <h1 className='p-3 bg-amber-600 text-center'>Strengths</h1>
                    <div className="card-info flex gap-2 p-2">
                        {ListImages.filter((_, index) => index > 3 && index < 7).map((item, index) => (
                        <div key={index} className="card border border-gray-500 rounded-xl bg-white/20 w-[50%]">
                            <img src={item.src} className='h-25 mx-auto my-2' alt={item.name} />
                            <p className='text-white p-3 text-center bg-amber-600 rounded-xl rounded-tl-none md:h-auto h-20 '>{item.name}</p>
                        </div>
                        ))}
                        
                    </div>
                    {/* <p className='p-3 backdrop-blur-md text-gray-400'>Problem solving, teamwork, communication, leadership, critical thinking, self learning, adaptability, and creativity.</p> */}
                </div>
              </div>
              
              {/* contact */}
              <div className="contact md:h-30">
                <h1 className='p-3 bg-amber-600 text-center'>Find Me On</h1>
                <div className="card-contact flex flex-col md:flex-row gap-2 p-2">
                  <ContactTo icon={<MdEmail className='text-amber-400'/>} text="ahmadridokamaludin@gmail.com" link="mailto:ahmadridokamaludin@gmail.com"/>
                  <ContactTo icon={<MdPhoneEnabled className='text-amber-400'/>} text="+6285780385205" link="tel:+6285780385205"/>
                  <ContactTo icon={<SiInstagram className='text-amber-400'/>} text="@ahmdrydn" link="https://www.instagram.com/ahmdrydn/"/>
                  <ContactTo icon={<SiTiktok className='text-amber-400'/>} text="@ahmdrydn" link="https://www.tiktok.com/@ahmdrydn"/>
                  <ContactTo icon={<SiLinkedin className='text-amber-400'/>} text="ahmadridokamaludin" link="https://www.linkedin.com/in/ahmadridokamaludin/"/>
                  <ContactTo icon={<SiGithub className='text-amber-400'/>} text="ahmadridokamaludin" link="https://github.com/ahmadridokamaludin"/>
                </div>
              </div>

            </div>
        </div>
          
        </div>
      )
}

export default CharInfo