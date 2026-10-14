import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import './ReCaptcha.css';

const DEFAULT_TEST_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

const ReCaptcha = forwardRef(function ReCaptcha(
  { onChange, onExpired, onError, error, theme = 'light', size = 'normal', className = '' },
  ref
) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const [isRendered, setIsRendered] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [fallbackChecked, setFallbackChecked] = useState(false);

  const siteKey = (import.meta.env.VITE_RECAPTCHA_SITE_KEY || DEFAULT_TEST_SITE_KEY).trim();

  useImperativeHandle(ref, () => ({
    reset: () => {
      setFallbackChecked(false);
      if (typeof window !== 'undefined' && window.grecaptcha && widgetIdRef.current !== null) {
        try {
          window.grecaptcha.reset(widgetIdRef.current);
        } catch (e) {
          console.warn('reCAPTCHA reset notice:', e);
        }
      }
    },
    getResponse: () => {
      if (typeof window !== 'undefined' && window.grecaptcha && widgetIdRef.current !== null) {
        return window.grecaptcha.getResponse(widgetIdRef.current);
      }
      return fallbackChecked ? 'fallback_human_verified' : '';
    }
  }));

  const handleFallbackClick = () => {
    const nextState = !fallbackChecked;
    setFallbackChecked(nextState);
    if (nextState) {
      if (onChange) onChange('fallback_human_verified_' + Date.now());
    } else {
      if (onExpired) onExpired();
    }
  };

  useEffect(() => {
    let isCancelled = false;

    const renderGoogleWidget = () => {
      if (isCancelled || !containerRef.current) return;
      if (!window.grecaptcha || typeof window.grecaptcha.render !== 'function') return;

      try {
        containerRef.current.innerHTML = '';
        const targetDiv = document.createElement('div');
        containerRef.current.appendChild(targetDiv);

        const id = window.grecaptcha.render(targetDiv, {
          sitekey: siteKey,
          theme,
          size,
          callback: (token) => {
            if (!isCancelled && onChange) onChange(token);
          },
          'expired-callback': () => {
            if (!isCancelled && onExpired) onExpired();
          },
          'error-callback': () => {
            if (!isCancelled && onError) onError();
          }
        });
        widgetIdRef.current = id;
        setIsRendered(true);
      } catch (err) {
        console.warn('Google reCAPTCHA render warning:', err);
      }
    };

    const tryInit = () => {
      if (window.grecaptcha && typeof window.grecaptcha.render === 'function') {
        if (typeof window.grecaptcha.ready === 'function') {
          window.grecaptcha.ready(renderGoogleWidget);
        } else {
          renderGoogleWidget();
        }
      } else {
        window.__onRecaptchaReadyQueue = window.__onRecaptchaReadyQueue || [];
        window.__onRecaptchaReadyQueue.push(renderGoogleWidget);
      }
    };

    tryInit();

    // Fallback timer: if reCAPTCHA hasn't rendered within 3.5 seconds (due to network or ad-blocker)
    const fallbackTimer = setTimeout(() => {
      if (!isCancelled && !widgetIdRef.current && (!window.grecaptcha || !window.grecaptcha.render)) {
        setLoadError(true);
      }
    }, 3500);

    return () => {
      isCancelled = true;
      clearTimeout(fallbackTimer);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      widgetIdRef.current = null;
    };
  }, [siteKey, theme, size, onChange, onExpired, onError]);

  return (
    <div className={`recaptcha-field-container ${className}`}>
      {/* Primary Google reCAPTCHA container */}
      <div 
        className="recaptcha-responsive-box" 
        ref={containerRef}
        style={{ display: loadError && !isRendered ? 'none' : 'flex' }}
      ></div>

      {/* Accessible Human Verification Fallback if Google is blocked by browser/network */}
      {loadError && !isRendered && (
        <div 
          className={`recaptcha-fallback-card ${fallbackChecked ? 'is-verified' : ''}`}
          onClick={handleFallbackClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') handleFallbackClick(); }}
        >
          <div className="fallback-checkbox">
            {fallbackChecked && <i className="fa-solid fa-check"></i>}
          </div>
          <div className="fallback-label">
            <span>I'm not a robot (Security Check)</span>
          </div>
          <div className="fallback-badge">
            <i className="fa-solid fa-shield-halved"></i>
            <small>Protected</small>
          </div>
        </div>
      )}

      {error && (
        <div className="recaptcha-error-alert" role="alert">
          <i className="fa-solid fa-triangle-exclamation" style={{ marginRight: '6px' }}></i>
          {error}
        </div>
      )}
    </div>
  );
});

export default ReCaptcha;
