import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { BlogProvider } from './contexts/BlogContext';
import { initGA, trackPageView } from './utils/analytics';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollProgress from './components/ScrollProgress';
import AppLoading from './components/AppLoading';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import './App.css';

// Lazy load pages for better performance
const LazyHome = React.lazy(() => import('./pages/Home'));
const LazyAbout = React.lazy(() => import('./pages/About'));
const LazyProjects = React.lazy(() => import('./pages/Projects'));
const LazyContact = React.lazy(() => import('./pages/Contact'));
const LazyBlog = React.lazy(() => import('./pages/Blog'));
const LazyBlogPost = React.lazy(() => import('./pages/BlogPost'));

// Component to track page views
function Analytics() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  // Initialize Google Analytics
  useEffect(() => {
    initGA();
  }, []);

  return (
    <ThemeProvider>
      <BlogProvider>
        <ErrorBoundary>
          <Router>
            <Analytics />
            <ScrollToTop />
            <ScrollProgress />
            <div className="App">
              <Navbar />
              <Suspense fallback={<AppLoading />}>
                <Routes>
                  <Route path="/" element={<LazyHome />} />
                  <Route path="/about" element={<LazyAbout />} />
                  <Route path="/projects" element={<LazyProjects />} />
                  <Route path="/contact" element={<LazyContact />} />
                  <Route path="/blog" element={<LazyBlog />} />
                  <Route path="/blog/:id" element={<LazyBlogPost />} />
                </Routes>
              </Suspense>
              <Footer />
            </div>
          </Router>
        </ErrorBoundary>
      </BlogProvider>
    </ThemeProvider>
  );
}

export default App;