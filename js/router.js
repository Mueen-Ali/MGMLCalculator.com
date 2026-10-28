/**
 * MGMLCalculator.com - Router & Page Controller
 */

import { updateSEO } from './seo.js';
import { renderHeader, initHeaderEvents } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { initCalculatorEvents } from './components/Calculator.js';

import { renderHomePage } from './pages/Home.js';
import { renderMgToMlPage } from './pages/MgToMl.js';
import { renderMlToMgPage } from './pages/MlToMg.js';
import { renderMgToMlDrugConversionPage } from './pages/MgToMlDrugConversion.js';
import { renderMgToMlSyringePage } from './pages/MgToMlSyringe.js';
import { renderMgVsMlPage } from './pages/MgVsMl.js';
import { renderMgMlConcentrationCalculatorPage } from './pages/MgMlConcentrationCalculator.js';
import { initConcentrationCalculatorEvents } from './components/ConcentrationCalculator.js';
import { renderMgToMlConversionChartPage } from './pages/MgToMlConversionChart.js';
import { initInteractiveChartEvents } from './components/ConversionChart.js';
import { renderAboutPage } from './pages/About.js';
import { renderBlogPage } from './pages/Blog.js';
import { renderPrivacyPage } from './pages/Privacy.js';
import { renderTermsPage } from './pages/Terms.js';
import { renderContactPage } from './pages/Contact.js';

