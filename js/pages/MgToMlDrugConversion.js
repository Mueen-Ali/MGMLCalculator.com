/**
 * MGMLCalculator.com - MG to ML Drug Conversion Educational View Template
 */

export function renderMgToMlDrugConversionPage() {
  return `
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/" data-link>Home</a>
      <span class="separator">/</span>
      <span class="current" aria-current="page">MG to ML Drug Conversion</span>
    </nav>

    <!-- Page Hero -->
    <section class="page-hero">
      <span class="badge">Educational Conversion Reference</span>
      <h1>MG to ML Drug Conversion: Reading Labels &amp; Understanding Concentration</h1>
      <p class="lead">
        An educational guide explaining how solution concentration (mg/mL) mathematically relates mass in milligrams (mg) to liquid volume in milliliters (mL).
      </p>
    </section>

    <!-- Safety / Educational Notice -->
    <div class="educational-notice-card" style="margin-bottom: var(--space-xl);">
      <p style="margin: 0; font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.5;">
        <strong>Important Educational Notice:</strong> This page explains the arithmetic principles of concentration-based liquid conversions. It does not provide medical guidance, dosing calculations, or clinical instructions. For medication administration, always verify product labeling and consult a licensed healthcare professional.
      </p>
    </div>

    <!-- Quick Calculator Link Card -->
    <div class="card card-surface" style="margin-bottom: var(--space-xl); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-md);">
      <div>
        <strong>Looking to calculate volume directly?</strong><br>
        <span style="font-size: 0.9rem; color: var(--color-text-muted);">Use our interactive conversion tool with your known mass and concentration values.</span>
      </div>
      <a href="/mg-to-ml/" class="btn btn-primary" data-link>Open MG to ML Calculator &rarr;</a>
    </div>

    <!-- 1. What Does MG to ML Drug Conversion Mean? -->
    <section class="content-section-block">
      <h2>What Does MG to ML Drug Conversion Mean?</h2>
      <p>
        The phrase <strong>mg to ml drug conversion</strong> refers to the mathematical process of calculating the liquid volume (in milliliters) corresponding to a specified mass (in milligrams) of an active substance dissolved in solution.
      </p>
      <p>
        Milligrams and milliliters measure two fundamentally different physical dimensions:
      </p>
      <ul>
        <li><strong>Milligrams (mg):</strong> Quantify physical mass or weight.</li>
        <li><strong>Milliliters (mL):</strong> Quantify three-dimensional liquid volume space.</li>
      </ul>
      <p>
        Because mass and volume are distinct physical dimensions, direct unit conversion between them is impossible without a connecting physical ratio. For liquids, this ratio is concentration &mdash; specifically expressed as milligrams per milliliter (mg/mL). To explore why mass and volume cannot be converted directly, read our detailed comparison on the <a href="/mg-vs-ml/" data-link>difference between mg and mL</a>.
      </p>
      <p>
        Understanding <strong>mg to ml conversion for liquids</strong> ensures that calculations remain grounded in sound arithmetic, recognizing that fluid volume depends entirely on how densely dissolved mass is distributed throughout the liquid.
      </p>
    </section>

    <!-- 2. Understanding mg/mL Concentration -->
    <section class="content-section-block">
      <h2>Understanding mg/mL Concentration</h2>
      <p>
        <strong>Medication concentration mg/ml</strong> expresses the ratio of dissolved solid mass to total fluid volume. In short, <strong>understanding mg per ml</strong> means recognizing how many milligrams of substance are contained in every single milliliter of fluid.
      </p>
      <p>
        Concentration ratios commonly appear in several standard formats:
      </p>
      <ul>
        <li><strong>10 mg/mL:</strong> Indicates that each 1 mL of fluid contains 10 mg of active substance.</li>
        <li><strong>20 mg/mL:</strong> Indicates that each 1 mL of fluid contains 20 mg of active substance.</li>
        <li><strong>50 mg/mL:</strong> Indicates that each 1 mL of fluid contains 50 mg of active substance.</li>
      </ul>
      <p>
        When working with liquid measurements, measuring devices such as oral syringes or graduated cylinders measure liquid volume in mL, whereas the desired ingredient amount is measured in mg. For a closer look at volumetric barrel markings versus concentration, see our educational overview on <a href="/mg-to-ml-syringe/" data-link>MG to ML syringe conversion</a>.
      </p>
      <p>
        If you have a solution with known mass and volume but need to determine its concentration, you can use our dedicated <a href="/mg-ml-concentration-calculator/" data-link>concentration calculator</a>.
      </p>
    </section>

    <!-- 3. The Formula for MG to ML Conversion -->
    <section class="content-section-block">
      <h2>The Formula for MG to ML Conversion</h2>
      <p>
        To <strong>convert mg to ml with concentration</strong>, divide the mass in milligrams by the solution strength in mg/mL. The core <strong>mg to ml formula</strong> is:
      </p>
      <div class="result-formula-box" style="margin-bottom: var(--space-md); text-align: center; font-size: 1.1rem; font-weight: 700;">
        Volume (mL) = Mass (mg) &divide; Concentration (mg/mL)
      </div>
      <p>
        Conversely, to calculate total mass from a known liquid volume:
      </p>
      <div class="result-formula-box" style="margin-bottom: var(--space-md); text-align: center; font-size: 1.1rem; font-weight: 700;">
        Mass (mg) = Volume (mL) &times; Concentration (mg/mL)
      </div>
      <p>
        Each variable represents a specific measurement:
      </p>
      <ul>
        <li><strong>Volume (mL):</strong> The amount of fluid space occupied by the liquid.</li>
        <li><strong>Mass (mg):</strong> The quantity or weight of active ingredient.</li>
        <li><strong>Concentration (mg/mL):</strong> The proportion of mass dissolved per unit of liquid volume.</li>
      </ul>
      <p>
        <strong>Worked Mathematical Example:</strong><br>
        Suppose a mathematical problem specifies:
      </p>
      <ul>
        <li>Target mass = <strong>100 mg</strong></li>
        <li>Solution concentration = <strong>20 mg/mL</strong></li>
      </ul>
      <p>
        Applying the formula:
      </p>
      <p style="font-weight: 600; color: var(--color-primary-hover); font-size: 1.05rem;">
        100 mg &divide; 20 mg/mL = 5 mL
      </p>
      <p style="font-size: 0.875rem; color: var(--color-text-muted);">
        <em>Note: This is a hypothetical mathematical equation illustrating unit conversion principles, not a medication dosing instruction or clinical recommendation.</em>
      </p>
      <p>
        For direct interactive calculations in either direction, use our dedicated <a href="/mg-to-ml/" data-link>MG to ML calculator</a> or reverse <a href="/ml-to-mg/" data-link>ML to MG calculator</a>.
      </p>
    </section>

    <!-- 4. Understanding mg per 5 mL Labels -->
    <section class="content-section-block">
      <h2>Understanding mg per 5 mL Labels</h2>
      <p>
        Packaging for liquid oral suspensions frequently displays <strong>concentration on liquid labels</strong> as <strong>mg per 5 mL</strong> rather than per individual milliliter. A label stating milligrams per 5 mL describes the total mass of active substance contained in that 5 mL volume.
      </p>
      <p>
        To apply standard unit formulas, first convert the 5 mL label into a unit concentration in mg/mL by dividing the milligram number by 5:
      </p>
      <p style="font-weight: 600; color: var(--color-primary-hover);">
        125 mg &divide; 5 mL = 25 mg/mL
      </p>
      <p>
        Common mathematical label examples and their unit concentrations include:
      </p>

      <div class="table-responsive">
        <table class="examples-table">
          <thead>
            <tr>
              <th scope="col">Example Label</th>
              <th scope="col">Equivalent Concentration</th>
              <th scope="col">Mathematical Calculation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>125 mg per 5 mL</strong></td>
              <td><strong>25 mg/mL</strong></td>
              <td>125 &divide; 5</td>
            </tr>
            <tr>
              <td><strong>250 mg per 5 mL</strong></td>
              <td><strong>50 mg/mL</strong></td>
              <td>250 &divide; 5</td>
            </tr>
            <tr>
              <td><strong>500 mg per 5 mL</strong></td>
              <td><strong>100 mg/mL</strong></td>
              <td>500 &divide; 5</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="font-size: 0.875rem; color: var(--color-text-muted); margin-top: var(--space-sm);">
        <em>Important: These numbers illustrate arithmetic operations. They do not represent recommended medication doses or imply that different products share identical concentrations. Actual product packaging may specify different strengths.</em>
      </p>

      <h3 style="font-size: 1.15rem; margin-top: var(--space-lg); margin-bottom: var(--space-xs);">Percentage Strength on Liquid Labels (% w/v)</h3>
      <p>
        Some liquid products indicate strength as a percentage rather than an explicit ratio. When a liquid is labeled as weight-in-volume (<strong>% w/v</strong>), each 1% corresponds to <strong>10 mg/mL</strong> (derived from 1 gram, or 1,000 mg, per 100 mL):
      </p>
      <ul>
        <li><strong>0.9% w/v</strong> = 0.9 &times; 10 = <strong>9 mg/mL</strong> (standard normal saline)</li>
        <li><strong>1% w/v</strong> = 1 &times; 10 = <strong>10 mg/mL</strong></li>
        <li><strong>2% w/v</strong> = 2 &times; 10 = <strong>20 mg/mL</strong></li>
      </ul>
      <p style="font-size: 0.875rem; color: var(--color-text-muted);">
        <em>Note: This 10&times; rule applies strictly to % w/v (weight per volume). It does not apply to % w/w (weight per weight) or % v/v (volume per volume) formulations, which require density measurements.</em>
      </p>

      <!-- Educational Callout: Total Bottle Content vs. Concentration per mL -->
      <div class="card card-surface" style="margin-top: var(--space-lg); margin-bottom: var(--space-md); border-left: 4px solid var(--color-primary);">
        <h4 style="margin-top: 0; margin-bottom: var(--space-xs); font-size: 1.05rem;">
          Important Distinction: Total Bottle Content vs. Concentration per mL
        </h4>
        <p style="margin-bottom: var(--space-sm);">
          A common mistake when reading medication and liquid solution packaging is confusing the <strong>total active ingredient in the whole container</strong> with the <strong>concentration per milliliter</strong>.
        </p>
        <p style="margin-bottom: var(--space-sm);">
          For example, if a bottle label states <strong>500 mg total active ingredient in 100 mL</strong>, the concentration is <strong>not</strong> 500 mg/mL. Assuming the total amount is distributed evenly in the final 100 mL volume, the actual concentration is:
        </p>
        <div class="result-formula-box" style="margin-bottom: var(--space-sm); text-align: center; font-weight: 700;">
          500 mg &divide; 100 mL = 5 mg/mL
        </div>
        <p style="margin-bottom: 0; font-size: 0.875rem; color: var(--color-text-muted);">
          Always verify whether the milligram figure on a product label refers to the entire container volume or the unit strength per milliliter (mg/mL) before computing dosages or volumes.
        </p>
      </div>

      <!-- Contextual Link to Calculator -->
      <div class="card card-surface" style="margin-top: var(--space-md); margin-bottom: var(--space-xs); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-md);">
        <div>
          <strong>Ready to calculate liquid volume from your label's concentration?</strong>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text-muted);">
            Once you have determined the solution strength in mg/mL from the packaging, use our calculator to find the exact volume in milliliters.
          </p>
        </div>
        <a href="/mg-to-ml/" class="btn btn-primary" data-link>Calculate Volume in MG to ML Calculator &rarr;</a>
      </div>
    </section>

    <!-- 5. Why the Same Volume Can Contain Different Amounts -->
    <section class="content-section-block">
      <h2>Why the Same Volume Can Contain Different Amounts</h2>
      <p>
        A frequent misconception in <strong>liquid concentration conversion</strong> is assuming that a standard liquid volume (such as 5 mL) contains a fixed number of milligrams. In reality, the mass contained in any given volume depends entirely on the solution's concentration.
      </p>
      <p>
        Consider the same 5 mL volume at three different liquid concentration strengths:
      </p>
      <ul>
        <li>At <strong>5 mg/mL</strong>: 5 mL &times; 5 mg/mL = <strong>25 mg</strong></li>
        <li>At <strong>20 mg/mL</strong>: 5 mL &times; 20 mg/mL = <strong>100 mg</strong></li>
        <li>At <strong>50 mg/mL</strong>: 5 mL &times; 50 mg/mL = <strong>250 mg</strong></li>
      </ul>
      <p>
        Conversely, obtaining a constant mass of 100 mg requires drastically different fluid volumes depending on solution strength:
      </p>
      <ul>
        <li>At <strong>10 mg/mL</strong>: 100 mg &divide; 10 mg/mL = <strong>10 mL</strong></li>
        <li>At <strong>20 mg/mL</strong>: 100 mg &divide; 20 mg/mL = <strong>5 mL</strong></li>
        <li>At <strong>50 mg/mL</strong>: 100 mg &divide; 50 mg/mL = <strong>2 mL</strong></li>
      </ul>
      <p>
        Because a more concentrated liquid packs more milligrams into each milliliter, less liquid volume is required to supply the same mass. This physical fact reinforces why concentration must always be checked prior to mathematical calculations.
      </p>
    </section>

    <!-- 6. Common Mathematical Examples -->
    <section class="content-section-block">
      <h2>Common Mathematical Examples</h2>
      <p>
        The table below shows hypothetical mathematical conversions illustrating how mass and concentration determine liquid volume:
      </p>

      <div class="table-responsive">
        <table class="examples-table">
          <thead>
            <tr>
              <th scope="col">Mass</th>
              <th scope="col">Concentration</th>
              <th scope="col">Calculated Volume</th>
              <th scope="col">Calculation Step</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>10 mg</strong></td>
              <td>5 mg/mL</td>
              <td><strong>2 mL</strong></td>
              <td>10 &divide; 5 = 2</td>
            </tr>
            <tr>
              <td><strong>25 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>2.5 mL</strong></td>
              <td>25 &divide; 10 = 2.5</td>
            </tr>
            <tr>
              <td><strong>100 mg</strong></td>
              <td>20 mg/mL</td>
              <td><strong>5 mL</strong></td>
              <td>100 &divide; 20 = 5</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="font-size: 0.875rem; color: var(--color-text-muted); margin-top: var(--space-sm);">
        <em>Note: These examples illustrate the mathematical formula only and do not provide medical dosing, injection protocols, or clinical treatment advice.</em>
      </p>
      <p style="margin-top: var(--space-md);">
        To review conversion values across a broad range of masses and standard solution strengths, explore our comprehensive <a href="/mg-to-ml-conversion-chart/" data-link>MG to ML conversion chart</a>.
      </p>
    </section>

    <!-- 7. Frequently Asked Questions -->
    <section style="margin-bottom: var(--space-2xl);">
      <h2 style="margin-bottom: var(--space-lg);">Frequently Asked Questions</h2>
      <div class="faq-list">
        <div class="faq-item">
          <h3 class="faq-question">What does mg/mL mean?</h3>
          <p class="faq-answer">
            mg/mL stands for milligrams per milliliter. It expresses concentration &mdash; the mass in milligrams of an active substance present in each milliliter of liquid.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">How do you convert mg to mL?</h3>
          <p class="faq-answer">
            To convert mg to mL, divide the mass in milligrams by the solution concentration in mg/mL: Volume (mL) = Mass (mg) &divide; Concentration (mg/mL). For example, 100 mg at 20 mg/mL = 5 mL.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">Can mg be converted to mL without concentration?</h3>
          <p class="faq-answer">
            No. Milligrams measure weight (mass) and milliliters measure volume. Converting between them requires knowing the solution concentration in mg/mL or liquid density.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">What does 250 mg per 5 mL mean?</h3>
          <p class="faq-answer">
            It means every 5 milliliters of the liquid contains 250 milligrams of the active substance. Dividing 250 mg by 5 mL gives a unit concentration of 50 mg/mL.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">Why can the same volume contain different amounts of a substance?</h3>
          <p class="faq-answer">
            Because different liquids have different concentrations. A highly concentrated liquid packs more milligrams into each milliliter, whereas a more dilute liquid contains fewer milligrams in the same volume.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">What is the difference between mg and mL?</h3>
          <p class="faq-answer">
            Milligrams (mg) quantify physical mass or weight, while milliliters (mL) quantify liquid volume space. They measure two different physical properties.
          </p>
        </div>
      </div>
    </section>
  `;
}
