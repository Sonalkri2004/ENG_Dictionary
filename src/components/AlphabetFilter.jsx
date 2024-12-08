import React from 'react';
import { motion } from 'framer-motion';

export function AlphabetFilter({ selectedLetter, onLetterChange }) {
  const alphabet = ['ALL', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap justify-center gap-2"
    >
      {alphabet.map((letter) => (
        <motion.button
          key={letter}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onLetterChange(letter)}
          className={`w-10 h-10 rounded-lg text-sm font-medium transition-all
            ${selectedLetter === letter
              ? 'bg-purple-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
            }`}
        >
          {letter}
        </motion.button>
      ))}
    </motion.div>
  );
}