/**
 * MGMLCalculator.com - ML to MG Page View Template
 */

import { renderCalculator } from '../components/Calculator.js';

export function renderMlToMgPage() {
  return `
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/" data-link>Home</a>
      <span class="separator">/</span>
      <span class="current" aria-current="page">ML to MG Calculator</span>
    </nav>

    <!-- Page Hero -->
    <section class="page-hero">
      <span class="badge">Volume to Mass Unit Conversion</span>
      <h1>ML to MG Calculator</h1>
      <p class="lead">
        Milliliters (mL) measure volume. Milligrams (mg) measure mass. To calculate milligrams from milliliters, you need the solution concentration in mg/mL. Enter your values below for an instant result.
      </p>
    </section>

    <!-- Interactive Calculator Component -->
    ${renderCalculator('ml-to-mg')}

    <!-- Main Educational Content Sections -->
    <section class="content-section-block">
      <h2>How to Convert ML to MG</h2>
      <p>
        To convert milliliters to milligrams, multiply the volume by the solution concentration:
      </p>
      <div class="result-formula-box" style="margin-bottom: var(--space-md); text-align: center; font-size: 1.1rem; font-weight: 700;">
        Mass (mg) = Volume (mL) &times; Concentration (mg/mL)
      </div>
      <p>Each part of the formula represents a specific quantity:</p>
      <ul>
        <li><strong>Volume (mL):</strong> The amount of liquid you are measuring in milliliters.</li>
        <li><strong>Concentration (mg/mL):</strong> How many milligrams of substance are dissolved in each milliliter of liquid.</li>
        <li><strong>Mass (mg):</strong> The calculated mass &mdash; the result of the conversion.</li>
      </ul>
      <p>
        <strong>Worked example:</strong> You have 5 mL of liquid with a concentration of 10 mg/mL:
      </p>
      <p style="font-weight: 600; color: var(--color-primary-hover);">
        5 mL &times; 10 mg/mL = 50 mg
      </p>
      <p>
        <strong>Full Container Example:</strong> To calculate the total mass of active ingredient in a 100 mL bottle labeled at 5 mg/mL:
      </p>
      <p style="font-weight: 600; color: var(--color-primary-hover);">
        100 mL &times; 5 mg/mL = 500 mg total mass
      </p>
    </section>

    <section class="content-section-block">
      <h2>Why Concentration Matters</h2>
      <p>
        Milliliters and milligrams measure different physical properties &mdash; volume and mass respectively. There is no single universal value for how many mg are in 1 mL, because the answer depends entirely on the concentration of the solution.
      </p>
      <p>
        Consider the same 5 mL volume at three different concentration strengths:
      </p>
      <ul>
        <li>At <strong>5 mg/mL</strong>: 5 mL &times; 5 = <strong>25 mg</strong></li>
        <li>At <strong>10 mg/mL</strong>: 5 mL &times; 10 = <strong>50 mg</strong></li>
        <li>At <strong>20 mg/mL</strong>: 5 mL &times; 20 = <strong>100 mg</strong></li>
      </ul>
      <p>
        Doubling the concentration doubles the mass in milligrams for the same volume. This is why knowing the exact concentration is essential before converting mL to mg.
      </p>
      <p>
        For a full explanation of why mL and mg are different units, see our <a href="/mg-vs-ml/" data-link>difference between mg and mL</a> guide.
      </p>
    </section>

    <section class="content-section-block">
      <h2>ML to MG Conversion Examples</h2>
      <p>
        The table below shows how the formula works across different volume and concentration combinations. All values are mathematical examples, not medication dose recommendations.
      </p>
      <div class="table-responsive">
        <table class="examples-table">
          <thead>
            <tr>
              <th scope="col">Volume (mL)</th>
              <th scope="col">Concentration (mg/mL)</th>
              <th scope="col">Calculated Mass (mg)</th>
              <th scope="col">Calculation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1 mL</strong></td>
              <td>5 mg/mL</td>
              <td><strong>5 mg</strong></td>
              <td>1 &times; 5 = 5</td>
            </tr>
            <tr>
              <td><strong>2 mL</strong></td>
              <td>5 mg/mL</td>
              <td><strong>10 mg</strong></td>
              <td>2 &times; 5 = 10</td>
            </tr>
            <tr>
              <td><strong>5 mL</strong></td>
              <td>10 mg/mL</td>
              <td><strong>50 mg</strong></td>
              <td>5 &times; 10 = 50</td>
            </tr>
            <tr>
              <td><strong>10 mL</strong></td>
              <td>20 mg/mL</td>
              <td><strong>200 mg</strong></td>
              <td>10 &times; 20 = 200</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="font-size: 0.875rem; color: var(--color-text-light); margin-top: var(--space-sm);">
        <em>These are mathematical examples only. Always use the specific concentration for your liquid.</em>
      </p>
    </section>

    <section class="content-section-block">
      <h2>Common ML to MG Calculations</h2>
      <p>
        The table below lists quick reference values at an assumed concentration of <strong>10 mg/mL</strong>. Use the calculator above for different concentration values.
      </p>
      <div class="table-responsive">
        <table class="examples-table">
          <thead>
            <tr>
              <th scope="col">Volume (mL)</th>
              <th scope="col">Assumed Concentration</th>
              <th scope="col">Calculated Mass (mg)</th>
              <th scope="col">Formula Applied</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>0.1 mL</strong></td>
              <td>10 mg/mL</td>
              <td><strong>1 mg</strong></td>
              <td>0.1 &times; 10 = 1</td>
            </tr>
            <tr>
              <td><strong>0.25 mL</strong></td>
              <td>10 mg/mL</td>
              <td><strong>2.5 mg</strong></td>
              <td>0.25 &times; 10 = 2.5</td>
            </tr>
            <tr>
              <td><strong>0.5 mL</strong></td>
              <td>10 mg/mL</td>
              <td><strong>5 mg</strong></td>
              <td>0.5 &times; 10 = 5</td>
            </tr>
            <tr>
              <td><strong>1 mL</strong></td>
              <td>10 mg/mL</td>
              <td><strong>10 mg</strong></td>
              <td>1 &times; 10 = 10</td>
            </tr>
            <tr>
              <td><strong>2 mL</strong></td>
              <td>10 mg/mL</td>
              <td><strong>20 mg</strong></td>
              <td>2 &times; 10 = 20</td>
            </tr>
            <tr>
              <td><strong>2.5 mL</strong></td>
              <td>10 mg/mL</td>
              <td><strong>25 mg</strong></td>
              <td>2.5 &times; 10 = 25</td>
            </tr>
            <tr>
              <td><strong>5 mL</strong></td>
              <td>10 mg/mL</td>
              <td><strong>50 mg</strong></td>
              <td>5 &times; 10 = 50</td>
            </tr>
            <tr>
              <td><strong>10 mL</strong></td>
              <td>10 mg/mL</td>
              <td><strong>100 mg</strong></td>
              <td>10 &times; 10 = 100</td>
            </tr>
            <tr>
              <td><strong>30 mL</strong></td>
              <td>10 mg/mL</td>
              <td><strong>300 mg</strong></td>
              <td>30 &times; 10 = 300</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="font-size: 0.875rem; color: var(--color-text-light); margin-top: var(--space-sm);">
        <em>For reference values across multiple concentrations, see our <a href="/mg-to-ml-conversion-chart/" data-link>conversion chart</a>.</em>
      </p>
    </section>

    <section class="content-section-block">
      <h2>How Many Milligrams Are in 1 mL?</h2>
      <p>
        The number of milligrams in 1 mL is determined by the concentration of the solution, not a fixed universal value:
      </p>
      <ul>
        <li>At <strong>1 mg/mL</strong>: 1 mL contains <strong>1 mg</strong></li>
        <li>At <strong>5 mg/mL</strong>: 1 mL contains <strong>5 mg</strong></li>
        <li>At <strong>10 mg/mL</strong>: 1 mL contains <strong>10 mg</strong></li>
        <li>At <strong>50 mg/mL</strong>: 1 mL contains <strong>50 mg</strong></li>
        <li>At <strong>100 mg/mL</strong>: 1 mL contains <strong>100 mg</strong></li>
      </ul>
      <p>
        Pure water at standard conditions weighs 1 gram per milliliter &mdash; that is 1,000 mg per mL. For liquid solutions with dissolved substances, the mass per milliliter is defined by the concentration ratio (mg/mL) stated on the product label or solution specification. If you need to work out concentration itself, use the <a href="/mg-ml-concentration-calculator/" data-link>concentration calculator</a>.
      </p>
    </section>

    <section class="content-section-block">
      <h2>ML to MG vs. MG to ML</h2>
      <p>
        These two conversions are mathematical inverses of each other, using the same three variables:
      </p>
      <ul>
        <li><strong>ML to MG:</strong> Mass (mg) = Volume (mL) &times; Concentration (mg/mL)</li>
        <li><strong>MG to ML:</strong> Volume (mL) = Mass (mg) &divide; Concentration (mg/mL)</li>
      </ul>
      <p>
        If you know the mass in milligrams and need to find the volume, divide by the concentration instead of multiplying. Use the dedicated <a href="/mg-to-ml/" data-link>MG to ML calculator</a> for that direction. For context on understanding concentration labels on liquid products, see our <a href="/mg-to-ml-drug-conversion/" data-link>understanding concentration labels</a> guide.
      </p>
    </section>

    <!-- Frequently Asked Questions Section -->
    <section style="margin-bottom: var(--space-2xl);">
      <h2 style="margin-bottom: var(--space-lg);">Frequently Asked Questions</h2>
      <div class="faq-list">
        <div class="faq-item">
          <h3 class="faq-question">How do you convert mL to mg?</h3>
          <p class="faq-answer">
            Multiply the volume in milliliters by the solution concentration in mg/mL. Formula: Mass (mg) = Volume (mL) &times; Concentration (mg/mL). For example, 5 mL at 10 mg/mL = 50 mg.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">How many mg are in 1 mL?</h3>
          <p class="faq-answer">
            The number of milligrams in 1 mL depends on the concentration of the solution. At 10 mg/mL, 1 mL contains 10 mg. At 5 mg/mL, 1 mL contains 5 mg. For pure water at standard conditions, 1 mL contains 1,000 mg (1 gram). There is no single fixed answer without knowing the concentration.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">Can you convert mL to mg without concentration?</h3>
          <p class="faq-answer">
            No. Milliliters measure volume and milligrams measure mass &mdash; they represent different physical dimensions. Converting between them requires knowing the concentration in mg/mL or the substance density.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">What is the formula for mL to mg conversion?</h3>
          <p class="faq-answer">
            The formula is: Mass (mg) = Volume (mL) &times; Concentration (mg/mL). Multiply the liquid volume by the concentration ratio to find the total mass in milligrams.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">What is the difference between mg and mL?</h3>
          <p class="faq-answer">
            Milligrams (mg) measure mass or weight. Milliliters (mL) measure liquid volume &mdash; the space a fluid occupies. They quantify different physical properties, which is why concentration (mg/mL) is needed to relate one to the other.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">Is mL to mg the reverse of mg to mL?</h3>
          <p class="faq-answer">
            Yes. The two conversions use the same formula rearranged: ML to MG multiplies volume by concentration, while MG to ML divides mass by concentration. Both require the same concentration value to produce an accurate result.
          </p>
        </div>
      </div>
    </section>
  `;
}
