import React, { useState } from 'react';
import '../Forms/Main.css' ;

const Step2 = ({ updatestep, data, setData  , progressPercentage }) => {

  const [skillinput, setskillinput] = useState("");
  const [error, setError] = useState(false);

  const handlekey = (e) => {
    if (e.key === 'Enter' && skillinput.trim() !== "") {
      e.preventDefault();
      
      if (data.skills && data.skills.length >= 4) {
        alert("Aap maximum 4 skills hi add kar sakti hain!");
        setskillinput("");
        return;
      }

      setData((prev) => ({
        ...prev,
        skills: [...(prev.skills || []), skillinput.trim()]
      }));
      setskillinput(""); 
    }
  };

  const removeSkill = (indexToRemove) => {
    setData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, index) => index !== indexToRemove)
    }));
  };

  const handle = () => {
    
    if (!data.role || !data.role.trim() || !data.level || !data.level.trim() || !data.skills || data.skills.length < 4) {
      setError(true); 
      return;
    }
      
    setError(false);
    updatestep((prev) => prev + 1);
  };



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
                <h2 className="card-title">2. Professional Information</h2>
              </div>

              <div className="form-center">
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
                      Please fill in all fields and ensure you add all 4 skills!
                    </div>
                  )}

                  <div className="input-container">
                    <input 
                      type="text" 
                      id="role" 
                      placeholder=" " 
                      className="input-field" 
                      value={data.role || ""}  
                      onChange={(e) => {
                        setData({...data, role: e.target.value});
                        setError(false);
                      }} 
                    />
                    <label htmlFor="role" className="floating-label">Your Role</label>
                  </div>

                  <div className="input-container">
                    <input 
                      type="text" 
                      id="level" 
                      placeholder=" " 
                      className="input-field" 
                      value={data.level || ""}  
                      onChange={(e) => {
                        setData({...data, level: e.target.value});
                        setError(false);
                      }}      
                    />
                    <label htmlFor="level" className="floating-label">Level</label>
                  </div>

                  {/* Skills Input with Enter handler */}
                  <div className="input-container">
                    <input 
                      type="text" 
                      id="skills" 
                      placeholder=" " 
                      className="input-field"  
                      value={skillinput}  
                      onChange={(e) => {
                        setskillinput(e.target.value);
                        setError(false);
                      }}
                      onKeyDown={handlekey}
                      disabled={data.skills && data.skills.length >= 4}
                    />
                    <label htmlFor="skills" className="floating-label">
                      {data.skills && data.skills.length >= 4 ? "Max 4 skills added!" : "Your Skills (Press Enter)"}
                    </label>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                    {data.skills && Array.isArray(data.skills) && data.skills.map((skill, index) => (
                      <span key={index} style={{
                        background: 'rgba(6, 182, 212, 0.2)',
                        color: '#67e8f9',
                        border: '1px solid rgba(6, 182, 212, 0.4)',
                        padding: '0.25rem 0.625rem',
                        borderRadius: '999px',
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}>
                        {skill}
                        <button 
                          type="button" 
                          onClick={() => removeSkill(index)}
                          style={{ background: 'none', border: 'none', color: '#ff5555', cursor: 'pointer', fontWeight: 'bold' }}
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              <div className="card-actions">
                <button className="next-btn" type="button" data-label="Previous" onClick={() => updatestep((prev) => prev - 1)}>
                  Previous
                </button>
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
                    <div className="profile-avatar">{data.name && data.name.trim().length > 0 ? data.name.trim().charAt(0).toUpperCase() : 'N'}</div>
                    <div className="profile-info">
                      <h4>{data.name}</h4>
                      <p>{data.email}</p>
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

                    {/* Preview mein skills*/}
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

              <div className="preview-footer">
                <p>All right reserved by noor 2026</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Step2;