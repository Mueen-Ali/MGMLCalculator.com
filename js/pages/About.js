/**
 * MGMLCalculator.com - About Page View Template
 */

export function renderAboutPage() {
  return `
    <section class="page-hero">
      <span class="badge">About Our Platform</span>
      <h1>About MGMLCalculator.com</h1>
      <p class="lead">
        Providing reliable, accurate, and accessible mathematical conversion utilities for mass (milligrams) and volume (milliliters).
      </p>
    </section>

    <div class="container-narrow">
      <div class="card" style="margin-bottom: var(--space-xl);">
        <h2>Our Mission</h2>
        <p>
          MGMLCalculator.com was developed to solve a common mathematical challenge: converting between units of weight (mass) and liquid volume. Because milligrams (mg) and milliliters (mL) measure fundamentally different physical properties, converting between them requires clarity, precision, and accurate concentration factors.
        </p>
        <p>
          Our platform delivers intuitive, lightweight, and fast conversion tools designed for students, educators, lab technicians, and general utility users seeking quick unit math without unnecessary clutter.
        </p>
      </div>

      <div class="grid-2" style="margin-bottom: var(--space-xl);">
        <div class="card">
          <h3>Accuracy & Clarity</h3>
          <p>
            We prioritize mathematical accuracy and explicit formula disclosures so users understand the precise math behind every calculation.
          </p>
        </div>
        <div class="card">
          <h3>Educational Scope</h3>
          <p>
            Our tools provide context around concentration (mg/mL) and substance density, emphasizing educational transparency over raw formulas.
          </p>
        </div>
      </div>

      <div class="card card-surface">
        <h2>Important Educational & Non-Medical Scope</h2>
        <p>
          MGMLCalculator.com is strictly a general mathematical utility. We do not provide medical advice, diagnosis, or personalized dosing guidance. Always consult qualified healthcare professionals or certified reference standards for clinical calculations.
        </p>
      </div>
    </div>
  `;
}
