import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'The Puzzle Shop', path: '/shop' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="https://customer-assets.emergentagent.com/job_05098993-4059-4a1d-a237-305f60e8d292/artifacts/yxfmdpsc_LOGOs%20PUZZLE%20PXC%20-%202%282%29.png" 
              alt="PXC Logo" 
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-[#FB2C15]'
                    : 'text-gray-700 hover:text-[#AEA1EA]'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FB2C15] via-[#AEA1EA] to-[#B2EBF9] rounded-full" />
                )}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-[#FB2C15] hover:bg-[#d92515] text-white font-medium rounded-full px-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Book Strategy Session
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#FB2C15] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2 animate-fadeIn">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg transition-all ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-[#B2EBF9]/20 to-[#AEA1EA]/20 text-[#FB2C15] font-semibold'
                    : 'text-gray-700 hover:bg-[#B2EBF9]/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-[#FB2C15] hover:bg-[#d92515] text-white font-medium rounded-full mt-4">
                Book Strategy Session
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
