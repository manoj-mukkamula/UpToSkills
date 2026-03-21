/* ============================================================
   script.js — Admin Settings | Daycare Marketplace
   1.  Lucide icons
   2.  Dark mode toggle (localStorage)
   3.  Sidebar nav active state
   4.  Tab switching
   5.  Form change detection → enable Save
   6.  Form validation
   7.  Save button
   8.  Reset button → disable Save
   9.  Toast
   10. Mobile sidebar (hamburger / overlay / ESC)
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Render icons ──────────────────────────────────────── */
  lucide.createIcons();


  /* ══════════════════════════════════════════════════════
     1. DARK MODE
  ══════════════════════════════════════════════════════ */
  const html        = document.documentElement;
  const darkModeBtn = document.getElementById('darkModeBtn');
  const darkIcon    = document.getElementById('darkIcon');

  applyTheme(localStorage.getItem('adminTheme') || 'light');

  darkModeBtn.addEventListener('click', function () {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('adminTheme', next);
  });

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    darkIcon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
    darkModeBtn.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    lucide.createIcons();
  }


  /* ══════════════════════════════════════════════════════
     2. LANGUAGE PICKER
     Click icon → dropdown opens
     Click option → updates Default Language select in form
                  → enables Save button
                  → closes dropdown
  ══════════════════════════════════════════════════════ */
  const langPicker   = document.getElementById('langPicker');
  const langBtn      = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');
  const langOptions  = document.querySelectorAll('.lang-option');

  langBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    langDropdown.classList.contains('open') ? closeLangDropdown() : openLangDropdown();
  });

  function openLangDropdown() {
    langDropdown.classList.add('open');
    langPicker.classList.add('open');
    langBtn.setAttribute('aria-expanded', 'true');
  }

  function closeLangDropdown() {
    langDropdown.classList.remove('open');
    langPicker.classList.remove('open');
    langBtn.setAttribute('aria-expanded', 'false');
  }

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!langPicker.contains(e.target)) closeLangDropdown();
  });

  // Each language option click
  langOptions.forEach(function (option) {
    option.addEventListener('click', function () {
      const selectedLang = this.getAttribute('data-lang');

      // Update Default Language <select> in the form
      const langField = document.getElementById('defaultLanguage');
      if (langField) {
        Array.from(langField.options).forEach(function (opt) {
          opt.selected = (opt.text.trim() === selectedLang);
        });
        // Fire change so Save button detects the change
        langField.dispatchEvent(new Event('change'));
      }

      // Mark active state in dropdown
      langOptions.forEach(function (o) { o.classList.remove('active'); });
      this.classList.add('active');

      // Feedback toast
      showToast('Language set to ' + selectedLang, 'success');

      closeLangDropdown();
    });
  });

  // Keep dropdown in sync if user changes Default Language manually in the form
  const langFieldSync = document.getElementById('defaultLanguage');
  if (langFieldSync) {
    langFieldSync.addEventListener('change', function () {
      const selected = this.options[this.selectedIndex].text.trim();
      langOptions.forEach(function (o) {
        o.classList.toggle('active', o.getAttribute('data-lang') === selected);
      });
    });
  }


  /* ══════════════════════════════════════════════════════
     3. SIDEBAR NAV
  ══════════════════════════════════════════════════════ */
  const navItems = document.querySelectorAll('.nav-item[data-nav]');

  navItems.forEach(function (item) {
    item.addEventListener('click', function () {
      navItems.forEach(function (n) { n.classList.remove('active'); });
      this.classList.add('active');
      closeSidebar();
    });
  });


  /* ══════════════════════════════════════════════════════
     3. TABS
  ══════════════════════════════════════════════════════ */
  const tabBtns   = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');
      tabPanels.forEach(function (p) { p.classList.remove('active'); });
      const panel = document.getElementById('tab-' + this.getAttribute('data-tab'));
      if (panel) panel.classList.add('active');
    });
  });


  /* ══════════════════════════════════════════════════════
     4. FORM FIELDS & DEFAULTS
  ══════════════════════════════════════════════════════ */
  const DEFAULTS = {
    platformName:    'Daycare Marketplace',
    timezone:        'Asia/Kolkata (IST)',
    supportEmail:    'support@daycmarketplace.com',
    supportPhone:    '+91 80 1234 5678',
    defaultLanguage: 'English',
    currency:        'INR (₹)',
  };

  const fields = {
    platformName:    document.getElementById('platformName'),
    timezone:        document.getElementById('timezone'),
    supportEmail:    document.getElementById('supportEmail'),
    supportPhone:    document.getElementById('supportPhone'),
    defaultLanguage: document.getElementById('defaultLanguage'),
    currency:        document.getElementById('currency'),
  };

  const errorSpans = {
    platformName: document.getElementById('err-platformName'),
    supportEmail: document.getElementById('err-supportEmail'),
    supportPhone: document.getElementById('err-supportPhone'),
  };


  /* ══════════════════════════════════════════════════════
     5. SAVE ENABLE / DISABLE (change detection)
  ══════════════════════════════════════════════════════ */
  const saveBtn = document.getElementById('saveBtn');
  saveBtn.disabled = true;

  function getFieldValue(name) {
    const field = fields[name];
    if (!field) return '';
    if (field.tagName === 'SELECT') {
      const opt = field.options[field.selectedIndex];
      return opt ? opt.text.trim() : '';
    }
    return field.value;
  }

  function hasChanges() {
    return Object.keys(DEFAULTS).some(function (name) {
      return getFieldValue(name) !== DEFAULTS[name];
    });
  }

  function updateSaveState() {
    saveBtn.disabled = !hasChanges();
  }

  Object.keys(fields).forEach(function (name) {
    const field = fields[name];
    if (!field) return;
    const evt = field.tagName === 'SELECT' ? 'change' : 'input';
    field.addEventListener(evt, updateSaveState);
  });


  /* ══════════════════════════════════════════════════════
     6. VALIDATION
  ══════════════════════════════════════════════════════ */
  function validateField(name, value) {
    switch (name) {
      case 'platformName':
        if (!value.trim())           return 'Platform name is required.';
        if (value.trim().length < 3) return 'Minimum 3 characters required.';
        return '';
      case 'supportEmail':
        if (!value.trim())                                     return 'Support email is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Enter a valid email address.';
        return '';
      case 'supportPhone':
        if (!value.trim())                               return 'Support phone is required.';
        if (!/^[+]?[\d\s\-]{7,15}$/.test(value.trim())) return 'Enter a valid phone number.';
        return '';
      default: return '';
    }
  }

  function showError(name, msg) {
    const f = fields[name], s = errorSpans[name];
    if (f) f.classList.add('has-error');
    if (s) s.textContent = msg;
  }

  function clearError(name) {
    const f = fields[name], s = errorSpans[name];
    if (f) f.classList.remove('has-error');
    if (s) s.textContent = '';
  }

  ['platformName', 'supportEmail', 'supportPhone'].forEach(function (name) {
    const field = fields[name];
    if (!field) return;
    field.addEventListener('input', function () {
      const err = validateField(name, this.value);
      err ? showError(name, err) : clearError(name);
    });
  });

  function validateAll() {
    let valid = true;
    ['platformName', 'supportEmail', 'supportPhone'].forEach(function (name) {
      const field = fields[name];
      if (!field) return;
      const err = validateField(name, field.value);
      if (err) { showError(name, err); valid = false; }
      else       clearError(name);
    });
    return valid;
  }


  /* ══════════════════════════════════════════════════════
     7. TOAST
  ══════════════════════════════════════════════════════ */
  const toast      = document.getElementById('toast');
  const toastMsg   = document.getElementById('toastMsg');
  const toastIcon  = document.getElementById('toastIcon');
  const toastClose = document.getElementById('toastClose');
  let   toastTimer = null;

  function showToast(message, type) {
    toastMsg.textContent  = message;
    toastIcon.textContent = type === 'success' ? '✅' : '❌';
    toast.classList.remove('success', 'error', 'show');
    void toast.offsetWidth;
    toast.classList.add(type, 'show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(hideToast, 3500);
  }

  function hideToast() { toast.classList.remove('show'); }
  toastClose.addEventListener('click', hideToast);


  /* ══════════════════════════════════════════════════════
     8. SAVE
  ══════════════════════════════════════════════════════ */
  saveBtn.addEventListener('click', function () {
    if (saveBtn.disabled) return;

    // Switch to general tab if needed
    const genBtn   = document.querySelector('.tab-btn[data-tab="general"]');
    const genPanel = document.getElementById('tab-general');
    if (genBtn && !genBtn.classList.contains('active')) {
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      tabPanels.forEach(function (p) { p.classList.remove('active'); });
      genBtn.classList.add('active');
      if (genPanel) genPanel.classList.add('active');
    }

    if (validateAll()) {
      saveBtn.disabled = true;                          // back to disabled after save
      showToast('Settings saved successfully!', 'success');
    } else {
      showToast('Please fix the errors before saving.', 'error');
      const firstErr = document.querySelector('.form-input.has-error');
      if (firstErr) { firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' }); firstErr.focus(); }
    }
  });


  /* ══════════════════════════════════════════════════════
     9. RESET
  ══════════════════════════════════════════════════════ */
  const resetBtn = document.getElementById('resetBtn');

  resetBtn.addEventListener('click', function () {
    Object.keys(DEFAULTS).forEach(function (name) {
      const field = fields[name];
      if (!field) return;
      if (field.tagName === 'SELECT') {
        Array.from(field.options).forEach(function (opt) {
          opt.selected = (opt.text.trim() === DEFAULTS[name] || opt.value === DEFAULTS[name]);
        });
      } else {
        field.value = DEFAULTS[name];
      }
    });

    ['platformName', 'supportEmail', 'supportPhone'].forEach(clearError);
    saveBtn.disabled = true;   // no changes from default
    showToast('Settings reset to default values.', 'success');
  });


  /* ══════════════════════════════════════════════════════
     10. MOBILE SIDEBAR
  ══════════════════════════════════════════════════════ */
  const sidebar        = document.getElementById('sidebar');
  const hamburgerBtn   = document.getElementById('hamburgerBtn');
  const sidebarOverlay = document.getElementById('sidebarOverlay');

  hamburgerBtn.addEventListener('click', function () {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });

  sidebarOverlay.addEventListener('click', closeSidebar);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeLangDropdown();
      closeSidebar();
    }
  });
  window.addEventListener('resize',    function ()  { if (window.innerWidth > 768) closeSidebar(); });

  function openSidebar() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('show');
    document.body.style.overflow = '';
  }

}); // end DOMContentLoaded