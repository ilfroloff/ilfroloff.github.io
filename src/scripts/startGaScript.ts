const scriptElement = document.getElementById("ga-start-script");
const gaMeasurementId = scriptElement?.dataset.gaMeasurementId;

if (gaMeasurementId) {
  const dataLayer = (window.dataLayer = window.dataLayer || []);

  dataLayer.push("js", new Date());
  dataLayer.push("config", gaMeasurementId);
}
