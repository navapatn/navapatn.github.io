import React, { useEffect, useState } from "react";
import "./CookieConsent.css";
import { enableAnalytics } from "../../Util/analytics";

const CONSENT_KEY = "navapat-analytics-consent";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(CONSENT_KEY);

    if (consent === "accepted") {
      enableAnalytics();
      return;
    }

    if (!consent) setIsVisible(true);
  }, []);

  const saveConsent = (choice) => {
    window.localStorage.setItem(CONSENT_KEY, choice);

    if (choice === "accepted") enableAnalytics();

    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside className="analytics-consent" role="dialog" aria-label="Analytics preference">
      <p>
        This site uses Google Analytics to understand aggregate site visits and improve the portfolio. No
        analytics cookies are used unless you accept.
      </p>
      <div className="analytics-consent-actions">
        <button type="button" className="analytics-consent-decline" onClick={() => saveConsent("declined")}>
          Decline
        </button>
        <button type="button" className="analytics-consent-accept" onClick={() => saveConsent("accepted")}>
          Accept analytics
        </button>
      </div>
    </aside>
  );
};

export default CookieConsent;
