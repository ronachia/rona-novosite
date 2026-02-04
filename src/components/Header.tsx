import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#1a2340' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          <div className="flex items-center">
            <img src="/logonovo.png" alt="Keviva" className="h-12 md:h-14 w-auto" />
          </div>

          <nav className="hidden lg:flex items-center space-x-8 gap-1 ml-12">
            <a href="#home" className="text-white hover:text-[#c9b896] transition font-medium text-base leading-tight text-center">Home</a>
            <a href="#company" className="text-white hover:text-[#c9b896] transition font-medium text-base leading-tight text-center max-w-[120px]">Our Company and Team</a>
            <a href="#therapy" className="text-white hover:text-[#c9b896] transition font-medium text-base leading-tight text-center max-w-[120px]">Therapy and Research</a>
            <a href="#news" className="text-white hover:text-[#c9b896] transition font-medium text-base leading-tight text-center max-w-[120px]">News and Events</a>
            <a href="#partners" className="text-white hover:text-[#c9b896] transition font-medium text-base leading-tight text-center max-w-[120px]">Partners and Links</a>
            <a href="#contact" className="text-white hover:text-[#c9b896] transition font-medium text-base leading-tight text-center">Contact</a>
          </nav>

          <button
            className="lg:hidden text-white ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-white hover:text-[#c9b896] transition font-medium text-base">Home</a>
              <a href="#company" className="text-white hover:text-[#c9b896] transition font-medium text-base">Our Company and Team</a>
              <a href="#therapy" className="text-white hover:text-[#c9b896] transition font-medium text-base">Therapy and Research</a>
              <a href="#news" className="text-white hover:text-[#c9b896] transition font-medium text-base">News and Events</a>
              <a href="#partners" className="text-white hover:text-[#c9b896] transition font-medium text-base">Partners and Links</a>
              <a href="#contact" className="text-white hover:text-[#c9b896] transition font-medium text-base">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
