import { Building2, GraduationCap, HeartPulse, Globe } from 'lucide-react';

const partners = [
  {
    category: 'Academic Institutions',
    icon: GraduationCap,
    partners: [
      'Harvard Medical School',
      'Stanford University',
      'Johns Hopkins University',
      'MIT Research Center'
    ]
  },
  {
    category: 'Medical Centers',
    icon: HeartPulse,
    partners: [
      'Mayo Clinic',
      'Cleveland Clinic',
      'Massachusetts General Hospital',
      'UCSF Medical Center'
    ]
  },
  {
    category: 'Research Organizations',
    icon: Building2,
    partners: [
      'National Institutes of Health',
      'FDA Research Division',
      'European Medicines Agency',
      'WHO Global Health'
    ]
  },
  {
    category: 'International Collaborators',
    icon: Globe,
    partners: [
      'Oxford University',
      'Karolinska Institute',
      'University of Tokyo',
      'Max Planck Institute'
    ]
  }
];

export default function Partners() {
  return (
    <div style={{ transform: 'scale(0.85)', transformOrigin: 'center top' }}>
    <section id="partners" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-xs font-semibold tracking-wide uppercase mb-3" style={{ color: '#c9b896' }}>
            Collaboration Network
          </h2>
          <h1 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1a2340' }}>
            Partners and Links
          </h1>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            Working together with leading institutions worldwide to accelerate medical breakthroughs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partners.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow duration-300"
                style={{
                  backgroundColor: '#f5f3ee',
                  border: '2px solid #c9b896'
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="rounded-full p-2 mr-3" style={{ backgroundColor: '#1a2340' }}>
                    <Icon className="w-4 h-4" style={{ color: '#c9b896' }} />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: '#1a2340' }}>
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.partners.map((partner, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700 hover:text-[#4CAF50] transition-colors cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: '#4CAF50' }} />
                      {partner}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-block px-6 py-3 rounded-lg" style={{ backgroundColor: '#1a2340' }}>
            <p className="text-sm font-semibold" style={{ color: '#c9b896' }}>
              Interested in collaboration? Contact our partnership team
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
