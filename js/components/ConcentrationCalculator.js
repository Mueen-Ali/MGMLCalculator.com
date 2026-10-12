/**
 * MGMLCalculator.com - Interactive MG/ML Concentration Calculator Component
 */

import { formatDecimal } from './Calculator.js';

export function renderConcentrationCalculator(initialMode = 'concentration') {
  return `
    <section class="calculator-card" id="concentration-calculator-card" aria-label="MG/ML Concentration Calculator">
      <div class="calculator-header">
        <h2 class="calculator-title" id="conc-calc-title">
          MG/ML Concentration Calculator
        </h2>
        <div class="calculator-tab-group" role="tablist" aria-label="Calculation Mode">
          <button 
            type="button" 
            class="calculator-tab ${initialMode === 'concentration' ? 'active' : ''}" 
            id="tab-mode-conc" 
            role="tab" 
            aria-selected="${initialMode === 'concentration'}"
            data-mode="concentration"
          >Concentration</button>
          <button 
            type="button" 
            class="calculator-tab ${initialMode === 'mass' ? 'active' : ''}" 
            id="tab-mode-mass" 
            role="tab" 
            aria-selected="${initialMode === 'mass'}"
            data-mode="mass"
          >Mass</button>
          <button 
            type="button" 
            class="calculator-tab ${initialMode === 'volume' ? 'active' : ''}" 
            id="tab-mode-volume" 
            role="tab" 
            aria-selected="${initialMode === 'volume'}"
            data-mode="volume"
          >Volume</button>
        </div>
      </div>

      <form id="conc-calculator-form" class="calculator-form" novalidate>
        <div class="calc-inputs-grid">
          <!-- Mass Input Field -->
          <div class="form-group" id="group-conc-mass">
            <label for="input-conc-mass" class="form-label">
              Mass (mg)
            </label>
            <div class="input-with-unit">
              <input 
                type="text" 
                inputmode="decimal" 
                id="input-conc-mass" 
                class="form-control" 
                placeholder="e.g. 50" 
                aria-describedby="error-conc-mass"
                autocomplete="off"
              />
              <span class="unit-badge">mg</span>
            </div>
            <div class="input-error-msg" id="error-conc-mass" role="alert" aria-live="polite"></div>
          </div>

          <!-- Volume Input Field -->
          <div class="form-group" id="group-conc-vol">
            <label for="input-conc-vol" class="form-label">
              Volume (mL)
            </label>
            <div class="input-with-unit">
              <input 
                type="text" 
                inputmode="decimal" 
                id="input-conc-vol" 
                class="form-control" 
                placeholder="e.g. 5" 
                aria-describedby="error-conc-vol"
                autocomplete="off"
              />
              <span class="unit-badge">mL</span>
            </div>
            <div class="input-error-msg" id="error-conc-vol" role="alert" aria-live="polite"></div>
          </div>

          <!-- Concentration Input Field -->
          <div class="form-group" id="group-conc-conc" style="display: none;">
            <label for="input-conc-conc" class="form-label">
              Concentration (mg/mL)
            </label>
            <div class="input-with-unit">
              <input 
                type="text" 
                inputmode="decimal" 
                id="input-conc-conc" 
                class="form-control" 
                placeholder="e.g. 10" 
                aria-describedby="error-conc-conc"
                autocomplete="off"
              />
              <span class="unit-badge">mg/mL</span>
            </div>
            <div class="input-error-msg" id="error-conc-conc" role="alert" aria-live="polite"></div>
          </div>
        </div>

        <div class="calc-actions-row">
          <button type="submit" class="btn btn-primary btn-calc" id="btn-conc-calculate">
            Calculate Concentration
          </button>
          <button type="button" class="btn btn-outline btn-reset" id="btn-conc-reset" aria-label="Clear calculator inputs">
            Clear
          </button>
        </div>
      </form>

      <!-- Result Card -->
      <div class="calc-result-card" id="conc-calc-result-card" style="display: none;" aria-live="polite">
        <div class="result-label">Calculation Result</div>
        <div class="result-value-display">
          <span class="result-number" id="conc-result-number">0</span>
          <span class="result-unit" id="conc-result-unit">mg/mL</span>
        </div>
        <div class="result-explanation" id="conc-result-explanation"></div>
        <div class="result-formula-box">
          <div class="formula-line">
            <strong>Calculation:</strong> <span id="conc-result-math-step"></span>
          </div>
          <div class="formula-line text-muted">
            <strong>Formula:</strong> <span id="conc-result-formula-text"></span>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initConcentrationCalculatorEvents(initialMode = 'concentration') {
  let currentMode = initialMode;

  const tabConc = document.getElementById('tab-mode-conc');
  const tabMass = document.getElementById('tab-mode-mass');
  const tabVol = document.getElementById('tab-mode-volume');

  const groupMass = document.getElementById('group-conc-mass');
  const groupVol = document.getElementById('group-conc-vol');
  const groupConc = document.getElementById('group-conc-conc');

  const inputMass = document.getElementById('input-conc-mass');
  const inputVol = document.getElementById('input-conc-vol');
  const inputConc = document.getElementById('input-conc-conc');

  const errorMass = document.getElementById('error-conc-mass');
  const errorVol = document.getElementById('error-conc-vol');
  const errorConc = document.getElementById('error-conc-conc');

  const btnCalculate = document.getElementById('btn-conc-calculate');
  const btnReset = document.getElementById('btn-conc-reset');
  const calcForm = document.getElementById('conc-calculator-form');

  const resultCard = document.getElementById('conc-calc-result-card');
  const resultNumber = document.getElementById('conc-result-number');
  const resultUnit = document.getElementById('conc-result-unit');
  const resultExplanation = document.getElementById('conc-result-explanation');
  const resultMathStep = document.getElementById('conc-result-math-step');
  const resultFormulaText = document.getElementById('conc-result-formula-text');

  if (!calcForm) return;

  function clearErrors() {
    [errorMass, errorVol, errorConc].forEach((err) => {
      if (err) err.textContent = '';
    });
    [inputMass, inputVol, inputConc].forEach((inp) => {
      if (inp) inp.classList.remove('is-invalid');
    });
  }

  function hideResult() {
    if (resultCard) resultCard.style.display = 'none';
  }

  function setMode(mode) {
    if (currentMode !== mode) {
      if (inputMass) inputMass.value = '';
      if (inputVol) inputVol.value = '';
      if (inputConc) inputConc.value = '';
    }
    currentMode = mode;
    clearErrors();
    hideResult();

    const isConc = mode === 'concentration';
    const isMass = mode === 'mass';
    const isVol = mode === 'volume';

    if (tabConc) {
      tabConc.classList.toggle('active', isConc);
      tabConc.setAttribute('aria-selected', isConc ? 'true' : 'false');
    }
    if (tabMass) {
      tabMass.classList.toggle('active', isMass);
      tabMass.setAttribute('aria-selected', isMass ? 'true' : 'false');
    }
    if (tabVol) {
      tabVol.classList.toggle('active', isVol);
      tabVol.setAttribute('aria-selected', isVol ? 'true' : 'false');
    }

    if (groupMass) groupMass.style.display = isMass ? 'none' : 'block';
    if (groupVol) groupVol.style.display = isVol ? 'none' : 'block';
    if (groupConc) groupConc.style.display = isConc ? 'none' : 'block';

    if (btnCalculate) {
      if (isConc) btnCalculate.textContent = 'Calculate Concentration';
      else if (isMass) btnCalculate.textContent = 'Calculate Mass';
      else btnCalculate.textContent = 'Calculate Volume';
    }

    if (resultUnit) {
      if (isConc) resultUnit.textContent = 'mg/mL';
      else if (isMass) resultUnit.textContent = 'mg';
      else resultUnit.textContent = 'mL';
    }
  }

  // Setup tab listeners
  if (tabConc) tabConc.addEventListener('click', () => setMode('concentration'));
  if (tabMass) tabMass.addEventListener('click', () => setMode('mass'));
  if (tabVol) tabVol.addEventListener('click', () => setMode('volume'));

  // Input listeners to clear error on typing
  [inputMass, inputVol, inputConc].forEach((inp, idx) => {
    if (inp) {
      const err = [errorMass, errorVol, errorConc][idx];
      inp.addEventListener('input', () => {
        if (err) err.textContent = '';
        inp.classList.remove('is-invalid');
      });
    }
  });

  // Calculate logic
  function calculate() {
    clearErrors();
    hideResult();

    let hasError = false;

    const massRaw = inputMass ? inputMass.value.trim() : '';
    const volRaw = inputVol ? inputVol.value.trim() : '';
    const concRaw = inputConc ? inputConc.value.trim() : '';

    const massNum = Number(massRaw);
    const volNum = Number(volRaw);
    const concNum = Number(concRaw);

    if (currentMode === 'concentration') {
      if (massRaw === '' || isNaN(massNum) || !isFinite(massNum) || massNum <= 0) {
        hasError = true;
        if (errorMass && inputMass) {
          errorMass.textContent = 'Enter a valid positive mass in mg.';
          inputMass.classList.add('is-invalid');
        }
      }
      if (volRaw === '' || isNaN(volNum) || !isFinite(volNum) || volNum <= 0) {
        hasError = true;
        if (errorVol && inputVol) {
          errorVol.textContent = 'Enter a valid positive volume in mL.';
          inputVol.classList.add('is-invalid');
        }
      }

      if (hasError) return;

      const result = massNum / volNum;
      const fmtMass = formatDecimal(massNum);
      const fmtVol = formatDecimal(volNum);
      const fmtRes = formatDecimal(result);

      resultNumber.textContent = fmtRes;
      resultUnit.textContent = 'mg/mL';
      resultExplanation.textContent = `A solution of ${fmtMass} mg dissolved in ${fmtVol} mL has a concentration of ${fmtRes} mg/mL.`;
      resultMathStep.textContent = `${fmtMass} mg ÷ ${fmtVol} mL = ${fmtRes} mg/mL`;
      resultFormulaText.textContent = 'Concentration (mg/mL) = Mass (mg) ÷ Volume (mL)';
    } else if (currentMode === 'mass') {
      if (concRaw === '' || isNaN(concNum) || !isFinite(concNum) || concNum <= 0) {
        hasError = true;
        if (errorConc && inputConc) {
          errorConc.textContent = 'Enter a valid positive concentration in mg/mL.';
          inputConc.classList.add('is-invalid');
        }
      }
      if (volRaw === '' || isNaN(volNum) || !isFinite(volNum) || volNum <= 0) {
        hasError = true;
        if (errorVol && inputVol) {
          errorVol.textContent = 'Enter a valid positive volume in mL.';
          inputVol.classList.add('is-invalid');
        }
      }

      if (hasError) return;

      const result = concNum * volNum;
      const fmtConc = formatDecimal(concNum);
      const fmtVol = formatDecimal(volNum);
      const fmtRes = formatDecimal(result);

      resultNumber.textContent = fmtRes;
      resultUnit.textContent = 'mg';
      resultExplanation.textContent = `${fmtVol} mL of a ${fmtConc} mg/mL solution contains ${fmtRes} mg of substance.`;
      resultMathStep.textContent = `${fmtConc} mg/mL × ${fmtVol} mL = ${fmtRes} mg`;
      resultFormulaText.textContent = 'Mass (mg) = Concentration (mg/mL) × Volume (mL)';
    } else if (currentMode === 'volume') {
      if (massRaw === '' || isNaN(massNum) || !isFinite(massNum) || massNum <= 0) {
        hasError = true;
        if (errorMass && inputMass) {
          errorMass.textContent = 'Enter a valid positive mass in mg.';
          inputMass.classList.add('is-invalid');
        }
      }
      if (concRaw === '' || isNaN(concNum) || !isFinite(concNum) || concNum <= 0) {
        hasError = true;
        if (errorConc && inputConc) {
          errorConc.textContent = 'Enter a valid positive concentration in mg/mL.';
          inputConc.classList.add('is-invalid');
        }
      }

      if (hasError) return;

      const result = massNum / concNum;
      const fmtMass = formatDecimal(massNum);
      const fmtConc = formatDecimal(concNum);
      const fmtRes = formatDecimal(result);

      resultNumber.textContent = fmtRes;
      resultUnit.textContent = 'mL';
      resultExplanation.textContent = `${fmtMass} mg of substance at a concentration of ${fmtConc} mg/mL equals ${fmtRes} mL of volume.`;
      resultMathStep.textContent = `${fmtMass} mg ÷ ${fmtConc} mg/mL = ${fmtRes} mL`;
      resultFormulaText.textContent = 'Volume (mL) = Mass (mg) ÷ Concentration (mg/mL)';
    }

    if (resultCard) resultCard.style.display = 'block';
  }

  calcForm.addEventListener('submit', (e) => {
    e.preventDefault();
    calculate();
  });

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (inputMass) inputMass.value = '';
      if (inputVol) inputVol.value = '';
      if (inputConc) inputConc.value = '';
      clearErrors();
      hideResult();
      if (currentMode === 'mass') {
        if (inputConc) inputConc.focus();
      } else {
        if (inputMass) inputMass.focus();
      }
    });
  }

  // Initialize display state
  setMode(initialMode);
}
