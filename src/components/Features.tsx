import { Users, X } from 'lucide-react';
import { useState } from 'react';

const teamMembers = [
  {
    name: 'Dr. Maria Silva',
    role: 'Chief Scientific Officer',
    photo: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Leading expert in rare disease research with 20+ years experience',
    fullBio: 'Dr. Maria Silva is a leading expert in rare disease research with over 20 years of experience in biotechnology and pharmaceutical research. She holds a Ph.D. in Molecular Biology from Harvard University and completed her postdoctoral fellowship at Stanford University. Dr. Silva has published over 80 peer-reviewed articles and has been instrumental in advancing gene therapy approaches for rare genetic disorders. Her work has led to three breakthrough therapy designations from the FDA. She serves on multiple scientific advisory boards and is a recipient of the prestigious National Institutes of Health Director\'s Pioneer Award.'
  },
  {
    name: 'Dr. John Anderson',
    role: 'Head of Clinical Research',
    photo: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Specialized in clinical trials and therapeutic development',
    fullBio: 'Dr. John Anderson brings over 18 years of clinical research experience to KEVIVA. He earned his M.D. from Johns Hopkins University and his Ph.D. in Clinical Pharmacology from Yale University. Dr. Anderson has led more than 35 clinical trials from Phase I through Phase III, with a focus on rare disease therapeutics. He has extensive experience in regulatory affairs and has successfully navigated multiple drug approvals through the FDA and EMA. His expertise in clinical trial design and patient recruitment has been critical to accelerating drug development timelines while maintaining the highest standards of patient safety.'
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Director of Molecular Biology',
    photo: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Expert in gene therapy and molecular mechanisms of disease',
    fullBio: 'Dr. Sarah Chen is an internationally recognized expert in gene therapy and molecular mechanisms of disease. She received her Ph.D. in Genetics from MIT and completed her postdoctoral training at the Broad Institute. Dr. Chen\'s groundbreaking research on CRISPR-based gene editing has been published in Nature, Science, and Cell. She holds 15 patents in gene therapy technologies and has received numerous awards including the Blavatnik Award for Young Scientists. Her current research focuses on developing novel gene therapy approaches for metabolic disorders and rare genetic diseases.'
  },
  {
    name: 'Dr. Robert Martinez',
    role: 'Principal Investigator',
    photo: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Pioneer in translational medicine and drug discovery',
    fullBio: 'Dr. Robert Martinez is a pioneer in translational medicine with a track record of bringing laboratory discoveries to clinical applications. He obtained his M.D./Ph.D. from Columbia University and completed his residency at Massachusetts General Hospital. Dr. Martinez has over 25 years of experience in drug discovery and development, with expertise spanning target identification, lead optimization, and preclinical development. He has been involved in the development of five FDA-approved drugs and has founded two successful biotechnology companies. His research has been funded by grants totaling over $50 million from the NIH and private foundations.'
  },
  {
    name: 'Dr. Emily Thompson',
    role: 'Research Director',
    photo: 'https://images.pexels.com/photos/5327574/pexels-photo-5327574.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Focused on immunology and rare autoimmune disorders',
    fullBio: 'Dr. Emily Thompson is a distinguished immunologist specializing in rare autoimmune disorders. She earned her Ph.D. in Immunology from the University of Pennsylvania and completed her postdoctoral research at the National Institutes of Health. Dr. Thompson\'s research focuses on understanding the molecular mechanisms underlying autoimmune diseases and developing targeted immunotherapies. She has published over 60 research articles in top-tier journals and is a sought-after speaker at international conferences. Her work on novel biomarkers for early detection of autoimmune diseases has received widespread recognition and has led to several collaborative partnerships with major pharmaceutical companies.'
  },
  {
    name: 'Dr. Michael Brown',
    role: 'Senior Scientist',
    photo: 'https://images.pexels.com/photos/5327647/pexels-photo-5327647.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Specialist in neurodegenerative diseases and therapeutics',
    fullBio: 'Dr. Michael Brown is a leading specialist in neurodegenerative diseases with a focus on developing disease-modifying therapeutics. He obtained his Ph.D. in Neuroscience from the University of California, San Francisco, and completed postdoctoral training at the Max Planck Institute. Dr. Brown has over 15 years of experience studying the molecular pathways involved in Alzheimer\'s, Parkinson\'s, and other neurodegenerative diseases. His innovative research on protein aggregation and neuroinflammation has been published in prestigious journals including Nature Neuroscience and Neuron. He has received multiple awards for his contributions to neuroscience research and serves as a reviewer for several leading scientific journals.'
  }
];

export default function Features() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center mb-3">
              <Users className="w-6 h-6 mr-2" style={{ color: '#c9b896' }} />
              <h2 className="text-2xl font-bold" style={{ color: '#1a2340' }}>Our Team</h2>
            </div>
            <p className="text-lg font-bold mb-3" style={{ color: '#1a2340' }}>
              PEOPLE WHO MAKES IT HAPPEN
            </p>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              World-renowned scientists and researchers dedicated to advancing medical knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                onClick={() => setSelectedMember(index)}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                style={{ border: '1px solid #e5e5e5' }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold mb-1" style={{ color: '#4CAF50' }}>
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold mb-2" style={{ color: '#c9b896' }}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-xs">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedMember !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
              >
                <X className="w-6 h-6" style={{ color: '#1a2340' }} />
              </button>
              <div className="grid md:grid-cols-2 gap-6 p-6">
                <div>
                  <img
                    src={teamMembers[selectedMember].photo}
                    alt={teamMembers[selectedMember].name}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#4CAF50' }}>
                    {teamMembers[selectedMember].name}
                  </h3>
                  <p className="text-base font-semibold mb-3" style={{ color: '#c9b896' }}>
                    {teamMembers[selectedMember].role}
                  </p>
                  <div className="text-gray-700 leading-relaxed space-y-3 text-sm">
                    <p>{teamMembers[selectedMember].fullBio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
