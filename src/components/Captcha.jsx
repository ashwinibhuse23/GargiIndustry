import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { LuRefreshCw, LuVolume2, LuCheck, LuShieldCheck } from 'react-icons/lu';
import './Captcha.css';

// Exclude easily confused characters like O, 0, I, 1, l
const CHAR_SET = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';

function generateRandomCode(length = 5) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += CHAR_SET.charAt(Math.floor(Math.random() * CHAR_SET.length));
  }
  return result;
}

const Captcha = forwardRef(function Captcha(
  { onChange, error, label = 'Security Verification', className = '' },
  ref
) {
  const canvasRef = useRef(null);
  const [captchaCode, setCaptchaCode] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isRotating, setIsRotating] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Expose reset and validation to parent forms
  useImperativeHandle(ref, () => ({
    reset: () => {
      refreshCaptcha();
      setUserInput('');
      setIsVerified(false);
      setHasInteracted(false);
    },
    isValid: () => {
      return userInput.trim().toUpperCase() === captchaCode.toUpperCase();
    },
    getValue: () => userInput.trim().toUpperCase(),
    getCode: () => captchaCode
  }));

  const drawCaptcha = (code) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Background gradient
    const bgGradient = ctx.createLinearGradient(0, 0, width, height);
    bgGradient.addColorStop(0, '#f1f5f9');
    bgGradient.addColorStop(1, '#e2e8f0');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, width, height);

    // Decorative / anti-bot noise lines
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * width, Math.random() * height);
      ctx.bezierCurveTo(
        Math.random() * width, Math.random() * height,
        Math.random() * width, Math.random() * height,
        Math.random() * width, Math.random() * height
      );
      ctx.strokeStyle = `hsla(${Math.floor(Math.random() * 360)}, 60%, 65%, 0.45)`;
      ctx.lineWidth = 1.8;
      ctx.stroke();
    }

    // Anti-bot noise dots
    for (let i = 0; i < 35; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${Math.floor(Math.random() * 150)}, ${Math.floor(Math.random() * 150)}, ${Math.floor(Math.random() * 150)}, 0.3)`;
      ctx.fill();
    }

    // Render characters with slight rotation and color variations
    const charSpacing = width / (code.length + 1);
    const fonts = ['600 24px Arial', '700 23px Verdana', '600 25px Trebuchet MS', '700 24px Georgia'];

    for (let i = 0; i < code.length; i++) {
      const char = code[i];
      const x = charSpacing * (i + 1) - 4;
      const y = height / 2 + 8;
      const angle = (Math.random() - 0.5) * 0.4; // +/- ~12 degrees

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.font = fonts[i % fonts.length];

      // Curated corporate high-contrast colors
      const colors = ['#0b1e38', '#d9531e', '#1e40af', '#0f766e', '#b91c1c', '#374151'];
      ctx.fillStyle = colors[i % colors.length];
      ctx.shadowColor = 'rgba(0, 0, 0, 0.15)';
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;
      ctx.shadowBlur = 1;

      ctx.fillText(char, -8, 0);
      ctx.restore();
    }
  };

  const refreshCaptcha = () => {
    setIsRotating(true);
    const newCode = generateRandomCode(5);
    setCaptchaCode(newCode);
    setUserInput('');
    setIsVerified(false);
    drawCaptcha(newCode);

    if (onChange) {
      onChange(false, '');
    }

    setTimeout(() => {
      setIsRotating(false);
    }, 450);
  };

  useEffect(() => {
    const initialCode = generateRandomCode(5);
    setCaptchaCode(initialCode);
    drawCaptcha(initialCode);
  }, []);

  const handleInputChange = (e) => {
    const val = e.target.value.toUpperCase();
    setUserInput(val);
    setHasInteracted(true);

    const matches = val.trim() === captchaCode.toUpperCase();
    setIsVerified(matches);

    if (onChange) {
      // Pass validation status and verification token to parent
      onChange(matches, matches ? `verified_${val}_${captchaCode}` : '');
    }
  };

  const handleSpeak = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    setIsSpeaking(true);
    window.speechSynthesis.cancel();

    // Spell characters out with pause
    const textToSpeak = captchaCode.split('').join(' . ');
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 0.85;
    utterance.pitch = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className={`proper-captcha-card ${className}`}>
      <div className="proper-captcha-header">
        <span className="proper-captcha-label">
          <LuShieldCheck className="proper-captcha-icon" />
          {label}
        </span>
        <span className="proper-captcha-hint">Type the 5 characters shown below</span>
      </div>

      <div className="proper-captcha-body">
        {/* Visual Canvas Display */}
        <div className="proper-captcha-display-wrap">
          <canvas
            ref={canvasRef}
            width={160}
            height={46}
            className="proper-captcha-canvas"
            title="CAPTCHA image code"
          />
          <div className="proper-captcha-tools">
            <button
              type="button"
              className={`proper-captcha-tool-btn ${isRotating ? 'spin' : ''}`}
              onClick={refreshCaptcha}
              title="Refresh CAPTCHA code"
              aria-label="Refresh CAPTCHA"
            >
              <LuRefreshCw />
            </button>
            <button
              type="button"
              className={`proper-captcha-tool-btn ${isSpeaking ? 'active' : ''}`}
              onClick={handleSpeak}
              title="Listen to CAPTCHA audio"
              aria-label="Listen to CAPTCHA"
            >
              <LuVolume2 />
            </button>
          </div>
        </div>

        {/* Input Field */}
        <div className="proper-captcha-input-wrap">
          <input
            type="text"
            className={`proper-captcha-input ${
              hasInteracted && userInput.length >= 5
                ? isVerified
                  ? 'is-valid'
                  : 'is-invalid'
                : ''
            }`}
            placeholder="Enter code"
            maxLength={5}
            value={userInput}
            onChange={handleInputChange}
            autoComplete="off"
            spellCheck="false"
          />
          {isVerified && (
            <span className="proper-captcha-verified-badge" title="Verified">
              <LuCheck />
            </span>
          )}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="proper-captcha-error-msg" role="alert">
          <i className="fa-solid fa-circle-exclamation"></i>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
});

export default Captcha;
