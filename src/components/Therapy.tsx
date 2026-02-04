import { Microscope, Heart, Brain, Activity, Dna, Shield } from 'lucide-react';

const therapies = [
  {
    icon: Brain,
    title: 'Neurodegenerative Diseases',
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Advanced research in Alzheimer\'s, Parkinson\'s, and ALS. Our team is developing novel therapeutic approaches targeting neuronal protection and regeneration.'
  },
  {
    icon: Dna,
    title: 'Genetic Disorders',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Gene therapy solutions for rare genetic conditions. Pioneering CRISPR-based treatments and personalized genetic medicine.'
  },
  {
    icon: Shield,
    title: 'Autoimmune Conditions',
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Novel immunomodulatory therapies for lupus, rheumatoid arthritis, and multiple sclerosis. Focus on precision medicine approaches.'
  },
  {
    icon: Heart,
    title: 'Cardiovascular Diseases',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Breakthrough treatments for rare cardiac conditions. Developing regenerative therapies and advanced diagnostic tools.'
  },
  {
    icon: Activity,
    title: 'Metabolic Disorders',
    image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Therapeutic interventions for rare metabolic syndromes. Research in enzyme replacement and substrate reduction therapies.'
  },
  {
    icon: Microscope,
    title: 'Oncological Research',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Targeted therapies for rare cancers. Immunotherapy development and precision oncology approaches.'
  }
];

export default function Therapy() {
  return (
    <section id="therapy" className="py-12" style={{ backgroundColor: '#f5f3ee' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-xs font-semibold tracking-wide uppercase mb-3" style={{ color: '#c9b896' }}>
            Our Research Focus
          </h2>
          <h1 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1a2340' }}>
            Therapy and Research
          </h1>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            Exploring innovative treatments across multiple disease areas with cutting-edge scientific approaches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapies.map((therapy, index) => {
            const Icon = therapy.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="relative overflow-hidden h-36">
                  <img
                    src={therapy.image}
                    alt={therapy.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center mb-1">
                      <div className="rounded-full p-1.5" style={{ backgroundColor: '#c9b896' }}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-white">{therapy.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {therapy.description}
                  </p>
                  <button className="mt-3 text-xs font-semibold transition-colors" style={{ color: '#4CAF50' }}>
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
