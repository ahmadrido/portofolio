import { useState, useEffect } from "react";
import { FaHistory } from "react-icons/fa";
import { TbPlayerTrackNext } from "react-icons/tb";

const Dialog = ({ text, onClick, Border, historyClick}) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayed(""); // Reset displayed text when text changes
    setIndex(0); // Reset index when text changes
  }, [text]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    }, 50); // delay per huruf

    if (index >= text.length) clearInterval(interval);
    return () => clearInterval(interval);
  }, [index, text]);

  return <div className={`dialog-box text-pixelify rounded-xl w-full border-4 ${Border} relative`}>{displayed}
              <button onClick={onClick} className='absolute cursor-pointer animate-pulse flex items-center right-0 -top-9 transform transition-all'>
              Next <TbPlayerTrackNext className='inline-block ml-1' />
            </button>
              <button onClick={historyClick} className='absolute cursor-pointer flex items-center left-0 -top-9 transform transition-all'>
              <FaHistory className='inline-block mr-1' /> History
            </button>
          </div>;
};

export default Dialog;