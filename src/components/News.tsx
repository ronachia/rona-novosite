import { Calendar, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    title: 'Breakthrough in Gene Therapy Research',
    date: 'January 15, 2026',
    excerpt: 'KEVIVA announces major advancement in CRISPR-based treatment for rare genetic disorders, showing promising results in Phase II trials.'
  },
  {
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    title: 'New Partnership with Leading Research Institute',
    date: 'December 18, 2025',
    excerpt: 'Collaboration with MIT to accelerate development of novel therapeutic approaches for neurodegenerative diseases.'
  },
  {
    image: 'https://images.pexels.com/photos/3825540/pexels-photo-3825540.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    title: 'Clinical Trial Success in Rare Disease Treatment',
    date: 'November 22, 2025',
    excerpt: 'Phase III trial demonstrates significant efficacy in treating patients with rare autoimmune condition, bringing hope to thousands.'
  }
];

export default function News() {
  return (
    <div style={{ transform: 'scale(0.85)', transformOrigin: 'center top' }}>
    <section id="news" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-xs font-semibold tracking-wide uppercase mb-3" style={{ color: '#c9b896' }}>
            Latest Updates
          </h2>
          <h1 className="text-2xl font-bold mb-3" style={{ color: '#1a2340' }}>
            News and Events
          </h1>
          <p className="text-base text-gray-700">Stay informed about our latest developments and achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              style={{ border: '1px solid #e5e5e5' }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-36 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <div className="px-2 py-0.5 rounded text-xs font-semibold text-white" style={{ backgroundColor: '#1a2340' }}>
                    NEWS
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center text-xs mb-2" style={{ color: '#c9b896' }}>
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-base font-bold mb-2 group-hover:text-[#4CAF50] transition-colors" style={{ color: '#1a2340' }}>
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-3 leading-relaxed text-sm">{item.excerpt}</p>
                <button className="flex items-center text-xs font-semibold hover:opacity-80 transition-opacity" style={{ color: '#4CAF50' }}>
                  <span>READ MORE</span>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
