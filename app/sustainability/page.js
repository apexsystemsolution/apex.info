import Link from 'next/link';

export const metadata = {
  title: "Sustainability & ESG",
  description: "Explore APEX's ESG commitments: green hosting configurations, energy-efficient serverless code execution, and regional digital literacy sponsorships."
};

export default function Sustainability() {
  const commitments = [
    {
      title: 'Green Cloud Operations',
      tagline: 'Zero Carbon Cloud Clusters',
      desc: 'All our SaaS applications, tracker databases, and client staging servers are hosted on datacenters backed by 100% renewable energy contracts (such as AWS and Netlify carbon-offset nodes).',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    },
    {
      title: 'Carbon-Efficient Code',
      tagline: 'Computational Energy Optimization',
      desc: 'We treat processor cycles as precious resources. By optimizing databases, reducing API payload sizes, caching recursively, and minimizing bundling output, we reduce the client-side and server-side energy footprint.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      )
    },
    {
      title: 'Digital Literacy Sponsor',
      tagline: 'Empowering Regional Communities',
      desc: 'We allocate 5% of APEX development hours to mentoring regional students, donating hardware to public IT labs, and sponsoring digital literacy programs in regions like Polonnaruwa, Sri Lanka.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
          <path d="M6 6h10M6 10h10"></path>
        </svg>
      )
    }
  ];

  return (
    <div style={{ backgroundColor: 'white' }}>
      {/* Intro Section */}
      <section className="section-py" style={{ borderBottom: '1px solid var(--neutral-200)', position: 'relative' }}>
        <div className="container sustainability-grid" style={{ alignItems: 'center' }}>
          <div>
            <span className="section-tag" style={{ color: '#2e7d32' }}>Our Pledge</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '24px' }}>
              Green Code. Clean Systems.
            </h1>
            <div style={{ width: '60px', height: '3px', backgroundColor: '#2e7d32', marginBottom: '24px', borderRadius: '2px' }}></div>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--neutral-600)', fontWeight: 300, marginBottom: '20px' }}>
              At APEX, we believe technology must support a progressive tomorrow without taxing the environment. As software engineers, our primary contribution to environmental sustainability is through <strong>efficient architecture</strong>.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--neutral-600)', fontWeight: 300, marginBottom: '30px' }}>
              We compile code to optimize server computing loops, minimize payload bytes over mobile networks to save device battery consumption, and choose hosting platforms committed to clean energy sourcing.
            </p>
            <Link href="/portfolio" className="btn btn-outline" style={{ color: '#2e7d32', borderColor: '#2e7d32' }}>
              View Optimized Systems
            </Link>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
            padding: '50px 40px',
            borderRadius: 'var(--radius-xl)',
            border: '1.5px solid #a5d6a7',
            boxShadow: 'var(--shadow-md)'
          }}>
            <h3 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: '#1b5e20', marginBottom: '16px' }}>
              Eco Highlights
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px', borderBottom: '1px solid rgba(46, 125, 50, 0.1)', paddingBottom: '16px' }}>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#2e7d32' }}>100%</div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#1b5e20' }}>Green Cloud Hosting</h4>
                  <p style={{ fontSize: '12px', color: '#2e7d32', fontWeight: 300 }}>Zero grid emissions for cloud executions.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px', borderBottom: '1px solid rgba(46, 125, 50, 0.1)', paddingBottom: '16px' }}>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#2e7d32' }}>-40%</div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#1b5e20' }}>Network Payload Savings</h4>
                  <p style={{ fontSize: '12px', color: '#2e7d32', fontWeight: 300 }}>Through asset compression and optimization.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#2e7d32' }}>5%</div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#1b5e20' }}>Dev Hours Sponsoring</h4>
                  <p style={{ fontSize: '12px', color: '#2e7d32', fontWeight: 300 }}>For local digital education labs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section-py" style={{ backgroundColor: 'var(--neutral-50)', borderBottom: '1px solid var(--neutral-200)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag" style={{ color: '#2e7d32' }}>Our Pillars</span>
          <h2 className="section-title">ESG Strategic Framework</h2>
          <div style={{ width: '40px', height: '3px', backgroundColor: '#2e7d32', margin: '0 auto 24px auto', borderRadius: '2px' }}></div>
          <p className="section-desc" style={{ marginBottom: '60px' }}>
            Our corporate sustainability program is structured across three core areas where APEX makes a measurable impact.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px'
          }}>
            {commitments.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: 'white',
                  border: '1px solid var(--neutral-200)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '40px 30px',
                  textAlign: 'left',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s ease'
                }}
                className="sustainability-card"
              >
                <div style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: '#e8f5e9',
                  color: '#2e7d32',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--neutral-900)', marginBottom: '4px' }}>
                  {item.title}
                </h3>
                <span style={{ fontSize: '11px', fontWeight: 650, color: '#2e7d32', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '16px' }}>
                  {item.tagline}
                </span>
                <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: 'var(--neutral-600)', fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="section-py" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '650px' }}>
          <span className="section-tag" style={{ color: '#2e7d32' }}>Get Involved</span>
          <h2 style={{ fontSize: '28px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px', color: 'var(--neutral-900)' }}>
            Empower Local Digital Labs
          </h2>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--neutral-600)', fontWeight: 300, marginBottom: '32px' }}>
            We regularly coordinate equipment recycling drives and local IT workshop camps. If your organization is interested in collaborating on regional digital empowerment, get in touch.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ backgroundColor: '#2e7d32', boxShadow: '0 4px 14px 0 rgba(46, 125, 50, 0.3)' }}>
            Contact ESG Coordinator
          </Link>
        </div>
      </section>

    </div>
  );
}
