import React from 'react';
import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function SearchBox({ searchQuery, onSearchChange }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative max-w-2xl mx-auto"
    >
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search words, definitions, or examples..."
        className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-2xl
                 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                 shadow-sm hover:shadow-md transition-all duration-300 text-lg"
      />
      {searchQuery && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => onSearchChange('')}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 
                   hover:text-gray-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </motion.button>
      )}
    </motion.div>
  );
}