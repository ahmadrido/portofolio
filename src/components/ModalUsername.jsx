import React from 'react'

const ModalUsername = ({ username, setUsername, handleNameSubmit, handleSkipName }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-20 px-5">
    <div className="bg-gray-900 border-2 border-white p-8 rounded-lg shadow-2xl w-full max-w-md text-white">
      <h2 className="text-2xl font-bold mb-4 text-center text-pixelify">ENTER YOUR NAME</h2>
      <form onSubmit={handleNameSubmit} className="space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white focus:border-amber-500 focus:outline-none"
          placeholder="Your name here..."
          maxLength={15}
        />
        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-amber-600 hover:bg-amber-700 transition-all py-2 rounded-md font-medium text-pixelify"
          >
            CONTINUE
          </button>
          <button
            type="button"
            onClick={handleSkipName}
            className="flex-1 bg-gray-700 hover:bg-gray-600 transition-all py-2 rounded-md font-medium text-pixelify"
          >
            SKIP
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default ModalUsername