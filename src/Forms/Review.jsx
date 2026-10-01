import React from 'react'
import styles from './Step2.module.css'
const Step3 = ({updatestep , data , progressPercentage}) => {
  return (
      <>

<div className="form-background">
      {/* Main Glass Container */}
      <div className="main-glass-container">
        
        {/* Heading Section */}
        <div className="heading-section">
          <h1>Developer Onboarding & Application</h1>
          <p>Fill out your details to generate your live preview professional card.</p>
        </div>

        {/* Linear Progress Bar */}
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

        {/* Two-Column Grid Layout for the 2 Cards */}
        <div className="cards-grid single-card">
          
         

          {/* Card 2: Live Preview Card */}
          <div className="glass-card preview-card">
            <div className="preview-glow"></div>

            <div>
              <div className="preview-header">
                <h3>Live Preview Summary</h3>
                <span className="preview-badge">Real-time</span>
              </div>

              <div className="form-space">
                <div className="profile-preview-box">
                  <div className="profile-avatar">{data.name && data.name.trim().length > 0 ? data.name.trim().charAt(0).toUpperCase() : 'N'}</div>
                  <div className="profile-info">
                    <h4>{data.name}</h4>
                    <p>{data.email}</p>
                  </div>
                </div>

                {/* Preview Details */}
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
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.5rem' , textAlign: 'center' }}>
    {data.skills && Array.isArray(data.skills) && data.skills.length > 0 ? (
      data.skills.map((s, i) => (
        <span key={i} className="skill-tag" style={{ fontSize: '0.95rem', background: 'rgba(37, 99, 235, 0.25)', border: '1px solid rgba(37, 99, 235, 0.4)', padding: '0.4rem 0.5rem', borderRadius: '6px', color: '#67e8f9' }}>
          {s}
        </span>
  
      ))
    ) : (
      <span className="value" style={{ color: '#94a3b8', fontSize: '0.8rem'  }}>No skills added</span>
    )}
  </div>
</div>


                </div>
              </div>
            </div>


    <div className="review-actions">
  <button className="next-btn" type="button" data-label="Previous" onClick={()=>updatestep((prev)=> prev - 1)}>
    Previous
  </button>
  <button className={styles.submitbtn} type="submit">
    <div className={styles.text}>Submit</div>
  </button>
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

export default Step3