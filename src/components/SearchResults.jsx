import React from 'react';
import { motion } from 'framer-motion';
import { ArticleCard } from './ArticleCard';
import { FileSearch } from 'lucide-react';

export function SearchResults({ results }) {
  if (results.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16"
      >
        <FileSearch className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <p className="text-xl text-gray-500">No articles found matching your search criteria</p>
      </motion.div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {results.map((result, index) => (
        <ArticleCard key={result.id} article={result} index={index} />
      ))}
    </div>
  );
}