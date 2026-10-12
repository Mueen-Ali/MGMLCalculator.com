/**
 * MGMLCalculator.com - Home Page View Template
 * Comprehensive Conversion Hub for MG to ML and ML to MG
 */

import { renderCalculator } from '../components/Calculator.js';

export function renderHomePage() {
  return `
    <!-- Page Hero -->
    <section class="page-hero">
      <span class="badge">Precision Mathematical Unit Utility</span>
      <h1>MG to ML Conversion: Calculator, Formula &amp; Examples</h1>
      <p class="lead">
        A clean, fast, and free online mg to ml calculator to convert milligrams to milliliters and milliliters to milligrams based on liquid solution concentration. Easily convert mg to ml for any liquid strength.
      </p>
    </section>

    <!-- Interactive Calculator Component -->
    ${renderCalculator('mg-to-ml')}

    <!-- Section 1: What Can You Calculate? -->
    <section style="margin-bottom: var(--space-2xl);">
      <h2 style="text-align: center; margin-bottom: var(--space-lg);">What Can You Calculate?</h2>
      <div class="grid-2">
        <div class="card card-surface" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span class="badge">Primary Calculator</span>
            <h3 style="margin-top: var(--space-xs);"><a href="/mg-to-ml/" data-link>MG to ML Calculator</a></h3>
            <p>
              Convert milligrams (mg) to milliliters (mL) by entering total mass and liquid concentration (mg/mL). Includes formulas and worked examples.
            </p>
          </div>
          <div style="margin-top: var(--space-md);">
            <a href="/mg-to-ml/" class="btn btn-primary" data-link style="width: 100%; text-align: center;">Calculate MG &rarr; ML &rarr;</a>
          </div>
        </div>

        <div class="card card-surface" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span class="badge">Primary Calculator</span>
            <h3 style="margin-top: var(--space-xs);"><a href="/ml-to-mg/" data-link>ML to MG Calculator</a></h3>
            <p>
              Convert milliliters (mL) back into milligrams (mg). Input liquid volume and solution strength ratio to calculate total mass instantly.
            </p>
          </div>
          <div style="margin-top: var(--space-md);">
            <a href="/ml-to-mg/" class="btn btn-primary" data-link style="width: 100%; text-align: center;">Calculate ML &rarr; MG &rarr;</a>
          </div>
        </div>

        <div class="card card-surface" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span class="badge">Concentration Utility</span>
            <h3 style="margin-top: var(--space-xs);"><a href="/mg-ml-concentration-calculator/" data-link>MG/ML Concentration Calculator</a></h3>
            <p>
              Solve for missing concentration (mg/mL), mass (mg), or volume (mL) using three flexible mathematical calculation modes.
            </p>
          </div>
          <div style="margin-top: var(--space-md);">
            <a href="/mg-ml-concentration-calculator/" class="btn btn-outline" data-link style="width: 100%; text-align: center;">Explore Calculator &rarr;</a>
          </div>
        </div>

        <div class="card card-surface" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span class="badge">Label Guide</span>
            <h3 style="margin-top: var(--space-xs);"><a href="/mg-to-ml-drug-conversion/" data-link>MG to ML Drug Conversion</a></h3>
            <p>
              Learn how liquid product strength labels express concentration ratios and how to read mg/mL packaging specifications.
            </p>
          </div>
          <div style="margin-top: var(--space-md);">
            <a href="/mg-to-ml-drug-conversion/" class="btn btn-outline" data-link style="width: 100%; text-align: center;">Read Guide &rarr;</a>
          </div>
        </div>

        <div class="card card-surface" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span class="badge">Volumetric Reference</span>
            <h3 style="margin-top: var(--space-xs);"><a href="/mg-to-ml-syringe/" data-link>MG to ML Syringe Conversion</a></h3>
            <p>
              Understand how volumetric syringe barrel markings (mL/cc) relate mathematically to liquid concentration ratios.
            </p>
          </div>
          <div style="margin-top: var(--space-md);">
            <a href="/mg-to-ml-syringe/" class="btn btn-outline" data-link style="width: 100%; text-align: center;">Read Guide &rarr;</a>
          </div>
        </div>

        <div class="card card-surface" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span class="badge">Reference Table</span>
            <h3 style="margin-top: var(--space-xs);"><a href="/mg-to-ml-conversion-chart/" data-link>MG to ML Conversion Chart</a></h3>
            <p>
              Explore interactive and static conversion charts showing common milligram-to-milliliter values across multiple concentrations.
            </p>
          </div>
          <div style="margin-top: var(--space-md);">
            <a href="/mg-to-ml-conversion-chart/" class="btn btn-outline" data-link style="width: 100%; text-align: center;">View Chart &rarr;</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Understanding MG and ML (Editorial Style) -->
    <div style="margin-bottom: var(--space-2xl);">
      <h2>Understanding MG and ML</h2>
      <p>
        When working with liquid mixtures, solutions, or metric unit conversions, understanding the fundamental difference between milligrams and milliliters is essential:
      </p>
      <ul>
        <li><strong>Milligrams (mg)</strong> measure physical mass or weight. One milligram equals 0.001 grams.</li>
        <li><strong>Milliliters (mL)</strong> measure liquid volume space. One milliliter equals 0.001 liters (and is equivalent to 1 cc).</li>
      </ul>
      <p>
        Because mass and volume quantify different physical dimensions, there is no universal fixed rule where 1 mg equals a constant number of mL. Direct metric unit conversion requires knowing the solution's concentration ratio (expressed in milligrams per milliliter, or mg/mL). Higher concentration liquids pack more milligrams into each milliliter, resulting in a smaller fluid volume for the same total mass.
      </p>
      <p>
        The difference between milligrams and milliliters is explained in detail in our <a href="/mg-vs-ml/" data-link>MG vs ML</a> guide.
      </p>
    </div>

    <!-- Section 3: How to Convert MG to ML (Editorial Style) -->
    <div style="margin-bottom: var(--space-2xl);">
      <h2>How to Convert MG to ML</h2>
      <p>
        To perform an mg to ml conversion, divide total mass in milligrams by the solution concentration ratio in mg/mL:
      </p>
      <div class="result-formula-box" style="margin-bottom: var(--space-md); text-align: center; font-size: 1.1rem; font-weight: 700;">
        Volume (mL) = Mass (mg) ÷ Concentration (mg/mL)
      </div>
      <p>
        <strong>Step-by-Step Mathematical Example:</strong><br>
        Suppose you want to convert <strong>50 mg</strong> of a liquid solution with a stated concentration of <strong>10 mg/mL</strong>:
      </p>
      <p style="font-weight: 600; color: var(--color-primary-hover); font-size: 1.05rem;">
        50 mg ÷ 10 mg/mL = 5 mL
      </p>
      <p>
        To calculate the reverse conversion—determining mass from liquid volume—multiply volume in mL by the concentration ratio:
      </p>
      <div class="result-formula-box" style="margin-bottom: var(--space-md); text-align: center; font-size: 1.1rem; font-weight: 700;">
        Mass (mg) = Volume (mL) × Concentration (mg/mL)
      </div>
      <p>
        To solve unit conversion calculations directly, use our <a href="/mg-to-ml/" data-link>MG to ML Calculator</a>, reverse <a href="/ml-to-mg/" data-link>ML to MG Calculator</a>, or solve for missing variables using the <a href="/mg-ml-concentration-calculator/" data-link>MG/ML Concentration Calculator</a>.
      </p>
    </div>

    <!-- Section 4: Popular MG to ML Conversions (Boxed Card Table Section) -->
    <section class="card" style="margin-bottom: var(--space-2xl);">
      <h2 style="margin-top: 0;">Popular MG to ML Conversions</h2>
      <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: var(--space-md);">
        The tables below illustrate common metric calculations for standard milligram and milliliter amounts.
      </p>
      <p style="font-size: 0.875rem; color: var(--color-text-muted); background-color: var(--color-bg-surface); padding: var(--space-sm) var(--space-md); border-left: 3px solid var(--color-primary); border-radius: var(--radius-sm); margin-bottom: var(--space-md);">
        <strong>Example only:</strong> These results use a concentration of <strong>10 mg/mL</strong>. There is no universal mg-to-mL conversion; changing the concentration changes the result.
      </p>

      <div class="grid-2" style="gap: var(--space-lg); margin-bottom: var(--space-md);">
        <!-- MG to ML Table -->
        <div>
          <h3 style="font-size: 1.1rem; margin-bottom: var(--space-sm);">Mass to Volume (at 10 mg/mL)</h3>
          <div class="table-responsive">
            <table class="examples-table">
              <thead>
                <tr>
                  <th scope="col">Mass (mg)</th>
                  <th scope="col">Concentration</th>
                  <th scope="col">Calculated Volume (mL)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1 mg</strong></td>
                  <td>10 mg/mL</td>
                  <td><strong>0.1 mL</strong></td>
                </tr>
                <tr>
                  <td><strong>2.5 mg</strong></td>
                  <td>10 mg/mL</td>
                  <td><strong>0.25 mL</strong></td>
                </tr>
                <tr>
                  <td><strong>5 mg</strong></td>
                  <td>10 mg/mL</td>
                  <td><strong>0.5 mL</strong></td>
                </tr>
                <tr>
                  <td><strong>10 mg</strong></td>
                  <td>10 mg/mL</td>
                  <td><strong>1 mL</strong></td>
                </tr>
                <tr>
                  <td><strong>25 mg</strong></td>
                  <td>10 mg/mL</td>
                  <td><strong>2.5 mL</strong></td>
                </tr>
                <tr>
                  <td><strong>50 mg</strong></td>
                  <td>10 mg/mL</td>
                  <td><strong>5 mL</strong></td>
                </tr>
                <tr>
                  <td><strong>100 mg</strong></td>
                  <td>10 mg/mL</td>
                  <td><strong>10 mL</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ML to MG Table -->
        <div>
          <h3 style="font-size: 1.1rem; margin-bottom: var(--space-sm);">Volume to Mass (at 10 mg/mL)</h3>
          <div class="table-responsive">
            <table class="examples-table">
              <thead>
                <tr>
                  <th scope="col">Volume (mL)</th>
                  <th scope="col">Concentration</th>
                  <th scope="col">Calculated Mass (mg)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1 mL</strong></td>
                  <td>10 mg/mL</td>
                  <td><strong>10 mg</strong></td>
                </tr>
                <tr>
                  <td><strong>2.5 mL</strong></td>
                  <td>10 mg/mL</td>
                  <td><strong>25 mg</strong></td>
                </tr>
                <tr>
                  <td><strong>5 mL</strong></td>
                  <td>10 mg/mL</td>
                  <td><strong>50 mg</strong></td>
                </tr>
                <tr>
                  <td><strong>10 mL</strong></td>
                  <td>10 mg/mL</td>
                  <td><strong>100 mg</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <p style="margin-top: var(--space-sm); margin-bottom: 0;">
        For additional concentrations and values, explore the <a href="/mg-to-ml-conversion-chart/" data-link>MG to ML Conversion Chart</a>.
      </p>
    </section>

    <!-- Section 5: Why Concentration Matters (Editorial Style) -->
    <div style="margin-bottom: var(--space-2xl);">
      <h2>Why Concentration Matters</h2>
      <p>
        Concentration dictates how much fluid volume is required to deliver a specific mass. Stating that a certain number of milligrams equals a specific volume without mentioning concentration is mathematically incomplete.
      </p>
      <p>
        Consider how converting <strong>50 mg</strong> changes across three different solution strengths:
      </p>
      <ul>
        <li>At <strong>10 mg/mL</strong>: 50 mg ÷ 10 mg/mL = <strong>5 mL</strong></li>
        <li>At <strong>5 mg/mL</strong>: 50 mg ÷ 5 mg/mL = <strong>10 mL</strong></li>
        <li>At <strong>20 mg/mL</strong>: 50 mg ÷ 20 mg/mL = <strong>2.5 mL</strong></li>
      </ul>
      <p>
        As shown above, doubling the liquid concentration reduces the required volume in milliliters by half. This demonstrates why there is no single fixed mg-to-mL conversion factor for all liquids.
      </p>
      <p>
        If you need to calculate the concentration itself, use the <a href="/mg-ml-concentration-calculator/" data-link>MG/ML Concentration Calculator</a>, or to understand how mg/mL values are expressed on liquid product labels, see the <a href="/mg-to-ml-drug-conversion/" data-link>MG to ML Drug Conversion</a> guide.
      </p>
    </div>

    <!-- Section 6: Common Conversion Questions / FAQ -->
    <section style="margin-bottom: var(--space-2xl);">
      <h2 style="margin-bottom: var(--space-lg);">Common Conversion Questions</h2>
      <div class="faq-list">
        <div class="faq-item">
          <h3 class="faq-question">How do you convert mg to mL?</h3>
          <p class="faq-answer">
            To convert mg to mL, divide the mass in milligrams by the liquid concentration in mg/mL (Volume = Mass ÷ Concentration). For example, 50 mg at 10 mg/mL concentration equals 5 mL.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">How many mL is 1 mg?</h3>
          <p class="faq-answer">
            That depends on the concentration. At a concentration of 10 mg/mL, 1 mg equals 0.1 mL. At 1 mg/mL, 1 mg equals 1 mL.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">How many mg are in 1 mL?</h3>
          <p class="faq-answer">
            That depends on the concentration. A solution labeled 10 mg/mL contains 10 mg in each 1 mL, while pure water contains 1,000 mg in 1 mL.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">Can mg be directly converted to mL?</h3>
          <p class="faq-answer">
            No. Because milligrams measure weight (mass) and milliliters measure liquid volume, direct unit conversion requires knowing the solution concentration in mg/mL or liquid density.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">What information is needed to convert mg to mL?</h3>
          <p class="faq-answer">
            You need the mass value in milligrams (mg) and the liquid solution concentration ratio in milligrams per milliliter (mg/mL).
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-question">What is the difference between mg and mL?</h3>
          <p class="faq-answer">
            Milligrams (mg) quantify physical mass or weight, whereas milliliters (mL) quantify liquid volume space.
          </p>
        </div>
      </div>
    </section>

    <!-- Section 7: Explore MG and ML Resources (Refined Complementary Resources Section) -->
    <div style="margin-bottom: var(--space-2xl);">
      <h2>Explore MG and ML Resources</h2>
      <p>
        Explore our focused educational resources and conversion tools:
      </p>
      <ul>
        <li>Understand metric mass vs volume relationships in our <a href="/mg-vs-ml/" data-link>MG vs ML Guide</a>.</li>
        <li>Solve for mass, volume, or concentration using the <a href="/mg-ml-concentration-calculator/" data-link>MG/ML Concentration Calculator</a>.</li>
        <li>Learn how product strength labels express concentration in <a href="/mg-to-ml-drug-conversion/" data-link>MG to ML Drug Conversion</a>.</li>
        <li>View comprehensive reference tables in the <a href="/mg-to-ml-conversion-chart/" data-link>MG to ML Conversion Chart</a>.</li>
      </ul>
    </div>

    <!-- Educational Safety Notice Card -->
    <div class="educational-notice-card" style="margin-bottom: var(--space-xl);">
      <p style="margin: 0; font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.5;">
        <strong>Important Safety Notice:</strong> MGMLCalculator.com is an educational mathematical conversion utility. It does not provide personalized medical dosing advice, treatment plans, or device recommendations. For all medication-related decisions, always consult a qualified healthcare professional and follow official product labeling.
      </p>
    </div>
  `;
}
