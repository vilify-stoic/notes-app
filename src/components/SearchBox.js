import React from 'react';
import { X } from 'lucide-react';

const SearchBox = ({ searchKeyword, onSearch }) => {
  const clearSearchKeyword = () => {
    onSearch('');
  };

  return (
    <div className="searchbox">
      <input
        className="searchbox__input"
        type="text"
        placeholder="Please Search Here"
        value={searchKeyword}
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="searchbox__icon">
        <X size={18} onClick={clearSearchKeyword} />
      </div>
    </div>
  );
};

export default SearchBox;
