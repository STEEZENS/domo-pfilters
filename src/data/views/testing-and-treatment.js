import GLOBAL_COUNTRY_REGIONS from '@/data/global-country-regions';
import US_STATE_PROVINCES from '@/data/us-state-provinces';

export default [
  {
    name: 'testing-and-treatment-testing',
    label: 'Testing',
    hash: '#testing',
    sections: [
      {
        title: 'What’s happening with Coronavirus testing?',
        description: 'The widespread availability of testing is viewed as critical to tracking and controlling the spread of the COVID-19 virus. As health officials rush to develop and deploy tests, you can observe the progress that different states and countries are making in this crucial area.',
        embedSrc: 'https://public.domo.com/embed/pages/e9qKZ',
        embedHeight: null,
        embedHeightMobile: null,
        class: null,
        filters: [
          {
            type: 'InputMultiselect',
            label: 'Country:',
            column: 'country_region',
            options: GLOBAL_COUNTRY_REGIONS,
          },
        ],
        ctaTitle: null,
        ctas: [],
      },
    ],
  },
  {
    name: 'testing-and-treatment-treatment',
    label: 'Treatment',
    hash: '#treatment',
    sections: [
      {
        title: 'How taxed are hospitals with treating Coronavirus patients?',
        description: 'With the influx of COVID-19 cases, healthcare systems will be increasingly taxed to handle the treatment of infected patients. As hospitals and healthcare professionals work hard to save lives, you can see which states are being hardest hit with hospitalizations. (Note: Hospitalization data is not available for some states).',
        embedSrc: 'https://public.domo.com/embed/pages/e7oGr',
        embedHeight: null,
        embedHeightMobile: null,
        class: 'bg-light',
        filters: [
          {
            type: 'InputMultiselect',
            label: 'State:',
            column: 'province_state',
            options: US_STATE_PROVINCES,
          },
        ],
        ctaTitle: null,
        ctas: [],
      },
    ],
  },
];
