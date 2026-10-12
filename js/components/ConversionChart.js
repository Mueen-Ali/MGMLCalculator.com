/**
 * MGMLCalculator.com - Interactive Conversion Chart Component
 */

import { formatDecimal } from './Calculator.js';

const COMMON_MASSES = [0.5, 1, 2, 2.5, 5, 10, 15, 20, 25, 50, 100, 150, 200, 250, 500];
const PRESET_CONCENTRATIONS = [1, 2, 5, 10, 20, 25, 50, 100];

export function renderInteractiveChart(defaultConc = 10) {
  return `
    <div class="card card-surface" id="interactive-chart-container" style="margin-bottom: var(--space-2xl);">
      <div style="margin-bottom: var(--space-lg);">
        <h3 style="margin-top: 0; margin-bottom: var(--space-xs);">Interactive MG to ML Conversion Chart</h3>
        <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: var(--space-md);">
          Select a common solution concentration below or enter a custom concentration to recalculate all liquid volumes dynamically.
        </p>

        <!-- Concentration Selector Controls -->
        <div style="background-color: var(--color-bg-body); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--space-md); margin-bottom: var(--space-md);">
          <label for="chart-conc-select" class="form-label" style="font-weight: 600; margin-bottom: var(--space-xs); display: block;">
            Select Concentration (mg/mL):
          </label>
          
          <div style="display: flex; flex-wrap: wrap; gap: var(--space-xs); margin-bottom: var(--space-sm);" id="preset-conc-buttons">
            ${PRESET_CONCENTRATIONS.map((c) => `
              <button 
                type="button" 
                class="btn btn-outline btn-preset-conc ${c === defaultConc ? 'active-preset' : ''}" 
                data-conc="${c}"
                style="padding: 0.35rem 0.75rem; font-size: 0.85rem; font-weight: 600;"
              >${c} mg/mL</button>
            `).join('')}
          </div>

          <div style="display: flex; align-items: center; gap: var(--space-sm); max-width: 320px;">
            <label for="input-custom-conc" style="font-size: 0.85rem; color: var(--color-text-muted); white-space: nowrap;">Or Custom:</label>
            <div class="input-with-unit" style="flex: 1;">
              <input 
                type="text" 
                inputmode="decimal" 
                id="input-custom-conc" 
                class="form-control" 
                placeholder="e.g. 10" 
                value="${defaultConc}"
                aria-describedby="chart-conc-error"
                autocomplete="off"
              />
              <span class="unit-badge">mg/mL</span>
            </div>
          </div>
          <div class="input-error-msg" id="chart-conc-error" role="alert" aria-live="polite"></div>
        </div>

        <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 0;">
          <em>Showing calculated volumes for a stated solution concentration of <strong id="current-conc-display">${defaultConc} mg/mL</strong>. All values represent mathematical volume calculations (Volume = Mass ÷ Concentration).</em>
        </p>
      </div>

      <!-- Interactive Table -->
      <div class="table-responsive">
        <table class="examples-table" id="interactive-chart-table">
          <thead>
            <tr>
              <th scope="col">Mass (mg)</th>
              <th scope="col">Concentration</th>
              <th scope="col">Formula Applied</th>
              <th scope="col">Calculated Volume (mL)</th>
            </tr>
          </thead>
          <tbody id="chart-table-body">
            ${generateTableRows(defaultConc)}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function generateTableRows(conc) {
  if (isNaN(conc) || conc <= 0) return '';

  return COMMON_MASSES.map((mass) => {
    const vol = mass / conc;
    const fmtMass = formatDecimal(mass);
    const fmtConc = formatDecimal(conc);
    const fmtVol = formatDecimal(vol);

    return `
      <tr>
        <td><strong>${fmtMass} mg</strong></td>
        <td>${fmtConc} mg/mL</td>
        <td>${fmtMass} ÷ ${fmtConc}</td>
        <td><strong style="color: var(--color-primary); font-size: 1.05rem;">${fmtVol} mL</strong></td>
      </tr>
    `;
  }).join('');
}

export function initInteractiveChartEvents(defaultConc = 10) {
  let currentConc = defaultConc;

  const presetButtons = document.querySelectorAll('.btn-preset-conc');
  const customInput = document.getElementById('input-custom-conc');
  const concError = document.getElementById('chart-conc-error');
  const concDisplay = document.getElementById('current-conc-display');
  const tableBody = document.getElementById('chart-table-body');

  if (!tableBody) return;

  function updateTable(conc) {
    if (concError) concError.textContent = '';
    if (customInput) customInput.classList.remove('is-invalid');

    if (isNaN(conc) || !isFinite(conc) || conc <= 0) {
      if (concError && customInput) {
        concError.textContent = 'Enter a valid concentration greater than 0.';
        customInput.classList.add('is-invalid');
      }
      return;
    }

    currentConc = conc;
    if (concDisplay) concDisplay.textContent = `${formatDecimal(conc)} mg/mL`;
    tableBody.innerHTML = generateTableRows(conc);

    // Update active state on preset buttons
    presetButtons.forEach((btn) => {
      const bConc = Number(btn.getAttribute('data-conc'));
      btn.style.backgroundColor = bConc === conc ? 'var(--color-primary)' : 'transparent';
      btn.style.color = bConc === conc ? '#ffffff' : 'var(--color-text-main)';
      btn.style.borderColor = bConc === conc ? 'var(--color-primary)' : 'var(--color-border)';
    });
  }

  // Preset button listeners
  presetButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const conc = Number(btn.getAttribute('data-conc'));
      if (customInput) customInput.value = conc;
      updateTable(conc);
    });
  });

  // Custom input listener
  if (customInput) {
    customInput.addEventListener('input', () => {
      const raw = customInput.value.trim();
      const conc = Number(raw);
      updateTable(conc);
    });
  }

  // Initial styling check for preset buttons
  updateTable(defaultConc);
}
