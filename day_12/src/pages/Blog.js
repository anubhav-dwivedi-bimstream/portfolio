import React from 'react';
import { useBlog } from '../contexts/BlogContext';
import BlogHero from '../components/BlogHero';
import BlogSearch from '../components/BlogSearch';
import BlogCard from '../components/BlogCard';
import LoadingSpinner from '../components/LoadingSpinner';
import '../styles/Blog.css';

const Blog = () => {
  const { filteredPosts, loading } = useBlog();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="blog">
      <BlogHero />
      <div className="blog-container">
        <BlogSearch />
        <div className="blog-grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))
          ) : (
            <div className="no-posts">
              <h3>No posts found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;