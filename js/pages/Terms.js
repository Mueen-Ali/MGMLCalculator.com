/**
 * MGMLCalculator.com - Terms of Use View Template
 */

export function renderTermsPage() {
  return `
    <section class="page-hero">
      <span class="badge">Legal Terms</span>
      <h1>Terms of Use</h1>
      <p class="lead">
        Please read these terms carefully before utilizing the calculators and resources on MGMLCalculator.com.
      </p>
    </section>

    <div class="container-narrow">
      <div class="card" style="margin-bottom: var(--space-lg);">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using MGMLCalculator.com, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any part of these terms, you should discontinue using the website.
        </p>

        <h2>2. Educational Utility Disclaimer</h2>
        <p>
          All calculators, tools, formulas, and content on MGMLCalculator.com are provided strictly for educational and general mathematical informational purposes. 
        </p>
        <div class="alert-box alert-warning">
          <div>
            <strong>Important Medical & Clinical Notice:</strong> MGMLCalculator.com does not offer medical advice, clinical diagnostic services, or individual dosing instructions. Do not rely on this tool for medical decisions or prescription medication administration. Always verify calculations with licensed healthcare providers.
          </div>
        </div>

        <h2>3. Accuracy and Disclaimer of Warranties</h2>
        <p>
          While we strive to ensure that all formulas and calculations are mathematically accurate, MGMLCalculator.com is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express or implied.
        </p>

        <h2>4. Limitation of Liability</h2>
        <p>
          In no event shall MGMLCalculator.com or its operators be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use of or inability to use this site or its calculation tools.
        </p>

        <h2>5. Governing Law</h2>
        <p>
          These terms are governed by and construed in accordance with standard internet website operation guidelines.
        </p>

        <p style="font-size: 0.85rem; color: var(--color-text-light); margin-top: var(--space-lg);">
          Last updated: October 2026
        </p>
      </div>
    </div>
  `;
}
