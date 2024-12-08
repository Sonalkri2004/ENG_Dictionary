import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Volume2, BookMarked, Share2 } from 'lucide-react';

export function WordCard({ word, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 space-y-4"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
            {word.term}
          </h3>
          <p className="text-sm text-gray-500">{word.pronunciation}</p>
        </div>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full text-gray-400 hover:text-purple-500 hover:bg-purple-50 transition-colors"
          >
            <Volume2 className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full text-gray-400 hover:text-purple-500 hover:bg-purple-50 transition-colors"
          >
            <BookMarked className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full text-gray-400 hover:text-purple-500 hover:bg-purple-50 transition-colors"
          >
            <Share2 className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      <div className="space-y-3">
        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-purple-50 text-purple-600">
          {word.partOfSpeech}
        </span>
        
        <p className="text-gray-700">{word.definition}</p>
        
        {word.examples.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">Examples:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              {word.examples.map((example, i) => (
                <li key={i}>{example}</li>
              ))}
            </ul>
          </div>
        )}
        
        {word.synonyms.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {word.synonyms.map((synonym, i) => (
              <span
                key={i}
                className="px-2 py-1 text-sm bg-gray-50 text-gray-600 rounded-md"
              >
                {synonym}
              </span>
            ))}
          </div>
        )}
        
        <div className="text-sm text-gray-500">
          <p className="italic">{word.etymology}</p>
        </div>
      </div>
    </motion.article>
  );
}