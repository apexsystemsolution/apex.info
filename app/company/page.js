import Link from 'next/link';

export const metadata = {
  title: "About Company",
  description: "Learn about the mission, values, and engineering principles of APEX System and Solution Pvt Ltd, architecting sustainable, premium software solutions."
};

export default function Company() {
  const values = [
    {
      title: 'Technical Mastery',
      desc: 'We compile highly optimized code, configure automated pipelines, and architect resilient infrastructures to guarantee 100% service uptime.'
    },
    {
      title: 'Eco-Conscious Coding',
      desc: 'We are committed to reducing the carbon footprint of digital operations through serverless computing, green hosts, and optimized payload algorithms.'
    },
    {
      title: 'Operational Excellence',
      desc: 'We build systems with high transparency, reliable telemetry, and comprehensive unit-test coverage to exceed enterprise operational standards.'
    },
    {
      title: 'Human-Centric UX',
      desc: 'We believe complex software must feel intuitive. Every interface we construct is designed for speed, clarity, and access across all device viewports.'
    }
  ];

  return (
    <div style={{ backgroundColor: 'white' }}>
      {/* Intro Section */}
      <section className="section-py" style={{ borderBottom: '1px solid var(--neutral-200)' }}>
        <div className="container company-grid" style={{ alignItems: 'center' }}>
          <div>
            <span className="section-tag">Who We Are</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '24px' }}>
              Architecting Digital Value
            </h1>
            <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--primary)', marginBottom: '24px', borderRadius: '2px' }}></div>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--neutral-600)', fontWeight: 300, marginBottom: '20px' }}>
              APEX System and Solution Pvt Ltd is a premier software engineering firm dedicated to building high-performance web systems, custom SaaS applications, and enterprise brand solutions.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--neutral-600)', fontWeight: 300, marginBottom: '30px' }}>
              We merge cutting-edge technology stacks like Next.js, React, serverless functions, and relational database systems with a strict ethos of operational efficiency and ecological responsibility. From interactive collectors' portals like <strong>BinderDex</strong> to complex corporate platforms like <strong>Brichwood.lk</strong>, we build systems that scale effortlessly.
            </p>
            <Link href="/portfolio" className="btn btn-primary">
              View Work
            </Link>
          </div>

          {/* Graphics Card */}
          <div style={{
            background: 'linear-gradient(135deg, var(--neutral-900) 0%, var(--primary-hover) 100%)',
            padding: '50px 40px',
            borderRadius: 'var(--radius-xl)',
            color: 'white',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary)' }}>
              Our Statement
            </h3>
            <p style={{ fontSize: '24px', fontWeight: 300, lineHeight: 1.4, marginBottom: '40px', fontStyle: 'italic', color: 'var(--neutral-100)' }}>
              &ldquo;Engineering should not just solve immediate problems; it must be architected to stand the test of time, resource efficiency, and user experience.&rdquo;
            </p>
            
            <div style={{ borderTop: '1px solid var(--neutral-700)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--neutral-400)', textTransform: 'uppercase', letterSpacing: '1px' }}>Incorporated</div>
                <div style={{ fontSize: '16px', fontWeight: 700, marginTop: '4px' }}>Colombo, Sri Lanka</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--neutral-400)', textTransform: 'uppercase', letterSpacing: '1px' }}>Specialization</div>
                <div style={{ fontSize: '16px', fontWeight: 700, marginTop: '4px' }}>SaaS & Enterprise IT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-py" style={{ backgroundColor: 'var(--neutral-50)', borderBottom: '1px solid var(--neutral-200)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">Core Tenets</span>
          <h2 className="section-title">Our Engineering Principles</h2>
          <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--primary)', margin: '0 auto 24px auto', borderRadius: '2px' }}></div>
          <p className="section-desc" style={{ marginBottom: '60px' }}>
            We follow strict software engineering frameworks and corporate ethics to deliver premium reliability for our systems.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {values.map((val, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: 'white',
                  border: '1px solid var(--neutral-200)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '36px 24px',
                  textAlign: 'left',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s ease'
                }}
                className="value-card"
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '13px',
                  marginBottom: '20px'
                }}>
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--neutral-900)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {val.title}
                </h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--neutral-600)', fontWeight: 300 }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Vision CTA */}
      <section className="section-py" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <span className="section-tag">Partnerships</span>
          <h2 style={{ fontSize: '28px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px', color: 'var(--neutral-900)' }}>
            Elevate Your Corporate Technology
          </h2>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--neutral-600)', fontWeight: 300, marginBottom: '32px' }}>
            APEX builds partnerships based on mutual commitment to quality, optimization, and future-ready systems. Contact our engineering consultants to evaluate your digital roadmap.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Connect With Engineers
          </Link>
        </div>
      </section>

    </div>
  );
}
