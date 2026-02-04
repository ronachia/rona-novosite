import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram, Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#1a2340' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#c9b896' }}>KEVIVA</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Pioneering research in rare disease therapies. Dedicated to advancing medical science for humanity.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4" style={{ color: '#c9b896' }}>Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-300 hover:text-[#c9b896] transition">Home</a></li>
              <li><a href="#company" className="text-gray-300 hover:text-[#c9b896] transition">Our Company and Team</a></li>
              <li><a href="#therapy" className="text-gray-300 hover:text-[#c9b896] transition">Therapy and Research</a></li>
              <li><a href="#news" className="text-gray-300 hover:text-[#c9b896] transition">News and Events</a></li>
              <li><a href="#partners" className="text-gray-300 hover:text-[#c9b896] transition">Partners and Links</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#c9b896] transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4" style={{ color: '#c9b896' }}>Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#4CAF50' }} />
                <div>
                  <p className="text-gray-300">123 Research Boulevard</p>
                  <p className="text-gray-300">Boston, MA 02115, USA</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#4CAF50' }} />
                <div>
                  <p className="text-gray-300">+1 (617) 555-0123</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#4CAF50' }} />
                <div>
                  <p className="text-gray-300">info@keviva.com</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4" style={{ color: '#c9b896' }}>Follow Us</h4>
            <div className="flex space-x-3 mb-4">
              <a href="#" className="hover:opacity-80 transition" style={{ color: '#c9b896' }} aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition" style={{ color: '#c9b896' }} aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition" style={{ color: '#c9b896' }} aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition" style={{ color: '#c9b896' }} aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-300 text-xs">
              Stay connected for the latest research updates and medical breakthroughs.
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-6" style={{ borderColor: '#c9b896' }}>
          <div className="flex justify-center mb-4">
            <a
              href="/keviva-site-backup.zip"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: '#c9b896', color: '#1a2340' }}
            >
              <Download className="w-4 h-4" />
              Download Site Backup
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm text-center md:text-left mb-4 md:mb-0">
              <p>&copy; 2026 KEVIVA Research. All rights reserved.</p>
            </div>
            <div className="text-gray-300 text-sm text-center md:text-right">
              <p>Committed to advancing medical science and improving lives worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
