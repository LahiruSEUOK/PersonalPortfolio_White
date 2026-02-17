import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Blog', path: '/#blog' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Navbar Container */}
        <div className="flex items-center justify-between h-16 relative">

          <Link to="/" className="text-xl font-bold text-gray-900">
            
          </Link>

          {/* Centered Desktop Nav */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors"
                onClick={() => {
                  if (item.path.startsWith('/#')) {
                    const id = item.path.substring(2);
                    const element = document.getElementById(id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 ml-auto"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden pb-4 text-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => {
                  setIsOpen(false);
                  if (item.path.startsWith('/#')) {
                    const id = item.path.substring(2);
                    const element = document.getElementById(id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
};
