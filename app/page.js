import Link from 'next/link';

export default function Home() {
  const services = [
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      description: 'Engineering high-performance backends, scalable microservices, and robust APIs tailored to your business operations.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu">
          <rect width="16" height="16" x="4" y="4" rx="2"></rect>
          <rect width="6" height="6" x="9" y="9" rx="1"></rect>
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"></path>
        </svg>
      )
    },
    {
      id: 'web-mobile',
      title: 'Web & Mobile Solutions',
      description: 'Building premium, lightning-fast web applications and responsive mobile interfaces with user-centric design.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
          <path d="M12 18h.01"></path>
        </svg>
      )
    },
    {
      id: 'cloud-devops',
      title: 'Cloud Operations & DevOps',
      description: 'Architecting secure cloud environments, optimizing server performance, and automating continuous deployment pipelines.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud-cog">
          <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
          <path d="M8.5 14.5a2.5 2.5 0 1 1 3.5 3.5"></path>
          <path d="m11 16 2.5 2.5"></path>
          <path d="m13.5 16-2.5 2.5"></path>
        </svg>
      )
    },
    {
      id: 'consulting',
      title: 'IT Consulting & Strategy',
      description: 'Providing strategic technical audits, legacy system modernization, and custom enterprise architectural planning.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .6 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
          <path d="M9 18h6M10 22h4"></path>
        </svg>
      )
    }
  ];

  const brandEcosystem = [
    { name: 'BinderDex', label: 'Pokémon Collection SaaS', image: '/assets/apex/logo.png' },
    { name: 'Brichwood.lk', label: 'Eco Enterprise Portal', image: '/assets/apex/logo.png' },
    { name: 'PureGrow Agri', label: 'Agribusiness Dashboard', image: '/assets/apex/logo.png' },
    { name: 'Zora Wellness', label: 'FMCG E-Commerce Platform', image: '/assets/apex/logo.png' },
    { name: 'Orient Hotels', label: 'Hospitality Booking App', image: '/assets/apex/logo.png' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section" style={{
        position: 'relative',
        height: 'calc(100vh - var(--header-height))',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 10% 20%, rgba(28, 121, 168, 0.15) 0%, rgba(15, 23, 42, 0.95) 90%), url("/assets/home/hero/hero.png") center/cover no-repeat',
        backgroundColor: '#0f172a'
      }}>
        {/* Soft overlay lines/elements */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, transparent 60%, var(--neutral-900) 100%)',
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: 'white' }}>
          <span className="section-tag animate-fade-in-down" style={{ 
            color: 'var(--secondary)', 
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            padding: '6px 18px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            Architecting Digital Frontiers
          </span>
          <h1 className="hero-title" style={{
            fontSize: 'clamp(32px, 6vw, 68px)',
            fontWeight: 800,
            lineHeight: 1.15,
            textTransform: 'uppercase',
            letterSpacing: '-1px',
            marginBottom: '24px',
            marginTop: '16px'
          }}>
            Premium Software <br/>
            <span style={{ color: 'var(--primary)' }}>Engineering Solutions</span>
          </h1>
          <p className="hero-subtitle" style={{
            fontSize: 'clamp(14px, 2vw, 18px)',
            fontWeight: 300,
            maxWidth: '700px',
            margin: '0 auto 40px auto',
            lineHeight: 1.6,
            color: 'var(--neutral-300)'
          }}>
            At <strong style={{ color: 'white', fontWeight: 600 }}>APEX</strong>, we merge technical mastery with eco-conscious execution, delivering enterprise systems, interactive collectors' applications, and custom digital portals.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/portfolio" className="btn btn-primary">
              Explore Portfolio
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Start Project
            </Link>
          </div>
        </div>

        {/* Scroll indicator dot */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
          <div style={{
            width: '2px',
            height: '40px',
            background: 'linear-gradient(to bottom, var(--primary) 0%, transparent 100%)',
            position: 'relative',
            borderRadius: 'var(--radius-full)',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '10%',
              left: 0,
              width: '100%',
              height: '10px',
              backgroundColor: 'var(--secondary)',
              borderRadius: '50%',
              animation: 'scroll-dot 2s infinite ease-in-out'
            }}></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-py" style={{ backgroundColor: 'var(--neutral-50)', position: 'relative' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">Services Overview</span>
          <h2 className="section-title">Core Development Sectors</h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--primary)', margin: '0 auto 24px auto', borderRadius: '2px' }}></div>
          <p className="section-desc" style={{ marginBottom: '60px' }}>
            We specialize in crafting resilient codebases, optimizing server infrastructures, and scaling digital experiences across four critical software dimensions.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginTop: '40px'
          }}>
            {services.map((service) => (
              <div 
                key={service.id} 
                className="service-card" 
                style={{
                  backgroundColor: 'white',
                  border: '1px solid var(--neutral-200)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '40px 30px',
                  textAlign: 'left',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '14px', color: 'var(--neutral-900)' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--neutral-650)', fontWeight: 300, color: 'var(--neutral-550)' }}>
                  {service.description}
                </p>
                <Link 
                  href={`/portfolio#${service.id}`} 
                  style={{
                    marginTop: 'auto',
                    paddingTop: '20px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--primary)',
                    letterSpacing: '1px'
                  }}
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" x2="19" y1="12" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Ecosystem / Marquee */}
      <section className="section-py" style={{ backgroundColor: 'white', borderBottom: '1px solid var(--neutral-200)' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="section-tag">System Ecosystem</span>
          <h2 className="section-title">Built & Managed by APEX</h2>
          <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--primary)', margin: '0 auto 20px auto', borderRadius: '2px' }}></div>
          <p className="section-desc">
            We architect end-to-end software infrastructures for a variety of web platforms, enterprise systems, and community trackers.
          </p>
        </div>

        {/* Infinite Marquee */}
        <div className="marquee-container">
          <div className="marquee-content">
            {/* Render twice for continuous loop */}
            {[...brandEcosystem, ...brandEcosystem].map((item, idx) => (
              <div className="marquee-item" key={`${item.name}-${idx}`}>
                <div className="marquee-card">
                  <div className="marquee-img-wrapper">
                    {/* Replaced generic placeholder with APEX logo as brand graphic */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--primary)', letterSpacing: '1px' }}>
                        {item.name}
                      </span>
                    </div>
                  </div>
                  <span className="marquee-label">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section style={{
        background: 'linear-gradient(135deg, var(--neutral-900) 0%, var(--primary-hover) 100%)',
        color: 'white',
        padding: '60px 0'
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '38px', fontWeight: 800, color: 'var(--secondary)', marginBottom: '8px' }}>15+</div>
            <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--neutral-300)' }}>
              Active Systems
            </div>
          </div>
          <div>
            <div style={{ fontSize: '38px', fontWeight: 800, color: 'var(--secondary)', marginBottom: '8px' }}>1.2M+</div>
            <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--neutral-300)' }}>
              Daily API Requests
            </div>
          </div>
          <div>
            <div style={{ fontSize: '38px', fontWeight: 800, color: 'var(--secondary)', marginBottom: '8px' }}>98.2%</div>
            <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--neutral-300)' }}>
              Test Code Coverage
            </div>
          </div>
          <div>
            <div style={{ fontSize: '38px', fontWeight: 800, color: 'var(--secondary)', marginBottom: '8px' }}>100%</div>
            <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--neutral-300)' }}>
              Service Uptime SLA
            </div>
          </div>
        </div>
      </section>

      {/* Eco Vibe / Sustainability Focus */}
      <section className="section-py" style={{
        position: 'relative',
        backgroundColor: 'var(--neutral-50)',
        overflow: 'hidden'
      }}>
        <div className="container sustainability-grid" style={{
          alignItems: 'center'
        }}>
          {/* Left Text */}
          <div>
            <span className="section-tag" style={{ color: '#2e7d32' }}>ESG & Green Code</span>
            <h2 className="section-title" style={{ marginBottom: '24px' }}>
              Optimized for <br/>
              <span style={{ color: '#2e7d32' }}>Carbon-Neutral Tech</span>
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--neutral-650)', fontWeight: 300, marginBottom: '30px', color: 'var(--neutral-600)' }}>
              APEX believes that high-performance code is also energy-efficient code. By minimizing execution complexity, choosing green cloud hosts, and reducing data payloads, we drastically shrink the digital carbon footprint of our portfolio systems.
            </p>
            <Link href="/sustainability" className="btn btn-outline" style={{ color: '#2e7d32', borderColor: '#2e7d32' }}>
              Our Green Initiative
            </Link>
          </div>

          {/* Right graphic/panel */}
          <div style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
            padding: '50px',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid #a5d6a7',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#2e7d32',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
              </div>
              <div>
                <h4 style={{ color: '#1b5e20', fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>Efficient Serverless Functions</h4>
                <p style={{ color: '#2e7d32', fontSize: '13px', fontWeight: 300 }}>Reducing idling power consumption on AWS Lambda & Netlify Edges.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#2e7d32',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
              </div>
              <div>
                <h4 style={{ color: '#1b5e20', fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>Optimized Asset Delivery</h4>
                <p style={{ color: '#2e7d32', fontSize: '13px', fontWeight: 300 }}>Compressing files recursively to save network bandwidth energy.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#2e7d32',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
              </div>
              <div>
                <h4 style={{ color: '#1b5e20', fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>Eco-Conscious Development Cycle</h4>
                <p style={{ color: '#2e7d32', fontSize: '13px', fontWeight: 300 }}>Writing cleaner dependencies to decrease server build-cycle computing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Call To Action */}
      <section className="section-py" style={{
        background: 'linear-gradient(135deg, rgba(28, 121, 168, 0.04) 0%, rgba(0, 188, 212, 0.04) 100%)',
        textAlign: 'center',
        borderTop: '1px solid var(--neutral-200)',
        borderBottom: '1px solid var(--neutral-200)'
      }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--neutral-900)', textTransform: 'uppercase', marginBottom: '16px' }}>
            Ready to Build a Premium System?
          </h2>
          <p style={{ color: 'var(--neutral-600)', fontWeight: 300, fontSize: '15px', maxWidth: '550px', margin: '0 auto 36px auto', lineHeight: 1.6 }}>
            Collaborate with APEX for high-performance enterprise setups, collectors' platforms, and custom digital interfaces.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Start Your Project
          </Link>
        </div>
      </section>

    </div>
  );
}
