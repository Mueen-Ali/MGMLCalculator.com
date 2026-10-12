/**
 * MGMLCalculator.com - MG to ML Conversion Chart View Template
 */

import { renderInteractiveChart } from '../components/ConversionChart.js';

export function renderMgToMlConversionChartPage() {
  return `
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/" data-link>Home</a>
      <span class="separator">/</span>
      <span class="current" aria-current="page">MG to ML Conversion Chart</span>
    </nav>

    <!-- Page Hero -->
    <section class="page-hero">
      <span class="badge">Educational Conversion Reference</span>
      <h1>MG to ML Conversion Chart</h1>
      <p class="lead">
        A comprehensive reference chart showing how milligrams (mg) convert to milliliters (mL) across common solution concentrations, with formulas and mathematical examples.
      </p>
    </section>

    <!-- Safety / Educational Disclaimer Card -->
    <div class="educational-notice-card" style="margin-bottom: var(--space-xl);">
      <p style="margin: 0; font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.5;">
        <strong>Educational Safety Notice:</strong> This page is an educational mathematical conversion reference. It is <strong>not</strong> a medical dosing chart, treatment guide, or clinical administration protocol. Do not use this chart to calculate medication doses or administer treatments. For all medication decisions, follow official product labeling and consult a qualified healthcare professional.
      </p>
    </div>

    <!-- 1. How to Use an MG to ML Conversion Chart -->
    <section class="content-section-block">
      <h2>How to Use an MG to ML Conversion Chart</h2>
      <p>
        An <strong>mg to ml conversion chart</strong> is a structured reference table that maps mass in milligrams (mg) to liquid volume in milliliters (mL). Because milligrams measure mass while milliliters measure volume, a <strong>milligrams to milliliters chart</strong> is only valid when paired with a stated liquid concentration.
      </p>
      <p>
        To read an <strong>mg to ml chart</strong> accurately:
      </p>
      <ol style="margin-left: var(--space-lg); margin-bottom: var(--space-md); line-height: 1.6;">
        <li><strong>Identify your target mass (mg):</strong> Determine the number of milligrams you need to convert.</li>
        <li><strong>Verify the solution concentration (mg/mL):</strong> Check product specifications or container labeling for the solution strength.</li>
        <li><strong>Locate the corresponding liquid volume (mL):</strong> Follow the row for your target mass under the matching concentration column.</li>
      </ol>
      <p>
        If your liquid solution has a different concentration than the static table, you must adjust the calculation or use an interactive tool.
      </p>
    </section>

    <!-- 2. The Formula Behind the Chart -->
    <section class="content-section-block">
      <h2>The Formula Behind the Chart</h2>
      <p>
        Every value in an <strong>mg to ml conversion table</strong> is calculated using the fundamental mass-to-volume formula for <strong>milligram to milliliter conversion</strong>:
      </p>
      <div class="result-formula-box" style="margin-bottom: var(--space-md); text-align: center; font-size: 1.1rem; font-weight: 700;">
        Volume (mL) = Mass (mg) &divide; Concentration (mg/mL)
      </div>
      <p>
        In this formula:
      </p>
      <ul>
        <li><strong>Volume (mL):</strong> The liquid volume to measure in milliliters.</li>
        <li><strong>Mass (mg):</strong> The physical mass or weight of the dissolved substance in milligrams.</li>
        <li><strong>Concentration (mg/mL):</strong> The solution strength ratio stating how many milligrams are dissolved in each milliliter.</li>
      </ul>
      <p>
        <strong>Worked Mathematical Example:</strong><br>
        Suppose a problem specifies <strong>50 mg</strong> of mass and the liquid solution has a stated concentration ratio of <strong>10 mg/mL</strong>:
      </p>
      <p style="font-weight: 600; color: var(--color-primary-hover); font-size: 1.05rem;">
        50 mg &divide; 10 mg/mL = 5 mL
      </p>
      <p style="font-size: 0.875rem; color: var(--color-text-muted);">
        <em>Note: This is a purely arithmetic calculation example, not a clinical dosing instruction.</em>
      </p>
      <p>
        If you need to determine the concentration ratio itself from known mass and volume values, use our <a href="/mg-ml-concentration-calculator/" data-link>concentration calculator</a>.
      </p>
    </section>

    <!-- 3. MG to ML Conversion Chart by Concentration -->
    <section class="content-section-block">
      <h2>MG to ML Conversion Chart by Concentration</h2>
      <p>
        Use the interactive <strong>mg to ml conversion chart by concentration</strong> below to dynamically adjust the concentration ratio. Select any preset strength or input a custom concentration to recalculate all liquid volumes in real time:
      </p>

      <!-- Interactive Chart Component -->
      ${renderInteractiveChart(10)}

      <h3 style="font-size: 1.15rem; margin-top: var(--space-xl); margin-bottom: var(--space-xs);">
        Static Reference Table at 10 mg/mL Concentration
      </h3>
      <p>
        The table below displays common baseline values calculated using an explicitly stated concentration of <strong>10 mg/mL</strong>:
      </p>

      <div class="table-responsive">
        <table class="examples-table">
          <thead>
            <tr>
              <th scope="col">Mass</th>
              <th scope="col">Concentration</th>
              <th scope="col">Calculated Volume</th>
              <th scope="col">Formula Applied</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>0.1 mL</strong></td>
              <td>1 &divide; 10</td>
            </tr>
            <tr>
              <td><strong>2.5 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>0.25 mL</strong></td>
              <td>2.5 &divide; 10</td>
            </tr>
            <tr>
              <td><strong>5 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>0.5 mL</strong></td>
              <td>5 &divide; 10</td>
            </tr>
            <tr>
              <td><strong>10 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>1 mL</strong></td>
              <td>10 &divide; 10</td>
            </tr>
            <tr>
              <td><strong>25 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>2.5 mL</strong></td>
              <td>25 &divide; 10</td>
            </tr>
            <tr>
              <td><strong>50 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>5 mL</strong></td>
              <td>5 &divide; 10</td>
            </tr>
            <tr>
              <td><strong>100 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>10 mL</strong></td>
              <td>100 &divide; 10</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="font-size: 0.875rem; color: var(--color-text-muted); margin-top: var(--space-sm);">
        <em>Important Note: This reference table applies strictly to solutions with a concentration of 10 mg/mL. Liquids with different concentrations require different volumes.</em>
      </p>
    </section>

    <!-- 4. Common MG to ML Examples -->
    <section class="content-section-block">
      <h2>Common MG to ML Examples</h2>
      <p>
        Here is how common milligram amounts convert into liquid volume using the standard benchmark of 10 mg/mL:
      </p>
      <ul>
        <li><strong>1 mg to ml:</strong> At 10 mg/mL, 1 mg equals <strong>0.1 mL</strong> (1 &divide; 10).</li>
        <li><strong>2.5 mg to ml:</strong> At 10 mg/mL, 2.5 mg equals <strong>0.25 mL</strong> (2.5 &divide; 10).</li>
        <li><strong>5 mg to ml:</strong> At 10 mg/mL, 5 mg equals <strong>0.5 mL</strong> (5 &divide; 10).</li>
        <li><strong>10 mg to ml:</strong> At 10 mg/mL, 10 mg equals <strong>1 mL</strong> (10 &divide; 10).</li>
        <li><strong>25 mg to ml:</strong> At 10 mg/mL, 25 mg equals <strong>2.5 mL</strong> (25 &divide; 10).</li>
        <li><strong>50 mg to ml:</strong> At 10 mg/mL, 50 mg equals <strong>5 mL</strong> (50 &divide; 10).</li>
        <li><strong>100 mg to ml:</strong> At 10 mg/mL, 100 mg equals <strong>10 mL</strong> (100 &divide; 10).</li>
      </ul>
      <p>
        When measuring these small liquid volumes in practice, graduated syringe barrels are typically used. For an educational overview of how barrel hash marks correspond to fluid amounts, review our guide on <a href="/mg-to-ml-syringe/" data-link>syringe volume markings</a>.
      </p>
    </section>

    <!-- 5. Why Concentration Changes the Result -->
    <section class="content-section-block">
      <h2>Why Concentration Changes the Result</h2>
      <p>
        A frequent misunderstanding is assuming that a fixed milligram mass always equals a fixed milliliter volume. In reality, milligrams measure mass, milliliters measure volume, and mg/mL describes concentration. To review why these physical properties are distinct, see our guide on the <a href="/mg-vs-ml/" data-link>difference between mg and mL</a>.
      </p>
      <p>
        Because concentration determines how densely a substance is dissolved in a fluid, changing the concentration changes the volume required for any given mass. Consider how <strong>10 mg</strong> translates into liquid volume across three different concentrations:
      </p>
      <ul>
        <li>At <strong>5 mg/mL</strong>: 10 mg &divide; 5 mg/mL = <strong>2 mL</strong></li>
        <li>At <strong>10 mg/mL</strong>: 10 mg &divide; 10 mg/mL = <strong>1 mL</strong></li>
        <li>At <strong>20 mg/mL</strong>: 10 mg &divide; 20 mg/mL = <strong>0.5 mL</strong></li>
      </ul>
      <p style="font-size: 0.875rem; color: var(--color-text-muted);">
        <em>Note: These are mathematical conversion examples, not medication dosing recommendations.</em>
      </p>
      <p>
        A more concentrated solution holds more milligrams per milliliter, so less liquid volume is required to supply the same total mass. For further explanations on reading strength specifications on liquid containers, read our guide to <a href="/mg-to-ml-drug-conversion/" data-link>understanding concentration</a>.
      </p>
    </section>

    <!-- 6. When to Use an MG to ML Calculator -->
    <section class="content-section-block">
      <h2>When to Use an MG to ML Calculator</h2>
      <p>
        While an <strong>mg to ml calculator chart</strong> provides a fast overview of round numbers, an interactive calculator is superior in several practical scenarios:
      </p>
      <ul>
        <li><strong>Custom mass amounts:</strong> When calculating non-standard values (such as 3.75 mg, 12.5 mg, or 65 mg) that do not appear in a standard reference table.</li>
        <li><strong>Unique concentration ratios:</strong> When working with products that specify concentrations such as 15 mg/mL, 37.5 mg/mL, or 250 mg per 5 mL.</li>
        <li><strong>Reverse calculations:</strong> When you know the liquid volume in milliliters and need to calculate total mass in milligrams.</li>
      </ul>
      <p>
        To perform custom conversions from mass to volume, use our primary <a href="/mg-to-ml/" data-link>MG to ML calculator</a>. To calculate mass from liquid volume, use our dedicated <a href="/ml-to-mg/" data-link>ML to MG calculator</a>.
      </p>
    </section>

    <!-- 7. Frequently Asked Questions -->
    <section style="margin-bottom: var(--space-2xl);">
      <h2 style="margin-bottom: var(--space-lg);">Frequently Asked Questions</h2>
      <div class="faq-list">
        <div class="faq-item">
          <h3 class="faq-question">How do you use an MG to ML conversion chart?</h3>
          <p class="faq-answer">
            Find your target mass in milligrams in the left column, verify that the chart's stated concentration matches your solution's concentration (mg/mL), and read across to find the corresponding liquid volume in milliliters.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">How do you convert mg to mL?</h3>
          <p class="faq-answer">
            Divide the mass in milligrams by the solution concentration in mg/mL using the formula Volume (mL) = Mass (mg) &divide; Concentration (mg/mL). For example, 50 mg at 10 mg/mL = 5 mL.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">How many mL is 10 mg?</h3>
          <p class="faq-answer">
            The volume depends entirely on the liquid concentration. At a standard concentration of 10 mg/mL, 10 mg equals 1 mL (10 &divide; 10 = 1). At 5 mg/mL, 10 mg equals 2 mL. At 20 mg/mL, 10 mg equals 0.5 mL.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">How many mL is 50 mg?</h3>
          <p class="faq-answer">
            The volume depends on the solution concentration. Assuming a 10 mg/mL concentration, 50 mg equals 5 mL (50 &divide; 10 = 5). At a 25 mg/mL concentration, 50 mg equals 2 mL (50 &divide; 25 = 2).
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">Why does concentration matter in an MG to ML chart?</h3>
          <p class="faq-answer">
            Because milligrams measure mass and milliliters measure volume. Concentration defines how many milligrams are contained in each milliliter, so changing the concentration changes the volume needed for any given mass.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">Can one chart apply to every concentration?</h3>
          <p class="faq-answer">
            No. A conversion chart is mathematically valid only for the specific concentration stated in its column headers. Liquids with different concentrations require separate calculations or an interactive calculator.
          </p>
        </div>
      </div>
    </section>
  `;
}
