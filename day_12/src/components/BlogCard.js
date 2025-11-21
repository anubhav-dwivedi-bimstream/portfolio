import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';
import '../styles/BlogCard.css';

const BlogCard = ({ post }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { y: -5, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      className="blog-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <Link to={`/blog/${post.id}`} className="blog-link">
        <div className="blog-image">
          <LazyLoadImage
            src={post.image}
            alt={post.title}
            effect="blur"
            placeholder={<div className="image-placeholder">Loading...</div>}
          />
        </div>
        <div className="blog-content">
          <div className="blog-meta">
            <span className="blog-date">{new Date(post.date).toLocaleDateString()}</span>
            <span className="blog-readtime">{post.readTime}</span>
          </div>
          <h3 className="blog-title">{post.title}</h3>
          <p className="blog-excerpt">{post.excerpt}</p>
          <div className="blog-tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;