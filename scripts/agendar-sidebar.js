(() => {
  const toggleButtons = Array.from(document.querySelectorAll("[data-agenda-toggle]"));
  const closeButton = document.querySelector("[data-agenda-close]");
  const sidebar = document.getElementById("agenda-sidebar");
  const overlay = document.getElementById("agenda-overlay");
  const form = document.getElementById("agenda-form");
  const message = document.getElementById("agenda-message");
  const firstInput = document.getElementById("agenda-nombre");
  const phoneInput = document.getElementById("agenda-telefono");
  let lastTrigger = null;

  if (toggleButtons.length === 0 || !sidebar || !overlay || !form || !message || !phoneInput) {
    return;
  }

  const setOpenState = (isOpen, restoreFocus = false) => {
    sidebar.classList.toggle("is-open", isOpen);
    overlay.classList.toggle("is-visible", isOpen);
    overlay.hidden = !isOpen;

    toggleButtons.forEach((button) => {
      button.setAttribute("aria-expanded", String(isOpen));
    });

    sidebar.setAttribute("aria-hidden", String(!isOpen));

    document.body.classList.toggle("agenda-open", isOpen);

    if (isOpen) {
      firstInput?.focus();
    } else if (restoreFocus) {
      lastTrigger?.focus();
    }
  };

  const openSidebar = () => setOpenState(true);
  const closeSidebar = () => setOpenState(false, true);

  const motivoTextarea = document.getElementById("agenda-motivo");
  const motivoCards = Array.from(document.querySelectorAll('.motivo[role="checkbox"]'));

  // Selectable motivo cards
  motivoCards.forEach((card) => {
    const toggle = () => {
      const checked = card.getAttribute("aria-checked") === "true";
      card.setAttribute("aria-checked", String(!checked));
      card.classList.toggle("motivo--selected", !checked);
    };
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        toggle();
      }
    });
  });

  const fillMotivoFromSelection = () => {
    if (!motivoTextarea) return;
    const selected = motivoCards.filter((c) => c.classList.contains("motivo--selected"));
    if (selected.length > 0) {
      const labels = selected
        .map((el) => el.dataset.label || el.querySelector("h3")?.textContent?.trim())
        .filter(Boolean);
      motivoTextarea.value = labels.join(", ");
    }
  };

  toggleButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      lastTrigger = button;
      fillMotivoFromSelection();
      openSidebar();
    });
  });

  closeButton?.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && sidebar.classList.contains("is-open")) {
      closeSidebar();
    }
  });

  const showMessage = (type, text) => {
    message.classList.remove("is-success", "is-error");
    message.classList.add(type === "success" ? "is-success" : "is-error");
    message.textContent = text;
  };

  const clearPhoneValidity = () => {
    phoneInput.setCustomValidity("");
  };

  const phoneHasEnoughDigits = () => {
    const digits = phoneInput.value.replace(/\D/g, "");

    if (digits.length < 8) {
      phoneInput.setCustomValidity("Ingresa al menos 8 digitos en el telefono.");
      return false;
    }

    phoneInput.setCustomValidity("");
    return true;
  };

  phoneInput.addEventListener("input", clearPhoneValidity);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    message.textContent = "";
    message.classList.remove("is-success", "is-error");

    if (!phoneHasEnoughDigits()) {
      showMessage("error", "Revisa tu telefono: se requieren al menos 8 digitos.");
      phoneInput.reportValidity();
      return;
    }

    if (!form.checkValidity()) {
      showMessage("error", "Completa todos los campos obligatorios con datos validos.");
      form.reportValidity();
      return;
    }

    showMessage("success", "Tu solicitud fue enviada. Te contactaremos para confirmar tu cita.");
    form.reset();
    // Clear motivo card selections
    motivoCards.forEach((card) => {
      card.classList.remove("motivo--selected");
      card.setAttribute("aria-checked", "false");
    });
  });

  setOpenState(false);
})();
