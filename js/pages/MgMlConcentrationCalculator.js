/**
 * MGMLCalculator.com - MG/ML Concentration Calculator View Template
 */

import { renderConcentrationCalculator } from '../components/ConcentrationCalculator.js';

export function renderMgMlConcentrationCalculatorPage() {
  return `
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/" data-link>Home</a>
      <span class="separator">/</span>
      <span class="current" aria-current="page">MG/ML Concentration Calculator</span>
    </nav>

    <!-- Page Hero -->
    <section class="page-hero">
      <span class="badge">Mathematical Unit Utility</span>
      <h1>MG/ML Concentration Calculator</h1>
      <p class="lead">
        Calculate liquid solution concentration in mg/mL from mass and volume, or solve for missing mass, volume, or concentration using fundamental metric formulas.
      </p>
    </section>

    <!-- Safety / Educational Disclaimer Card -->
    <div class="educational-notice-card" style="margin-bottom: var(--space-xl);">
      <p style="margin: 0; font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.5;">
        <strong>Important Safety Notice:</strong> This calculator performs mathematical unit calculations only. It does not determine medication doses, clinical administration schedules, or treatment recommendations. For any healthcare or medication decision, consult official product labeling and a qualified healthcare professional.
      </p>
    </div>

    <!-- Interactive Concentration Calculator Component -->
    ${renderConcentrationCalculator('concentration')}

    <!-- 1. What Is an MG/ML Concentration Calculator? -->
    <section class="content-section-block">
      <h2>What Is an MG/ML Concentration Calculator?</h2>
      <p>
        An <strong>mg/ml concentration calculator</strong> is an educational mathematical utility designed to solve the relationship between three fundamental physical variables: mass in milligrams (mg), liquid volume in milliliters (mL), and solution concentration in milligrams per milliliter (mg/mL).
      </p>
      <p>
        The expression <strong>mg/mL</strong> (milligrams per milliliter) represents a ratio of mass to volume. Milligrams quantify physical mass or weight, while milliliters quantify fluid volume space. Because they represent two distinct physical properties, you cannot convert between them without knowing the liquid's concentration. To understand the core physical distinctions between these units, review our guide on the <a href="/mg-vs-ml/" data-link>difference between mg and mL</a>.
      </p>
      <p>
        This <strong>mg/mL calculator</strong> allows you to calculate across all three directions:
      </p>
      <ul>
        <li><strong>Calculate concentration:</strong> Determine mg per mL from known mass and volume.</li>
        <li><strong>Calculate mass:</strong> Find total milligrams contained within a given volume of solution.</li>
        <li><strong>Calculate volume:</strong> Find the number of milliliters needed to obtain a target mass.</li>
      </ul>
    </section>

    <!-- 2. How to Calculate mg/mL Concentration -->
    <section class="content-section-block">
      <h2>How to Calculate mg/mL Concentration</h2>
      <p>
        To <strong>calculate mg per ml</strong> concentration, divide the total dissolved mass in milligrams by the total liquid volume in milliliters:
      </p>
      <div class="result-formula-box" style="margin-bottom: var(--space-md); text-align: center; font-size: 1.1rem; font-weight: 700;">
        Concentration (mg/mL) = Mass (mg) &divide; Volume (mL)
      </div>
      <p>
        This standard <strong>mg/mL concentration formula</strong> shows how densely substance is distributed through the liquid. When you <strong>calculate concentration from mg and mL</strong>, each variable plays a distinct role:
      </p>
      <ul>
        <li><strong>Mass (mg):</strong> The total quantity of solid or solute measured in milligrams.</li>
        <li><strong>Volume (mL):</strong> The total volume of liquid or solvent measured in milliliters.</li>
        <li><strong>Concentration (mg/mL):</strong> The resulting strength expressing how many milligrams exist in each single milliliter.</li>
      </ul>
      <p>
        <strong>Step-by-step mathematical example:</strong><br>
        Suppose a solution contains 100 mg of dissolved substance in 5 mL of liquid volume:
      </p>
      <p style="font-weight: 600; color: var(--color-primary-hover); font-size: 1.05rem;">
        100 mg &divide; 5 mL = 20 mg/mL
      </p>
      <p style="font-size: 0.875rem; color: var(--color-text-muted);">
        <em>Note: This is an arithmetic unit calculation demonstration, not clinical dosing advice.</em>
      </p>
    </section>

    <!-- 3. How to Calculate Mass and Volume -->
    <section class="content-section-block">
      <h2>How to Calculate Mass and Volume</h2>
      <p>
        By rearranging the primary concentration equation, you can easily solve for either missing variable:
      </p>

      <h3 style="font-size: 1.15rem; margin-top: var(--space-lg); margin-bottom: var(--space-xs);">1. Calculate Mass from Volume and Concentration</h3>
      <p>
        To <strong>calculate mg from mL and concentration</strong>, multiply the liquid volume by the solution strength:
      </p>
      <div class="result-formula-box" style="margin-bottom: var(--space-md); text-align: center; font-size: 1.1rem; font-weight: 700;">
        Mass (mg) = Concentration (mg/mL) &times; Volume (mL)
      </div>
      <p>
        <strong>Example:</strong> You have 5 mL of a solution with a concentration of 20 mg/mL:
      </p>
      <p style="font-weight: 600; color: var(--color-primary-hover);">
        20 mg/mL &times; 5 mL = 100 mg
      </p>
      <p>
        To perform volume-to-mass conversions directly with dedicated inputs, use our <a href="/ml-to-mg/" data-link>ML to MG calculator</a>.
      </p>

      <h3 style="font-size: 1.15rem; margin-top: var(--space-lg); margin-bottom: var(--space-xs);">2. Calculate Volume from Mass and Concentration</h3>
      <p>
        To <strong>calculate mL from mg and concentration</strong>, divide the target mass by the solution strength:
      </p>
      <div class="result-formula-box" style="margin-bottom: var(--space-md); text-align: center; font-size: 1.1rem; font-weight: 700;">
        Volume (mL) = Mass (mg) &divide; Concentration (mg/mL)
      </div>
      <p>
        <strong>Example:</strong> You need 100 mg from a solution with a concentration of 20 mg/mL:
      </p>
      <p style="font-weight: 600; color: var(--color-primary-hover);">
        100 mg &divide; 20 mg/mL = 5 mL
      </p>
      <p>
        To calculate required liquid volume from a specified milligram mass, try our dedicated <a href="/mg-to-ml/" data-link>MG to ML calculator</a>.
      </p>
    </section>

    <!-- 4. Understanding mg per 5 mL Labels -->
    <section class="content-section-block">
      <h2>Understanding mg per 5 mL Labels</h2>
      <p>
        Many commercial oral suspensions and liquid products state their strength as <strong>mg per 5 mL</strong> rather than a 1 mL unit ratio. A label stating a certain number of milligrams per 5 mL describes the exact mass of active material contained within that 5 mL volume.
      </p>
      <p>
        To convert an mg per 5 mL specification into a standard unit concentration (mg/mL), divide the stated milligram amount by 5:
      </p>
      <p style="font-weight: 600; color: var(--color-primary-hover);">
        125 mg &divide; 5 mL = 25 mg/mL
      </p>
      <p>
        Common label strengths and their mathematically equivalent unit concentrations include:
      </p>

      <div class="table-responsive">
        <table class="examples-table">
          <thead>
            <tr>
              <th scope="col">Label Concentration</th>
              <th scope="col">Equivalent Concentration</th>
              <th scope="col">Mathematical Calculation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>125 mg per 5 mL</strong></td>
              <td><strong>25 mg/mL</strong></td>
              <td>125 mg &divide; 5 mL</td>
            </tr>
            <tr>
              <td><strong>250 mg per 5 mL</strong></td>
              <td><strong>50 mg/mL</strong></td>
              <td>250 mg &divide; 5 mL</td>
            </tr>
            <tr>
              <td><strong>500 mg per 5 mL</strong></td>
              <td><strong>100 mg/mL</strong></td>
              <td>500 mg &divide; 5 mL</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="font-size: 0.875rem; color: var(--color-text-muted); margin-top: var(--space-sm);">
        <em>Important: These arithmetic examples explain packaging mathematics. They do not constitute medication dosing or administration recommendations.</em>
      </p>
      <p>
        For detailed explanations on deciphering concentration ratios on packaging, read our guide on <a href="/mg-to-ml-drug-conversion/" data-link>understanding concentration labels</a>.
      </p>
    </section>

    <!-- 5. Converting Percentage Concentration to mg/mL -->
    <section class="content-section-block">
      <h2>Converting Percentage Concentration to mg/mL</h2>
      <p>
        Liquid solutions are sometimes specified as a percentage rather than an explicit ratio. When a percentage is expressed as <strong>% w/v</strong> (weight per volume, or mass per volume), you can convert <strong>percentage concentration to mg/ml</strong> using a direct conversion factor:
      </p>
      <div class="result-formula-box" style="margin-bottom: var(--space-md); text-align: center; font-size: 1.1rem; font-weight: 700;">
        Concentration (mg/mL) = Percentage (% w/v) &times; 10
      </div>
      <p>
        <strong>Mathematical derivation:</strong><br>
        By scientific definition, a 1% w/v solution contains 1 gram of solute in 100 mL of fluid. Converting 1 gram to milligrams gives:
      </p>
      <ul>
        <li>1 gram = 1,000 milligrams (mg)</li>
        <li>100 mL = reference liquid volume</li>
        <li><strong>Calculation:</strong> 1,000 mg &divide; 100 mL = <strong>10 mg/mL</strong></li>
      </ul>
      <p>
        Applying this rule yields these common equivalences:
      </p>
      <ul>
        <li><strong>0.9% w/v</strong> = 0.9 &times; 10 = <strong>9 mg/mL</strong> (standard normal saline ratio)</li>
        <li><strong>1% w/v</strong> = 1 &times; 10 = <strong>10 mg/mL</strong></li>
        <li><strong>2% w/v</strong> = 2 &times; 10 = <strong>20 mg/mL</strong></li>
        <li><strong>5% w/v</strong> = 5 &times; 10 = <strong>50 mg/mL</strong></li>
      </ul>
      <p style="font-size: 0.875rem; color: var(--color-text-muted);">
        <em>Note: This mathematical relationship applies strictly to % w/v (weight per volume). Do not apply this formula indiscriminately to % w/w (weight per weight), % v/v (volume per volume), or other concentration conventions without accounting for density.</em>
      </p>
    </section>

    <!-- 6. Common Concentration Examples -->
    <section class="content-section-block">
      <h2>Common Concentration Examples</h2>
      <p>
        The table below demonstrates how varying mass and volume values produce specific concentration ratios:
      </p>

      <div class="table-responsive">
        <table class="examples-table">
          <thead>
            <tr>
              <th scope="col">Mass (mg)</th>
              <th scope="col">Volume (mL)</th>
              <th scope="col">Formula / Calculation</th>
              <th scope="col">Resulting Concentration (mg/mL)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>10 mg</strong></td>
              <td>1 mL</td>
              <td>10 &divide; 1</td>
              <td><strong>10 mg/mL</strong></td>
            </tr>
            <tr>
              <td><strong>50 mg</strong></td>
              <td>2.5 mL</td>
              <td>50 &divide; 2.5</td>
              <td><strong>20 mg/mL</strong></td>
            </tr>
            <tr>
              <td><strong>100 mg</strong></td>
              <td>5 mL</td>
              <td>100 &divide; 5</td>
              <td><strong>20 mg/mL</strong></td>
            </tr>
            <tr>
              <td><strong>250 mg</strong></td>
              <td>5 mL</td>
              <td>250 &divide; 5</td>
              <td><strong>50 mg/mL</strong></td>
            </tr>
            <tr>
              <td><strong>500 mg</strong></td>
              <td>10 mL</td>
              <td>500 &divide; 10</td>
              <td><strong>50 mg/mL</strong></td>
            </tr>
            <tr>
              <td><strong>1,000 mg</strong></td>
              <td>10 mL</td>
              <td>1,000 &divide; 10</td>
              <td><strong>100 mg/mL</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="margin-top: var(--space-md);">
        Understanding these relationships highlights why concentration matters: a more concentrated solution packs more milligrams into every milliliter, requiring less total volume to deliver a specific mass. For a broad reference across standard values, consult our <a href="/mg-to-ml-conversion-chart/" data-link>conversion chart</a>.
      </p>
    </section>

    <!-- 7. Frequently Asked Questions -->
    <section style="margin-bottom: var(--space-2xl);">
      <h2 style="margin-bottom: var(--space-lg);">Frequently Asked Questions</h2>
      <div class="faq-list">
        <div class="faq-item">
          <h3 class="faq-question">What does mg/mL mean?</h3>
          <p class="faq-answer">
            mg/mL stands for milligrams per milliliter. It represents concentration &mdash; expressing how many milligrams of a substance are dissolved in each milliliter of liquid volume.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">How do you calculate mg per mL?</h3>
          <p class="faq-answer">
            Divide the mass in milligrams by the volume in milliliters: Concentration (mg/mL) = Mass (mg) &divide; Volume (mL). For example, 100 mg &divide; 5 mL = 20 mg/mL.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">How do you calculate mg from mL?</h3>
          <p class="faq-answer">
            Multiply the volume in milliliters by the solution concentration in mg/mL: Mass (mg) = Volume (mL) &times; Concentration (mg/mL). For example, 5 mL &times; 20 mg/mL = 100 mg.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">How do you calculate mL from mg?</h3>
          <p class="faq-answer">
            Divide the mass in milligrams by the solution concentration in mg/mL: Volume (mL) = Mass (mg) &divide; Concentration (mg/mL). For example, 100 mg &divide; 20 mg/mL = 5 mL.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">How do you convert 1% w/v to mg/mL?</h3>
          <p class="faq-answer">
            Multiply the percentage by 10. A 1% w/v solution contains 1 gram (1,000 mg) per 100 mL, which equals 1,000 &divide; 100 = 10 mg/mL.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">What does 250 mg per 5 mL mean?</h3>
          <p class="faq-answer">
            It means every 5 milliliters of liquid contains 250 milligrams of the substance. Dividing 250 mg by 5 mL gives a unit concentration of 50 mg/mL.
          </p>
        </div>
      </div>
    </section>
  `;
}
