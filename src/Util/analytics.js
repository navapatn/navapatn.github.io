export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", eventName, parameters);
};

export const trackOutboundLink = (linkLabel, linkUrl, linkCategory) => {
  trackEvent("outbound_link_click", {
    link_category: linkCategory,
    link_label: linkLabel,
    link_url: linkUrl,
  });
};
