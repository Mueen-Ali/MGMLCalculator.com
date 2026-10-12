/**
 * MGMLCalculator.com - MG to ML Page View Template
 */

import { renderCalculator } from '../components/Calculator.js';

export function renderMgToMlPage() {
  return `
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/" data-link>Home</a>
      <span class="separator">/</span>
      <span class="current" aria-current="page">MG to ML Calculator</span>
    </nav>

    <!-- Page Hero -->
    <section class="page-hero">
      <span class="badge">Mass to Volume Unit Conversion</span>
      <h1>MG to ML Calculator</h1>
      <p class="lead">
        Milligrams (mg) measure mass. Milliliters (mL) measure volume. To convert between them, you need the solution concentration in mg/mL. Enter your values below to calculate instantly.
      </p>
    </section>

    <!-- Interactive Calculator Component -->
    ${renderCalculator('mg-to-ml')}

    <!-- Main Educational Content Sections -->
    <section class="content-section-block">
      <h2>How to Convert MG to ML</h2>
      <p>
        To convert milligrams to milliliters, divide the mass by the solution concentration:
      </p>
      <div class="result-formula-box" style="margin-bottom: var(--space-md); text-align: center; font-size: 1.1rem; font-weight: 700;">
        Volume (mL) = Mass (mg) ÷ Concentration (mg/mL)
      </div>
      <p>Each part of the formula represents a specific quantity:</p>
      <ul>
        <li><strong>Mass (mg):</strong> The amount of substance you are measuring in milligrams.</li>
        <li><strong>Concentration (mg/mL):</strong> How many milligrams of substance are dissolved in each milliliter of liquid.</li>
        <li><strong>Volume (mL):</strong> The calculated liquid volume — the result of the conversion.</li>
      </ul>
      <p>
        <strong>Worked example:</strong> You have 100 mg of a substance at a concentration of 20 mg/mL:
      </p>
      <p style="font-weight: 600; color: var(--color-primary-hover);">
        100 mg ÷ 20 mg/mL = 5 mL
      </p>
    </section>

    <section class="content-section-block">
      <h2>Why Concentration Matters</h2>
      <p>
        Milligrams and milliliters measure different physical properties — mass and volume respectively. There is no single universal conversion such as "1 mg = X mL" because the relationship depends entirely on how concentrated the liquid is.
      </p>
      <p>
        Consider the same 100 mg mass at three different concentration strengths:
      </p>
      <ul>
        <li>At <strong>10 mg/mL</strong>: 100 mg ÷ 10 = <strong>10 mL</strong></li>
        <li>At <strong>20 mg/mL</strong>: 100 mg ÷ 20 = <strong>5 mL</strong></li>
        <li>At <strong>50 mg/mL</strong>: 100 mg ÷ 50 = <strong>2 mL</strong></li>
      </ul>
      <p>
        The same mass in milligrams produces a completely different volume depending on concentration. Doubling the concentration halves the volume required.
      </p>
      <p>
        For a deeper explanation of why mg and mL are different units, see our <a href="/mg-vs-ml/" data-link>MG vs ML</a> guide.
      </p>
    </section>

    <section class="content-section-block">
      <h2>Common MG to ML Conversions</h2>
      <p>
        The table below provides quick reference values for common milligram amounts. To illustrate how the formula works, these calculations use an assumed solution concentration of <strong>10 mg/mL</strong>.
      </p>
      <p style="font-size: 0.875rem; color: var(--color-text-light); margin-bottom: var(--space-md);">
        <em>Note: Actual liquid volume depends on your specific liquid concentration ratio.</em>
      </p>

      <div class="table-responsive">
        <table class="examples-table">
          <thead>
            <tr>
              <th scope="col">Mass (mg)</th>
              <th scope="col">Assumed Concentration</th>
              <th scope="col">Calculated Volume (mL)</th>
              <th scope="col">Formula Applied</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>0.1 mL</strong></td>
              <td>1 ÷ 10 = 0.1 mL</td>
            </tr>
            <tr>
              <td><strong>2 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>0.2 mL</strong></td>
              <td>2 ÷ 10 = 0.2 mL</td>
            </tr>
            <tr>
              <td><strong>2.5 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>0.25 mL</strong></td>
              <td>2.5 ÷ 10 = 0.25 mL</td>
            </tr>
            <tr>
              <td><strong>5 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>0.5 mL</strong></td>
              <td>5 ÷ 10 = 0.5 mL</td>
            </tr>
            <tr>
              <td><strong>10 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>1 mL</strong></td>
              <td>10 ÷ 10 = 1 mL</td>
            </tr>
            <tr>
              <td><strong>15 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>1.5 mL</strong></td>
              <td>15 ÷ 10 = 1.5 mL</td>
            </tr>
            <tr>
              <td><strong>20 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>2 mL</strong></td>
              <td>20 ÷ 10 = 2 mL</td>
            </tr>
            <tr>
              <td><strong>25 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>2.5 mL</strong></td>
              <td>25 ÷ 10 = 2.5 mL</td>
            </tr>
            <tr>
              <td><strong>30 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>3 mL</strong></td>
              <td>30 ÷ 10 = 3 mL</td>
            </tr>
            <tr>
              <td><strong>40 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>4 mL</strong></td>
              <td>40 ÷ 10 = 4 mL</td>
            </tr>
            <tr>
              <td><strong>50 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>5 mL</strong></td>
              <td>50 ÷ 10 = 5 mL</td>
            </tr>
            <tr>
              <td><strong>100 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>10 mL</strong></td>
              <td>100 ÷ 10 = 10 mL</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="font-size: 0.875rem; color: var(--color-text-light); margin-top: var(--space-sm);">
        <em>For a broader reference across multiple concentrations, see the <a href="/mg-to-ml-conversion-chart/" data-link>MG to ML Conversion Chart</a>.</em>
      </p>
    </section>

    <section class="content-section-block">
      <h2>MG to ML Calculator Examples</h2>
      <p>
        Here are step-by-step mathematical solutions for several common unit calculations:
      </p>
      <div class="grid-2">
        <div class="card card-surface">
          <h3>0.5 mg to mL</h3>
          <p><strong>Concentration:</strong> 10 mg/mL</p>
          <p><strong>Math:</strong> 0.5 mg ÷ 10 mg/mL</p>
          <p style="font-weight: 700; color: var(--color-primary);">Result: 0.05 mL</p>
        </div>
        <div class="card card-surface">
          <h3>1 mg to mL</h3>
          <p><strong>Concentration:</strong> 10 mg/mL</p>
          <p><strong>Math:</strong> 1 mg ÷ 10 mg/mL</p>
          <p style="font-weight: 700; color: var(--color-primary);">Result: 0.1 mL</p>
        </div>
        <div class="card card-surface">
          <h3>2.5 mg to mL</h3>
          <p><strong>Concentration:</strong> 10 mg/mL</p>
          <p><strong>Math:</strong> 2.5 mg ÷ 10 mg/mL</p>
          <p style="font-weight: 700; color: var(--color-primary);">Result: 0.25 mL</p>
        </div>
        <div class="card card-surface">
          <h3>5 mg to mL</h3>
          <p><strong>Concentration:</strong> 10 mg/mL</p>
          <p><strong>Math:</strong> 5 mg ÷ 10 mg/mL</p>
          <p style="font-weight: 700; color: var(--color-primary);">Result: 0.5 mL</p>
        </div>
        <div class="card card-surface">
          <h3>25 mg to mL</h3>
          <p><strong>Concentration:</strong> 5 mg/mL</p>
          <p><strong>Math:</strong> 25 mg ÷ 5 mg/mL</p>
          <p style="font-weight: 700; color: var(--color-primary);">Result: 5 mL</p>
        </div>
        <div class="card card-surface">
          <h3>50 mg to mL</h3>
          <p><strong>Concentration:</strong> 20 mg/mL</p>
          <p><strong>Math:</strong> 50 mg ÷ 20 mg/mL</p>
          <p style="font-weight: 700; color: var(--color-primary);">Result: 2.5 mL</p>
        </div>
      </div>
      <p style="font-size: 0.875rem; color: var(--color-text-light); margin-top: var(--space-md);">
        <em>For more examples at different concentrations, see our <a href="/mg-to-ml-drug-conversion/" data-link>MG to ML drug conversion</a> guide.</em>
      </p>
    </section>

    <section class="content-section-block">
      <h2>How Many Milligrams Are in 1 mL?</h2>
      <p>
        The number of milligrams in 1 mL is not fixed — it depends on the concentration of the solution:
      </p>
      <ul>
        <li>At <strong>1 mg/mL</strong>: 1 mL contains <strong>1 mg</strong></li>
        <li>At <strong>5 mg/mL</strong>: 1 mL contains <strong>5 mg</strong></li>
        <li>At <strong>10 mg/mL</strong>: 1 mL contains <strong>10 mg</strong></li>
        <li>At <strong>50 mg/mL</strong>: 1 mL contains <strong>50 mg</strong></li>
        <li>At <strong>100 mg/mL</strong>: 1 mL contains <strong>100 mg</strong></li>
      </ul>
      <p>
        For pure water at standard conditions, 1 mL weighs 1 gram — which equals 1,000 mg. For liquid solutions with dissolved substances, the milligrams per milliliter is defined by the solution's specific concentration ratio.
      </p>
    </section>

    <section class="content-section-block">
      <h2>MG to ML vs ML to MG</h2>
      <p>
        The two conversions are mathematical inverses of each other:
      </p>
      <ul>
        <li><strong>MG to ML:</strong> Volume (mL) = Mass (mg) ÷ Concentration (mg/mL)</li>
        <li><strong>ML to MG:</strong> Mass (mg) = Volume (mL) × Concentration (mg/mL)</li>
      </ul>
      <p>
        If you know the volume in milliliters and need to find the mass in milligrams, multiply by the concentration instead of dividing. Use the dedicated <a href="/ml-to-mg/" data-link>ML to MG Calculator</a> for the reverse calculation.
      </p>
      <p>
        If you need to calculate or verify the concentration itself, the <a href="/mg-ml-concentration-calculator/" data-link>MG/ML Concentration Calculator</a> solves for any of the three variables: mass, volume, or concentration.
      </p>
    </section>

    <!-- Frequently Asked Questions Section -->
    <section style="margin-bottom: var(--space-2xl);">
      <h2 style="margin-bottom: var(--space-lg);">Frequently Asked Questions</h2>
      <div class="faq-list">
        <div class="faq-item">
          <h3 class="faq-question">How do you convert mg to mL?</h3>
          <p class="faq-answer">
            Divide the mass in milligrams by the solution concentration in mg/mL. Formula: Volume (mL) = Mass (mg) ÷ Concentration (mg/mL). For example, 50 mg at 10 mg/mL = 5 mL.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">How many mL is 1 mg?</h3>
          <p class="faq-answer">
            It depends on concentration. At 1 mg/mL, 1 mg equals 1 mL. At 10 mg/mL, 1 mg equals 0.1 mL. There is no single answer without knowing the solution strength.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">How many mg are in 1 mL?</h3>
          <p class="faq-answer">
            The number of milligrams in 1 mL equals the concentration of the solution. A 10 mg/mL solution contains 10 mg per mL. A 5 mg/mL solution contains 5 mg per mL. Pure water at standard conditions contains 1,000 mg (1 gram) per mL.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">Can mg be converted to mL directly?</h3>
          <p class="faq-answer">
            No. Milligrams measure mass and milliliters measure volume — they represent different physical dimensions. Conversion requires knowing the concentration in mg/mL or the substance density.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">What concentration is needed for mg to mL conversion?</h3>
          <p class="faq-answer">
            You need the concentration expressed in milligrams per milliliter (mg/mL). This value is the bridge between mass and volume — without it, the conversion is mathematically incomplete.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">Is mg/mL the same as mg to mL?</h3>
          <p class="faq-answer">
            No. mg/mL is a unit of concentration — it describes how many milligrams of substance are present in each milliliter of liquid. mg to mL is a conversion that uses concentration as an input to calculate volume from a known mass.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">Why does the same mg amount produce different mL results?</h3>
          <p class="faq-answer">
            Because different solutions have different concentrations. A highly concentrated liquid holds more milligrams per milliliter, so less volume is needed to contain the same total mass. A dilute liquid requires more volume.
          </p>
        </div>
      </div>
    </section>
  `;
}
