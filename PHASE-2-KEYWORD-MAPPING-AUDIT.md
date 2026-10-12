# Phase 2 Keyword Mapping Audit: MGMLCalculator.com

## 1. Executive Summary

### Overview & Architecture Strengths
MGMLCalculator.com operates as an educational mathematical conversion utility designed to solve unit conversion problems between mass in milligrams (mg), volume in milliliters (mL), and concentration in milligrams per milliliter (mg/mL). The current 8-URL site structure provides a clean foundation for topical authority across the mass-volume conversion cluster without relying on thin, programmatic page generation.

Key structural strengths of the current implementation:
- **Clean 8-URL Architecture**: Well-scoped URLs covering dedicated calculation tasks (`/mg-to-ml/`, `/ml-to-mg/`, `/mg-ml-concentration-calculator/`), reference tools (`/mg-to-ml-conversion-chart/`), and specific educational search intents (`/mg-vs-ml/`, `/mg-to-ml-drug-conversion/`, `/mg-to-ml-syringe/`).
- **Educational & Mathematical Safety Positioning**: Every page maintains strict mathematical framing, explicitly avoiding personalized medical dosing advice, patient recommendations, or injection instructions.
- **Crawlable Reference Tables**: Crawlable HTML conversion tables are present across the homepage, calculator pages, and reference chart, capturing long-tail numeric search queries naturally.

### Strongest Keyword Opportunities
1. **Core Conversion Intent (`mg to ml` / `mg to ml calculator`)**: Represents over 193,000 monthly searches. The dedicated `/mg-to-ml/` calculator page is positioned to capture high-intent transactional search queries for "mg to ml calculator", while the homepage serves as the broader topical authority hub.
2. **Reverse Unit Conversion (`ml to mg` / `ml to mg calculator`)**: Captures high-volume inverse search intent where users start with liquid volume in mL and solve for mass in mg.
3. **Difference & Comparison Intent (`mg vs ml` / `difference between mg and ml`)**: High informational volume queries searching for unit definitions and why mass cannot directly equal volume without concentration.
4. **Drug Label & Concentration Context (`mg to ml drug conversion` / `mg/mL packaging`)**: Captures user intent around reading concentration statements on product labels in a purely educational, mathematical framework.

### Biggest Cannibalization Risks
1. **Homepage (`/`) vs. `/mg-to-ml/`**: Both pages target "mg to ml calculator" and "mg to ml conversion". Without clear strategic separation, Google may rank the homepage for specific calculator queries or rank `/mg-to-ml/` for broad brand/topical terms.
2. **`/mg-to-ml-drug-conversion/` vs. `/mg-ml-concentration-calculator/`**: Potential overlap around queries like "mg/ml calculator" and "dose calculator mg/ml". The drug conversion page must focus on label interpretation and concentration concept education, while the concentration calculator focuses on multi-variable algebraic computation.
3. **`/mg-to-ml/` vs. `/mg-to-ml-conversion-chart/`**: Both pages contain conversion tables at 10 mg/mL. The calculator page must emphasize interactive computation, while the chart page targets static reference, multi-concentration tables, and downloadable/print-oriented queries.

### Biggest Content & Keyword Gaps
- **Percentage Concentration Conversions (e.g., 1% = 10 mg/mL)**: Frequently searched by users attempting to convert percentage strength labels into mg/mL before computing volume.
- **Density vs. Concentration Clarification**: Explaining how pure liquid density (g/cm³ or mg/mL for water) differs from dissolved solute concentration.
- **Syringe Barrel Size Reference (1 mL, 3 mL, 5 mL, 10 mL barrels)**: Detailed volumetric breakdown of syringe barrel sizes to capture physical measurement intent without stepping into medical dosing advice.

---

## 2. Final Recommended URL Map

