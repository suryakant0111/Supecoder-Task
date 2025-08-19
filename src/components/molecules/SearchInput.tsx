import { useState, useRef } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

interface SearchInputProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchInput = ({ 
  onSearch, 
  placeholder = 'Search products...',
  className = ''
}: SearchInputProps) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
    inputRef.current?.focus();
  };

  return (
    <form 
      onSubmit={handleSearch}
      className={`relative ${className}`}
    >
      <div className={`
        flex items-center 
        border-2 rounded-full 
        ${isFocused ? 'border-blue-500' : 'border-gray-300'}
        transition-colors duration-200
        bg-white
      `}>
        <button 
          type="submit"
          className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Search"
        >
          <FaSearch />
        </button>
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="
            w-full py-2 pr-4 pl-1 
            focus:outline-none 
            bg-transparent
            text-gray-800
            placeholder-gray-400
          "
        />
        
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="p-2 text-gray-400 hover:text-gray-600 focus:outline-none"
            aria-label="Clear search"
          >
            <FaTimes />
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchInput;
