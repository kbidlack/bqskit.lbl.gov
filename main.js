(function () {
  const page = location.pathname.split("/").filter(Boolean).pop() || "index";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;
    const hpage = href.split("/").filter(Boolean).pop();
    if (
      hpage === page ||
      (page === "index" && (href === "index" || href === "."))
    ) {
      a.classList.add("active");
    }
  });
})();

function copySnippet(el, text) {
  navigator.clipboard.writeText(text).then(() => {
    el.classList.add("copied");
    setTimeout(() => el.classList.remove("copied"), 1800);
  });
}

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

function filterPubs(tag, btn) {
  document.querySelectorAll(".pf").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".pub-row").forEach((row) => {
    const tags = row.dataset.tags || "";
    row.style.display = tag === "all" || tags.includes(tag) ? "" : "none";
  });
}

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

function loadPypiDownloads() {
  const packages = [
    "bqskit",
    "bqskitrs",
    "qfast",
    "qsearch",
    "bqskit-qfactor-jax",
    "bqskit-ft",
    "qfast-uq",
    "qfast-qiskit",
    "qfast-sc",
    "qfast-qs",
    "qfactor",
    "openqudit",
  ];

  const el = document.getElementById("pypi-count");
  if (!el) return;

  function parseShieldCount(msg) {
    if (!msg) return 0;
    const s = msg.replace(/,/g, "").trim().toLowerCase();
    if (s.endsWith("m")) return Math.round(parseFloat(s) * 1_000_000);
    if (s.endsWith("k")) return Math.round(parseFloat(s) * 1_000);
    return parseInt(s, 10) || 0;
  }

  Promise.all(
    packages.map((pkg) =>
      fetch("https://img.shields.io/pepy/dt/" + pkg + ".json")
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => parseShieldCount(data && data.message))
        .catch(() => 0),
    ),
  ).then((counts) => {
    const total = counts.reduce((a, b) => a + b, 0);
    if (total === 0) {
      document.getElementById("pypi-downloads").style.display = "none";
      return;
    }
    let label;
    if (total >= 1_000_000) {
      label = (total / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M+";
    } else if (total >= 1_000) {
      label = Math.floor(total / 1_000) + "K+";
    } else {
      label = total.toString();
    }
    el.textContent = label;
  });
}

loadPypiDownloads();
