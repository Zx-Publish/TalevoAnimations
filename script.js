(() => {
  "use strict";
  const intro = document.getElementById("cinematicIntro");
  const site = document.getElementById("siteShell");

  // No skip control: the full brand intro always runs for six seconds.
  window.setTimeout(() => {
    document.body.classList.remove("intro-running");
    intro?.classList.add("finished");
    site?.classList.add("site-ready");
    site?.setAttribute("aria-hidden", "false");
    window.setTimeout(() => intro?.remove(), 900);
  }, 6000);

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  menuToggle?.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!open));
    menuToggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
    mainNav?.classList.toggle("open", !open);
  });
  mainNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
  }));

  const progressBar = document.getElementById("progressBar");
  const updateProgress = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar) progressBar.style.width = `${total > 0 ? window.scrollY / total * 100 : 0}%`;
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  const filters = document.querySelectorAll(".filter-chip");
  const cards = document.querySelectorAll(".project-card");
  filters.forEach(button => button.addEventListener("click", () => {
    filters.forEach(item => item.classList.toggle("active", item === button));
    const filter = button.dataset.filter;
    cards.forEach(card => card.classList.toggle("is-hidden", filter !== "all" && card.dataset.category !== filter));
  }));

  const revealTargets = document.querySelectorAll(".about-grid,.feature-card,.section-heading,.project-card,.viewer-card,.country-tile,.subscribe-copy,.contact-grid");
  revealTargets.forEach(el => el.classList.add("reveal"));
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    revealTargets.forEach(el => observer.observe(el));
  } else revealTargets.forEach(el => el.classList.add("visible"));

  const sections = document.querySelectorAll("main section[id]");
  if ("IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) document.querySelectorAll(".nav-link").forEach(link =>
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    }), { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach(section => navObserver.observe(section));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();