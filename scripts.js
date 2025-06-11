// Translation system
const translations = {
  // Amir Damak translations
  amir: {
    fr: {
      pageTitle: "Carte de Visite Numérique - Amir Damak | MarQenti",
      navBusinessCard: "Carte de Visite",
      navContact: "Nous Contacter",
      jobTitle: "PDG & Fondateur",
      address: "Route de Tunis km 1.5<br>Immeuble Mariem, Sfax<br>Tunisie",
      contactUsBtn: "Nous Contacter",
      contactHeading: "Travaillons Ensemble<span>.</span>",
      contactText: "Ou contactez-nous directement via",
      firstName: "Prénom",
      lastName: "Nom de famille",
      email: "Adresse e-mail",
      company: "Entreprise (optionnel)",
      phone: "Numéro de téléphone (optionnel)",
      message: "Votre message",
      attachFile: "Joindre un fichier",
      submitBtn: "Envoyer le message",
      poweredBy: "Propulsé par",
      // Form messages
      sendingMessage: "Envoi en cours...",
      messageSent: "Message envoyé avec succès!",
      fileSelected: "Fichier sélectionné"
    },
    en: {
      pageTitle: "Digital Business Card - Amir Damak | MarQenti",
      navBusinessCard: "Business Card",
      navContact: "Contact Us",
      jobTitle: "CEO & Founder",
      address: "Route de Tunis km 1.5<br>Immeuble Mariem, Sfax<br>Tunisia",
      contactUsBtn: "Contact Us",
      contactHeading: "Let's Work Together<span>.</span>",
      contactText: "Or contact us directly via",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      company: "Company (optional)",
      phone: "Phone Number (optional)",
      message: "Your Message",
      attachFile: "Attach File",
      submitBtn: "Send Message",
      poweredBy: "Powered by",
      // Form messages
      sendingMessage: "Sending...",
      messageSent: "Message sent successfully!",
      fileSelected: "File selected"
    }
  },
  
  // Yessine Gargouri translations
  yessine: {
    fr: {
      pageTitle: "Carte de Visite Numérique - Yessine Gargouri | MarQenti",
      navBusinessCard: "Carte de Visite",
      navContact: "Nous Contacter",
      jobTitle: "Directeur Commercial",
      address: "Route de Tunis km 1.5<br>Immeuble Mariem, Sfax<br>Tunisie",
      contactUsBtn: "Nous Contacter",
      contactHeading: "Travaillons Ensemble<span>.</span>",
      contactText: "Ou contactez-nous directement via",
      firstName: "Prénom",
      lastName: "Nom de famille",
      email: "Adresse e-mail",
      company: "Entreprise (optionnel)",
      phone: "Numéro de téléphone (optionnel)",
      message: "Votre message",
      attachFile: "Joindre un fichier",
      submitBtn: "Envoyer le message",
      poweredBy: "Propulsé par",
      // Form messages
      sendingMessage: "Envoi en cours...",
      messageSent: "Message envoyé avec succès!",
      fileSelected: "Fichier sélectionné"
    },
    en: {
      pageTitle: "Digital Business Card - Yessine Gargouri | MarQenti",
      navBusinessCard: "Business Card",
      navContact: "Contact Us",
      jobTitle: "Sales Director",
      address: "Route de Tunis km 1.5<br>Immeuble Mariem, Sfax<br>Tunisia",
      contactUsBtn: "Contact Us",
      contactHeading: "Let's Work Together<span>.</span>",
      contactText: "Or contact us directly via",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      company: "Company (optional)",
      phone: "Phone Number (optional)",
      message: "Your Message",
      attachFile: "Attach File",
      submitBtn: "Send Message",
      poweredBy: "Powered by",
      // Form messages
      sendingMessage: "Sending...",
      messageSent: "Message sent successfully!",
      fileSelected: "File selected"
    }
  },
  
  // Mhamed Amine Elleuch translations
  mhamed: {
    fr: {
      pageTitle: "Carte de Visite Numérique - Mhamed Amine Elleuch | MarQenti",
      navBusinessCard: "Carte de Visite",
      navContact: "Nous Contacter",
      jobTitle: "CTO",
      address: "Route de Tunis km 1.5<br>Immeuble Mariem, Sfax<br>Tunisie",
      contactUsBtn: "Nous Contacter",
      contactHeading: "Travaillons Ensemble<span>.</span>",
      contactText: "Ou contactez-nous directement via",
      firstName: "Prénom",
      lastName: "Nom de famille",
      email: "Adresse e-mail",
      company: "Entreprise (optionnel)",
      phone: "Numéro de téléphone (optionnel)",
      message: "Votre message",
      attachFile: "Joindre un fichier",
      submitBtn: "Envoyer le message",
      poweredBy: "Propulsé par",
      // Form messages
      sendingMessage: "Envoi en cours...",
      messageSent: "Message envoyé avec succès!",
      fileSelected: "Fichier sélectionné"
    },
    en: {
      pageTitle: "Digital Business Card - Mhamed Amine Elleuch | MarQenti",
      navBusinessCard: "Business Card",
      navContact: "Contact Us",
      jobTitle: "CTO",
      address: "Route de Tunis km 1.5<br>Immeuble Mariem, Sfax<br>Tunisia",
      contactUsBtn: "Contact Us",
      contactHeading: "Let's Work Together<span>.</span>",
      contactText: "Or contact us directly via",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      company: "Company (optional)",
      phone: "Phone Number (optional)",
      message: "Your Message",
      attachFile: "Attach File",
      submitBtn: "Send Message",
      poweredBy: "Powered by",
      // Form messages
      sendingMessage: "Sending...",
      messageSent: "Message sent successfully!",
      fileSelected: "File selected"
    }
  }
};

