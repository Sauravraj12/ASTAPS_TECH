import React, { useEffect, useState } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <p>This website uses cookies to enhance your experience. By continuing, you agree to our use of cookies.</p>
      <div className="cookie-buttons">
        <button className="accept-btn" onClick={handleAccept}>Accept</button>
        <button className="decline-btn" onClick={handleDecline}>Decline</button>
      </div>
    </div>
  );
};

export default CookieConsent;
