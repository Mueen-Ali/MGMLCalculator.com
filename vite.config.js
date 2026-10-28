import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function getBasePath() {
  if (process.env.BASE_PATH !== undefined) {
    const b = process.env.BASE_PATH.trim();
    if (!b || b === '/') return '/';
    return b.startsWith('/') ? (b.endsWith('/') ? b : `${b}/`) : `/${b}/`;
  }
  if (process.env.VITE_BASE_PATH !== undefined) {
    const b = process.env.VITE_BASE_PATH.trim();
    if (!b || b === '/') return '/';
    return b.startsWith('/') ? (b.endsWith('/') ? b : `${b}/`) : `/${b}/`;
  }
  return '/';
}

export default defineConfig({
  base: getBasePath(),
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mgToMl: resolve(__dirname, 'mg-to-ml/index.html'),
        mlToMg: resolve(__dirname, 'ml-to-mg/index.html'),
        mgToMlDrugConversion: resolve(__dirname, 'mg-to-ml-drug-conversion/index.html'),
        mgToMlSyringe: resolve(__dirname, 'mg-to-ml-syringe/index.html'),
        mgVsMl: resolve(__dirname, 'mg-vs-ml/index.html'),
        mgMlConcentrationCalculator: resolve(__dirname, 'mg-ml-concentration-calculator/index.html'),
        mgToMlConversionChart: resolve(__dirname, 'mg-to-ml-conversion-chart/index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        about: resolve(__dirname, 'about/index.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy/index.html'),
        terms: resolve(__dirname, 'terms/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        notFound: resolve(__dirname, '404.html')
      }
    }
  }
});
