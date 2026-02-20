import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-[#FBFBFD] shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Navbar Container */}
        <div className="flex items-center justify-between h-8 relative">

          <Link to="/" className="text-xl font-semibold text-gray-900">

          </Link>

          {/* Centered Desktop Nav */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-[12px] font-normal transition-colors ${
                  isActive(item.path) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
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
                className={`block py-2 ${
                  isActive(item.path) ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'
                }`}
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
