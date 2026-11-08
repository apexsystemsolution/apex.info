import Link from 'next/link';

export const metadata = {
  title: "Publications & Case Studies",
  description: "Read technical case studies, software architecture whitepapers, and engineering insights published by the APEX development team."
};

export default function Publications() {
  const publications = [
    {
      title: 'Architecting Serverless Collector Trackers',
      category: 'Case Study',
      date: 'June 2026',
      author: 'APEX Engineering Group',
      desc: 'An in-depth analysis of scaling high-traffic collectors\' databases using Next.js App Router, client-side indexed caching, and automated cloud sync workflows. Focuses on the development timeline and system metrics of BinderDex.',
      readTime: '8 min read'
    },
    {
      title: 'Multi-Sector Enterprise Architectures',
      category: 'Whitepaper',
      date: 'May 2026',
      author: 'APEX Engineering Group',
      desc: 'Exploring design patterns for diversified corporate networks. Discusses how to unify independent brand requirements, assets, and ESG goals under a singular high-performance web structure like Brichwood.lk.',
      readTime: '12 min read'
    },
    {
      title: 'Green Computing: Code Carbon Optimization',
      category: 'Research Article',
      date: 'April 2026',
      author: 'ESG Tech Committee',
      desc: 'Technical research on reducing network payload complexity, caching static assets recursively, and optimizing compiler loops to reduce the energy consumption of modern serverless functions.',
      readTime: '10 min read'
    }
  ];

  return (
    <div className="section-py" style={{ backgroundColor: 'white' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-tag">Library</span>
          <h1 className="section-title">Publications &amp; Insights</h1>
          <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--primary)', margin: '0 auto 20px auto', borderRadius: '2px' }}></div>
          <p className="section-desc">
            Explore whitepapers, architectural case studies, and engineering guidelines authored by our core software development group.
          </p>
        </div>

        {/* Publications Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px'
        }}>
          {publications.map((pub, idx) => (
            <article 
              key={idx}
              style={{
                backgroundColor: 'var(--neutral-50)',
                border: '1px solid var(--neutral-200)',
                borderRadius: 'var(--radius-lg)',
                padding: '40px 30px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease'
              }}
              className="publication-card"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--primary)',
                  letterSpacing: '1px',
                  backgroundColor: 'var(--primary-light)',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)'
                }}>
                  {pub.category}
                </span>
                <span style={{ fontSize: '12px', color: 'var(--neutral-500)' }}>
                  {pub.date}
                </span>
              </div>

              <h3 style={{
                fontSize: '20px',
                fontWeight: 750,
                color: 'var(--neutral-900)',
                lineHeight: 1.3,
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '-0.3px'
              }}>
                {pub.title}
              </h3>

              <p style={{
                fontSize: '13.5px',
                lineHeight: 1.6,
                color: 'var(--neutral-600)',
                fontWeight: 300,
                marginBottom: '24px',
                flexGrow: 1
              }}>
                {pub.desc}
              </p>

              <div style={{
                borderTop: '1px solid var(--neutral-200)',
                paddingTop: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <span style={{ fontSize: '11px', color: 'var(--neutral-400)', display: 'block', textTransform: 'uppercase' }}>Author</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--neutral-700)' }}>{pub.author}</span>
                </div>
                <span style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'var(--neutral-500)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {pub.readTime}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
