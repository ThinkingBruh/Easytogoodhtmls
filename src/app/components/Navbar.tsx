
import React from 'react';
import { Search } from 'lucide-react';
import { Category } from '../../data/mockGames';
import logoImg from 'figma:asset/e8e8049598560a33f48e5254d56125ff3bd93eee.png';

interface NavbarProps {
  categories: Category[];
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900 border-b-4 border-red-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => onSelectCategory('All')}>
            <div className="w-10 h-10 rounded-lg overflow-hidden transform group-hover:rotate-12 transition-transform duration-300 border-2 border-red-500">
              <img src={logoImg} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="ml-3 text-xl font-black tracking-tight text-white">
              EasyToGood<span className="text-red-500">HTMLs</span>
            </span>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border-2 border-gray-700 rounded-full leading-5 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:bg-gray-900 focus:border-red-500 focus:ring-0 sm:text-sm transition duration-150 ease-in-out"
                placeholder="Search games..."
                type="search"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="bg-gray-800 shadow-inner overflow-x-auto border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-2 py-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
