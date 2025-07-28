import React, { useRef, useState, useEffect } from 'react';
import { ImagesSkill } from '../utils/ListImages';
import shootEffect from '../assets/sound/shootEffect.mp3';
import { HiMiniTrophy } from 'react-icons/hi2';

export default function ProgrammingLanguageGame() {
  // Game states
  const [step, setStep] = useState(0); // 0: select language, 1: playing game, 2: results
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [shotIcons, setShotIcons] = useState({});
  const [gameIcons, setGameIcons] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isRestarting, setIsRestarting] = useState(false);
  const containerRef = useRef(null);

  // Function to shuffle and prepare game icons
  const prepareGameIcons = () => {
    // Get 4 random icons that are NOT the selected language
    const otherIcons = ImagesSkill.filter(item => item.name !== selectedLanguage.name)
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
    
    // Add the selected language
    const allIcons = [...otherIcons, selectedLanguage];
    
    // Shuffle the array
    return allIcons.sort(() => 0.5 - Math.random());
  };

  // Initialize game when language is selected
  useEffect(() => {
    if (selectedLanguage) {
      setGameIcons(prepareGameIcons());
      setStep(1);
      setAttempts(0);
      setShotIcons({});
      setGameOver(false);
      setWin(false);
    }
  }, [selectedLanguage]);

  // Handle icon selection in the first step
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  // Handle shooting icons in the game
  const handleImageShoot = (name) => {
    // Simulate sound effect (commented out as we don't have the actual audio file)
    const audio = new Audio(shootEffect)
    audio.playbackRate = 2
    audio.play()
    
    setAttempts(attempts + 1);
    
    // Mark icon as shot
    setShotIcons(prev => ({
      ...prev,
      [name]: true
    }));
    
    // Check if the shot icon is the favorite language
    if (name === selectedLanguage.name) {
      setWin(true);
      setGameOver(true);
      setTimeout(() => {
        setModalOpen(true);
      }, 1000);
    } else {
      // Failed attempt
      setGameOver(true);
      setTimeout(() => {
        resetGame();
      }, 1500);
    }
  };
  
  // Reset game function
  const resetGame = () => {
    setIsRestarting(true);
    setGameOver(false);
    setWin(false);
    setModalOpen(false);
    setShotIcons({});
    if(win){
      setAttempts(0)
    }
    
    // Randomize icons again
    setGameIcons(prepareGameIcons());
    
    // Small delay to show reset animation
    setTimeout(() => {
      setIsRestarting(false);
    }, 300);
  };
  
  // Start new game with different language
  const startNewGame = () => {
    setStep(0);
    setSelectedLanguage(null);
    setAttempts(0);
    setShotIcons({});
    setGameOver(false);
    setWin(false);
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-white p-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-amber-500">Test how lucky you are</h1>
        {step === 0 && <p>First, select your favorite programming language:</p>}
        {step === 1 && (
          <>
            <p className="mb-1">Find and shoot your favorite language: <span className="text-amber-300 font-bold">{selectedLanguage?.name}</span></p>
            <p className="text-amber-300">Attempts: {attempts}</p>
          </>
        )}
      </div>

      {step === 0 && (
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-8" ref={containerRef}>
          {ImagesSkill.map((item, index) => (
            <button
              key={index}
              className="bg-amber-700 hover:bg-amber-500 border-2 border-amber-500 p-4 rounded-xl transition-all flex flex-col items-center"
              onClick={() => handleLanguageSelect(item)}
            >
              <img 
                src={item.src} 
                className="w-12 h-12 md:w-16 md:h-16" 
                alt={item.name} 
              />
              <p className="mt-2 text-white">
                {item.name}
              </p>
            </button>
          ))}
        </div>
      )}

      {step === 1 && (
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-8" ref={containerRef}>
          {gameIcons.map((item, index) => {
            const isShot = shotIcons[item.name] || false;
            
            return (
              <div 
                key={index} 
                className={`
                  ${isShot ? 'bg-white' : 'bg-black/30'} 
                  border 
                  relative 
                  cursor-crosshair 
                  flex 
                  flex-col 
                  justify-center 
                  items-center 
                  p-4 
                  rounded-xl
                  transition-all 
                  duration-500
                  ${isShot ? 'transform -translate-y-4 opacity-50 scale-75' : ''}
                `} 
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isShot ? 'perspective(800px) rotateX(70deg) translateZ(-100px)' : 'perspective(800px) rotateX(0) translateZ(0)'
                }}
                onClick={() => !isShot && !gameOver && !isRestarting && handleImageShoot(item.name)}
              >
                <img 
                  src={`${isShot ? item.src : 'https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/4e48c4fa28e2d4c.png'}`} 
                  className="w-10 h-10 md:w-16 md:h-16 transition-all duration-500"
                />
              </div>
            );
          })}
        </div>
      )}

      {gameOver && !win && !modalOpen && (
        <div className="text-center mb-4">
          <p className="text-red-400 text-xl mb-2">Wrong choice! Try again.</p>
        </div>
      )}

      {/* Win Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-amber-700 border-4 border-amber-400 p-6 rounded-lg text-center max-w-sm">
            <h2 className="text-3xl font-bold text-amber-400 mb-4 flex items-center justify-center"><HiMiniTrophy className='mr-2'/> Congratulations!</h2>
            {selectedLanguage && (
              <div className="flex justify-center mb-4">
                <img 
                  src={selectedLanguage.src} 
                  className="w-16 h-16" 
                  alt={selectedLanguage.name} 
                />
              </div>
            )}
            <p className="my-4">You found {selectedLanguage?.name} in {attempts} attempt{attempts !== 1 ? 's' : ''}!</p>
            <div className="flex flex-col md:flex-row gap-2 justify-center">
              <button
                onClick={resetGame}
                className="px-4 py-2 bg-green-500 hover:bg-green-500 text-white font-bold rounded transition-colors"
              >
                Play Again
              </button>
              <button
                onClick={startNewGame}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-500 text-white font-bold rounded transition-colors"
              >
                Choose New Language
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}