| URL | Primary Intent | Primary Keyword | Secondary Keywords | Strategic Role |
|---|---|---|---|---|
| `/` | Broad Topical Hub & Educational Gateway | `mg to ml` | `mg to ml conversion`, `milligrams to milliliters`, `mg and ml`, `convert mg to ml`, `how many mg in a ml` | Main entry point & comprehensive topical authority hub. Links out to specialized utilities. |
| `/mg-to-ml/` | Interactive Mass-to-Volume Calculator | `mg to ml calculator` | `mg to ml conversion calculator`, `convert mg to ml`, `milligrams to milliliters calculator`, `mg ml calculator`, `how to calculate mg to ml`, `mg to ml converter` | Dedicated calculator tool for converting milligrams (mg) to liquid volume (mL). |
| `/ml-to-mg/` | Interactive Volume-to-Mass Calculator | `ml to mg calculator` | `ml to mg`, `ml to mg conversion`, `ml to mg converter`, `convert ml to mg`, `milliliters to milligrams calculator`, `ml mg calculator` | Dedicated inverse calculator tool for converting liquid volume (mL) to mass (mg). |
| `/mg-ml-concentration-calculator/` | Multi-Variable Concentration Solver | `mg/ml calculator` | `mg ml calculator`, `mg per ml calculator`, `mg/ml concentration calculator`, `calculate mg per ml`, `mg per ml`, `mg/ml`, `concentration calculator mg ml` | Tool for calculating missing concentration (mg/mL), mass (mg), or volume (mL). |
| `/mg-to-ml-drug-conversion/` | Educational Product Strength & Label Reference | `mg to ml drug conversion` | `mg to ml medicine`, `medication mg to ml`, `medicine concentration`, `mg/ml medication concentration`, `how to read mg/ml label` | Educational explanation of liquid concentration statements on product labels. |
| `/mg-vs-ml/` | Informational Unit Comparison Guide | `mg vs ml` | `ml vs mg`, `difference between mg and ml`, `mg and ml difference`, `milligrams vs milliliters`, `milligram to milliliter` | High-level educational breakdown of physical mass vs. liquid volume space. |
| `/mg-to-ml-syringe/` | Volumetric Markings Educational Guide | `mg to ml syringe` | `mg to ml syringe conversion`, `ml to mg syringe`, `mg in ml syringe`, `syringe conversion`, `syringe markings ml cc` | Educational breakdown of physical syringe markings (mL/cc) and mathematical volume calculations. |
| `/mg-to-ml-conversion-chart/` | Comprehensive Reference Tables & Multi-Concentration Lookup | `mg to ml conversion chart` | `mg to ml chart`, `milligrams to milliliters chart`, `mg to ml table`, `mg to ml conversion table`, `common mg to ml conversions` | Static reference hub with multi-concentration lookup tables and interactive chart builder. |

---

## 3. Page-by-Page Audit

### 3.1 Homepage (`/`)

- **Current Title**: `MGMLCalculator.com | MG to ML & ML to MG Calculator`
- **Current Meta Description**: `Free online mathematical calculator to convert milligrams (mg) to milliliters (mL) and mL to mg based on liquid concentration. Fast, accurate, and easy unit conversion.`
- **Current H1**: `Milligram (mg) to Milliliter (mL) Calculator`
- **Main H2 Sections**:
  1. `What Can You Calculate?` (Resource navigation grid)
  2. `Understanding MG and ML` (Editorial unit distinction)
  3. `How to Convert MG to ML` (Formula & step-by-step math example)
  4. `Popular MG to ML Conversions` (Boxed table at 10 mg/mL for Mass→Volume & Volume→Mass)
  5. `Why Concentration Matters` (Comparative examples at 5, 10, 20 mg/mL)
  6. `Common Conversion Questions` (FAQ list)
  7. `Explore MG and ML Resources` (Refined resource list)
- **Current Primary Search Intent**: Broad informational & entry-level navigational hub for overall mg to mL conversion searches.
- **Current Keyword Targeting**: `mg to ml`, `mg to ml calculator`, `mg to ml conversion`, `milligrams to milliliters`, `convert mg to ml`.
- **Strong Secondary Keyword Opportunities**: `how many mg in a ml`, `how many milliliters in a milligram`, `mg a ml`, `milligram to milliliter ratio`.
- **Differentiation**: Acts as the comprehensive directory and topical authority center. Features both calculators at a glance and routes users to deep-dive pages.
- **Internal Links Received**: Primary site logo / brand link from all subpages header and footer, breadcrumb root link (`Home`) from all 7 subpages.
- **Internal Links Sent**: Links to all 7 subpages (`/mg-to-ml/`, `/ml-to-mg/`, `/mg-ml-concentration-calculator/`, `/mg-to-ml-drug-conversion/`, `/mg-vs-ml/`, `/mg-to-ml-syringe/`, `/mg-to-ml-conversion-chart/`).
- **Potential Keyword Cannibalization**: High risk of competing with `/mg-to-ml/` for "mg to ml calculator".
- **Missing Content/Topics**: Needs clearer contextual framing as the master hub to pass ranking authority to `/mg-to-ml/` for specific calculator intent.
- **Unnecessary/Repetitive Content**: Repetitive formula boxes were recently cleaned up; currently well-balanced.
- **URL Status**: Keep as-is (`/`).
- **Recommended Future Action (P1)**: Adjust H1 slightly to emphasize the overall hub identity (e.g., "MG to ML Conversion Hub & Calculator") to pass exact "mg to ml calculator" query dominance to `/mg-to-ml/`.

---

### 3.2 `/mg-to-ml/`

- **Current Title**: `MG to ML Converter | Milligrams to Milliliters Calculator`
- **Current Meta Description**: `Use our MG to ML calculator to convert milligrams to milliliters using concentration. Enter mass and concentration to calculate volume in mL, with formulas and examples.`
- **Current H1**: `MG to ML Converter`
- **Main H2 Sections**:
  1. `How to Convert Milligrams to Milliliters`
  2. `MG to ML Conversion Formula`
  3. `Why You Cannot Always Convert MG to ML Directly`
  4. `Common MG to ML Conversions` (Table at 10 mg/mL)
  5. `How Concentration Changes the MG to ML Result`
  6. `MG to ML Calculator Examples` (2.5 mg, 5 mg, 25 mg, 50 mg cards)
  7. `MG to ML for Different Concentrations`
  8. `Frequently Asked Questions`
