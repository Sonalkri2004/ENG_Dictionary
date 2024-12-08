import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { SearchBox } from './components/SearchBox';
import { AlphabetFilter } from './components/AlphabetFilter';
import { SortOptions } from './components/SortOptions';
import { WordCard } from './components/WordCard';
import { dictionaryData } from './data/dictionaryData';
import { searchWords, filterByInitial, sortDictionary } from './utils/dictionaryUtils';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('ALL');
  const [selectedSort, setSelectedSort] = useState('az');

  const filteredAndSortedWords = useMemo(() => {
    let results = searchWords(dictionaryData, searchQuery);
    results = filterByInitial(results, selectedLetter);
    return sortDictionary(results, selectedSort);
  }, [searchQuery, selectedLetter, selectedSort]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <Header />
        <SearchBox
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <div className="space-y-8">
          <AlphabetFilter
            selectedLetter={selectedLetter}
            onLetterChange={setSelectedLetter}
          />
          <SortOptions
            selectedSort={selectedSort}
            onSortChange={setSelectedSort}
          />
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredAndSortedWords.map((word, index) => (
            <WordCard key={word.id} word={word} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;