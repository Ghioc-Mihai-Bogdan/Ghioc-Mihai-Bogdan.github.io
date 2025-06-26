
import React from 'react';

const GameController = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`game-controller ${className}`}>
      <div className="relative w-20 h-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg shadow-lg border-2 border-purple-400">
        {/* D-pad */}
        <div className="absolute top-2 left-2">
          <div className="w-1 h-3 bg-gray-200 mx-auto"></div>
          <div className="w-3 h-1 bg-gray-200 -mt-2"></div>
        </div>
        
        {/* Action buttons */}
        <div className="absolute top-1 right-2 grid grid-cols-2 gap-1">
          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
        </div>
        
        {/* Analog sticks */}
        <div className="absolute bottom-1 left-1 w-3 h-3 bg-gray-300 rounded-full"></div>
        <div className="absolute bottom-1 right-1 w-3 h-3 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default GameController;
