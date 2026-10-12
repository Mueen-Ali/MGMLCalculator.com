/**
 * MGMLCalculator.com - SEO Metadata Manager & JSON-LD Injector
 * Handles dynamic dynamic meta title, description, canonical link, OG tags, and JSON-LD schema.
 */

export const BASE_URL = 'https://mgmlcalculator.com';

/**
 * Updates SEO metadata dynamically for the page.
 * @param {Object} metadata
 * @param {string} metadata.title - Page title
 * @param {string} metadata.description - Meta description
 * @param {string} metadata.path - Relative page path (e.g., '/', '/mg-to-ml/')
 * @param {string} [metadata.robots] - Robots directive (default: 'index, follow')
 * @param {Object|Array} [metadata.schema] - Optional JSON-LD structured data object/array
 */
export function updateSEO({ title, description, path, robots = 'index, follow', schema = null }) {
  // Normalize canonical URL
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${BASE_URL}${cleanPath}`;
  
  // 1. Title Tag
  document.title = title;
  
  // 2. Helper to set or create meta tags
  const setMetaTag = (selector, attrName, attrValue, content) => {
    let el = document.querySelector(selector);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrValue);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // Helper to set or create link tags
  const setLinkTag = (rel, href) => {
    let el = document.querySelector(`link[rel="${rel}"]`);
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', rel);
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
  };

  // 3. Basic Meta Tags
  setMetaTag('meta[name="description"]', 'name', 'description', description);
  setMetaTag('meta[name="robots"]', 'name', 'robots', robots);

  // 4. Canonical URL Tag
  setLinkTag('canonical', canonicalUrl);

  // 5. Open Graph Meta Tags
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
  setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
  setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'MGMLCalculator.com');
  setMetaTag('meta[property="og:image"]', 'property', 'og:image', `${BASE_URL}/og-image.png`);
  setMetaTag('meta[property="og:image:width"]', 'property', 'og:image:width', '1024');
  setMetaTag('meta[property="og:image:height"]', 'property', 'og:image:height', '512');
  setMetaTag('meta[property="og:image:alt"]', 'property', 'og:image:alt', 'MGMLCalculator.com - Convert, Compare, Learn');

  // 6. Twitter Meta Tags
  setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', `${BASE_URL}/og-image.png`);

  // 7. Structured Data (JSON-LD)
  let scriptEl = document.querySelector('script[type="application/ld+json"]#seo-schema');
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.type = 'application/ld+json';
    scriptEl.id = 'seo-schema';
    document.head.appendChild(scriptEl);
  }

  // Base Website Schema + WebPage Schema + Optional Custom Schema
  const defaultWebSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'MGMLCalculator.com',
    'url': BASE_URL,
    'description': 'Informational mathematical conversion utility and calculator for milligrams (mg) and milliliters (mL).'
  };

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': title,
    'description': description,
    'url': canonicalUrl
  };

  const schemasToInject = [defaultWebSiteSchema, pageSchema];
  if (schema) {
    if (Array.isArray(schema)) {
      schemasToInject.push(...schema);
    } else {
      schemasToInject.push(schema);
    }
  }

  scriptEl.textContent = JSON.stringify(schemasToInject, null, 2);
}
