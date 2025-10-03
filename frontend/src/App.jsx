import React, { useEffect } from 'react'; // 1. Import useEffect
import { 
    BrowserRouter as Router, 
    Routes, 
    Route, 
    useLocation, 
    useNavigate // 2. Import useNavigate
} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BrowsePage from './pages/BrowseSnippets';
import SnippetForm from './components/SnippetForm';
import AboutPage from './pages/About';

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate(); // 3. Initialize the navigate function

  // 4. This hook runs once on every page load/reload
  useEffect(() => {
    // It immediately navigates the user to the home route
    navigate('/');
  }, []); // The empty array [] ensures this effect only runs on the initial render

  return (
    <div>
      <Navbar activeHref={location.pathname} />
      <main > 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/add" element={<SnippetForm onSnippetCreated={() => console.log("Snippet Created!")} />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  return (
    // The Router component MUST wrap your entire application for routing to work
      <AppContent />
  );
};

export default App;