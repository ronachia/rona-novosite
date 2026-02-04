import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ transform: 'scale(0.85)', transformOrigin: 'center top' }}>
    <section id="contact" className="py-12" style={{ backgroundColor: '#f5f3ee' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-xs font-semibold tracking-wide uppercase mb-3" style={{ color: '#c9b896' }}>
            Get In Touch
          </h2>
          <h1 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1a2340' }}>
            Contact Us
          </h1>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            Have questions about our research or interested in collaboration? We'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-6" style={{ color: '#1a2340' }}>
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="rounded-full p-2 mr-3" style={{ backgroundColor: '#1a2340' }}>
                  <MapPin className="w-4 h-4" style={{ color: '#c9b896' }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm" style={{ color: '#1a2340' }}>Headquarters</h4>
                  <p className="text-gray-700 text-sm">123 Research Boulevard</p>
                  <p className="text-gray-700 text-sm">Boston, MA 02115, USA</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="rounded-full p-2 mr-3" style={{ backgroundColor: '#1a2340' }}>
                  <Phone className="w-4 h-4" style={{ color: '#c9b896' }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm" style={{ color: '#1a2340' }}>Phone</h4>
                  <p className="text-gray-700 text-sm">+1 (617) 555-0123</p>
                  <p className="text-gray-700 text-sm">+1 (617) 555-0124 (Fax)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="rounded-full p-2 mr-3" style={{ backgroundColor: '#1a2340' }}>
                  <Mail className="w-4 h-4" style={{ color: '#c9b896' }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm" style={{ color: '#1a2340' }}>Email</h4>
                  <p className="text-gray-700 text-sm">info@keviva.com</p>
                  <p className="text-gray-700 text-sm">research@keviva.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-lg" style={{ backgroundColor: '#1a2340' }}>
              <h4 className="text-base font-bold mb-2" style={{ color: '#c9b896' }}>Office Hours</h4>
              <p className="text-white text-sm">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
              <p className="text-white text-sm">Saturday - Sunday: Closed</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4" style={{ color: '#1a2340' }}>
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9b896] transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9b896] transition"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9b896] transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9b896] transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity flex items-center justify-center"
                style={{ backgroundColor: '#1a2340' }}
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
