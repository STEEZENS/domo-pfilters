import PROJECTIONS_DESCRIPTION_BLURB from '@/data/projections-description-blurb';
import GLOBAL_PROJECTION_COUNTRY_REGIONS from '@/data/global-projection-country-regions';
import US_STATE_PROVINCES from '@/data/us-state-provinces';
import US_REGIONS from '@/data/us-regions';
import PROJECTION_METRICS from '@/data/projection-metrics';

export default [
  {
    name: 'projections-peak',
    label: 'Peak',
    hash: '#peak',
    sections: [
      {
        title: 'When will the effects of the Coronavirus pandemic peak?',
        description: PROJECTIONS_DESCRIPTION_BLURB,
        embedSrc: 'https://public.domo.com/embed/pages/bmKvO',
        embedHeight: null,
        embedHeightMobile: null,
        class: null,
        filters: [
          {
            type: 'InputMultiselect',
            label: 'Country:',
            column: 'country_region',
            options: GLOBAL_PROJECTION_COUNTRY_REGIONS,
            defaultValue: [...GLOBAL_PROJECTION_COUNTRY_REGIONS].filter(gpcr => ['United States'].includes(gpcr.value)),
          },
          {
            type: 'InputMultiselect',
            label: 'US State:',
            column: 'province_state',
            options: US_STATE_PROVINCES,
            enabledBy: {
              column: 'country_region',
              value: 'United States',
            },
          },
          {
            type: 'InputMultiselect',
            label: 'US Region:',
            column: 'US_Region_ForFilter',
            options: US_REGIONS,
            enabledBy: {
              column: 'country_region',
              value: 'United States',
            },
          },
          {
            type: 'InputSelect',
            label: 'Metric:',
            column: 'Domo_Metric_Name_ForFilter',
            options: PROJECTION_METRICS,
            defaultValue: [...PROJECTION_METRICS].find(pm => pm.value === 'Projected All Hospital Beds'),
          },
        ],
        ctaTitle: null,
        ctas: [],
      },
    ],
  },
  {
    name: 'projections-hospitalization',
    label: 'Hospitalization',
    hash: '#hospitalization',
    sections: [
      {
        title: 'How is Coronavirus projected to impact hospital resources?',
        description: 'As the number of COVID-19 cases increase around the world, statistical models can help project the anticipated need for critical hospital resources such as beds and ventilators. Based on your country or US state, you can examine the projected impact to hospital resources in your area.',
        embedSrc: 'https://public.domo.com/embed/pages/elJr5',
        embedHeight: null,
        embedHeightMobile: null,
        class: 'bg-light',
        filters: [
          {
            type: 'InputMultiselect',
            label: 'Country:',
            column: 'country_region',
            options: GLOBAL_PROJECTION_COUNTRY_REGIONS,
          },
          {
            type: 'InputMultiselect',
            label: 'US State:',
            column: 'province_state',
            options: US_STATE_PROVINCES,
            enabledBy: {
              column: 'country_region',
              value: 'United States',
            },
          },
        ],
        ctaTitle: null,
        ctas: [],
      },
    ],
  },
  {
    name: 'projections-mortality',
    label: 'Mortality',
    hash: '#mortality',
    sections: [
      {
        title: 'How many people are projected to die from Coronavirus?',
        description: 'The death toll from the COVID-19 pandemic will be one of the main determinants of whether social distancing and other preventative actions have worked. While statistical models are only as good as their assumptions and sample data, they can help you to gauge when COVID-19 deaths will peak in your country or state.',
        embedSrc: 'https://public.domo.com/embed/pages/e9q4x',
        embedHeight: null,
        embedHeightMobile: null,
        class: null,
        filters: [
          {
            type: 'InputMultiselect',
            label: 'Country:',
            column: 'country_region',
            options: GLOBAL_PROJECTION_COUNTRY_REGIONS,
          },
          {
            type: 'InputMultiselect',
            label: 'US State:',
            column: 'province_state',
            options: US_STATE_PROVINCES,
            enabledBy: {
              column: 'country_region',
              value: 'United States',
            },
          },
        ],
        ctaTitle: null,
        ctas: [],
      },
    ],
  },
];