- **Current Primary Search Intent**: High-intent calculation query intent (users who want an immediate calculator for mg → mL).
- **Current Keyword Targeting**: `mg to ml calculator`, `convert mg to ml`, `mg to ml converter`, `milligrams to milliliters calculator`, `how to calculate mg to ml`.
- **Strong Secondary Keyword Opportunities**: `mg to ml formula`, `calculate ml from mg`, `mg to ml calculation step by step`.
- **Differentiation**: Exclusively focused on forward calculation (Mass → Volume). Pre-set in `mg-to-ml` mode.
- **Internal Links Received**: Homepage ("What Can You Calculate?", "How to Convert MG to ML", "Explore Resources"), Header Nav, Footer Nav, `/ml-to-mg/`, `/mg-to-ml-drug-conversion/`, `/mg-ml-concentration-calculator/`.
- **Internal Links Sent**: Homepage, `/ml-to-mg/`, `/mg-to-ml-drug-conversion/`.
- **Potential Keyword Cannibalization**: Minor overlap with Homepage for "mg to ml converter".
- **Missing Content/Topics**: Explanation of converting fractional milligrams (e.g., 0.5 mg, 0.25 mg) into microliters or small mL volumes.
- **Unnecessary/Repetitive Content**: None; content is tightly focused on forward conversion.
- **URL Status**: Keep as-is (`/mg-to-ml/`).
- **Recommended Future Action (P0)**: Maintain title and H1 dominance for `mg to ml calculator` and `convert mg to ml`. Ensure internal links from homepage use exact-match and partial-match anchor text targeting calculator queries.

---

### 3.3 `/ml-to-mg/`

- **Current Title**: `ML to MG Converter | Milliliters to Milligrams Calculator`
- **Current Meta Description**: `Convert milliliters to milligrams using concentration in mg/mL. Use the ML to MG calculator to calculate mass with the formula and worked examples.`
- **Current H1**: `ML to MG Converter`
- **Main H2 Sections**:
  1. `How to Convert Milliliters to Milligrams`
  2. `ML to MG Conversion Formula`
  3. `Why ML and MG Are Different Units`
  4. `Common ML to MG Conversions` (Table at 10 mg/mL)
  5. `How Solution Concentration Affects Mass`
  6. `ML to MG Calculation Examples`
  7. `Frequently Asked Questions`
- **Current Primary Search Intent**: High-intent inverse calculation query intent (users starting with liquid volume in mL and seeking total mass in mg).
- **Current Keyword Targeting**: `ml to mg calculator`, `ml to mg`, `ml to mg conversion`, `convert ml to mg`, `milliliters to milligrams calculator`, `ml mg calculator`.
- **Strong Secondary Keyword Opportunities**: `calculate mg from ml`, `ml to mg formula`, `how many mg in ml`.
- **Differentiation**: Exclusively focused on reverse calculation (Volume → Mass). Pre-set in `ml-to-mg` mode.
- **Internal Links Received**: Homepage ("What Can You Calculate?", "How to Convert MG to ML", "Explore Resources"), Header Nav, Footer Nav, `/mg-to-ml/`, `/mg-ml-concentration-calculator/`.
- **Internal Links Sent**: Homepage, `/mg-to-ml/`, `/mg-ml-concentration-calculator/`.
- **Potential Keyword Cannibalization**: Extremely low risk; distinct inverse intent from `/mg-to-ml/`.
- **Missing Content/Topics**: Detailed example of calculating total mass in a full bottle (e.g., 100 mL bottle at 5 mg/mL = 500 mg total).
- **Unnecessary/Repetitive Content**: None.
- **URL Status**: Keep as-is (`/ml-to-mg/`).
- **Recommended Future Action (P1)**: Add structured schema for unit conversion and strengthen internal links from `/mg-to-ml/` and `/mg-ml-concentration-calculator/`.

---

### 3.4 `/mg-ml-concentration-calculator/`

- **Current Title**: `MG/ML Concentration Calculator: Calculate mg per mL`
- **Current Meta Description**: `Calculate concentration in mg/mL from mass and volume, or solve for the missing mass, volume, or concentration using simple mathematical formulas.`
- **Current H1**: `MG/ML Concentration Calculator`
- **Main H2 Sections**:
  1. `How to Calculate Concentration in MG/ML`
  2. `The Concentration Formula (mg/mL = mg ÷ mL)`
  3. `Three Modes of Concentration Calculations`
  4. `Why Solution Concentration Is Important`
  5. `Common Concentration Calculation Examples`
  6. `Frequently Asked Questions`
