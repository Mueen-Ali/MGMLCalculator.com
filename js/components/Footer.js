/**
 * MGMLCalculator.com - Responsive Footer Component
 */

export function renderFooter() {
  const currentYear = new Date().getFullYear();
  const base = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL)
    ? import.meta.env.BASE_URL.replace(/\/$/, '')
    : '';
  const homeHref = base ? `${base}/` : '/';

  return `
    <footer class="site-footer" id="site-footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand & Short Description -->
          <div class="footer-brand">
            <a href="${homeHref}" class="brand-logo" aria-label="MGMLCalculator.com Home" data-link>
              <span class="logo-badge">mg</span>
              <span>MGMLCalculator<span class="logo-domain">.com</span></span>
            </a>
            <p>
              A clean, accurate, and educational mathematical unit conversion utility for converting milligrams (mg) and milliliters (mL).
            </p>
          </div>

          <!-- Tools Section -->
          <div>
            <h2 class="footer-heading">Conversion Tools</h2>
            <ul class="footer-links">
              <li><a href="/" data-link>Home Calculator</a></li>
              <li><a href="/mg-to-ml/" data-link>MG to ML Calculator</a></li>
              <li><a href="/ml-to-mg/" data-link>ML to MG Calculator</a></li>
              <li><a href="/mg-ml-concentration-calculator/" data-link>Concentration Calculator</a></li>
              <li><a href="/mg-to-ml-conversion-chart/" data-link>Conversion Chart</a></li>
            </ul>
          </div>

          <!-- Educational & Information Section -->
          <div>
            <h2 class="footer-heading">Guides &amp; Info</h2>
            <ul class="footer-links">
              <li><a href="/mg-vs-ml/" data-link>MG vs ML Difference</a></li>
              <li><a href="/mg-to-ml-drug-conversion/" data-link>Drug Conversion Guide</a></li>
              <li><a href="/mg-to-ml-syringe/" data-link>Syringe Volume Guide</a></li>
              <li><a href="/about/" data-link>About Us</a></li>
              <li><a href="/contact/" data-link>Contact Us</a></li>
            </ul>
          </div>

          <!-- Legal Section -->
          <div>
            <h2 class="footer-heading">Legal &amp; Privacy</h2>
            <ul class="footer-links">
              <li><a href="/privacy-policy/" data-link>Privacy Policy</a></li>
              <li><a href="/terms/" data-link>Terms of Use</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-disclaimer-notice">
          <strong>Educational & Utility Disclaimer:</strong> MGMLCalculator.com is an independent mathematical unit conversion utility designed strictly for educational purposes. Converting between milligrams (mass) and milliliters (volume) depends on liquid concentration or substance density. This calculator does not provide medical advice, diagnosis, or personalized dosing recommendations.
        </div>

        <div class="footer-bottom">
          <div>
            &copy; ${currentYear} MGMLCalculator.com. All rights reserved.
          </div>
          <div>
            Precision Unit Conversion Utility
          </div>
        </div>
      </div>
    </footer>
  `;
}
