export default function About() {
  return (
    <section id="company" className="py-12" style={{ backgroundColor: '#f5f3ee' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xs font-semibold tracking-wide uppercase mb-3" style={{ color: '#c9b896' }}>
            Our Company and Team
          </h2>
          <h1 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#1a2340' }}>
            Pioneering Research in<br />
            Rare Disease Therapies
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              KEVIVA is a <span className="font-semibold" style={{ color: '#1a2340' }}>biotechnology research company</span> dedicated to developing innovative therapies for rare and challenging diseases.
            </p>
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              Our mission is to transform scientific discoveries into life-changing treatments. We bring together world-class researchers, clinicians, and innovators to tackle some of medicine's most complex challenges. Through rigorous research and compassionate care, we strive to improve the lives of patients and families affected by rare diseases.
            </p>
            <div className="inline-block">
              <div className="text-lg md:text-xl font-bold border-t-2 border-b-2 py-3 px-6" style={{
                color: '#1a2340',
                borderColor: '#c9b896'
              }}>
                ADVANCING MEDICAL SCIENCE FOR HUMANITY
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
