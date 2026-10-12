/**
 * MGMLCalculator.com - Interactive Calculator Component
 */

/**
 * Reusable decimal formatting function.
 * Eliminates floating-point precision artifacts (e.g., 0.30000000000000004)
 * while preserving useful mathematical precision up to 6 decimal places.
 */
export function formatDecimal(num, maxDecimals = 6) {
  if (num === null || num === undefined || isNaN(num) || !isFinite(num)) return '';
  
  // High-precision rounding to eliminate IEEE 754 floating point artifacts
  const rounded = Number(Math.round(num + 'e10') + 'e-10');
  let str = rounded.toString();
  
  if (str.includes('.')) {
    const [intPart, decPart] = str.split('.');
    if (decPart.length > maxDecimals) {
      str = rounded.toFixed(maxDecimals).replace(/\.?0+$/, '');
    }
  }
  return str;
}

/**
 * Renders the complete calculator HTML component.
 * @param {'mg-to-ml' | 'ml-to-mg'} initialMode
 */
export function renderCalculator(initialMode = 'mg-to-ml') {
  const isMgToMl = initialMode === 'mg-to-ml';

  return `
    <section class="calculator-card" id="calculator-card" aria-label="MG to ML and ML to MG Conversion Calculator">
      <div class="calculator-header">
        <h2 class="calculator-title" id="calc-title">
          ${isMgToMl ? 'MG to ML Calculator' : 'ML to MG Calculator'}
        </h2>
        <div class="calculator-tab-group" role="tablist" aria-label="Conversion Mode">
          <button 
            type="button" 
            class="calculator-tab ${isMgToMl ? 'active' : ''}" 
            id="tab-mg-to-ml" 
            role="tab" 
            aria-selected="${isMgToMl}"
            aria-controls="calculator-form"
            data-mode="mg-to-ml"
          >mg to mL</button>
          <button 
            type="button" 
            class="calculator-tab ${!isMgToMl ? 'active' : ''}" 
            id="tab-ml-to-mg" 
            role="tab" 
            aria-selected="${!isMgToMl}"
            aria-controls="calculator-form"
            data-mode="ml-to-mg"
          >mL to mg</button>
        </div>
      </div>

      <form id="calculator-form" class="calculator-form" novalidate>
        <div class="calc-inputs-grid">
          <!-- Primary Input Field (Mass or Volume) -->
          <div class="form-group" id="group-primary-value">
            <label for="input-primary-value" class="form-label" id="label-primary-value">
              ${isMgToMl ? 'Mass (mg)' : 'Volume (mL)'}
            </label>
            <div class="input-with-unit">
              <input 
                type="text" 
                inputmode="decimal" 
                id="input-primary-value" 
                class="form-control" 
                placeholder="${isMgToMl ? 'e.g. 100' : 'e.g. 5'}" 
                aria-describedby="error-primary-value"
                autocomplete="off"
              />
              <span class="unit-badge" id="badge-primary-unit">${isMgToMl ? 'mg' : 'mL'}</span>
            </div>
            <div class="input-error-msg" id="error-primary-value" role="alert" aria-live="polite"></div>
          </div>

          <!-- Secondary Input Field (Concentration) -->
          <div class="form-group" id="group-concentration-value">
            <label for="input-concentration-value" class="form-label" id="label-concentration">
              Concentration (mg/mL)
            </label>
            <div class="input-with-unit">
              <input 
                type="text" 
                inputmode="decimal" 
                id="input-concentration-value" 
                class="form-control" 
                placeholder="e.g. 20" 
                aria-describedby="error-concentration-value"
                autocomplete="off"
              />
              <span class="unit-badge">mg/mL</span>
            </div>
            <div class="input-error-msg" id="error-concentration-value" role="alert" aria-live="polite"></div>
          </div>
        </div>

        <div class="calc-actions-row">
          <button type="submit" class="btn btn-primary btn-calc" id="btn-calculate">
            Calculate ${isMgToMl ? 'Volume' : 'Mass'}
          </button>
          <button type="button" class="btn btn-outline btn-reset" id="btn-reset" aria-label="Clear calculator inputs">
            Clear
          </button>
        </div>
      </form>

      <!-- Result Card -->
      <div class="calc-result-card" id="calc-result-card" style="display: none;" aria-live="polite">
        <div class="result-label">Conversion Result</div>
        <div class="result-value-display">
          <span class="result-number" id="result-number">0</span>
          <span class="result-unit" id="result-unit">${isMgToMl ? 'mL' : 'mg'}</span>
        </div>
        <div class="result-explanation" id="result-explanation"></div>
        <div class="result-formula-box">
          <div class="formula-line">
            <strong>Calculation:</strong> <span id="result-math-step"></span>
          </div>
          <div class="formula-line text-muted">
            <strong>Formula:</strong> <span id="result-formula-text"></span>
          </div>
        </div>
      </div>
    </section>

    <!-- Compact Neutral Informational Strip -->
    <div class="calc-info-strip">
      <svg class="info-strip-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <span>
        <strong>MG and mL measure different things.</strong> mg measures mass, while mL measures volume. A conversion between them requires a concentration expressed in mg/mL.
      </span>
    </div>

    <!-- Small Educational Disclaimer -->
    <div class="calc-disclaimer-strip">
      <p>
        This calculator provides mathematical conversions only. It does not determine medication doses or provide personalized medical advice. For medication use, verify the concentration on the product label and follow guidance from a qualified healthcare professional.
      </p>
    </div>

    <!-- Common Conversion Examples Section -->
    <section class="card" style="margin-bottom: var(--space-2xl);">
      <h3 style="margin-top: 0;">Common mg to mL Conversion Examples</h3>
      <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: var(--space-md);">
        The sample calculations below demonstrate how mass converts into liquid volume using an assumed concentration of <strong>10 mg/mL</strong>. Click "Try Example" to populate the calculator above.
      </p>

      <div class="table-responsive">
        <table class="examples-table">
          <thead>
            <tr>
              <th scope="col">Mass (mg)</th>
              <th scope="col">Sample Concentration</th>
              <th scope="col">Calculated Volume (mL)</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>10 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>1 mL</strong></td>
              <td><button type="button" class="btn-sample" data-mg="10" data-conc="10">Try Example</button></td>
            </tr>
            <tr>
              <td><strong>25 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>2.5 mL</strong></td>
              <td><button type="button" class="btn-sample" data-mg="25" data-conc="10">Try Example</button></td>
            </tr>
            <tr>
              <td><strong>50 mg</strong></td>
              <td>10 mg/mL</td>
              <td><strong>5 mL</strong></td>
              <td><button type="button" class="btn-sample" data-mg="50" data-conc="10">Try Example</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
}

/**
 * Initializes interactive events for the calculator.
 * @param {'mg-to-ml' | 'ml-to-mg'} initialMode
 */
export function initCalculatorEvents(initialMode = 'mg-to-ml') {
  let currentMode = initialMode;

  const tabMgToMl = document.getElementById('tab-mg-to-ml');
  const tabMlToMg = document.getElementById('tab-ml-to-mg');
  const calcTitle = document.getElementById('calc-title');
  const calcForm = document.getElementById('calculator-form');
  
  const labelPrimary = document.getElementById('label-primary-value');
  const inputPrimary = document.getElementById('input-primary-value');
  const badgePrimaryUnit = document.getElementById('badge-primary-unit');
  const errorPrimary = document.getElementById('error-primary-value');
  
  const inputConc = document.getElementById('input-concentration-value');
  const errorConc = document.getElementById('error-concentration-value');
  
  const btnCalculate = document.getElementById('btn-calculate');
  const btnReset = document.getElementById('btn-reset');
  
  const resultCard = document.getElementById('calc-result-card');
  const resultNumber = document.getElementById('result-number');
  const resultUnit = document.getElementById('result-unit');
  const resultExplanation = document.getElementById('result-explanation');
  const resultMathStep = document.getElementById('result-math-step');
  const resultFormulaText = document.getElementById('result-formula-text');

  if (!calcForm) return;

  function clearErrors() {
    if (errorPrimary) {
      errorPrimary.textContent = '';
    }
    if (errorConc) {
      errorConc.textContent = '';
    }
    if (inputPrimary) {
      inputPrimary.classList.remove('is-invalid');
    }
    if (inputConc) {
      inputConc.classList.remove('is-invalid');
    }
  }

  function hideResult() {
    if (resultCard) {
      resultCard.style.display = 'none';
    }
  }

  function setMode(newMode) {
    if (currentMode !== newMode) {
      if (inputPrimary) inputPrimary.value = '';
      if (inputConc) inputConc.value = '';
    }
    currentMode = newMode;
    clearErrors();
    hideResult();

    const isMgToMl = currentMode === 'mg-to-ml';

    if (tabMgToMl && tabMlToMg) {
      tabMgToMl.classList.toggle('active', isMgToMl);
      tabMgToMl.setAttribute('aria-selected', isMgToMl ? 'true' : 'false');

      tabMlToMg.classList.toggle('active', !isMgToMl);
      tabMlToMg.setAttribute('aria-selected', !isMgToMl ? 'true' : 'false');
    }

    if (calcTitle) {
      calcTitle.textContent = isMgToMl ? 'MG to ML Calculator' : 'ML to MG Calculator';
    }

    if (labelPrimary) {
      labelPrimary.textContent = isMgToMl ? 'Mass (mg)' : 'Volume (mL)';
    }

    if (inputPrimary) {
      inputPrimary.placeholder = isMgToMl ? 'e.g. 100' : 'e.g. 5';
    }

    if (badgePrimaryUnit) {
      badgePrimaryUnit.textContent = isMgToMl ? 'mg' : 'mL';
    }

    if (btnCalculate) {
      btnCalculate.textContent = isMgToMl ? 'Calculate Volume' : 'Calculate Mass';
    }

    if (resultUnit) {
      resultUnit.textContent = isMgToMl ? 'mL' : 'mg';
    }
  }

  // Mode Switch Tab Listeners
  if (tabMgToMl) {
    tabMgToMl.addEventListener('click', () => setMode('mg-to-ml'));
  }

  if (tabMlToMg) {
    tabMlToMg.addEventListener('click', () => setMode('ml-to-mg'));
  }

  // Live validation cleanup when typing
  if (inputPrimary) {
    inputPrimary.addEventListener('input', () => {
      errorPrimary.textContent = '';
      inputPrimary.classList.remove('is-invalid');
    });
  }

  if (inputConc) {
    inputConc.addEventListener('input', () => {
      errorConc.textContent = '';
      inputConc.classList.remove('is-invalid');
    });
  }

  // Calculation Handler
  function calculate() {
    clearErrors();

    const primaryRaw = inputPrimary ? inputPrimary.value.trim() : '';
    const concRaw = inputConc ? inputConc.value.trim() : '';

    let hasError = false;

    // Validate primary input (mass or volume)
    const primaryNum = Number(primaryRaw);
    if (primaryRaw === '' || isNaN(primaryNum) || !isFinite(primaryNum) || primaryNum <= 0) {
      hasError = true;
      if (errorPrimary && inputPrimary) {
        errorPrimary.textContent = currentMode === 'mg-to-ml'
          ? 'Enter a valid positive mass in milligrams.'
          : 'Enter a valid positive volume in milliliters.';
        inputPrimary.classList.add('is-invalid');
      }
    }

    // Validate concentration input
    const concNum = Number(concRaw);
    if (concRaw === '' || isNaN(concNum) || !isFinite(concNum) || concNum <= 0) {
      hasError = true;
      if (errorConc && inputConc) {
        errorConc.textContent = 'Concentration must be a valid number greater than 0.';
        inputConc.classList.add('is-invalid');
      }
    }

    if (hasError) {
      hideResult();
      return;
    }

    // Perform Calculation
    const formattedPrimary = formatDecimal(primaryNum);
    const formattedConc = formatDecimal(concNum);

    if (currentMode === 'mg-to-ml') {
      const volumeVal = primaryNum / concNum;
      const formattedResult = formatDecimal(volumeVal);

      resultNumber.textContent = formattedResult;
      resultUnit.textContent = 'mL';
      resultExplanation.textContent = `${formattedPrimary} mg at a concentration of ${formattedConc} mg/mL equals ${formattedResult} mL.`;
      resultMathStep.textContent = `${formattedPrimary} mg ÷ ${formattedConc} mg/mL = ${formattedResult} mL`;
      resultFormulaText.textContent = 'Volume (mL) = Mass (mg) ÷ Concentration (mg/mL)';
    } else {
      const massVal = primaryNum * concNum;
      const formattedResult = formatDecimal(massVal);

      resultNumber.textContent = formattedResult;
      resultUnit.textContent = 'mg';
      resultExplanation.textContent = `${formattedPrimary} mL at a concentration of ${formattedConc} mg/mL contains ${formattedResult} mg.`;
      resultMathStep.textContent = `${formattedPrimary} mL × ${formattedConc} mg/mL = ${formattedResult} mg`;
      resultFormulaText.textContent = 'Mass (mg) = Volume (mL) × Concentration (mg/mL)';
    }

    resultCard.style.display = 'block';
  }

  calcForm.addEventListener('submit', (e) => {
    e.preventDefault();
    calculate();
  });

  // Reset Handler
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (inputPrimary) inputPrimary.value = '';
      if (inputConc) inputConc.value = '';
      clearErrors();
      hideResult();
      if (inputPrimary) inputPrimary.focus();
    });
  }

  // Quick Example Buttons Listener
  const exampleButtons = document.querySelectorAll('.btn-sample');
  exampleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const mg = btn.getAttribute('data-mg');
      const conc = btn.getAttribute('data-conc');

      setMode('mg-to-ml');
      if (inputPrimary) inputPrimary.value = mg;
      if (inputConc) inputConc.value = conc;

      calculate();

      const calcCard = document.getElementById('calculator-card');
      if (calcCard) {
        calcCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
