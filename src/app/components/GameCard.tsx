
import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { Game } from '../../data/mockGames';

interface GameCardProps {
  game: Game;
  onClick: (game: Game) => void;
}

export const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden cursor-pointer hover:shadow-red-900/50 transition-all duration-300 transform h-full"
      onClick={() => onClick(game)}
    >
      <div className="aspect-w-16 aspect-h-12 w-full h-40 bg-gray-900 relative overflow-hidden">
        <img
          src={game.imageUrl}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <div className="bg-red-600 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg shadow-red-500/50">
            <Play className="h-6 w-6 text-white fill-current" />
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-md font-bold text-gray-100 truncate group-hover:text-red-400 transition-colors">{game.title}</h3>
        <span className="text-xs font-semibold text-red-300 bg-red-900/30 px-2 py-0.5 rounded-full mt-2 inline-block border border-red-900/50">
          {game.category}
        </span>
      </div>
    </motion.div>
  );
};
