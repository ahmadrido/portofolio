import React, { useRef, useState, useEffect } from 'react'
import bg1 from './assets/images/bg1.mp4'
import Navbar from './components/Navbar'
import Crosshair from './components/Crosshair'
import shootEffect from './assets/sound/shootEffect.mp3'
import Dialog from './components/Dialog'
import character from './assets/images/character.gif'
import ModalUsername from './components/ModalUsername'
import HistoryModal from './components/HistoryModal'
import { MdSkipNext } from 'react-icons/md'
import UnlockedContent from './components/UnlockedContent'
import CrosshairStep from './components/CrosshairStep'
import { Outlet } from 'react-router-dom'

// Loading Component
const LoadingScreen = ({ progress, isComplete, onComplete }) => {
  const resources = [
    "Loading textures...",
    "Initializing game engine...",
    "Loading character assets...",
    "Preparing audio files...",
    "Setting up world...",
    "Loading complete!"
  ];

  const currentResourceIndex = Math.min(Math.floor(progress / 20), resources.length - 1);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center text-white font-mono">
        {/* Pixel Art Style Logo/Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-400 mb-2 tracking-wider">
            PORTFOLIO.EXE
          </h1>
          <p className="text-amber-300 text-sm tracking-widest">LOADING RESOURCES...</p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-80 md:w-96 mx-auto mb-6">
          {/* Progress Bar Background */}
          <div className="w-full h-6 bg-gray-800 border-2 border-amber-400 relative overflow-hidden">
            {/* Progress Fill */}
            <div 
              className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Animated scanning line */}
              <div className="absolute right-0 top-0 w-1 h-full bg-white opacity-80 animate-pulse"></div>
            </div>
            
            {/* Grid overlay for pixel effect */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="absolute top-0 h-full w-px bg-black" style={{ left: `${i * 5}%` }}></div>
              ))}
            </div>
          </div>
          
          {/* Progress Text */}
          <div className="flex justify-between mt-2 text-xs text-amber-300">
            <span>{Math.round(progress)}%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Current Resource Being Loaded */}
        <div className="mb-4">
          <p className="text-amber-300 text-sm animate-pulse">
            {resources[currentResourceIndex]}
          </p>
        </div>

        {/* Loading Animation (dots) */}
        <div className="flex justify-center space-x-1">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"
              style={{ 
                animationDelay: `${i * 0.3}s`,
                animationDuration: '1s'
              }}
            ></div>
          ))}
        </div>

        {/* Skip button (appears after 3 seconds) */}
        {progress > 30 && (
          <button 
            onClick={onComplete}
            className="mt-6 text-amber-400 hover:text-white transition-colors text-sm border border-amber-400 px-4 py-2 hover:bg-amber-400 "
          >
            SKIP [ENTER]
          </button>
        )}
      </div>
    </div>
  );
};

