import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, AboutPage } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
