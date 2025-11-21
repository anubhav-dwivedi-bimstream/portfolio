import React from 'react';
import { useBlog } from '../contexts/BlogContext';
import '../styles/BlogSearch.css';

const BlogSearch = () => {
  const { searchTerm, setSearchTerm, getAllTags, selectedTag, setSelectedTag } = useBlog();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTagClick = (tag) => {
    setSelectedTag(selectedTag === tag ? '' : tag);
  };

  return (
    <div className="blog-search">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      
      <div className="tags-container">
        <span className="tags-label">Filter by:</span>
        <div className="tags-list">
          {getAllTags().map((tag, index) => (
            <button
              key={index}
              className={`tag-btn ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
          {selectedTag && (
            <button
              className="tag-btn clear-btn"
              onClick={() => setSelectedTag('')}
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSearch;