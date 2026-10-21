(() => {
  const data = window.PORTFOLIO;
  if (!data) {
    console.error("Missing PORTFOLIO data. Check content.js.");
    return;
  }

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const esc = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const languageStorageKey = "portfolio-language";
  const supportedLanguages = new Set(["zh", "en"]);

  function readSavedLanguage() {
    try {
      const saved = localStorage.getItem(languageStorageKey);
      return supportedLanguages.has(saved) ? saved : data.defaultLanguage;
    } catch {
      return data.defaultLanguage;
    }
  }

  const state = {
    language: supportedLanguages.has(readSavedLanguage()) ? readSavedLanguage() : "zh",
    filter: "all",
    activeWorkId: null,
  };

  let heroWorks = [];
  let heroIndex = 0;
  let heroRotationTimer = 0;

  const tr = (value) => {
    if (value == null) return "";
    if (typeof value !== "object") return String(value);
    return value[state.language] ?? value.zh ?? value.en ?? "";
  };

  const copy = (path) => {
    const value = path.split(".").reduce((result, key) => result?.[key], data.copy);
    return tr(value);
  };

  function applyStaticCopy() {
    document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
    document.body.dataset.language = state.language;

    $$("[data-i18n]").forEach((node) => {
      const value = copy(node.dataset.i18n);
      if (value) node.textContent = value;
    });

    $$("[data-i18n-aria]").forEach((node) => {
      const value = copy(node.dataset.i18nAria);
      if (value) node.setAttribute("aria-label", value);
    });

    $(".dialog-close").setAttribute("aria-label", copy("dialog.close"));
    $(".menu-toggle .sr-only").textContent = copy("menu.open");
    $("#siteNav").setAttribute("aria-label", state.language === "zh" ? "主导航" : "Main navigation");
    document.title = copy("meta.title").replace("{name}", data.profile.name);
    $('meta[name="description"]').setAttribute("content", copy("meta.description"));

    $$("[data-language]").forEach((button) => {
      const active = button.dataset.language === state.language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function renderProfile() {
    const { profile } = data;
    $("#brandInitials").textContent = profile.initials;
    $("#brandName").textContent = profile.name;
    $("#profileName").textContent = profile.name;
    $("#profileRole").textContent = tr(profile.role);
    $("#heroIntro").textContent = tr(profile.intro);
    $("#availability").textContent = tr(profile.availability);
    $("#profileLocation").textContent = tr(profile.location);
    $("#profileStatus").textContent = tr(profile.status);
    $("#footerName").textContent = profile.name;
    $("#currentYear").textContent = new Date().getFullYear();

    heroWorks = [
      profile.heroWorkId,
      ...data.works.filter((work) => work.featured).map((work) => work.id),
    ]
      .filter((id, index, ids) => ids.indexOf(id) === index)
      .map((id) => data.works.find((work) => work.id === id))
      .filter(Boolean);

    renderHeroPager();
    setHeroWork(heroIndex, { animate: false });

    $("#heroFacts").innerHTML = profile.facts
      .map(
        (fact) => `
          <div>
            <dt>${esc(tr(fact.label))}</dt>
            <dd>${esc(tr(fact.value))}</dd>
          </div>
        `,
      )
      .join("");

    $("#emailLink").href = `mailto:${profile.email}`;
    $("#emailLink").textContent = profile.email;

    const channels = [
      {
        label: copy("contact.phone"),
        value: profile.phone,
        href: `tel:${profile.phone}`,
      },
      {
        label: copy("contact.qq"),
        value: profile.qq,
        copyValue: profile.qq,
      },
      {
        label: copy("contact.wechat"),
        value: profile.wechat,
        copyValue: profile.wechat,
      },
      {
        label: copy("contact.xiaohongshu"),
        value: profile.xiaohongshu,
        copyValue: profile.xiaohongshu,
      },
    ];

    $("#contactChannels").innerHTML = channels
      .map((channel) => {
        const content = `
          <span class="contact-channel-label">${esc(channel.label)}</span>
          <strong>${esc(channel.value)}</strong>
          ${
            channel.copyValue
              ? `<small class="contact-copy-hint">${esc(copy("contact.copy"))}</small>`
              : ""
          }
        `;

        return channel.href
          ? `<a class="contact-channel" href="${esc(channel.href)}">${content}</a>`
          : `<button class="contact-channel" type="button" data-copy-value="${esc(channel.copyValue)}" aria-label="${esc(`${channel.label}: ${channel.value}`)}">${content}</button>`;
      })
      .join("");

    const resumeLink = $("#resumeLink");
    const resumeAvailable = profile.resumeUrl && profile.resumeUrl !== "#";
    resumeLink.href = resumeAvailable ? profile.resumeUrl : "#";
    resumeLink.textContent = copy(resumeAvailable ? "contact.resume" : "contact.resumePending");
    resumeLink.setAttribute("aria-disabled", String(!resumeAvailable));
    resumeLink.classList.toggle("is-disabled", !resumeAvailable);

    const visibleSocials = data.socials.filter((item) => item.url && item.url !== "#");
    $("#socialLinks").innerHTML = visibleSocials
      .map(
        (item) =>
          `<a href="${esc(item.url)}" target="_blank" rel="noreferrer">${esc(item.label)} ↗</a>`,
      )
      .join("");
  }

  function renderHeroPager() {
    $("#heroPager").innerHTML = heroWorks
      .map(
        (work, index) => `
          <button
            class="hero-pager-button ${index === heroIndex ? "is-active" : ""}"
            type="button"
            data-hero-index="${index}"
            aria-label="${esc(work.title)}"
            aria-pressed="${index === heroIndex}"
          >
            <span>${String(index + 1).padStart(2, "0")}</span>
            <i></i>
          </button>
        `,
      )
      .join("");
  }

  function setHeroWork(index, { animate = true } = {}) {
    if (!heroWorks.length) return;
    heroIndex = (index + heroWorks.length) % heroWorks.length;
    const work = heroWorks[heroIndex];
    const heroImage = $("#heroImage");
    const heroButton = $("#heroWorkButton");

    heroImage.src = work.cover;
    heroImage.alt = tr(work.subtitle);
    heroButton.dataset.workId = work.id;
    heroButton.setAttribute(
      "aria-label",
      [work.title, copy("hero.visualLabel"), copy(`categories.${work.category}`), work.year].join(", "),
    );
    $("#heroWorkTitle").textContent = work.title;
    $("#heroCategory").textContent = `${copy(`categories.${work.category}`)} / ${work.year}`;

    $$(".hero-pager-button").forEach((button, buttonIndex) => {
      const active = buttonIndex === heroIndex;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    if (animate && heroImage.animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      heroImage.animate(
        [
          { opacity: 0.3, transform: "scale(1.025)" },
          { opacity: 1, transform: "scale(1)" },
        ],
        { duration: 700, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
      );
    }
  }

  function stopHeroRotation() {
    window.clearInterval(heroRotationTimer);
    heroRotationTimer = 0;
  }

  function startHeroRotation() {
    stopHeroRotation();
    if (heroWorks.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    heroRotationTimer = window.setInterval(() => setHeroWork(heroIndex + 1), 6200);
  }

  function configureHeroShowcase() {
    const visual = $(".hero-visual");
    const pager = $("#heroPager");

    pager.addEventListener("click", (event) => {
      const button = event.target.closest("[data-hero-index]");
      if (!button) return;
      setHeroWork(Number(button.dataset.heroIndex));
      startHeroRotation();
    });

    visual.addEventListener("pointerenter", stopHeroRotation);
    visual.addEventListener("pointerleave", startHeroRotation);
    visual.addEventListener("focusin", stopHeroRotation);
    visual.addEventListener("focusout", startHeroRotation);
    startHeroRotation();
  }

  function configureContactActions() {
    $("#contactChannels").addEventListener("click", async (event) => {
      const button = event.target.closest("[data-copy-value]");
      if (!button || !navigator.clipboard?.writeText) return;

      try {
        await navigator.clipboard.writeText(button.dataset.copyValue);
        const hint = $(".contact-copy-hint", button);
        button.classList.add("is-copied");
        hint.textContent = copy("contact.copied");
        window.clearTimeout(button.copyTimer);
        button.copyTimer = window.setTimeout(() => {
          button.classList.remove("is-copied");
          hint.textContent = copy("contact.copy");
        }, 1600);
      } catch {
        // The contact details remain visible when clipboard access is unavailable.
      }
    });
  }

  const categoryKeys = [...new Set(data.works.map((work) => work.category))];

  function renderFilters() {
    const filters = [
      { key: "all", label: copy("work.all") },
      ...categoryKeys.map((key) => ({ key, label: copy(`categories.${key}`) || key })),
    ];

    $("#workFilters").innerHTML = filters
      .map(
        ({ key, label }) => `
          <button
            class="filter-button ${state.filter === key ? "is-active" : ""}"
            type="button"
            data-filter="${esc(key)}"
            aria-pressed="${state.filter === key}"
          >${esc(label)}</button>
        `,
      )
      .join("");
  }

  function placeholderMarkup(work, index) {
    return `
      <span class="work-placeholder" aria-hidden="true">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${esc(copy(`categories.${work.category}`))}</strong>
        <small>ADD PROJECT</small>
      </span>
    `;
  }

  function coverMarkup(work, index) {
    if (!work.cover) return placeholderMarkup(work, index);
    return `
      <img
        src="${esc(work.cover)}"
        alt="${esc(work.title)}"
        loading="${index < 2 ? "eager" : "lazy"}"
      />
    `;
  }

  function renderWorks({ animate = true } = {}) {
    const visibleWorks =
      state.filter === "all"
        ? data.works
        : data.works.filter((work) => work.category === state.filter);

    $("#emptyWorks").hidden = visibleWorks.length > 0;
    $("#emptyWorks").textContent = copy("work.empty");
    $("#projectCount").textContent = String(data.works.length).padStart(2, "0");
    $("#workGrid").innerHTML = visibleWorks
      .map((work, index) => {
        const mediaCount = (work.images?.length || 0) + (work.videos?.length || 0);
        return `
          <article
            class="work-card ${work.layout === "wide" ? "is-wide" : ""}"
            data-category="${esc(work.category)}"
            style="--reveal-delay: ${index * 70}ms"
            ${animate ? "data-reveal" : ""}
          >
            <button class="work-open" type="button" data-work-id="${esc(work.id)}">
              <span class="work-media">
                ${coverMarkup(work, index)}
                <span class="work-overlay">
                  <span>${esc(copy("work.viewProject"))}</span>
                  <span class="work-arrow">↗</span>
                </span>
                ${work.featured ? `<span class="featured-label">${esc(copy("work.featured"))}</span>` : ""}
              </span>
              <span class="work-info">
                <span class="work-heading">
                  <span class="work-category">
                    ${esc(copy(`categories.${work.category}`))} / ${esc(work.year)}
                  </span>
                  <strong>${esc(work.title)}</strong>
                  <span class="work-subtitle">${esc(tr(work.subtitle))}</span>
                </span>
                <span class="work-count">${mediaCount || "—"}</span>
              </span>
            </button>
          </article>
        `;
      })
      .join("");

    observeReveals();
  }

  function renderCapabilities({ animate = true } = {}) {
    $("#capabilityGrid").innerHTML = data.capabilities
      .map(
        (item) => `
          <article
            class="capability-card"
            style="--reveal-delay: ${Number(item.number) * 55}ms"
            ${animate ? "data-reveal" : ""}
          >
            <span class="card-number">${esc(item.number)}</span>
            <h3>${esc(tr(item.title))}</h3>
            <p>${esc(tr(item.summary))}</p>
            <ul class="tag-list">
              ${tr(item.tags)
                .map((tag) => `<li>${esc(tag)}</li>`)
                .join("")}
            </ul>
          </article>
        `,
      )
      .join("");

    $("#toolList").innerHTML = data.tools.map((tool) => `<span>${esc(tool)}</span>`).join("");
    observeReveals();
  }

  function renderExperience({ animate = true } = {}) {
    $("#timeline").innerHTML = data.experience
      .map(
        (item) => `
          <article
            class="timeline-item"
            style="--reveal-delay: ${data.experience.indexOf(item) * 70}ms"
            ${animate ? "data-reveal" : ""}
          >
            <p class="timeline-period">${esc(tr(item.period))}</p>
            <p class="timeline-type">${esc(tr(item.type))}</p>
            <div>
              <h3>${esc(tr(item.title))}</h3>
              <p>${esc(tr(item.text))}</p>
            </div>
          </article>
        `,
      )
      .join("");
    observeReveals();
  }

  function renderAll({ animate = true } = {}) {
    applyStaticCopy();
    renderProfile();
    renderFilters();
    renderWorks({ animate });
    renderCapabilities({ animate });
    renderExperience({ animate });
  }

  const dialog = $("#projectDialog");

  function openProject(id) {
    const work = data.works.find((item) => item.id === id);
    if (!work) return;
    state.activeWorkId = id;

    const images = (work.images || [])
      .map(
        (src, index) => `
          <figure class="dialog-media">
            <img src="${esc(src)}" alt="${esc(work.title)} ${index + 1}" loading="lazy" />
          </figure>
        `,
      )
      .join("");

    const videos = (work.videos || [])
      .map(
        (video) => `
          <figure class="dialog-media video-media">
            <video
              controls
              playsinline
              preload="none"
              src="${esc(video.src)}"
              poster="${esc(work.cover)}"
            ></video>
            <figcaption>${esc(tr(video.label))}</figcaption>
          </figure>
        `,
      )
      .join("");

    $("#projectDialogContent").innerHTML = `
      <header class="dialog-heading">
        <p>${esc(copy(`categories.${work.category}`))} / ${esc(work.year)}</p>
        <h2 id="dialogTitle">${esc(work.title)}</h2>
        <span>${esc(tr(work.subtitle))}</span>
      </header>
      <div class="dialog-details">
        <p>${esc(tr(work.description))}</p>
        <ul class="tag-list">
          ${tr(work.roles)
            .map((role) => `<li>${esc(role)}</li>`)
            .join("")}
        </ul>
      </div>
      <div class="dialog-gallery">
        ${images || (!videos ? `<div class="dialog-empty">${esc(copy("dialog.empty"))}</div>` : "")}
        ${videos}
      </div>
    `;

    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    document.body.classList.add("dialog-open");
    $(".dialog-close", dialog).focus();
  }

  function closeDialog() {
    $$("video", dialog).forEach((video) => video.pause());
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
    document.body.classList.remove("dialog-open");
    state.activeWorkId = null;
  }

  function switchLanguage(language) {
    if (!supportedLanguages.has(language) || language === state.language) return;
    const dialogWasOpen = dialog.open;
    const activeWorkId = state.activeWorkId;
    if (dialogWasOpen) closeDialog();
    state.language = language;
    try {
      localStorage.setItem(languageStorageKey, language);
    } catch {
      // The site still switches when storage is unavailable.
    }
    renderAll({ animate: false });
    $$("[data-reveal]").forEach((node) => node.classList.add("is-visible"));
    if (dialogWasOpen && activeWorkId) openProject(activeWorkId);
  }

  function handleFilter(event) {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    state.filter = button.dataset.filter;
    $$(".filter-button").forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderWorks();
  }

  function configureNavigation() {
    const header = $("[data-header]");
    const menuButton = $(".menu-toggle");
    const nav = $("#siteNav");

    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    };

    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
    });

    $$("a", nav).forEach((link) => link.addEventListener("click", closeMenu));

    const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();

    const sections = $$("main section[id]");
    const navLinks = $$('a[href^="#"]', nav);
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            const active = link.getAttribute("href") === `#${entry.target.id}`;
            link.classList.toggle("is-active", active);
          });
        });
      },
      { rootMargin: "-38% 0px -55% 0px" },
    );
    sections.forEach((section) => activeObserver.observe(section));

    $("[data-back-top]").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function configureAmbientMotion() {
    const glow = $("[data-cursor-glow]");
    if (!glow || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let pointerX = window.innerWidth * 0.72;
    let pointerY = window.innerHeight * 0.28;
    let animationFrame = 0;

    const paint = () => {
      animationFrame = 0;
      document.documentElement.style.setProperty("--pointer-x", `${pointerX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${pointerY}px`);
    };

    window.addEventListener(
      "pointermove",
      (event) => {
        if (event.pointerType === "touch") return;
        pointerX = event.clientX;
        pointerY = event.clientY;
        if (!animationFrame) animationFrame = requestAnimationFrame(paint);
      },
      { passive: true },
    );
  }

  function configureWorkTilt() {
    const grid = $("#workGrid");
    if (!grid) return;

    grid.addEventListener("pointermove", (event) => {
      const button = event.target.closest(".work-open");
      if (!button || event.pointerType === "touch") return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const bounds = button.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;

      button.style.setProperty("--spot-x", `${x * 100}%`);
      button.style.setProperty("--spot-y", `${y * 100}%`);
      button.style.setProperty("--tilt-x", `${(0.5 - y) * 1.4}deg`);
      button.style.setProperty("--tilt-y", `${(x - 0.5) * 1.8}deg`);
    });

    grid.addEventListener("pointerout", (event) => {
      const button = event.target.closest(".work-open");
      if (!button || button.contains(event.relatedTarget)) return;
      button.style.removeProperty("--spot-x");
      button.style.removeProperty("--spot-y");
      button.style.removeProperty("--tilt-x");
      button.style.removeProperty("--tilt-y");
    });
  }

  let revealObserver;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      $$("[data-reveal]").forEach((node) => node.classList.add("is-visible"));
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.06, rootMargin: "0px 0px -2% 0px" },
      );
    }

    $$("[data-reveal]:not(.is-visible)").forEach((node) => revealObserver.observe(node));
  }

  $$("[data-language]").forEach((button) => {
    button.addEventListener("click", () => switchLanguage(button.dataset.language));
  });

  $(".work-filters").addEventListener("click", handleFilter);
  $("#workGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-work-id]");
    if (button) openProject(button.dataset.workId);
  });
  $("#heroWorkButton").addEventListener("click", () => openProject($("#heroWorkButton").dataset.workId));
  $("[data-dialog-close]").addEventListener("click", closeDialog);
  $("#resumeLink").addEventListener("click", (event) => {
    if (event.currentTarget.getAttribute("aria-disabled") === "true") event.preventDefault();
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
  });

  renderAll();
  configureNavigation();
  configureAmbientMotion();
  configureWorkTilt();
  configureHeroShowcase();
  configureContactActions();
  observeReveals();
})();
