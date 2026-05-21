(function () {

  // === INJECT CSS ===
  var style = document.createElement('style');
  style.textContent = [
    /* NAV */
    '.nav{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(250,250,248,0.92);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid rgba(0,0,0,0.06);height:var(--nav-height);}',
    '.nav-inner{display:flex;align-items:center;justify-content:space-between;height:100%;}',
    '.nav-brand{font-family:var(--font-display);font-size:1.5rem;font-weight:700;color:var(--color-dark);letter-spacing:-0.02em;}',
    '.nav-brand span{color:var(--color-accent);}',
    '.nav-links{display:flex;align-items:center;gap:36px;}',
    '.nav-links a{font-size:0.92rem;font-weight:500;color:var(--color-text-muted);transition:color 0.3s;position:relative;}',
    '.nav-links a:hover{color:var(--color-dark);}',
    '.nav-links a::after{content:"";position:absolute;bottom:-4px;left:0;width:0;height:2px;background:var(--color-accent);transition:width 0.3s ease;}',
    '.nav-links a:hover::after{width:100%;}',
    '.nav-links a.nav-highlight{background:var(--color-accent);color:var(--color-dark);align-self:stretch;display:flex;align-items:center;padding:0 18px;}',
    '.nav-links a.nav-highlight:hover{color:var(--color-dark);}',
    '.nav-links a.nav-highlight::after{background:#fff;}',
    '.nav-cta{margin-left:12px;}',
    '.mobile-toggle{display:none;background:none;border:none;cursor:pointer;padding:8px;}',
    '.mobile-toggle span{display:block;width:24px;height:2px;background:var(--color-dark);margin:5px 0;transition:var(--transition);}',
    /* FOOTER */
    '.footer{background:var(--color-dark);color:rgba(255,255,255,0.7);padding:80px 0 0;}',
    '.footer-top{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:60px;padding-bottom:60px;border-bottom:1px solid rgba(255,255,255,0.1);}',
    '.footer-brand{font-family:var(--font-display);font-size:1.5rem;font-weight:700;color:#fff;margin-bottom:16px;}',
    '.footer-brand span{color:var(--color-accent);}',
    '.footer-desc{font-size:0.9rem;line-height:1.7;max-width:320px;}',
    '.footer-heading{font-size:0.78rem;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:rgba(255,255,255,0.4);margin-bottom:20px;}',
    '.footer-links a{display:block;padding:6px 0;font-size:0.92rem;transition:color 0.3s;}',
    '.footer-links a:hover{color:var(--color-accent);}',
    '.footer-bottom{display:flex;justify-content:space-between;align-items:center;padding:28px 0;font-size:0.82rem;color:rgba(255,255,255,0.35);}',
    '.footer-social{display:flex;gap:20px;}',
    '.footer-social a{transition:color 0.3s;}',
    '.footer-social a:hover{color:var(--color-accent);}',
    /* BTN ACCENT */
    '.btn-accent{background:var(--color-accent);color:var(--color-dark);}',
    '.btn-accent:hover{background:#c49a45;transform:translateY(-2px);}',
    /* CALENDLY MODAL */
    '.calendly-modal{display:none;position:fixed;inset:0;z-index:2000;align-items:center;justify-content:center;}',
    '.calendly-modal.open{display:flex;}',
    '.calendly-modal-overlay{position:absolute;inset:0;background:rgba(0,0,0,0.6);backdrop-filter:blur(4px);}',
    '.calendly-modal-content{position:relative;z-index:1;background:#fff;border-radius:var(--radius);width:90%;max-width:900px;max-height:90vh;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,0.25);}',
    '.calendly-modal-close{position:absolute;top:12px;right:16px;background:none;border:none;font-size:1.8rem;line-height:1;cursor:pointer;color:var(--color-text-muted);z-index:2;transition:color 0.2s;}',
    '.calendly-modal-close:hover{color:var(--color-dark);}',
    /* RESPONSIVE */
    '@media(max-width:1024px){.footer-top{grid-template-columns:1fr 1fr;}}',
    '@media(max-width:768px){',
    '.nav-links{display:none;}',
    '.mobile-toggle{display:block;}',
    '.nav-links.open{display:flex;flex-direction:column;position:absolute;top:var(--nav-height);left:0;right:0;background:var(--color-bg);padding:24px 32px;border-bottom:1px solid var(--color-border);gap:16px;}',
    '.nav-links.open a.nav-highlight{padding:10px 18px;align-self:stretch;}',
    '.footer-top{grid-template-columns:1fr;gap:40px;}',
    '.footer-bottom{flex-direction:column;gap:12px;text-align:center;}',
    '}'
  ].join('\n');
  document.head.appendChild(style);

  // === INJECT PHOSPHOR ICONS ===
  if (!document.querySelector('link[href*="phosphor-icons"]')) {
    var ph = document.createElement('link');
    ph.rel = 'stylesheet';
    ph.href = 'https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/bold/style.css';
    document.head.appendChild(ph);
  }

  // === NAV HTML ===
  document.body.insertAdjacentHTML('afterbegin',
    '<nav class="nav">' +
      '<div class="container nav-inner">' +
        '<a href="index.html" class="nav-brand">Christy<span>.</span></a>' +
        '<div class="nav-links" id="navLinks">' +
          '<a href="index.html#about">About Me</a>' +
          '<a href="index.html#portfolio">Work</a>' +
          '<a href="index.html#experience">Experience</a>' +
          '<a href="index.html#expertise">Expertise</a>' +
          '<a href="index.html#latticework">Latticework</a>' +
          '<a href="#" onclick="openCalendlyModal();return false;" class="btn btn-primary nav-cta" style="background:#000;color:#fff;">Let\'s Talk <span class="arrow">↗</span></a>' +
        '</div>' +
        '<button class="mobile-toggle" onclick="document.getElementById(\'navLinks\').classList.toggle(\'open\')">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div>' +
    '</nav>'
  );

  // === FOOTER HTML ===
  document.body.insertAdjacentHTML('beforeend',
    '<footer class="footer" id="contact">' +
      '<div class="container">' +
        '<div class="footer-top">' +
          '<div>' +
            '<div class="footer-brand">Christy<span>.</span></div>' +
            '<p class="footer-desc">Experience Designer &amp; Design Leader based in Grand Rapids, MI. Building teams and products that make a meaningful impact.</p>' +
          '</div>' +
          '<div>' +
            '<div class="footer-heading">Navigation</div>' +
            '<div class="footer-links">' +
              '<a href="index.html#about">About Me</a>' +
              '<a href="index.html#portfolio">Work</a>' +
              '<a href="index.html#experience">Experience</a>' +
              '<a href="index.html#expertise">Expertise</a>' +
            '</div>' +
          '</div>' +
          '<div>' +
            '<div class="footer-heading">Get In Touch</div>' +
            '<div class="footer-links">' +
              '<a href="https://linkedin.com/in/enniskloote" target="_blank"><i class="ph-bold ph-linkedin-logo"></i> LinkedIn</a>' +
            '</div>' +
            '<div style="margin-top:24px;">' +
              '<a href="mailto:ennis.kloote@gmail.com" class="btn btn-accent" style="font-size:0.85rem;padding:12px 24px;">Reach out <span class="arrow">↗</span></a>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<div>© 2026 Christy Ennis-Kloote. All rights reserved.</div>' +
          '<div class="footer-social">' +
            '<a href="https://enniskloote.com" target="_blank">enniskloote.com</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</footer>'
  );

  // === CALENDLY MODAL ===
  document.body.insertAdjacentHTML('beforeend',
    '<div id="calendlyModal" class="calendly-modal">' +
      '<div class="calendly-modal-overlay" onclick="closeCalendlyModal()"></div>' +
      '<div class="calendly-modal-content">' +
        '<button class="calendly-modal-close" onclick="closeCalendlyModal()">&#215;</button>' +
        '<div class="calendly-inline-widget" data-url="https://calendly.com/ennis-kloote" style="min-width:320px;height:700px;"></div>' +
      '</div>' +
    '</div>'
  );

  // Load Calendly assets
  var calCss = document.createElement('link');
  calCss.rel = 'stylesheet';
  calCss.href = 'https://assets.calendly.com/assets/external/widget.css';
  document.head.appendChild(calCss);

  var calScript = document.createElement('script');
  calScript.src = 'https://assets.calendly.com/assets/external/widget.js';
  calScript.async = true;
  document.body.appendChild(calScript);

  // === CALENDLY FUNCTIONS ===
  window.openCalendlyModal = function () {
    document.getElementById('calendlyModal').classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  window.closeCalendlyModal = function () {
    document.getElementById('calendlyModal').classList.remove('open');
    document.body.style.overflow = '';
  };
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') window.closeCalendlyModal();
  });

  // === NAV SCROLL SHADOW ===
  window.addEventListener('scroll', function () {
    var nav = document.querySelector('.nav');
    if (nav) nav.style.boxShadow = window.scrollY > 50 ? '0 2px 20px rgba(0,0,0,0.06)' : 'none';
  });

})();
