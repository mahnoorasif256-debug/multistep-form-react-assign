import React, { useState } from 'react'
import '../Forms/Main.css'

const Step1 = ({ updatestep, data, setData , progressPercentage }) => {
  const [error, setError] = useState(false);

  const handle = () => {
    if (!data.name.trim() || !data.email.trim() || !data.contact.trim()) {
      setError(true); 
      return;
    }
    
    setError(false);
    updatestep((prev) => prev + 1);
  }

  return (
    <>
      <div className="form-background">
        <div className="main-glass-container">
          
          <div className="heading-section">
            <h1>Developer Onboarding & Application</h1>
            <p>Fill out your details to generate your live preview professional card.</p>
          </div>

      <div className="progress-container">
  <div className="progress-info">
    <span>Progress</span>
    <span>{Math.round(progressPercentage)}% Completed</span>
  </div>
  <div className="progress-track">
    <div 
      className="progress-fill" 
      style={{ width: `${progressPercentage}%` }}
    ></div>
  </div>
</div>

          <div className="cards-grid">
            
            <div className="glass-card">
              <div>
                <h2 className="card-title">1. Personal Information</h2>

                <div className="form-space">
                  
                  {error && (
                    <div className="error-banner" style={{ 
                      background: 'rgba(239, 68, 68, 0.15)', 
                      color: '#f87171', 
                      padding: '12px 16px', 
                      borderRadius: '12px', 
                      marginBottom: '15px', 
                      textAlign: 'center', 
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      Please fill in all personal fields before proceeding!
                    </div>
                  )}

                  <div className="input-container">
                    <input 
                      type="text" 
                      id="name"
                      placeholder=" " 
                      className="input-field" 
                      value={data.name}   
                      onChange={(e) => {
                        setData({...data, name: e.target.value}); 
                        setError(false);
                      }}   
                    />
                    <label htmlFor="name" className="floating-label">Full Name</label>
                  </div>

                  <div className="input-container">
                    <input 
                      type="email" 
                      id="email"
                      placeholder=" " 
                      className="input-field"
                      value={data.email}   
                      onChange={(e) => {
                        setData({...data, email: e.target.value}); 
                        setError(false);
                      }}   
                    />
                    <label htmlFor="email" className="floating-label">Email Address</label>
                  </div>

                  <div className="input-container">
                    <input 
                      type="number" 
                      id="contact"
                      placeholder=" " 
                      className="input-field" 
                      value={data.contact}  
                      onChange={(e) => {
                        setData({...data, contact: e.target.value}); 
                        setError(false);
                      }}    
                    />
                    <label htmlFor="contact" className="floating-label">Contact number</label>
                  </div>
                </div>
              </div>

              <div className="card-actions">
                <div></div>
                <button className="next-btn" type="button" data-label="Next" onClick={handle}>
                  Next
                </button>
              </div>
            </div>

            {/* Live Preview Card */}
            <div className="glass-card preview-card">
              <div className="preview-glow"></div>

              <div>
                <div className="preview-header">
                  <h3>Live Preview Summary</h3>
                  <span className="preview-badge">Real-time</span>
                </div>

                <div className="form-space">
                  <div className="profile-preview-box">
                    <div className="profile-avatar">
                      {data.name && data.name.trim().length > 0 ? data.name.trim().charAt(0).toUpperCase() : 'N'}
                    </div>
                    <div className="profile-info">
                      <h4>{data.name || "Your Name Here"}</h4>
                      <p>{data.email || "your.email@example.com"}</p>
                    </div>
                  </div>

                  <div className="preview-details-grid">
                    <div className="detail-box">
                      <span className="label">Contact Number</span>
                      <span className="value">{data.contact}</span>
                    </div>
                    <div className="detail-box">
                      <span className="label">Selected Role</span>
                      <span className="value">{data.role}</span>
                    </div>
                    <div className="detail-box">
                      <span className="label">Level</span>
                      <span className="value">{data.level}</span>
                    </div>
                    <div className="detail-box">
                      <span className="label">Skills Tags</span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.5rem', textAlign: 'center' }}>
                        {data.skills && Array.isArray(data.skills) && data.skills.length > 0 ? (
                          data.skills.map((s, i) => (
                            <span key={i} style={{ fontSize: '0.95rem', background: 'rgba(37, 99, 235, 0.25)', border: '1px solid rgba(37, 99, 235, 0.4)', padding: '0.4rem 0.5rem', borderRadius: '6px', width: '15%', color: '#67e8f9' }}>
                              {s}
                            </span>
                          ))
                        ) : (
                          <span className="value" style={{ color: '#94a3b8', fontSize: '0.8rem' }}>No skills added</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="preview-footer">
                <p>All right reserved by noor 2026</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Step1;