- **Current Primary Search Intent**: Algebraic calculation intent where users need to solve for concentration (mg/mL), mass (mg), or volume (mL) when two variables are known.
- **Current Keyword Targeting**: `mg/ml calculator`, `mg ml calculator`, `mg per ml calculator`, `mg/ml concentration calculator`, `calculate mg per ml`, `mg per ml`, `mg/ml`.
- **Strong Secondary Keyword Opportunities**: `concentration formula mg/ml`, `how to calculate mg/ml concentration`, `find mg per ml`.
- **Differentiation**: Features a 3-mode interactive calculator (Concentration, Mass, Volume) whereas `/mg-to-ml/` and `/ml-to-mg/` feature 2-variable single-mode calculators.
- **Internal Links Received**: Homepage ("What Can You Calculate?", "Why Concentration Matters", "Explore Resources"), Footer Nav, `/mg-to-ml/`, `/mg-to-ml-drug-conversion/`, `/mg-vs-ml/`.
- **Internal Links Sent**: Homepage, `/mg-to-ml/`, `/ml-to-mg/`, `/mg-to-ml-drug-conversion/`.
- **Potential Keyword Cannibalization**: Minor risk with `/mg-to-ml-drug-conversion/` regarding "mg/ml calculator" search terms.
- **Missing Content/Topics**: Section explaining percentage solutions (e.g. 1% = 10 mg/mL, 0.9% saline = 9 mg/mL).
- **Unnecessary/Repetitive Content**: None.
- **URL Status**: Keep as-is (`/mg-ml-concentration-calculator/`).
- **Recommended Future Action (P1)**: Expand content to cover percentage-to-mg/mL conversion formulas to capture high-value secondary concentration searches.

---

### 3.5 `/mg-to-ml-drug-conversion/`

- **Current Title**: `MG to ML Drug Conversion | Understanding mg/mL Concentration`
- **Current Meta Description**: `Learn how mg to ml drug conversion works using concentration in mg/mL. Understand the formula, read concentration labels, and calculate volume mathematically.`
- **Current H1**: `MG to ML Drug Conversion`
- **Main H2 Sections**:
  1. `Introduction to Concentration-Based Conversion`
  2. `What Does mg/mL Mean?`
  3. `How to Calculate MG to ML`
  4. `Why Concentration Matters`
  5. `Reading a Concentration Label`
  6. `MG to ML Conversion Examples Table`
  7. `Frequently Asked Questions`
- **Current Primary Search Intent**: Educational & informational search intent focused on reading liquid product packaging labels and understanding concentration statements (e.g. 250 mg / 5 mL).
- **Current Keyword Targeting**: `mg to ml drug conversion`, `mg to ml medicine`, `medication mg to ml`, `medicine concentration`, `mg/ml medication concentration`.
- **Strong Secondary Keyword Opportunities**: `how to read mg/ml label`, `liquid medication concentration formula`, `mg per 5ml conversion`.
- **Differentiation**: Educational focus on label formats (direct ratio, total mass per total volume, percentage strength). Strictly avoids personalized clinical dosing advice.
- **Internal Links Received**: Homepage ("What Can You Calculate?", "Why Concentration Matters", "Explore Resources"), Footer Nav, `/mg-to-ml/`, `/mg-ml-concentration-calculator/`.
- **Internal Links Sent**: Homepage, `/mg-to-ml/`, `/mg-to-ml-syringe/`, `/mg-ml-concentration-calculator/`.
- **Potential Keyword Cannibalization**: Potential overlap with `/mg-to-ml/` for "mg to ml medicine" queries.
- **Missing Content/Topics**: Detailed breakdown of "mg / 5 mL" oral liquid label formats, which is a common commercial label expression.
- **Unnecessary/Repetitive Content**: None.
- **URL Status**: Keep as-is (`/mg-to-ml-drug-conversion/`).
- **Recommended Future Action (P1)**: Add a dedicated H2 subsection on "Understanding mg per 5 mL Oral Liquid Labels" to capture high-volume long-tail searches around oral liquid label interpretation.

---

### 3.6 `/mg-vs-ml/`

- **Current Title**: `MG vs ML: What Is the Difference Between Milligrams and Milliliters?`
- **Current Meta Description**: `Learn the difference between milligrams (mg) and milliliters (mL), how mass and volume are measured, and why concentration is needed to relate the two units.`
- **Current H1**: `MG vs ML: What Is the Difference Between Milligrams and Milliliters?`
- **Main H2 Sections**:
  1. `Mass vs Volume: The Fundamental Difference`
  2. `What Is a Milligram (mg)?`
  3. `What Is a Milliliter (mL)?`
  4. `Why You Cannot Convert MG to ML Without Concentration`
  5. `How Concentration Connects MG and ML`
  6. `Summary Comparison: MG vs ML` (HTML comparison table)
  7. `Frequently Asked Questions`
