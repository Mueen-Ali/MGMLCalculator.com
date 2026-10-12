/**
 * MGMLCalculator.com - Privacy Policy View Template
 */

export function renderPrivacyPage() {
  return `
    <section class="page-hero">
      <span class="badge">Legal & Transparency</span>
      <h1>Privacy Policy</h1>
      <p class="lead">
        Your privacy is important to us. Learn how MGMLCalculator.com protects user data and operates with privacy-first standards.
      </p>
    </section>

    <div class="container-narrow">
      <div class="card" style="margin-bottom: var(--space-lg);">
        <h2>1. Information We Do Not Collect</h2>
        <p>
          MGMLCalculator.com is designed as a client-side unit conversion utility. We do not require account creation, registration, or submission of personal identity details to use our calculators. Calculations performed on this site occur locally in your web browser.
        </p>

        <h2>2. Server Log Files</h2>
        <p>
          Like most standard website hosts, our web servers automatically record non-identifying technical data in access logs (such as IP address, browser user-agent, access date/time, and requested URL). This standard data is used solely for server maintenance, security monitoring, and core infrastructure performance optimization.
        </p>

        <h2>3. Cookies and Analytics</h2>
        <p>
          We aim to keep cookie usage to an absolute minimum. We may utilize privacy-conscious, aggregated web performance metrics to monitor core web vitals and overall website uptime without tracking individual users across third-party websites.
        </p>

        <h2>4. External Links</h2>
        <p>
          Our website may contain links to external reference resources or educational materials. We are not responsible for the privacy practices or content of third-party external websites.
        </p>

        <h2>5. Updates to This Policy</h2>
        <p>
          We reserve the right to update this privacy notice periodically to reflect operational, legal, or technical changes. Any revisions will be published directly on this page with an updated revision date.
        </p>

        <p style="font-size: 0.85rem; color: var(--color-text-light); margin-top: var(--space-lg);">
          Last updated: October 2026
        </p>
      </div>
    </div>
  `;
}
