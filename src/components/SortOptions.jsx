import React from 'react';
import { motion } from 'framer-motion';
import { SortAsc, SortDesc, TrendingUp, Ruler } from 'lucide-react';

export function SortOptions({ selectedSort, onSortChange }) {
  const sortOptions = [
    { value: 'az', label: 'A to Z', icon: SortAsc },
    { value: 'za', label: 'Z to A', icon: SortDesc },
    { value: 'length', label: 'By Length', icon: Ruler },
    { value: 'popular', label: 'Popular', icon: TrendingUp },
  ];

  return (
    <div className="flex justify-center gap-4">
      {sortOptions.map(({ value, label, icon: Icon }) => (
        <motion.button
          key={value}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSortChange(value)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
            ${selectedSort === value
              ? 'bg-purple-50 text-purple-600'
              : 'text-gray-600 hover:bg-gray-50'
            }`}
        >
          <Icon className="w-4 h-4" />
          {label}
        </motion.button>
      ))}
    </div>
  );
}