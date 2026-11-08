import Link from 'next/link';

export const metadata = {
  title: "Portfolio",
  description: "Explore the systems built and managed by APEX System and Solution, including BinderDex Pokémon tracker and Brichwood enterprise website."
};

export default function Portfolio() {
  const projects = [
    {
      id: 'binderdex',
      name: 'BinderDex',
      tagline: 'Pokémon TCG Collection Tracker',
      description: 'A virtual collection companion and tracker designed for Pokémon Trading Card Game players and collectors. Enables users to explore expansions, catalog card prints, manage virtual card binders, and persist wishlists dynamically.',
      link: 'https://binder-dex.netlify.app/',
      image: '/assets/apex/logo.png', // Fallback graphics
      industry: 'Gaming & SaaS Tracker',
      techStack: ['Next.js', 'React Context', 'Vanilla CSS', 'REST API Integrations', 'Netlify Edge Hosting'],
      features: [
        'Interactive virtual binders with instant-tap ownership toggle',
        'Wishlist tracking to monitor missing expansion items',
        'Database cataloging covering over 15,000+ prints across 200+ sets',
        'Automatic cross-device collection synchronization',
        'Dual light/dark cyber-aesthetic modes'
      ]
    },
    {
      id: 'brichwood',
      name: 'Brichwood.lk',
      tagline: 'Diversified Corporate Enterprise Portal',
      description: 'A premium corporate web platform designed for a multi-sector business group. Showcases diversified brand ecosystems spanning Gourmet Food, Eco-conscious Agribusiness, Tourism & Hospitality, Luxury Real Estate, and FMCG.',
      link: 'https://www.brichwood.lk/',
      image: '/assets/apex/logo.png',
      industry: 'Enterprise Corporates',
      techStack: ['Next.js', 'React Server Components', 'Responsive CSS', 'SEO Ld-JSON Schemas'],
      features: [
        'Unified sector showcase and interactive brand card ecosystems',
        'Custom infinite brand marquees with smooth scrolling animations',
        'Integrated Publications reader for CEO leadership works',
        'Comprehensive SEO schema structure for high regional ranking',
        'Glassmorphic layouts with mobile responsive navigation drawers'
      ]
    }
  ];

  return (
    <div className="section-py" style={{ backgroundColor: 'white' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-tag">Case Studies</span>
          <h1 className="section-title">Systems Showcase</h1>
          <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--primary)', margin: '0 auto 20px auto', borderRadius: '2px' }}></div>
          <p className="section-desc">
            Explore the active software systems, tools, and enterprise portals engineered and hosted under the APEX brand ecosystem.
          </p>
        </div>

        {/* Project List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={project.id}
                id={project.id}
                style={{
                  alignItems: 'center',
                  paddingBottom: '80px',
                  borderBottom: index < projects.length - 1 ? '1px solid var(--neutral-200)' : 'none'
                }}
                className="portfolio-item-grid"
              >
                {/* Details side */}
                <div style={{ order: isEven ? 1 : 2 }}>
                  <span className="section-tag" style={{ color: 'var(--primary)', marginBottom: '8px' }}>
                    {project.industry}
                  </span>
                  <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--neutral-900)', marginBottom: '16px', textTransform: 'uppercase' }}>
                    {project.name}
                  </h2>
                  <p style={{ fontSize: '15px', fontWeight: 650, color: 'var(--primary)', marginBottom: '16px' }}>
                    {project.tagline}
                  </p>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--neutral-600)', fontWeight: 300, marginBottom: '24px' }}>
                    {project.description}
                  </p>

                  <h4 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--neutral-800)', marginBottom: '12px' }}>
                    Key Features
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
                    {project.features.map((feature, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: '10px', fontSize: '13px', color: 'var(--neutral-650)', color: 'var(--neutral-600)', fontWeight: 300 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '30px' }}>
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        style={{
                          fontSize: '11px',
                          fontWeight: 500,
                          backgroundColor: 'var(--neutral-100)',
                          color: 'var(--neutral-700)',
                          padding: '4px 12px',
                          borderRadius: 'var(--radius-full)',
                          border: '1px solid var(--neutral-200)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    Visit Live Site
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" x2="17" y1="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>

                {/* Graphics side */}
                <div style={{
                  order: isEven ? 2 : 1,
                  background: 'linear-gradient(135deg, var(--primary-light) 0%, rgba(28, 121, 168, 0.05) 100%)',
                  padding: '50px',
                  borderRadius: 'var(--radius-xl)',
                  border: '1.5px dashed var(--neutral-300)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '320px',
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative',
                  overflow: 'hidden'
                }} className="portfolio-graphic">
                  {/* Subtle watermarked overlay */}
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    fontSize: '120px',
                    fontWeight: 900,
                    color: 'rgba(28, 121, 168, 0.03)',
                    userSelect: 'none',
                    letterSpacing: '-5px'
                  }}>
                    APEX
                  </div>
                  
                  <div style={{ textAlign: 'center', zIndex: 1 }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px auto',
                      boxShadow: 'var(--shadow-md)',
                      border: '1px solid var(--neutral-200)'
                    }}>
                      <img 
                        src="/assets/apex/logo.png" 
                        alt="Project icon" 
                        style={{ maxWidth: '70%', maxHeight: '70%', objectFit: 'contain' }}
                      />
                    </div>
                    <span style={{
                      fontSize: '18px',
                      fontWeight: 800,
                      color: 'var(--neutral-900)',
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}>
                      {project.name}
                    </span>
                    <p style={{ fontSize: '11px', color: 'var(--neutral-500)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                      {project.industry}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