- **Current Primary Search Intent**: Informational intent comparing two physical measurement units (mass vs. volume).
- **Current Keyword Targeting**: `mg vs ml`, `ml vs mg`, `difference between mg and ml`, `milligrams vs milliliters`, `mg and ml difference`.
- **Strong Secondary Keyword Opportunities**: `is mg the same as ml`, `are mg and ml equal`, `can mg equal ml`, `mg to ml difference`.
- **Differentiation**: Purely conceptual unit comparison page with a summary comparison matrix table. Does not feature interactive calculation tools.
- **Internal Links Received**: Homepage ("Understanding MG and ML", "Explore Resources"), Footer Nav, `/mg-to-ml/`, `/mg-to-ml-syringe/`.
- **Internal Links Sent**: Homepage, `/mg-to-ml/`, `/mg-ml-concentration-calculator/`.
- **Potential Keyword Cannibalization**: Very low risk; highly distinct comparison intent.
- **Missing Content/Topics**: Comparison with other metric units (e.g. grams vs. liters, mcg vs. mL).
- **Unnecessary/Repetitive Content**: None.
- **URL Status**: Keep as-is (`/mg-vs-ml/`).
- **Recommended Future Action (P2)**: Maintain clear informational tone and ensure strong internal links pointing to `/mg-to-ml/` for users who are ready to calculate.

---

### 3.7 `/mg-to-ml-syringe/`

- **Current Title**: `MG to ML Syringe Conversion: Understanding Concentration and Volume`
- **Current Meta Description**: `Learn how mg, mL, concentration, and syringe volume are mathematically related. Understand mg to mL syringe calculations with clear educational examples.`
- **Current H1**: `MG to ML Syringe Conversion: Understanding Concentration and Volume`
- **Main H2 Sections**:
  1. `Understanding Syringe Markings (mL and cc)`
  2. `Why Syringes Measure Volume, Not Mass`
  3. `How to Calculate Milligrams from Syringe Volume`
  4. `How Concentration Affects Syringe Volume`
  5. `Common Syringe Volume Calculations`
  6. `Frequently Asked Questions`
- **Current Primary Search Intent**: Informational intent regarding how volumetric markings on graduated cylinders and syringes (mL and cc) relate mathematically to dissolved mass (mg).
- **Current Keyword Targeting**: `mg to ml syringe`, `mg to ml syringe conversion`, `ml to mg syringe`, `mg in ml syringe`, `syringe conversion`.
- **Strong Secondary Keyword Opportunities**: `cc vs ml syringe`, `how to read a syringe in ml`, `syringe volumetric calculation`.
- **Differentiation**: Educates on physical volumetric measurement tools (mL = cc markings) without offering medical administration advice or syringe selection recommendations.
- **Internal Links Received**: Homepage ("What Can You Calculate?", "Explore Resources"), Footer Nav, `/mg-to-ml-drug-conversion/`.
- **Internal Links Sent**: Homepage, `/mg-to-ml/`, `/mg-vs-ml/`, `/mg-to-ml-drug-conversion/`.
- **Potential Keyword Cannibalization**: Low risk; distinct physical measurement intent.
- **Missing Content/Topics**: Explicit explanation that 1 cc (cubic centimeter) is mathematically identical to 1 mL.
- **Unnecessary/Repetitive Content**: None.
- **URL Status**: Keep as-is (`/mg-to-ml-syringe/`).
- **Recommended Future Action (P2)**: Add a visual diagram or table showing standard syringe barrel volumes (1 mL, 3 mL, 5 mL, 10 mL) and their equivalent liquid capacity in mL/cc.

---

### 3.8 `/mg-to-ml-conversion-chart/`

- **Current Title**: `MG to ML Conversion Chart: Common Values and Formulas`
- **Current Meta Description**: `Use this MG to ML conversion chart to understand common milligram-to-milliliter calculations at different concentrations, with formulas and examples.`
- **Current H1**: `MG to ML Conversion Chart: Common Values and Formulas`
- **Main H2 Sections**:
  1. `Interactive MG to ML Conversion Chart` (Dynamic chart component with preset concentration buttons: 1, 2, 5, 10, 20, 25, 50, 100 mg/mL)
  2. `Standard MG to ML Conversion Table (at 10 mg/mL)`
  3. `How to Use an MG to ML Conversion Chart`
  4. `MG to ML Formulas`
  5. `Frequently Asked Questions`