// Route Definitions with Configurable SEO Metadata & Structured Data
export const ROUTES = {
  '/': {
    title: 'MG to ML Conversion &amp; Calculator Hub | MGMLCalculator.com',
    description: 'Comprehensive conversion hub for milligrams (mg) and milliliters (mL). Access dedicated calculators, multi-concentration charts, and metric liquid conversion guides.',
    render: renderHomePage,
    calcMode: 'mg-to-ml',
    schema: [
      {
        '@type': 'WebApplication',
        'name': 'mg to mL Converter Calculator',
        'applicationCategory': 'UtilityApplication',
        'operatingSystem': 'All'
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How do you convert mg to mL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'To convert mg to mL, divide the mass in milligrams by the liquid concentration in mg/mL (Volume = Mass ÷ Concentration).'
            }
          },
          {
            '@type': 'Question',
            'name': 'How many mL is 1 mg?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The liquid volume in mL depends on the solution concentration. At a concentration of 10 mg/mL, 1 mg equals 0.1 mL. At 1 mg/mL, 1 mg equals 1 mL.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How many mg are in 1 mL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The number of milligrams in 1 mL depends on concentration. A 10 mg/mL solution contains 10 mg in 1 mL, while pure water contains 1,000 mg in 1 mL.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can mg be directly converted to mL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Because milligrams measure weight (mass) and milliliters measure liquid volume, direct unit conversion requires knowing the solution concentration in mg/mL or liquid density.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What information is needed to convert mg to mL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'You need the mass value in milligrams (mg) and the liquid solution concentration ratio in milligrams per milliliter (mg/mL).'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is the difference between mg and mL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Milligrams (mg) quantify physical mass or weight, whereas milliliters (mL) quantify liquid volume space.'
            }
          }
        ]
      }
    ]
  },
  '/mg-to-ml/': {
    title: 'MG to ML Calculator: Convert Milligrams to Milliliters',
    description: 'Use our free MG to ML calculator to convert milligrams to milliliters. Enter mass and concentration (mg/mL) to get instant results, with formula and examples.',
    render: renderMgToMlPage,
    calcMode: 'mg-to-ml',
    schema: [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://mgmlcalculator.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'MG to ML Calculator',
            'item': 'https://mgmlcalculator.com/mg-to-ml/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How do you convert mg to mL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Divide the mass in milligrams by the solution concentration in mg/mL. Formula: Volume (mL) = Mass (mg) ÷ Concentration (mg/mL). For example, 50 mg at 10 mg/mL = 5 mL.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How many mL is 1 mg?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'It depends on concentration. At 1 mg/mL, 1 mg equals 1 mL. At 10 mg/mL, 1 mg equals 0.1 mL. There is no single answer without knowing the solution strength.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How many mg are in 1 mL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The number of milligrams in 1 mL equals the concentration of the solution. A 10 mg/mL solution contains 10 mg per mL. A 5 mg/mL solution contains 5 mg per mL. Pure water at standard conditions contains 1,000 mg (1 gram) per mL.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can mg be converted to mL directly?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Milligrams measure mass and milliliters measure volume — they represent different physical dimensions. Conversion requires knowing the concentration in mg/mL or the substance density.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What concentration is needed for mg to mL conversion?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'You need the concentration expressed in milligrams per milliliter (mg/mL). This value is the bridge between mass and volume — without it, the conversion is mathematically incomplete.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is mg/mL the same as mg to mL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. mg/mL is a unit of concentration — it describes how many milligrams of substance are present in each milliliter of liquid. mg to mL is a conversion that uses concentration as an input to calculate volume from a known mass.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Why does the same mg amount produce different mL results?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Because different solutions have different concentrations. A highly concentrated liquid holds more milligrams per milliliter, so less volume is needed to contain the same total mass. A dilute liquid requires more volume.'
            }
          }
        ]
      }
    ]
  },
  '/ml-to-mg/': {
    title: 'ML to MG Calculator: Convert Milliliters to Milligrams',
    description: 'Convert milliliters to milligrams with our free ML to MG calculator. Use the formula mass (mg) = volume (mL) \u00d7 concentration (mg/mL) with worked examples.',
    render: renderMlToMgPage,
    calcMode: 'ml-to-mg',
    schema: [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://mgmlcalculator.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'ML to MG Calculator',
            'item': 'https://mgmlcalculator.com/ml-to-mg/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How do you convert mL to mg?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Multiply the volume in milliliters by the solution concentration in mg/mL. Formula: Mass (mg) = Volume (mL) \u00d7 Concentration (mg/mL). For example, 5 mL at 10 mg/mL = 50 mg.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How many mg are in 1 mL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The number of milligrams in 1 mL depends on the concentration of the solution. At 10 mg/mL, 1 mL contains 10 mg. At 5 mg/mL, 1 mL contains 5 mg. For pure water at standard conditions, 1 mL contains 1,000 mg (1 gram). There is no single fixed answer without knowing the concentration.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can you convert mL to mg without concentration?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Milliliters measure volume and milligrams measure mass \u2014 they represent different physical dimensions. Converting between them requires knowing the concentration in mg/mL or the substance density.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is the formula for mL to mg conversion?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The formula is: Mass (mg) = Volume (mL) \u00d7 Concentration (mg/mL). Multiply the liquid volume by the concentration ratio to find the total mass in milligrams.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is the difference between mg and mL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Milligrams (mg) measure mass or weight. Milliliters (mL) measure liquid volume \u2014 the space a fluid occupies. They quantify different physical properties, which is why concentration (mg/mL) is needed to relate one to the other.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is mL to mg the reverse of mg to mL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. The two conversions use the same formula rearranged: ML to MG multiplies volume by concentration, while MG to ML divides mass by concentration. Both require the same concentration value to produce an accurate result.'
            }
          }
        ]
      }
    ]
  },
  '/mg-to-ml-drug-conversion/': {
    title: 'MG to ML Drug Conversion: Reading Medicine Labels &amp; Concentration',
    description: 'Learn how mg to mL drug conversions work on liquid packaging. Understand mg/mL concentration ratios, mg per 5 mL suspension labels, and % w/v strengths.',
    render: renderMgToMlDrugConversionPage,
    schema: [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://mgmlcalculator.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'MG to ML Drug Conversion',
            'item': 'https://mgmlcalculator.com/mg-to-ml-drug-conversion/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What does mg/mL mean?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'mg/mL stands for milligrams per milliliter. It expresses concentration \u2014 the mass in milligrams of an active substance present in each milliliter of liquid.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do you convert mg to mL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'To convert mg to mL, divide the mass in milligrams by the solution concentration in mg/mL: Volume (mL) = Mass (mg) \u00f7 Concentration (mg/mL). For example, 100 mg at 20 mg/mL = 5 mL.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can mg be converted to mL without concentration?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Milligrams measure weight (mass) and milliliters measure volume. Converting between them requires knowing the solution concentration in mg/mL or liquid density.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What does 250 mg per 5 mL mean?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'It means every 5 milliliters of the liquid contains 250 milligrams of the active substance. Dividing 250 mg by 5 mL gives a unit concentration of 50 mg/mL.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Why can the same volume contain different amounts of a substance?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Because different liquids have different concentrations. A highly concentrated liquid packs more milligrams into each milliliter, whereas a more dilute liquid contains fewer milligrams in the same volume.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is the difference between mg and mL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Milligrams (mg) quantify physical mass or weight, while milliliters (mL) quantify liquid volume space. They measure two different physical properties.'
            }
          }
        ]
      }
    ]
  },
  '/mg-to-ml-syringe/': {
    title: 'MG to ML Syringe Conversion: Understanding Volume',
    description: 'Learn how mg to mL syringe conversion works. Understand syringe volume markings in mL vs mass in mg, and why solution concentration is required for conversion.',
    render: renderMgToMlSyringePage,
    schema: [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://mgmlcalculator.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'MG to ML Syringe Conversion',
            'item': 'https://mgmlcalculator.com/mg-to-ml-syringe/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Does a syringe measure mg or mL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'A syringe measures volume in milliliters (mL) or cubic centimeters (cc), not mass in milligrams (mg). The barrel hash marks quantify physical liquid capacity, not the weight of active substance dissolved within the fluid.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How are mg and mL different?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Milligrams (mg) quantify physical mass or weight, whereas milliliters (mL) quantify liquid volume space. Converting between them requires knowing the solution\'s concentration in mg/mL.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What does 1 mL mean on a syringe?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '1 mL on a syringe indicates 1 milliliter of fluid volume (equivalent to 1 cubic centimeter). The amount of dissolved substance in that 1 mL depends entirely on the liquid\'s concentration.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is 1 mL equal to 1 cc?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. 1 milliliter (mL) is mathematically identical to 1 cubic centimeter (cc). Both measure the exact same volume of fluid.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can you determine mg from syringe markings alone?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Syringe markings only show volume. To determine milligrams (mg), you must multiply the volume in mL by the solution\'s concentration ratio (mg/mL) stated on the product label.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Why does concentration matter when relating mg to mL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Because different solutions contain different amounts of dissolved mass per milliliter. A high-concentration liquid holds more milligrams in the same syringe volume than a dilute liquid.'
            }
          }
        ]
      }
    ]
  },
  '/mg-vs-ml/': {
    title: 'MG vs ML: Difference Between Milligrams and Milliliters',
    description: 'Learn the difference between mg and mL. Milligrams measure mass while milliliters measure volume, meaning concentration is required to relate the two units.',
    render: renderMgVsMlPage,
    schema: [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://mgmlcalculator.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'MG vs ML',
            'item': 'https://mgmlcalculator.com/mg-vs-ml/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Is mg the same as mL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Milligrams (mg) measure mass or weight, whereas milliliters (mL) measure liquid volume. They represent two fundamentally different physical quantities.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What does mg stand for?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'mg stands for milligram, a metric unit of mass equal to one-thousandth of a gram (0.001 g) or one-millionth of a kilogram.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What does mL stand for?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'mL stands for milliliter, a metric unit of volume equal to one-thousandth of a liter (0.001 L) or one cubic centimeter (1 cm\u00b3).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can mg be converted to mL directly?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Converting between mass (mg) and volume (mL) requires knowing the liquid\'s concentration (mg/mL) or density. Without this physical property, the numbers cannot be directly converted.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How are mg and mL related?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'In liquid solutions, mg and mL are related through concentration (mg/mL), which specifies the mass in milligrams contained in each milliliter of volume. The relationship is expressed as Volume (mL) = Mass (mg) \u00f7 Concentration (mg/mL).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Which is larger, a mg or a mL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'A milligram and a milliliter cannot be ranked as larger or smaller because they measure completely different physical dimensions \u2014 mass and volume. Comparing their size is only possible when evaluating a specific substance with known density or concentration (for example, 1 mL of pure water weighs 1,000 mg, making 1 mL substantially heavier than 1 mg of water).'
            }
          }
        ]
      }
    ]
  },
  '/mg-ml-concentration-calculator/': {
    title: 'MG/ML Concentration Calculator: Calculate mg per mL',
    description: 'Calculate concentration (mg/mL), mass (mg), or volume (mL) with our free mg/mL calculator. Includes formulas, mg per 5 mL label examples, and % w/v conversions.',
    render: renderMgMlConcentrationCalculatorPage,
    initEvents: () => initConcentrationCalculatorEvents('concentration'),
    schema: [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://mgmlcalculator.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'MG/ML Concentration Calculator',
            'item': 'https://mgmlcalculator.com/mg-ml-concentration-calculator/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What does mg/mL mean?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'mg/mL stands for milligrams per milliliter. It represents concentration \u2014 expressing how many milligrams of a substance are dissolved in each milliliter of liquid volume.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do you calculate mg per mL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Divide the mass in milligrams by the volume in milliliters: Concentration (mg/mL) = Mass (mg) \u00f7 Volume (mL). For example, 100 mg \u00f7 5 mL = 20 mg/mL.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do you calculate mg from mL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Multiply the volume in milliliters by the solution concentration in mg/mL: Mass (mg) = Volume (mL) \u00d7 Concentration (mg/mL). For example, 5 mL \u00d7 20 mg/mL = 100 mg.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do you calculate mL from mg?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Divide the mass in milligrams by the solution concentration in mg/mL: Volume (mL) = Mass (mg) \u00f7 Concentration (mg/mL). For example, 100 mg \u00f7 20 mg/mL = 5 mL.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do you convert 1% w/v to mg/mL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Multiply the percentage by 10. A 1% w/v solution contains 1 gram (1,000 mg) per 100 mL, which equals 1,000 \u00f7 100 = 10 mg/mL.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What does 250 mg per 5 mL mean?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'It means every 5 milliliters of liquid contains 250 milligrams of the substance. Dividing 250 mg by 5 mL gives a unit concentration of 50 mg/mL.'
            }
          }
        ]
      }
    ]
  },
  '/mg-to-ml-conversion-chart/': {
    title: 'MG to ML Conversion Chart: Multi-Concentration Reference Tables',
    description: 'Free MG to ML conversion charts across multiple concentrations (2, 5, 10, 20 mg/mL and more). Includes multi-concentration reference tables, formulas, and common metric values.',
    render: renderMgToMlConversionChartPage,
    initEvents: () => initInteractiveChartEvents(10),
    schema: [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://mgmlcalculator.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'MG to ML Conversion Chart',
            'item': 'https://mgmlcalculator.com/mg-to-ml-conversion-chart/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How do you use an MG to ML conversion chart?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Find your target mass in milligrams in the left column, verify that the chart\'s stated concentration matches your solution\'s concentration (mg/mL), and read across to find the corresponding liquid volume in milliliters.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do you convert mg to mL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Divide the mass in milligrams by the solution concentration in mg/mL using the formula Volume (mL) = Mass (mg) \u00f7 Concentration (mg/mL). For example, 50 mg at 10 mg/mL = 5 mL.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How many mL is 10 mg?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The volume depends entirely on the liquid concentration. At a standard concentration of 10 mg/mL, 10 mg equals 1 mL (10 \u00f7 10 = 1). At 5 mg/mL, 10 mg equals 2 mL. At 20 mg/mL, 10 mg equals 0.5 mL.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How many mL is 50 mg?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The volume depends on the solution concentration. Assuming a 10 mg/mL concentration, 50 mg equals 5 mL (50 \u00f7 10 = 5). At a 25 mg/mL concentration, 50 mg equals 2 mL (50 \u00f7 25 = 2).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Why does concentration matter in an MG to ML chart?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Because milligrams measure mass and milliliters measure volume. Concentration defines how many milligrams are contained in each milliliter, so changing the concentration changes the volume needed for any given mass.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can one chart apply to every concentration?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. A conversion chart is mathematically valid only for the specific concentration stated in its column headers. Liquids with different concentrations require separate calculations or an interactive calculator.'
            }
          }
        ]
      }
    ]
  },
  '/blog/': {
    title: 'Measurement & Conversion Guides | MGMLCalculator',
    description: 'Explore clear guides to milligrams, milliliters, concentration, measurement units, and conversion formulas with MGMLCalculator.',
    render: renderBlogPage,
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://mgmlcalculator.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Blog',
            'item': 'https://mgmlcalculator.com/blog/'
          }
        ]
      },
      {
        '@type': 'CollectionPage',
        'name': 'Measurement & Conversion Guides | MGMLCalculator',
        'description': 'Explore clear guides to milligrams, milliliters, concentration, measurement units, and conversion formulas with MGMLCalculator.',
        'url': 'https://mgmlcalculator.com/blog/'
      }
    ]
  },
  '/about/': {
    title: 'About Us | MGMLCalculator.com',
    description: 'Learn about MGMLCalculator.com, our educational mission, precision unit conversion standards, and accurate mathematical calculation utilities.',
    render: renderAboutPage
  },
  '/privacy-policy/': {
    title: 'Privacy Policy | MGMLCalculator.com',
    description: 'Read the privacy policy for MGMLCalculator.com. Learn how we prioritize user privacy, data protection, and transparent website practices.',
    render: renderPrivacyPage
  },
  '/terms/': {
    title: 'Terms of Use | MGMLCalculator.com',
    description: 'Read the terms of use for MGMLCalculator.com. Understand our educational scope, terms of service, and disclaimer guidelines.',
    render: renderTermsPage
  },
  '/contact/': {
    title: 'Contact Us | MGMLCalculator.com',
    description: 'Contact the MGMLCalculator.com team for inquiries, mathematical calculator feedback, or website suggestions.',
    render: renderContactPage
  }
};