// Detect current person based on page title
function getCurrentPerson() {
  const title = document.title;
  if (title.includes('Yessine Gargouri')) return 'yessine';
  if (title.includes('Mhamed Amine Elleuch')) return 'mhamed';
  return 'amir'; // default
}

const currentPerson = getCurrentPerson();
let currentLanguage = localStorage.getItem('selectedLanguage') || 'fr';

function setLanguage(lang) {
  if (!translations[currentPerson] || !translations[currentPerson][lang]) return;
  
  currentLanguage = lang;
  localStorage.setItem('selectedLanguage', lang);
  document.documentElement.lang = lang;
  
  // Update page title
  document.title = translations[currentPerson][lang].pageTitle;
  
  // Update all elements with data-translate-key
  document.querySelectorAll('[data-translate-key]').forEach(element => {
    const key = element.getAttribute('data-translate-key');
    if (translations[currentPerson][lang][key]) {
      if (element.tagName === 'INPUT' && element.type === 'submit') {
        element.value = translations[currentPerson][lang][key];
      } else {
        element.innerHTML = translations[currentPerson][lang][key];
      }
    }
  });
  
  // Update language switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
  
  // Update Google Maps language parameter
  updateMapLanguage(lang);
}

function updateMapLanguage(lang) {
  const iframe = document.querySelector('.map-container iframe');
  if (iframe) {
    let src = iframe.src;
    // Replace the language parameter in the Google Maps URL
    src = src.replace(/[?&]hl=[^&]*/, '').replace(/[?&]language=[^&]*/, '');
    const separator = src.includes('?') ? '&' : '?';
    iframe.src = `${src}${separator}hl=${lang}`;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Initialize language system
  setLanguage(currentLanguage);
  
  // Language switcher event listeners
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const selectedLang = this.getAttribute('data-lang');
      setLanguage(selectedLang);
    });
  });
  
  const inputs = document.querySelectorAll('.contact-input');
  
  inputs.forEach(input => {
    const inputWrap = input.closest('.input-wrap');
    
    // Focus event
    input.addEventListener('focus', function() {
      inputWrap.classList.add('focus');
    });
    
    // Blur event
    input.addEventListener('blur', function() {
      inputWrap.classList.remove('focus');
      
      if (input.value.trim() !== '') {
        inputWrap.classList.add('not-empty');
      } else {
        inputWrap.classList.remove('not-empty');
      }
    });
    
    // Input event for real-time checking
    input.addEventListener('input', function() {
      if (input.value.trim() !== '') {
        inputWrap.classList.add('not-empty');
      } else {
        inputWrap.classList.remove('not-empty');
      }
    });
    
    // Check initial state
    if (input.value.trim() !== '') {
      inputWrap.classList.add('not-empty');
    }
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Enhanced form submission with better feedback
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
        // Show loading state
      const submitBtn = form.querySelector('input[type="submit"]');
      const originalText = submitBtn.value;
      submitBtn.classList.add('loading');
      submitBtn.value = translations[currentPerson][currentLanguage].sendingMessage;
      
      // Validate required fields
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        const inputWrap = field.closest('.input-wrap');
        if (!field.value.trim()) {
          isValid = false;
          inputWrap.classList.add('error');
          
          // Add shake animation
          inputWrap.style.animation = 'shake 0.3s ease-in-out';
          setTimeout(() => {
            inputWrap.style.animation = '';
          }, 300);
        } else {
          inputWrap.classList.remove('error');
        }
      });
      
      // Email validation
      const emailField = form.querySelector('input[type="email"]');
      if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
          isValid = false;
          emailField.closest('.input-wrap').classList.add('error');
        }
      }
      
      setTimeout(() => {
        submitBtn.classList.remove('loading');
          if (isValid) {
          // Show success message
          submitBtn.value = translations[currentPerson][currentLanguage].messageSent;
          submitBtn.style.background = '#28a745';
          
          setTimeout(() => {
            submitBtn.value = originalText;
            submitBtn.style.background = '';
            form.reset();
            
            // Reset form states
            const inputs = form.querySelectorAll('.contact-input');
            inputs.forEach(input => {
              const inputWrap = input.closest('.input-wrap');
              inputWrap.classList.remove('not-empty', 'focus', 'error');
            });
          }, 3000);
        } else {
          submitBtn.value = originalText;
        }
      }, 1500);
    });
  }
  
  // Add scroll effect to header
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.15)';
    } else {
      header.classList.remove('header-scrolled');
      header.style.background = 'rgba(255, 255, 255, 0.85)';
      header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
    }
  });
  
  // Add click ripple effect to buttons
  document.querySelectorAll('.btn, .contact-btn').forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  
  // Add smooth parallax effect to business card
  const businessCard = document.querySelector('.business-card');
  if (businessCard) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      const cardLeft = businessCard.querySelector('.card-left');
      if (cardLeft) {
        cardLeft.style.transform = `translateY(${rate * 0.1}px)`;
      }
    });
  }
  
  // Enhanced intersection observer for better animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  document.querySelectorAll('.contact-info p, .card-grid, .contact-form').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
  });
  
  // Add keyboard navigation for better accessibility
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });
  
  document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
  });
  
  // Enhanced file upload feedback
  const fileInput = document.querySelector('input[type="file"]');
  const uploadBtn = document.querySelector('.btn.upload span');
  
  if (fileInput && uploadBtn) {
    const originalText = uploadBtn.innerHTML;
      fileInput.addEventListener('change', function() {
      if (this.files && this.files[0]) {
        const fileName = this.files[0].name;
        uploadBtn.innerHTML = `<i class="fa-solid fa-check"></i> ${fileName}`;
        uploadBtn.parentElement.style.background = 'rgba(195, 0, 30, 0.1)';
        uploadBtn.style.color = '#c3001e';
      } else {
        // Reset to original text with current language
        const attachFileText = translations[currentLanguage].attachFile;
        uploadBtn.innerHTML = `<i class="fa-solid fa-paperclip"></i> ${attachFileText}`;
        uploadBtn.parentElement.style.background = '';
        uploadBtn.style.color = '';
      }
    });
  }
  
  // Add dynamic gradient background
  if (businessCard) {
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
      
      businessCard.style.background = `
        linear-gradient(
          ${mouseX * 45 + 135}deg, 
          #f5f5f5 0%, 
          rgba(195, 0, 30, ${0.05 + mouseY * 0.05}) 50%, 
          #ffffff 100%
        )
      `;
    });
  }
  
  // Add CSS animations for shake effect
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
    }
    
    .keyboard-navigation *:focus {
      outline: 2px solid var(--main-color) !important;
      outline-offset: 2px;
    }
  `;
  document.head.appendChild(style);
  
  // Add dynamic animation effects based on scroll position
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const floatingElementsContainer = document.querySelector('.floating-elements');
    // const flowingWaves = document.querySelectorAll('.flowing-wave'); // This class is not used anymore for waves
    
    if (floatingElementsContainer) {
      // Adjust floating elements speed based on scroll
      const speed = Math.max(0.5, 1 - scrolled / 1000);
      // floatingElementsContainer.style.setProperty('--animation-speed', speed); // --animation-speed is not directly used in the new CSS for float animation duration
      // Instead, we can adjust particle generation or individual animation properties if complex speed control is needed.
      // For now, the CSS handles the base animation speed.
    }
    
    // The wave animation is now purely CSS driven with @keyframes wave-flow and different durations for each path.
    // The previous JS logic for flowingWaves is no longer needed for the new SVG structure.
    /*
    flowingWaves.forEach((wave, index) => {
      const offset = scrolled * (0.1 + index * 0.05);
      wave.style.transform = `translateX(${offset}px)`;
    });
    */
  });

  // Add interaction when hovering over the business card
  if (businessCard) {
    businessCard.addEventListener('mouseenter', function() {
      const floatingElementsContainer = document.querySelector('.floating-elements');
      if (floatingElementsContainer) {
        // floatingElementsContainer.style.animationPlayState = 'running'; // The container itself doesn't animate
        floatingElementsContainer.style.opacity = '1'; // Make particles fully visible on hover
      }
    });
    
    businessCard.addEventListener('mouseleave', function() {
      const floatingElementsContainer = document.querySelector('.floating-elements');
      if (floatingElementsContainer) {
        floatingElementsContainer.style.opacity = '0.7'; // Slightly fade particles when not hovering
      }
    });
  }

  // Function to create and add floating particles dynamically
  function createParticles() {
    const floatingElementsContainer = document.querySelector('.floating-elements');
    if (!floatingElementsContainer) return;

    const particleCount = 30; // Number of particles
    const types = ['dot', 'line'];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.classList.add(types[Math.floor(Math.random() * types.length)]);

      // Randomize starting position, animation duration, and delay
      particle.style.left = `${Math.random() * 100}%`;
      // Start particles from the bottom, or slightly above, to float upwards
      particle.style.top = `${100 + Math.random() * 10}%`; 

      const animationDuration = Math.random() * 15 + 10; // Duration between 10s and 25s
      particle.style.animationDuration = `${animationDuration}s`;
      particle.style.animationDelay = `${Math.random() * animationDuration}s`; // Stagger start times

      // For the @keyframes float animation
      particle.style.setProperty('--random-x-end', `${(Math.random() - 0.5) * 200}px`);
      particle.style.setProperty('--random-rotate-end', `${(Math.random() - 0.5) * 720}deg`);

      floatingElementsContainer.appendChild(particle);
    }
  }

  createParticles(); // Create particles on load

});