- **Current Primary Search Intent**: Reference lookup intent for users seeking pre-calculated tables or comprehensive charts across multiple concentration values.
- **Current Keyword Targeting**: `mg to ml conversion chart`, `mg to ml chart`, `milligrams to milliliters chart`, `mg to ml table`, `mg to ml conversion table`, `common mg to ml conversions`.
- **Strong Secondary Keyword Opportunities**: `printable mg to ml chart`, `mg to ml lookup table`, `mg to ml reference chart`.
- **Differentiation**: Features an interactive dynamic chart component allowing users to generate customized reference tables across 8 concentration presets or custom values.
- **Internal Links Received**: Homepage ("What Can You Calculate?", "Popular MG to ML Conversions", "Explore Resources"), Footer Nav, `/mg-to-ml/`.
- **Internal Links Sent**: Homepage, `/mg-to-ml/`, `/ml-to-mg/`, `/mg-ml-concentration-calculator/`.
- **Potential Keyword Cannibalization**: Minor overlap with `/mg-to-ml/` table section.
- **Missing Content/Topics**: Downloadable/printable CSS view format or PDF export option for offline reference.
- **Unnecessary/Repetitive Content**: None.
- **URL Status**: Keep as-is (`/mg-to-ml-conversion-chart/`).
- **Recommended Future Action (P1)**: Enhance printable CSS styling so users searching for "printable mg to ml chart" can easily print clean reference tables directly from the page.

---

## 4. Cannibalization Matrix

| Page A | Page B | Overlapping Keywords | Risk Level | Strategic Recommendation |
|---|---|---|---|---|
| `/` (Homepage) | `/mg-to-ml/` | `mg to ml`, `mg to ml calculator`, `convert mg to ml` | **MEDIUM** | Differentiate intent: Homepage targets broad topical queries and hub navigation; `/mg-to-ml/` targets high-intent transactional calculator queries. Link homepage CTAs directly to `/mg-to-ml/` with exact anchor text. |
| `/mg-to-ml/` | `/ml-to-mg/` | `mg to ml`, `ml to mg` | **LOW** | Clear opposite calculation direction. `/mg-to-ml/` solves Mass→Volume; `/ml-to-mg/` solves Volume→Mass. Cross-link both pages in hero/footer sections. |
| `/mg-to-ml-drug-conversion/` | `/mg-ml-concentration-calculator/` | `mg/ml calculator`, `drug concentration calculator`, `dose calculator mg/ml` | **MEDIUM** | Differentiate role: `/mg-ml-concentration-calculator/` targets multi-variable algebraic calculation (`mg/mL = mg ÷ mL`); `/mg-to-ml-drug-conversion/` targets educational interpretation of product label strength statements. |
| `/mg-to-ml-syringe/` | `/mg-to-ml-drug-conversion/` | `mg to ml syringe`, `medicine syringe conversion` | **LOW** | Differentiate focus: Syringe page focuses on volumetric markings (mL/cc) and cylinder capacity; Drug conversion page focuses on packaging labels and concentration ratios. |
| `/mg-to-ml/` | `/mg-to-ml-conversion-chart/` | `mg to ml table`, `common mg to ml conversions` | **LOW** | Differentiate user task: `/mg-to-ml/` provides an instant single-input calculator; `/mg-to-ml-conversion-chart/` provides multi-concentration reference lookup tables and dynamic chart generator. |
| `/mg-vs-ml/` | `/` (Homepage) | `mg vs ml`, `difference between mg and ml` | **LOW** | Homepage briefly introduces unit difference; `/mg-vs-ml/` provides deep-dive educational comparison matrix and conceptual analysis. |

---

## 5. Keyword Consolidation Map

To maintain search engine authority and prevent thin content penalties, specific numeric query variants and near-identical synonymous queries MUST be consolidated into authority pages rather than split into separate programmatic pages:

### Numeric Query Variants (Consolidate into `/mg-to-ml/` & `/mg-to-ml-conversion-chart/`)
- `0.5 mg to ml`
- `1 mg to ml`
- `2 mg to ml`
- `2.5 mg to ml`
- `5 mg to ml`
- `10 mg to ml`
- `15 mg to ml`
- `20 mg to ml`
- `25 mg to ml`
- `30 mg to ml`
- `40 mg to ml`
- `50 mg to ml`
- `100 mg to ml`
- `250 mg to ml`
- `500 mg to ml`

*Strategy*: Cover these numeric terms through crawlable HTML reference tables and example calculation cards inside `/mg-to-ml/` and `/mg-to-ml-conversion-chart/`. Do NOT create separate URLs for numeric values.

### Reverse Numeric Query Variants (Consolidate into `/ml-to-mg/`)
- `0.1 ml to mg`
- `0.25 ml to mg`
- `0.5 ml to mg`
- `1 ml to mg`
- `2 ml to mg`
- `2.5 ml to mg`
- `5 ml to mg`
- `10 ml to mg`

*Strategy*: Cover these inverse numeric queries inside the HTML reference table on `/ml-to-mg/`.

### Synonymous Phrases & Intent Variants