const App = () => {
  const [musicPlay, setMusicPlay] = useState(false)
  const containerRef = useRef(null)
  const [lineIndex, setLineIndex] = useState(0);
  const [indexHistory, setIndexHistory] = useState(0);
  const [step, setStep] = useState(-1);
  const [username, setUsername] = useState('');
  const [showNameModal, setShowNameModal] = useState(true);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState('');
  
  // Loading states
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [hasVisited, setHasVisited] = useState(false); // Simulate localStorage
  
  const MAX_STEP = 3;

  // Check if user has visited before and handle loading
  useEffect(() => {
    // In real implementation, replace this with localStorage check:
    const visited = localStorage.getItem('portfolio_visited');
    setHasVisited(!!visited);

    if (!visited) {
      // Start loading animation
      const loadingInterval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
              setIsLoading(false);
              // In real implementation:
              localStorage.setItem('portfolio_visited', 'true');
              setHasVisited(true);
            }, 1000);
            return 100;
          }
          return prev + Math.random() * 15 + 5; // Random increment for realistic loading
        });
      }, 200);

      return () => clearInterval(loadingInterval);
    } else {
      // User has visited before, skip loading
      setIsLoading(false);
    }
  }, []);

  // Handle Enter key for skip
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && isLoading && loadingProgress > 30) {
        handleLoadingComplete();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isLoading, loadingProgress]);

  const handleLoadingComplete = () => {
    setLoadingProgress(100);
    setTimeout(() => {
      setIsLoading(false);
      // In real implementation:
      localStorage.setItem('portfolio_visited', 'true');
      setHasVisited(true);
    }, 300);
  };
  
  const handleClick = () => {
    const audio = new Audio(shootEffect)
    setLineIndex(0);
    setIndexHistory(0);
    // speeds up the audio playback
    audio.playbackRate = 2
    audio.play()
    setTimeout(() => {
    setStep(2) // Ganti ke step introduksi bio
    }, 2000);
  }

  // Fungsi untuk menangani input nama
  const handleNameSubmit = (e) => {
    e.preventDefault();
    setShowNameModal(false);
    setStep(0); // Lanjut ke dialog awal
  }

  // Fungsi untuk melewati input nama
  const handleSkipName = () => {
    setUsername('');
    setShowNameModal(false);
    setStep(0); // Lanjut ke dialog awal
  }

  // Dialog awal personalisasi
  const getWelcomeDialogs = () => {
    if (username) {
      return [
        `Welcome back, ${username}!`,
        "This is my portfolio world.",
        "Enjoy your adventure"
      ]
    } else {
      return [
        hasVisited ? "Welcome back, traveler!" : "Welcome, traveler!",
        "This is my portfolio world.",
        "Enjoy your adventure"
      ]
    }
  }

  // Dialog untuk introduksi bio
  const bioDialogs = [
    "Hello! Let me introduce myself.",
    "My name is Ahmad Rido Kamaludin.",
    "I'm a web developer passionate about creating interactive experiences.",
    "I specialize in React, UI/UX design, and creative web applications.",
    "I've worked on various projects including e-commerce, gaming platforms, and data visualization tools.",
    "Feel free to explore my portfolio to see my work!",
    "You've now unlocked all menu items! Feel free to explore."
  ]

  const dialogList = step === 2 ? bioDialogs : getWelcomeDialogs();

  const nextLine = () => {
    if (lineIndex < dialogList.length - 1) {
      setLineIndex(lineIndex + 1);
      setIndexHistory(lineIndex + 1);
    } else {
      if (step === 2) {
        // Setelah menyelesaikan bio, buka semua akses menu
        setStep(MAX_STEP);
      } else {
        setStep(step + 1);
      }
      setLineIndex(0);
    }
  };

  const handleHistoryClick = () => {
    setShowHistoryModal(!showHistoryModal);
  };

  const handleSkipAll = () => {
    setStep(MAX_STEP); // Langsung ke step terakhir
    setLineIndex(0); // Reset index dialog
    setIndexHistory(0); // Reset index history
    setShowNameModal(false); // Tutup modal nama
    setShowHistoryModal(false); // Tutup modal history
  };

  // Show loading screen for first-time visitors
  if (isLoading) {
    return (
      <LoadingScreen 
        progress={loadingProgress} 
        isComplete={loadingProgress >= 100}
        onComplete={handleLoadingComplete}
      />
    );
  }

  return (
    <div className='h-screen overflow-hidden relative'>
      <video autoPlay muted={!musicPlay} loop id="myVideo" className='absolute top-0 left-0 w-full h-full object-cover -z-1'>
        <source src={bg1} type="video/mp4" />
      </video>

      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>

      <Navbar 
        musicPlay={musicPlay} 
        handle={() => setMusicPlay(!musicPlay)} 
        currentStep={step}
        maxStep={MAX_STEP}
        username={username}
        selectedTab={setSelectedTab}
      />

      <div ref={containerRef} className='h-screen md:overflow-hidden overflow-y-scroll'>
        {showNameModal && <ModalUsername username={username} setUsername={setUsername} handleNameSubmit={handleNameSubmit} handleSkipName={handleSkipName} />}

        {step === 0 && (
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-pixelify'>
            <div className="absolute top-20 right-5">
              <button onClick={handleSkipAll} className='text-white/20 animate-pulse hover:text-white transition-all font-bold py-2 px-4 rounded cursor-pointer flex items-center'>
                <MdSkipNext className='mr-2' />
                Skip All
              </button>
            </div>
            <div className="w-full absolute bottom-10 md:px-10 px-5">
                <div className="relative flex justify-center items-center w-full">
                <img 
                src={character} 
                alt="profile" 
                className='h-32 w-32'
              />
            <Dialog text={dialogList[lineIndex]} onClick={nextLine} Border='border-amber-500' historyClick={handleHistoryClick} />

                </div>
            </div>
            {showHistoryModal && <HistoryModal dialogList={dialogList} lineIndex={lineIndex} setLineIndex={setLineIndex} setShowHistoryModal={setShowHistoryModal} indexHistory={indexHistory} />}
          </div>         
        )}

        {step === 1 && (
          <CrosshairStep containerRef={containerRef} handleClick={handleClick} />
        )}

        {step === 2 && (
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-pixelify'>
          <div className="w-full absolute top-40 md:px-10 px-5">
            <div className="relative flex justify-center items-center w-full">
                <img 
                  src={character} 
                  alt="profile" 
                  className='h-32 w-32'
                />
              <Dialog text={dialogList[lineIndex]} onClick={nextLine} Border='border-amber-500' historyClick={handleHistoryClick} />
            </div>
          </div>
          {showHistoryModal && <HistoryModal dialogList={dialogList} lineIndex={lineIndex} setLineIndex={setLineIndex} setShowHistoryModal={setShowHistoryModal} indexHistory={indexHistory} />}
        </div>
        )}
        
        {step === MAX_STEP && window.location.pathname === '/' && (
          <UnlockedContent username={username}/>
        )}
        
        {step === MAX_STEP  && (
          <Outlet /> 
        )}

      </div>
    </div>
  )
}

export default App