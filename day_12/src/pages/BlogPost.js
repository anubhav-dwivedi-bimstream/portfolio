import React from 'react';
import { useParams } from 'react-router-dom';
import { useBlog } from '../contexts/BlogContext';
import { motion } from 'framer-motion';
import { trackEvent } from '../utils/analytics';
import LoadingSpinner from '../components/LoadingSpinner';
import '../styles/BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const { getPostById, loading } = useBlog();

  React.useEffect(() => {
    trackEvent('Blog', 'View', `Post ${id}`);
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  const post = getPostById(id);

  if (!post) {
    return (
      <div className="blog-post">
        <div className="not-found">
          <h2>Post not found</h2>
          <p>The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="blog-post"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <article className="blog-article">
        <header className="blog-header">
          <h1>{post.title}</h1>
          <div className="blog-meta">
            <span className="blog-date">{new Date(post.date).toLocaleDateString()}</span>
            <span className="blog-readtime">{post.readTime}</span>
          </div>
          <div className="blog-tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </header>
        
        <div className="blog-image">
          <img src={post.image} alt={post.title} />
        </div>
        
        <div className="blog-content">
          <p>{post.content}</p>
          <p>This is where the full blog post content would go. You can expand this with more detailed content, code examples, and images.</p>
          <p>Additional content would include more paragraphs, code snippets, and other rich content that showcases your technical writing skills.</p>
        </div>
        
        <footer className="blog-footer">
          <div className="share-section">
            <h4>Share this post:</h4>
            <div className="share-buttons">
              <button className="share-btn" onClick={() => {
                trackEvent('Blog', 'Share', 'Twitter');
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
              }}>
                Twitter
              </button>
              <button className="share-btn" onClick={() => {
                trackEvent('Blog', 'Share', 'LinkedIn');
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank');
              }}>
                LinkedIn
              </button>
            </div>
          </div>
        </footer>
      </article>
    </motion.div>
  );
};

export default BlogPost;