| Target Authority Page | Synonymous Query Variants (Consolidated) |
|---|---|
| `/mg-vs-ml/` | `mg vs ml`, `ml vs mg`, `difference between mg and ml`, `mg and ml difference`, `is mg the same as ml`, `are mg and ml equal` |
| `/mg-to-ml/` | `mg to ml calculator`, `convert mg to ml`, `mg to ml converter`, `milligrams to milliliters calculator`, `how to calculate mg to ml`, `mg ml calculator` |
| `/ml-to-mg/` | `ml to mg calculator`, `convert ml to mg`, `ml to mg converter`, `milliliters to milligrams calculator`, `how to calculate ml to mg`, `ml mg calculator` |
| `/mg-ml-concentration-calculator/` | `mg/ml calculator`, `mg per ml calculator`, `calculate mg/ml`, `mg/ml concentration calculator`, `mg per ml`, `concentration calculator mg ml` |
| `/mg-to-ml-drug-conversion/` | `mg to ml drug conversion`, `mg to ml medicine`, `medication mg to ml`, `medicine concentration`, `how to read mg/ml label` |
| `/mg-to-ml-syringe/` | `mg to ml syringe`, `mg to ml syringe conversion`, `ml to mg syringe`, `mg in ml syringe`, `cc to mg syringe`, `syringe markings ml cc` |
| `/mg-to-ml-conversion-chart/` | `mg to ml conversion chart`, `mg to ml chart`, `milligrams to milliliters chart`, `mg to ml table`, `mg to ml conversion table` |

---

## 6. Content Gaps & Opportunities

Without adding new URLs, the following high-value topics should be integrated into existing pages to capture search demand:

1. **Percentage Solution Strength (Integrate into `/mg-ml-concentration-calculator/`)**
   - *Topic*: Converting percentage concentration (e.g., 1%, 2%, 0.9%) into mg/mL.
   - *Rule*: 1% solution = 10 mg/mL (1 gram per 100 mL = 1,000 mg / 100 mL = 10 mg/mL).
   - *Value*: Captures user searches for "convert 1 percent to mg/ml".

2. **Oral Liquid Label Formats (Integrate into `/mg-to-ml-drug-conversion/`)**
   - *Topic*: Reading "mg per 5 mL" statements on liquid product labels (e.g. 125 mg / 5 mL or 250 mg / 5 mL).
   - *Rule*: Divide total mg by 5 to find unit concentration in mg/mL (250 ÷ 5 = 50 mg/mL).
   - *Value*: Highly searched commercial liquid concentration format.

3. **Syringe Unit Equivalence: mL vs. cc (Integrate into `/mg-to-ml-syringe/`)**
   - *Topic*: Explaining that 1 cc (cubic centimeter) is mathematically identical to 1 mL.
   - *Value*: Resolves a frequent user confusion point when reading syringe barrels marked in cc instead of mL.

4. **Water Density Baseline Reference (Integrate into `/mg-vs-ml/`)**
   - *Topic*: Explaining why 1 mL of pure water weighs 1,000 mg (1 gram) at 4°C, whereas solutions with dissolved solids have higher or lower densities.
   - *Value*: Captures searches for "why does 1 ml of water equal 1 gram".

---

## 7. Internal Linking Strategy

A clean, intentional internal linking structure connects informational guides with dedicated calculation utilities:

```
                          +-----------------------+
                          |   Homepage Hub (/)    |
                          +-----------+-----------+
                                      |
         +----------------------------+----------------------------+
         |                            |                            |
+--------v-------+           +--------v-------+           +--------v-------+
|  /mg-to-ml/    | <-------> |  /ml-to-mg/    | <-------> | /mg-ml-con...  |
+--------+-------+           +--------+-------+           +--------+-------+
         |                            |                            |
         +----------------------------+----------------------------+
                                      |
         +----------------------------+----------------------------+
         |                            |                            |
+--------v-------+           +--------v-------+           +--------v-------+
|  /mg-vs-ml/    |           | /mg-to-ml-d... |           | /mg-to-ml-s... |
+----------------+           +--------+-------+           +----------------+
                                      |
                             +--------v-------+
                             | /mg-to-ml-c... |
                             +----------------+
```

### Page-by-Page Internal Linking Matrix

