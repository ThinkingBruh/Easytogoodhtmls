
import React from 'react';
import { motion } from 'motion/react';
import { X, Gamepad2, Maximize2 } from 'lucide-react';
import { Game } from '../../data/mockGames';

interface GameModalProps {
  game: Game;
  onClose: () => void;
}

export const GameModal: React.FC<GameModalProps> = ({ game, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-800 rounded-xl shadow-2xl border border-gray-700 w-full max-w-5xl h-[80vh] flex flex-col relative overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent close on click inside
      >
        {/* Header */}
        <div className="bg-red-700 px-6 py-4 flex justify-between items-center text-white shadow-md border-b border-red-800">
          <div className="flex items-center space-x-3">
            <Gamepad2 className="h-6 w-6" />
            <h2 className="text-xl font-bold truncate">{game.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 transition-colors focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Game Area */}
        <div className="flex-1 bg-black relative flex items-center justify-center">
          
          {/* If a valid gameUrl is present (not empty or just a hash), try to show the iframe */}
          {game.gameUrl && game.gameUrl !== '#' && game.gameUrl.trim() !== '' ? (
            <iframe 
              src={game.gameUrl} 
              className="w-full h-full border-0" 
              title={game.title} 
              allowFullScreen 
            />
          ) : (
            /* Placeholder Content when no URL is linked yet */
            <div className="text-center text-gray-500">
              <Gamepad2 className="h-24 w-24 mx-auto mb-4 opacity-50 animate-pulse text-red-900" />
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">Game Simulation</h3>
              <p className="max-w-md mx-auto text-gray-400">
                This is a placeholder. 
                <br/>
                <span className="text-xs text-gray-600 mt-2 block">
                  To play this game, link an HTML file in <code>src/data/mockGames.ts</code>
                </span>
              </p>
              <p className="mt-4 text-sm text-red-500 font-mono">
                Playing: <span className="text-gray-200">{game.title}</span>
              </p>
              <div className="mt-8">
                <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-red-600/30">
                  Play Now
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer/Controls */}
        <div className="bg-gray-900 px-6 py-4 border-t border-gray-800 flex justify-between items-center text-sm text-gray-400">
          <span className="font-light">{game.description}</span>
          <div className="flex space-x-4">
             <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
               <Maximize2 className="h-4 w-4" />
               <span>Fullscreen</span>
             </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
