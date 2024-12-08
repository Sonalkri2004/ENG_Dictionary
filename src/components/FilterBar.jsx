import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, ThumbsUp } from 'lucide-react';

export function FilterBar({ selectedCategory, onCategoryChange, selectedSort, onSortChange }) {
  const categories = ['All', 'Technology', 'Design', 'Business', 'Lifestyle', 'Health', 'Travel', 'AI', 'Development', 'Science'];
  const sortOptions = [
    { value: 'latest', label: 'Latest', icon: Clock },
    { value: 'popular', label: 'Popular', icon: ThumbsUp },
    { value: 'trending', label: 'Trending', icon: TrendingUp },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="space-y-6"
    >
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryChange(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all
              ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
          >
            {category}
          </motion.button>
        ))}
      </div>
      
      <div className="flex justify-center gap-4">
        {sortOptions.map(({ value, label, icon: Icon }) => (
          <motion.button
            key={value}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSortChange(value)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
              ${selectedSort === value
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
              }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}