| Page URL | Inbound Links From | Outbound Links To | Recommended Contextual Anchor Text |
|---|---|---|---|
| `/` (Home) | All pages (Logo, Header Nav, Breadcrumbs) | All 7 subpages | `MG to ML Calculator`, `ML to MG Calculator`, `MG/ML Concentration Calculator`, `MG to ML Drug Conversion`, `MG vs ML`, `MG to ML Syringe Conversion`, `MG to ML Conversion Chart` |
| `/mg-to-ml/` | Home, `/ml-to-mg/`, `/mg-ml-concentration-calculator/`, `/mg-to-ml-drug-conversion/`, `/mg-to-ml-conversion-chart/` | Home, `/ml-to-mg/`, `/mg-to-ml-drug-conversion/` | `mg to ml calculator`, `ML to MG Converter`, `MG to ML drug conversion` |
| `/ml-to-mg/` | Home, `/mg-to-ml/`, `/mg-ml-concentration-calculator/`, `/mg-to-ml-conversion-chart/` | Home, `/mg-to-ml/`, `/mg-ml-concentration-calculator/` | `ML to MG Calculator`, `mg to ml calculator`, `MG/ML Concentration Calculator` |
| `/mg-ml-concentration-calculator/` | Home, `/mg-to-ml/`, `/ml-to-mg/`, `/mg-to-ml-drug-conversion/`, `/mg-vs-ml/` | Home, `/mg-to-ml/`, `/ml-to-mg/`, `/mg-to-ml-drug-conversion/` | `MG/ML Concentration Calculator`, `mg to ml calculator`, `ML to MG Converter` |
| `/mg-to-ml-drug-conversion/` | Home, `/mg-to-ml/`, `/mg-ml-concentration-calculator/`, `/mg-to-ml-syringe/` | Home, `/mg-to-ml/`, `/mg-to-ml-syringe/`, `/mg-ml-concentration-calculator/` | `MG to ML drug conversion`, `MG to ML Calculator`, `MG to ML syringe conversion` |
| `/mg-vs-ml/` | Home, `/mg-to-ml/`, `/mg-to-ml-syringe/` | Home, `/mg-to-ml/`, `/mg-ml-concentration-calculator/` | `MG vs ML`, `mg to ml calculator`, `MG/ML Concentration Calculator` |
| `/mg-to-ml-syringe/` | Home, `/mg-to-ml-drug-conversion/` | Home, `/mg-to-ml/`, `/mg-vs-ml/`, `/mg-to-ml-drug-conversion/` | `MG to ML syringe conversion`, `MG to ML calculator`, `MG vs ML guide` |
| `/mg-to-ml-conversion-chart/` | Home, `/mg-to-ml/` | Home, `/mg-to-ml/`, `/ml-to-mg/`, `/mg-ml-concentration-calculator/` | `MG to ML Conversion Chart`, `mg to ml calculator`, `ML to MG Converter` |

---

## 8. Priority Actions

### P0 (Critical - Immediate Architecture Alignment)
- **Action**: Verify anchor text consistency across all internal links so exact target keywords point to their designated URLs (e.g. "mg to ml calculator" -> `/mg-to-ml/`, "ml to mg calculator" -> `/ml-to-mg/`).
- **Rationale**: Prevents internal keyword cannibalization and signals clear page intent to search engines.

### P1 (High Priority - Intent & Content Depth)
- **Action 1**: Add "Understanding mg per 5 mL Oral Liquid Labels" section to `/mg-to-ml-drug-conversion/`.
- **Action 2**: Add "Percentage Concentration to mg/mL (1% = 10 mg/mL)" section to `/mg-ml-concentration-calculator/`.
- **Action 3**: Enhance printable CSS formatting on `/mg-to-ml-conversion-chart/` for print-focused search intent.
- **Rationale**: Captures high-volume secondary commercial and reference search intents.

### P2 (Useful - User Experience & Educational Depth)
- **Action 1**: Add explicit "1 cc = 1 mL" equivalence callout in `/mg-to-ml-syringe/`.
- **Action 2**: Expand water density explanation (1 mL water = 1,000 mg) on `/mg-vs-ml/`.
- **Rationale**: Resolves frequent user search queries around volumetric units and substance density.

### P3 (Optional - Future Enhancements)
- **Action**: Add interactive download feature (CSV or clean text export) for custom generated conversion tables on `/mg-to-ml-conversion-chart/`.
- **Rationale**: Enhances user utility for reference users without affecting search indexation.

---

## 9. Final Architecture

```
                                  [ MGMLCalculator.com ]
                                            │
                                            ▼
                                   ┌─────────────────┐
                                   │  Homepage Hub   │
                                   │       (/)       │
                                   └────────┬────────┘
                                            │
         ┌──────────────────────────────────┼──────────────────────────────────┐
         │                                  │                                  │
         ▼                                  ▼                                  ▼
┌──────────────────┐               ┌──────────────────┐               ┌──────────────────┐
│  /mg-to-ml/      │ ◄───────────► │  /ml-to-mg/      │ ◄───────────► │/mg-ml-concentra..│
│ (Primary MG->ML) │               │ (Primary ML->MG) │               │(3-Mode Solver)   │
└────────┬─────────┘               └──────────────────┘               └────────┬─────────┘
         │                                                                     │
         ├──────────────────────────────────┬──────────────────────────────────┤
         │                                  │                                  │
         ▼                                  ▼                                  ▼
┌──────────────────┐               ┌──────────────────┐               ┌──────────────────┐
│  /mg-vs-ml/      │               │/mg-to-ml-drug-.. │ ◄───────────► │/mg-to-ml-syringe/│
│ (Unit Difference)│               │(Label Strength)  │               │(Syringe Vol/cc)  │
└──────────────────┘               └────────┬─────────┘               └──────────────────┘
                                            │
                                            ▼
                                   ┌──────────────────┐
                                   │/mg-to-ml-conver..│
                                   │(Reference Chart) │
                                   └──────────────────┘
```

---

*Phase 2 audit report generated for MGMLCalculator.com.*
