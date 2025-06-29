import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import About from './pages/About';
import { useAnalytics } from './hooks/useAnalytics';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

// Separate component to use hooks (since Router needs to be parent)
function AppContent() {
  useAnalytics(); // Track page views

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<PostPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
