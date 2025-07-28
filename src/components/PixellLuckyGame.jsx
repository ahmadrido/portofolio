import { useState, useEffect } from 'react';

export default function PixelLuckGame() {
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [boxes, setBoxes] = useState([]);
  const [isRestarting, setIsRestarting] = useState(false);

  // Initialize game
  useEffect(() => {
    resetGame();
  }, []);

  // Reset game function
  const resetGame = () => {
    setIsRestarting(true);
    
    // Create random box positions (0 = diamond, 1-4 = skulls)
    const diamondPos = Math.floor(Math.random() * 5);
    const newBoxes = Array(5).fill('skull');
    newBoxes[diamondPos] = 'diamond';
    
    setBoxes(newBoxes);
    setGameOver(false);
    setWin(false);
    setModalOpen(false);
    
    // Small delay to show reset animation
    setTimeout(() => {
      setIsRestarting(false);
    }, 300);
  };

  // Handle box click
  const handleBoxClick = (index) => {
    if (gameOver || isRestarting) return;
    
    setAttempts(attempts + 1);
    
    if (boxes[index] === 'diamond') {
      setWin(true);
      setGameOver(true);
      setModalOpen(true);
    } else {
      setGameOver(true);
    }
  };

  // Restart game
  const restartGame = () => {
    setAttempts(attempts + 1);
    resetGame();
  };

  // Pixel art style components
  const Diamond = () => (
    <div className="w-6 h-6 mx-auto">
      <div className="flex justify-center">
        <div className="w-2 h-2 bg-cyan-400"></div>
      </div>
      <div className="flex justify-center">
        <div className="w-2 h-2 bg-cyan-400"></div>
        <div className="w-2 h-2 bg-cyan-600"></div>
        <div className="w-2 h-2 bg-cyan-400"></div>
      </div>
      <div className="flex justify-center">
        <div className="w-2 h-2 bg-cyan-400"></div>
        <div className="w-2 h-2 bg-cyan-600"></div>
        <div className="w-2 h-2 bg-cyan-400"></div>
      </div>
      <div className="flex justify-center">
        <div className="w-2 h-2 bg-cyan-400"></div>
      </div>
    </div>
  );

  const Skull = () => (
    <div className="w-6 h-6 mx-auto">
      <div className="flex justify-center">
        <div className="w-4 h-2 bg-gray-200"></div>
      </div>
      <div className="flex justify-center">
        <div className="w-2 h-2 bg-gray-200"></div>
        <div className="w-2 h-2 bg-black"></div>
        <div className="w-2 h-2 bg-gray-200"></div>
        <div className="w-2 h-2 bg-black"></div>
        <div className="w-2 h-2 bg-gray-200"></div>
      </div>
      <div className="flex justify-center">
        <div className="w-6 h-2 bg-gray-200"></div>
      </div>
      <div className="flex justify-center">
        <div className="w-2 h-2 bg-gray-200"></div>
        <div className="w-2 h-2 bg-black"></div>
        <div className="w-2 h-2 bg-gray-200"></div>
      </div>
    </div>
  );

  const QuestionMark = () => (
    <div className="text-3xl font-bold text-yellow-500">?</div>
  );

  return (
    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-900 text-white p-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-yellow-400 pixelated">Pixel Luck Test</h1>
        <p className="mb-1">Click one of the boxes to find the diamond!</p>
        <p className="text-yellow-300">Attempts: {attempts}</p>
      </div>

      <div className="grid grid-cols-5 gap-2 mb-8">
        {boxes.map((type, index) => (
          <button
            key={index}
            onClick={() => handleBoxClick(index)}
            disabled={gameOver || isRestarting}
            className={`w-16 h-16 flex items-center justify-center bg-indigo-800 border-2 border-indigo-600 hover:bg-indigo-700 transition-all shadow-lg ${
              gameOver && type === 'diamond' ? 'bg-green-700 border-green-500' :
              gameOver && type === 'skull' ? 'bg-red-700 border-red-500' : ''
            } ${isRestarting ? 'animate-pulse' : ''}`}
          >
            {gameOver ? (
              type === 'diamond' ? <Diamond /> : <Skull />
            ) : (
              <QuestionMark />
            )}
          </button>
        ))}
      </div>

      {gameOver && !win && (
        <div className="text-center mb-4">
          <p className="text-red-400 text-xl mb-2">Oh no! Try again?</p>
          <button
            onClick={restartGame}
            className="px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded transition-colors"
          >
            Play Again
          </button>
        </div>
      )}

      {/* Win Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-indigo-800 border-4 border-yellow-400 p-6 rounded-lg text-center max-w-sm animate-bounce-once">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Congratulations!</h2>
            <Diamond />
            <p className="my-4">You found the diamond in {attempts} attempt{attempts !== 1 ? 's' : ''}!</p>
            <button
              onClick={() => {
                setModalOpen(false);
                resetGame();
                setAttempts(0);
              }}
              className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white font-bold rounded transition-colors"
            >
              Play Again
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 text-sm text-gray-300">
        <p>Find the diamond among the skulls. Good luck!</p>
      </div>
    </div>
    </div>
  );
}