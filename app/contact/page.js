'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitted: true,
        success: false,
        message: 'Please complete all required fields.'
      });
      return;
    }
    
    // Simulate API request
    setStatus({
      submitted: true,
      success: true,
      message: 'Thank you for reaching out! Our engineering team will contact you shortly.'
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="section-py" style={{ backgroundColor: 'white' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-tag">Get in Touch</span>
          <h1 className="section-title">Connect with Engineers</h1>
          <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--primary)', margin: '0 auto 20px auto', borderRadius: '2px' }}></div>
          <p className="section-desc">
            Partner with APEX to build high-performance systems. Submit your details below to schedule an architectural consultation.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px' }} className="contact-grid">
          {/* Details side */}
          <div>
            <span className="section-tag" style={{ color: 'var(--primary)', marginBottom: '8px' }}>Office details</span>
            <h2 style={{ fontSize: '28px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--neutral-900)', marginBottom: '24px' }}>
              Headquarters
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--neutral-900)', marginBottom: '4px' }}>Address</h4>
                  <p style={{ fontSize: '14px', color: 'var(--neutral-600)', fontWeight: 300, lineHeight: 1.5 }}>
                    No: 123, Galle Road, <br/>
                    Colombo 03, Sri Lanka
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--neutral-900)', marginBottom: '4px' }}>Email</h4>
                  <a href="mailto:apexsystemsolution.lk@gmail.com" style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: 500, wordBreak: 'break-all' }}>
                    apexsystemsolution.lk@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--neutral-900)', marginBottom: '4px' }}>Phone</h4>
                  <p style={{ fontSize: '14px', color: 'var(--neutral-600)', fontWeight: 300 }}>
                    +94 11 234 5678
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div style={{
            background: 'var(--neutral-50)',
            border: '1px solid var(--neutral-200)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="contact-form-row">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="name" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--neutral-500)' }}>Your Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--neutral-300)',
                      fontSize: '14px',
                      backgroundColor: 'white',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--neutral-300)'}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="email" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--neutral-500)' }}>Your Email *</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--neutral-300)',
                      fontSize: '14px',
                      backgroundColor: 'white',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--neutral-300)'}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="subject" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--neutral-500)' }}>Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={{
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--neutral-300)',
                    fontSize: '14px',
                    backgroundColor: 'white',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--neutral-300)'}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="message" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--neutral-500)' }}>Your Message *</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--neutral-300)',
                    fontSize: '14px',
                    backgroundColor: 'white',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--neutral-300)'}
                ></textarea>
              </div>

              {status.submitted && (
                <div style={{
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '13px',
                  backgroundColor: status.success ? '#e8f5e9' : '#ffebee',
                  color: status.success ? '#2e7d32' : '#c62828',
                  border: `1px solid ${status.success ? '#a5d6a7' : '#ef9a9a'}`
                }}>
                  {status.message}
                </div>
              )}

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .contact-form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
