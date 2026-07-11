const MEASUREMENT_ID = "G-N6VHN44YM6";

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

export const enableAnalytics = () => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("consent", "update", { analytics_storage: "granted" });
  window.gtag("config", MEASUREMENT_ID, { send_page_view: true });
};
