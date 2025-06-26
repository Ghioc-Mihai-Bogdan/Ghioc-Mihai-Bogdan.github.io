
import React from 'react';

const PixelBunny = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`pixel-bunny ${className}`}>
      <div className="relative w-16 h-16 mx-auto">
        {/* Bunny ears */}
        <div className="absolute top-0 left-2 w-3 h-8 bg-pink-300 rounded-full transform -rotate-12"></div>
        <div className="absolute top-0 right-2 w-3 h-8 bg-pink-300 rounded-full transform rotate-12"></div>
        <div className="absolute top-1 left-2.5 w-1.5 h-5 bg-pink-500 rounded-full transform -rotate-12"></div>
        <div className="absolute top-1 right-2.5 w-1.5 h-5 bg-pink-500 rounded-full transform rotate-12"></div>
        
        {/* Head */}
        <div className="absolute top-4 left-1 w-14 h-12 bg-white rounded-full border-2 border-gray-300"></div>
        
        {/* Eyes */}
        <div className="absolute top-7 left-4 w-2 h-2 bg-black rounded-full animate-pulse"></div>
        <div className="absolute top-7 right-4 w-2 h-2 bg-black rounded-full animate-pulse"></div>
        
        {/* Nose */}
        <div className="absolute top-9 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pink-500 rounded-full"></div>
        
        {/* Mouth */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-3 h-1 border-b-2 border-gray-400 rounded-b-full"></div>
        
        {/* Cheeks */}
        <div className="absolute top-8 left-2 w-2 h-2 bg-pink-100 rounded-full opacity-70"></div>
        <div className="absolute top-8 right-2 w-2 h-2 bg-pink-100 rounded-full opacity-70"></div>
      </div>
    </div>
  );
};

export default PixelBunny;
