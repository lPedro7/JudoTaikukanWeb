(function () {
  "use strict";

  var STORAGE_KEY = "cookie-consent";
  var consent = null;
  try {
    consent = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    return;
  }

  if (consent === "accepted" || consent === "rejected") {
    return;
  }

  var banner = document.getElementById("cookie-banner");
  if (!banner) {
    return;
  }

  banner.hidden = false;
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-label", "Consentimiento de cookies");

  var acceptBtn = document.getElementById("cookie-accept");
  var rejectBtn = document.getElementById("cookie-reject");

  function save(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {}
    banner.hidden = true;
  }

  if (acceptBtn) {
    acceptBtn.addEventListener("click", function () {
      save("accepted");
    });
  }

  if (rejectBtn) {
    rejectBtn.addEventListener("click", function () {
      save("rejected");
    });
  }
})();