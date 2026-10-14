import React, { useState, useImperativeHandle, forwardRef, useEffect } from 'react';
import './RobotCaptcha.css';

const RobotCaptcha = forwardRef(function RobotCaptcha(
  { onChange, error, className = '' },
  ref
) {
  const [status, setStatus] = useState('idle'); // 'idle' | 'checking' | 'verified'
  const [token, setToken] = useState('');

  useImperativeHandle(ref, () => ({
    reset: () => {
      setStatus('idle');
      setToken('');
      if (onChange) onChange(false, '');
    },
    isValid: () => status === 'verified',
    getToken: () => token,
  }));

  const handleClick = (e) => {
    if (status === 'checking' || status === 'verified') return;

    setStatus('checking');

    // Simulate realistic human verification check
    const latency = 450 + Math.floor(Math.random() * 250);

    setTimeout(() => {
      const generatedToken = `human_verified_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
      setStatus('verified');
      setToken(generatedToken);
      if (onChange) {
        onChange(true, generatedToken);
      }
    }, latency);
  };

  return (
    <div className={`robot-captcha-wrapper ${className}`}>
      <div 
        className={`robot-captcha-card ${status === 'verified' ? 'is-verified' : ''}`}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick(e);
          }
        }}
        aria-label="I'm not a robot security checkbox"
      >
        <div className="robot-captcha-left">
          <div className="robot-checkbox-container">
            {status === 'idle' && (
              <div className="robot-checkbox-box" title="Click to verify you are not a robot"></div>
            )}
            {status === 'checking' && (
              <div className="robot-checkbox-spinner" title="Verifying..."></div>
            )}
            {status === 'verified' && (
              <div className="robot-checkbox-checked" title="Verified">
                <svg viewBox="0 0 24 24" className="robot-checkmark-icon">
                  <path
                    fill="none"
                    stroke="#0f9d58"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 12l5 5L20 6"
                  />
                </svg>
              </div>
            )}
          </div>
          <span className="robot-captcha-label">I'm not a robot</span>
        </div>

        <div className="robot-captcha-right">
          <div className="robot-logo-icon">
            <svg viewBox="0 0 48 48" className="robot-recaptcha-svg">
              <path
                fill="#1a73e8"
                d="M24 4C12.95 4 4 12.95 4 24c0 4.12 1.25 7.96 3.4 11.16l4.63-4.63C10.74 28.38 10 26.28 10 24c0-7.73 6.27-14 14-14 3.75 0 7.17 1.48 9.7 3.9l4.5-4.5C34.39 5.8 29.47 4 24 4z"
              />
              <path
                fill="#4285f4"
                d="M38.2 12.4l-4.5 4.5C35.26 18.42 36 20.52 36 24c0 7.73-6.27 14-14 14-3.75 0-7.17-1.48-9.7-3.9l-4.5 4.5C11.61 42.2 16.53 44 24 44c11.05 0 20-8.95 20-20 0-4.12-1.25-7.96-3.4-11.16l-2.4-.44z"
              />
              <path
                fill="#ea4335"
                d="M24 16c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
              />
            </svg>
          </div>
          <div className="robot-brand-text">
            <span className="robot-brand-title">reCAPTCHA</span>
            <div className="robot-brand-links">
              <span>Privacy</span>
              <span>-</span>
              <span>Terms</span>
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="robot-captcha-error" role="alert">
          <i className="fa-solid fa-triangle-exclamation"></i>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
});

export default RobotCaptcha;
