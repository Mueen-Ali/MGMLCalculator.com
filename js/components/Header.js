/**
 * MGMLCalculator.com - Responsive Header Component
 */

export function renderHeader(currentPath = '/') {
  // Normalize path string
  const activePath = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;
  
  const base = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL)
    ? import.meta.env.BASE_URL.replace(/\/$/, '')
    : '';

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'MG to ML', path: '/mg-to-ml/' },
    { label: 'ML to MG', path: '/ml-to-mg/' },
    { label: 'About', path: '/about/' }
  ];

  const navLinksHtml = navItems
    .map(item => {
      const isActive = activePath === item.path || (item.path !== '/' && activePath.startsWith(item.path));
      const activeClass = isActive ? 'active' : '';
      const ariaCurrent = isActive ? 'aria-current="page"' : '';
      const href = `${base}${item.path}`;
      return `
        <li>
          <a href="${href}" class="nav-link ${activeClass}" ${ariaCurrent} data-link>${item.label}</a>
        </li>
      `;
    })
    .join('');

  const homeHref = base ? `${base}/` : '/';

  return `
    <header class="site-header" id="site-header">
      <div class="container">
        <div class="header-inner">
          <a href="${homeHref}" class="brand-logo" aria-label="MGMLCalculator.com Home" data-link>
            <span class="logo-badge">mg</span>
            <span>MGMLCalculator<span class="logo-domain">.com</span></span>
          </a>

          <nav aria-label="Main Navigation">
            <ul class="nav-menu" id="nav-menu">
              ${navLinksHtml}
            </ul>
          </nav>

          <button 
            type="button" 
            class="mobile-nav-toggle" 
            id="mobile-nav-toggle" 
            aria-controls="nav-menu" 
            aria-expanded="false" 
            aria-label="Toggle Navigation Menu"
          >
            <svg viewBox="0 0 24 24">
              <path class="hamburger-icon" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  `;
}

/**
 * Initializes interactive events for mobile header menu toggle.
 */
export function initHeaderEvents() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('open', !isExpanded);
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!toggleBtn.contains(e.target) && !navMenu.contains(e.target)) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('open');
    }
  });

  // Close menu when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('open');
      toggleBtn.focus();
    }
  });
}
