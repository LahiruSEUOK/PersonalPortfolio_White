import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, AboutPage, ServicesPage, ProcessPage } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/process" element={<ProcessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
