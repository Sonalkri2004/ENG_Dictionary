// Dictionary utility functions
export const searchWords = (dictionary, query) => {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return dictionary;
  
  return dictionary.filter(word => {
    return word.term.toLowerCase().includes(searchTerm) ||
           word.definition.toLowerCase().includes(searchTerm) ||
           word.examples.some(example => example.toLowerCase().includes(searchTerm));
  });
};

export const filterByInitial = (dictionary, letter) => {
  if (letter === 'ALL') return dictionary;
  return dictionary.filter(word => word.term.toLowerCase().startsWith(letter.toLowerCase()));
};

export const sortDictionary = (dictionary, sortType) => {
  const sortedWords = [...dictionary];
  
  switch (sortType) {
    case 'za':
      return sortedWords.sort((a, b) => b.term.localeCompare(a.term));
    case 'length':
      return sortedWords.sort((a, b) => b.term.length - a.term.length);
    case 'popular':
      return sortedWords.sort((a, b) => b.frequency - a.frequency);
    case 'az':
    default:
      return sortedWords.sort((a, b) => a.term.localeCompare(b.term));
  }
};