/**
 * Resolves base prefix (e.g. '/' or '/MGMLCalculator.com/').
 */
function getBase() {
  const base = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL)
    ? import.meta.env.BASE_URL
    : '/';
  return base.endsWith('/') ? base : `${base}/`;
}

/**
 * Resolves current location path to normalized route key.
 */
function normalizePath(path) {
  if (!path || path === '') return '/';
  
  const base = getBase();
  let cleaned = path.split('?')[0].split('#')[0];

  // If on a subpath deployment (e.g. GitHub Pages), strip the repository base
  if (base !== '/' && cleaned.startsWith(base)) {
    cleaned = '/' + cleaned.slice(base.length);
  } else if (base !== '/' && cleaned === base.slice(0, -1)) {
    cleaned = '/';
  }

  if (!cleaned.endsWith('/')) {
    cleaned += '/';
  }
  return cleaned;
}

/**
 * Main render function for current route.
 */
export function navigateTo(path, pushState = true) {
  const normPath = normalizePath(path);
  const route = ROUTES[normPath] || ROUTES['/'];

  const base = getBase();
  // Form full browser path including base prefix if on subpath
  const fullBrowserPath = base === '/' ? normPath : `${base.slice(0, -1)}${normPath}`;

  if (pushState && window.location.pathname !== fullBrowserPath) {
    window.history.pushState({}, '', fullBrowserPath);
  }

  // 1. Update SEO Meta Tags & JSON-LD
  updateSEO({
    title: route.title,
    description: route.description,
    path: normPath,
    schema: route.schema || null
  });

  // 2. Render Page Layout into Root Container
  const appContainer = document.getElementById('app');
  if (appContainer) {
    appContainer.innerHTML = `
      ${renderHeader(normPath)}
      <main id="main-content">
        <div class="container">
          ${route.render()}
        </div>
      </main>
      ${renderFooter()}
    `;

    // Initialize Header Events (Mobile Menu Toggle, etc.)
    initHeaderEvents();

    // Initialize Calculator Events if route has a calculator
    if (route.calcMode) {
      initCalculatorEvents(route.calcMode);
    }
    if (route.initEvents) {
      route.initEvents();
    }

    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

/**
 * Initializes Router event listeners (pushState link interception, popstate).
 */
export function initRouter() {
  // Listen for browser back/forward buttons
  window.addEventListener('popstate', () => {
    navigateTo(window.location.pathname, false);
  });

  // Global delegated click listener for internal spa links
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link]');
    if (link) {
      const href = link.getAttribute('href');
      if (href && (href.startsWith('/') || href.startsWith('.'))) {
        e.preventDefault();
        navigateTo(href, true);
      }
    }
  });

  // Initial render based on current URL path
  navigateTo(window.location.pathname, false);
}
