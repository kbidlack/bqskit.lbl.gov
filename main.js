// ── NAV ACTIVE STATE ──────────────────────────────────────
(function () {
  const page = location.pathname.split("/").filter(Boolean).pop() || "index";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;
    const hpage = href.split("/").filter(Boolean).pop();
    if (hpage === page || (page === "index" && href === "index")) {
      a.classList.add("active");
    }
  });
})();

// ── CODE TABS ────────────────────────────────────────────
function swTab(id, btn) {
  const wrap = btn.closest(".code-card");
  wrap
    .querySelectorAll(".code-panel")
    .forEach((p) => p.classList.remove("active"));
  wrap
    .querySelectorAll(".code-tab")
    .forEach((b) => b.classList.remove("active"));
  wrap.querySelector("#" + id).classList.add("active");
  btn.classList.add("active");
}

// ── PUB FILTERS ──────────────────────────────────────────
function filterPubs(tag, btn) {
  document.querySelectorAll(".pf").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".pub-row").forEach((row) => {
    const tags = row.dataset.tags || "";
    row.style.display = tag === "all" || tags.includes(tag) ? "" : "none";
  });
}

// ── PUB YEAR FILTER ───────────────────────────────────────
function filterYear(year, btn) {
  document
    .querySelectorAll(".year-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".year-section").forEach((sec) => {
    sec.style.display =
      year === "all" || sec.dataset.year === year ? "" : "none";
  });
}
