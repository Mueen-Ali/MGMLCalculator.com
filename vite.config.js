import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function getBasePath() {
  const rawBase = process.env.BASE_PATH || process.env.VITE_BASE_PATH;
  if (rawBase && rawBase.trim() !== '') {
    let b = rawBase.trim();
    if (!b.startsWith('/')) b = '/' + b;
    if (!b.endsWith('/')) b = b + '/';
    return b;
  }
  if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
    if (repoName && !repoName.toLowerCase().endsWith('.github.io')) {
      return `/${repoName}/`;
    }
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
        about: resolve(__dirname, 'about/index.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy/index.html'),
        terms: resolve(__dirname, 'terms/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        notFound: resolve(__dirname, '404.html')
      }
    }
  }
});
