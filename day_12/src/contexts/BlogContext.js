import React, { createContext, useContext, useState, useEffect } from 'react';
import blogPosts from '../data/blogPosts.json';

const BlogContext = createContext();

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPosts(blogPosts);
      setFilteredPosts(blogPosts);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let filtered = posts;

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedTag) {
      filtered = filtered.filter(post =>
        post.tags.includes(selectedTag)
      );
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedTag, posts]);

  const getAllTags = () => {
    const allTags = posts.flatMap(post => post.tags);
    return [...new Set(allTags)];
  };

  const getPostById = (id) => {
    return posts.find(post => post.id === parseInt(id));
  };

  const value = {
    posts,
    filteredPosts,
    searchTerm,
    setSearchTerm,
    selectedTag,
    setSelectedTag,
    getAllTags,
    getPostById,
    loading
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};