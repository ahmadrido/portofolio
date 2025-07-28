import React from 'react'
import { FaPlay } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';

const HistoryModal = ({dialogList,lineIndex, setLineIndex, setShowHistoryModal, indexHistory}) => {
  return (
            <div className='absolute top-0 left-0 w-full h-full flex justify-start p-5 bg-black/80' style={{zIndex: 100}}>
              <HiX className='absolute top-5 right-5 text-white cursor-pointer' size={30} onClick={() => setShowHistoryModal(false)}/>
                <div className='flex gap-2 flex-col w-full mt-[2.5rem] text-white text-pixelify'>
                {dialogList.filter((_, index) => index <= indexHistory).map((line, index) => (
                  <div key={index} className={`hover:bg-white/10 transition-all rounded-lg cursor-pointer ${index === lineIndex ? 'bg-white/20' : ''}`} onClick={() => {
                    setLineIndex(index);
                    setShowHistoryModal(false);}}>
                    <p className='border-b border-white/20 px-3 py-2 flex-1 flex items-center'><FaPlay className='mr-2'/>{line}</p>
                  </div>
                ))}
                </div>
            </div>
  )
}

export default HistoryModal