import React from 'react';
import { motion } from 'framer-motion';
import { Book, Search } from 'lucide-react';

export function Header() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-6"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-full"
      >
        <Book className="w-12 h-12 text-purple-600" />
      </motion.div>
      <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
        Lexicon
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Explore the richness of language with our modern dictionary
      </p>
      <div className="flex justify-center gap-4 text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <Search className="w-4 h-4" />
          Smart Search
        </span>
      </div>
    </motion.div>
  );
}