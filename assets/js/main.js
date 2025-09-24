(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('primary-navigation');
  const contactForm = document.getElementById('contact-form');
  const feedbackEl = contactForm?.querySelector('.form-feedback');
  const yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      if (!expanded) {
        navList.dataset.open = 'true';
      } else {
        delete navList.dataset.open;
      }
    });

    navList.addEventListener('click', (event) => {
      if (event.target instanceof HTMLElement && event.target.tagName === 'A') {
        navToggle.setAttribute('aria-expanded', 'false');
        delete navList.dataset.open;
      }
    });
  }

  const setError = (fieldId, message) => {
    const errorEl = contactForm?.querySelector(`.error[data-error-for="${fieldId}"]`);
    if (errorEl) {
      errorEl.textContent = message;
    }
  };

  const clearError = (fieldId) => {
    const errorEl = contactForm?.querySelector(`.error[data-error-for="${fieldId}"]`);
    if (errorEl) {
      errorEl.textContent = '';
    }
  };

  const validateEmail = (value) => {
    const pattern = /^(?:[a-zA-Z0-9_'^&+%!-]+(?:\.[a-zA-Z0-9_'^&+%!-]+)*)@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    return pattern.test(value);
  };

  contactForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!contactForm || !feedbackEl) return;

    const formData = new FormData(contactForm);
    const honeypot = formData.get('website');
    let valid = true;

    const naam = contactForm.querySelector('#naam');
    if (naam instanceof HTMLInputElement) {
      if (!naam.value.trim()) {
        valid = false;
        setError('naam', 'Vul je naam in.');
      } else {
        clearError('naam');
      }
    }

    const email = contactForm.querySelector('#email');
    if (email instanceof HTMLInputElement) {
      if (!email.value.trim()) {
        valid = false;
        setError('email', 'Vul je e-mailadres in.');
      } else if (!validateEmail(email.value)) {
        valid = false;
        setError('email', 'Voer een geldig e-mailadres in.');
      } else {
        clearError('email');
      }
    }

    const bericht = contactForm.querySelector('#bericht');
    if (bericht instanceof HTMLTextAreaElement) {
      if (!bericht.value.trim()) {
        valid = false;
        setError('bericht', 'Vertel kort waar we mee kunnen helpen.');
      } else {
        clearError('bericht');
      }
    }

    const gdpr = contactForm.querySelector('#gdpr');
    if (gdpr instanceof HTMLInputElement) {
      if (!gdpr.checked) {
        valid = false;
        setError('gdpr', 'Vink de toestemming aan om verder te gaan.');
      } else {
        clearError('gdpr');
      }
    }

    if (honeypot) {
      return;
    }

    if (!valid) {
      feedbackEl.textContent = 'Controleer de gemarkeerde velden.';
      feedbackEl.classList.remove('success', 'info-message');
      feedbackEl.classList.add('error-message');
      return;
    }

    feedbackEl.textContent = 'Versturen…';
    feedbackEl.classList.remove('error-message', 'success');
    feedbackEl.classList.add('info-message');

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (response.ok) {
        feedbackEl.textContent = 'Bedankt! We nemen binnen één werkdag contact op.';
        feedbackEl.classList.remove('info-message');
        feedbackEl.classList.add('success');
        contactForm.reset();
      } else {
        throw new Error('Netwerkfout');
      }
    } catch (error) {
      console.error(error);
      feedbackEl.textContent = 'Er ging iets mis bij het versturen. Probeer het later opnieuw of mail ons direct.';
      feedbackEl.classList.remove('info-message');
      feedbackEl.classList.add('error-message');
    }
  });

})();
