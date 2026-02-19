
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { GameCard } from './components/GameCard';
import { GameModal } from './components/GameModal';
import { Game, Category, mockGames } from '../data/mockGames';

const App = () => {
  const [games] = useState<Game[]>(mockGames);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  // Filter games based on search and category
  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [games, searchQuery, selectedCategory]);

  const categories: Category[] = [
    'All', 'FPS', 'Horror', '.IO', 'Mobile', 'Puzzle', 'Platformer', 'Rhythm', 'RPG', 'Sandbox', 'Simulation', 'Sports', 'Strategy', 'Action', 'Racing'
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-red-500 selection:text-white">
      <Navbar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Game Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pb-20"
        >
          <AnimatePresence mode='popLayout'>
            {filteredGames.length > 0 ? (
              filteredGames.map((game) => (
                <motion.div
                  key={game.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <GameCard
                    game={game}
                    onClick={setSelectedGame}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div 
                key="no-games"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="col-span-full text-center py-32 text-gray-600"
              >
                <p className="text-2xl font-light mb-4">No games found.</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="text-red-500 hover:text-red-400 hover:underline font-medium transition-colors"
                >
                  Clear search filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* Modals */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div
            key="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedGame(null)}
          >
            <GameModal
              game={selectedGame}
              onClose={() => setSelectedGame(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default App;
