import { Menu, MessageSquare, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profile from "../assets/profile.png";



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
        <div className="flex items-center justify-between h-10 relative">

          <Link to="/" className="text-xl font-regular text-gray-900">

          </Link>

          {/* Centered Desktop Nav */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-normal transition-colors ${
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
          {/* Modern Mobile Menu Button */}
<button
  onClick={() => setIsOpen(!isOpen)}
  className={`md:hidden relative z-[60] p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center ${
    isOpen 
      ? 'bg-gray-100 text-gray-900' 
      : 'bg-blue-50/50 text-blue-600 hover:bg-blue-50'
  }`}
  aria-label="Toggle menu"
>
  {isOpen ? (
    <X size={20} strokeWidth={2} className="animate-in spin-in-90 duration-300" />
  ) : (
    <Menu size={20} strokeWidth={2} className="animate-in zoom-in-50 duration-300" />
  )}
</button>
        </div>

        {/* Mobile Dropdown */}
      {/* Premium Colored Mobile Menu */}
{isOpen && (
  <div className="fixed inset-0 bg-white z-50 md:hidden animate-in fade-in duration-300">
    <div className="flex flex-col h-full px-8 pt-24 pb-12">
      
      {/* Profile Header with subtle color border */}
      <div className="flex items-center gap-4 mb-10 border-b border-gray-50 pb-8">
        <img 
          src={profile} 
          alt="Lahiru Sandeepa" 
          className="w-14 h-14 rounded-full object-cover border-2 border-blue-100 shadow-sm" 
        />
        <div className="space-y-0.5">
          <h2 className="text-lg font-bold text-gray-900 tracking-tight">Lahiru Sandeepa</h2>
          {/* <p className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.15em]">Solution Designer</p> */}
        </div>
      </div>

      {/* Navigation - Smaller Text with Color States */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`block py-3 px-4 rounded-xl text-xl font-medium tracking-tight transition-all ${
              isActive(item.path) 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:text-blue-600 active:bg-gray-50'
            }`}
            onClick={() => {
              setIsOpen(false);
              if (item.path.startsWith('/#')) {
                const id = item.path.substring(2);
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Action Footer with Color Focus */}
      <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between px-2">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Available Now</span>
          <span className="text-sm font-semibold text-gray-900">+94 71 118 6028</span>
        </div>
        <a 
  href="https://wa.me/94711186028"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#25D366] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-green-100 hover:bg-[#20ba5a] transition-all flex items-center gap-2"
>
  <MessageSquare size={16} />
  WhatsApp
</a>
      </div>
    </div>
  </div>
)}
        

      
      
      
      
      
      </div>
    </nav>
  );
};
