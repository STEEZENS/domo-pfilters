import GLOBAL_COUNTRY_REGIONS from '@/data/global-country-regions';
import US_STATE_PROVINCES from '@/data/us-state-provinces';
import APAC_COUNTRY_REGIONS from '@/data/apac-country-regions';

export default [
  {
    name: 'geographics-global-tracker',
    label: 'Global Tracker',
    hash: '#global-tracker',
    sections: [
      {
        title: 'What impact is Coronavirus having around the world?',
        description: 'The COVID-19 pandemic is impacting countries around the world since the first outbreak in China last December. At a high-level, you can see the overall toll the virus is having around the world in terms of new confirmed cases and deaths.',
        embedSrc: 'https://public.domo.com/embed/pages/aOWnr',
        embedHeight: null,
        embedHeightMobile: null,
        class: null,
        filters: [
          {
            type: 'InputMultiselect',
            label: 'Country:',
            column: 'country_region',
            options: GLOBAL_COUNTRY_REGIONS,
            defaultValue: null,
          },
        ],
        ctaTitle: null,
        ctas: [],
      },
      {
        title: 'What are the global 14-day trends for Coronavirus?',
        description: 'Rather than focusing on just the daily results for key COVID-19 metrics, you can examine what has occurred over the past two weeks. A 14-day view will give you a better perspective on the latest worldwide COVID-19 results.',
        embedSrc: 'https://public.domo.com/embed/pages/eV4xX',
        embedHeight: null,
        embedHeightMobile: null,
        class: 'bg-light',
        filters: [
          {
            type: 'InputMultiselect',
            label: 'Country:',
            column: 'country_region',
            options: GLOBAL_COUNTRY_REGIONS,
            defaultValue: null,
          },
        ],
        ctaTitle: null,
        ctas: [],
      },
    ],
  },
  {
    name: 'geographics-compare-countries',
    label: 'Compare Countries',
    hash: '#compare-countries',
    sections: [
      {
        title: 'How are individual countries handling the spread of Coronavirus?',
        description: 'As the COVID-19 pandemic spreads throughout the world, countries are at different stages in their exposure to the virus. They are also employing diverse strategies to limit or contain COVID-19’s impact. You can compare how your country is doing compared to other nations.',
        embedSrc: 'https://public.domo.com/embed/pages/eZkB5',
        embedHeight: null,
        embedHeightMobile: null,
        class: null,
        filters: [
          {
            type: 'InputMultiselect',
            label: 'Country:',
            column: 'country_region',
            options: GLOBAL_COUNTRY_REGIONS,
            defaultValue: [...GLOBAL_COUNTRY_REGIONS].filter(c => ['China', 'Iran', 'Italy', 'Korea', 'Spain', 'United Kingdom', 'United States'].includes(c.value)),
          },
        ],
        ctaTitle: null,
        ctas: [],
      },
    ],
  },
  {
    name: 'geographics-us-states',
    label: 'US States',
    hash: '#us-states',
    sections: [
      {
        title: 'What impact is Coronavirus having on the United States?',
        description: 'After identifying the first US COVID-19 case on January 19th in Washington State, the pandemic has spread throughout the United States. At a high-level, you can see the overall toll the virus is having on the nation as well as its unique effect on individual states.',
        embedSrc: 'https://public.domo.com/embed/pages/e3kDR',
        embedHeight: null,
        embedHeightMobile: null,
        class: 'bg-light',
        filters: [],
        ctaTitle: null,
        ctas: [],
      },
      {
        title: 'What are the US 14-day trends for Coronavirus?',
        description: 'Rather than focusing on just the daily results for key COVID-19 metrics, you may want to consider what has occurred over the past two weeks. A 14-day view will give you a better perspective on the country’s latest COVID-19 results.',
        embedSrc: 'https://public.domo.com/embed/pages/e5mG8',
        embedHeight: null,
        embedHeightMobile: null,
        class: null,
        filters: [
          {
            type: 'InputMultiselect',
            label: 'State:',
            column: 'province_state',
            options: US_STATE_PROVINCES,
            defaultValue: null,
          },
        ],
        ctaTitle: null,
        ctas: [],
      },
    ],
  },
  {
    name: 'geographics-compare-states',
    label: 'Compare States',
    hash: '#compare-states',
    sections: [
      {
        title: 'How are individual states handling the spread of Coronavirus?',
        description: 'As the COVID-19 pandemic spreads across the United States, individual states are at different stages in their exposure to the virus. They are also employing diverse strategies to limit or contain COVID-19’s impact. You can compare how your state is doing compared to other states.',
        embedSrc: 'https://public.domo.com/embed/pages/b6nJR',
        embedHeight: null,
        embedHeightMobile: null,
        class: 'bg-light',
        filters: [
          {
            type: 'InputMultiselect',
            label: 'State:',
            column: 'province_state',
            options: US_STATE_PROVINCES,
            defaultValue: [...US_STATE_PROVINCES].filter(s => ['California', 'Louisiana', 'Michigan', 'New Jersey', 'New York', 'Washington'].includes(s.value)),
          },
        ],
        ctaTitle: null,
        ctas: [],
      },
    ],
  },
  {
    name: 'geographics-us-counties',
    label: 'US Counties',
    hash: '#us-counties',
    sections: [
      {
        title: 'How is Coronavirus impacting individual US counties?',
        description: 'As the COVID-19 pandemic spreads throughout the country, individual counties will face unique challenges as they seek to limit or contain the virus. You can explore these charts and maps to understand how your local county or those of friends and family are being impacted by the COVID-19 virus.',
        embedSrc: 'https://public.domo.com/embed/pages/b8pL3',
        embedHeight: null,
        embedHeightMobile: null,
        class: null,
        filters: [
          {
            type: 'InputMultiselect',
            label: 'State:',
            column: 'province_state',
            options: US_STATE_PROVINCES,
            defaultValue: null,
          },
        ],
        ctaTitle: null,
        ctas: [],
      },
    ],
  },
  {
    name: 'geographics-apac',
    label: 'APAC',
    hash: '#apac',
    sections: [
      {
        title: 'What impact is Coronavirus having in Asia-Pacific?',
        description: 'The COVID-19 pandemic is impacting countries around the world since the first outbreak in China last December. At a high-level, you can see the overall toll the virus is having around the Asia-Pacific region in terms of new confirmed cases, deaths, recoveries and current infection.',
        embedSrc: 'https://public.domo.com/embed/pages/dRR4R',
        embedHeight: null,
        embedHeightMobile: null,
        class: 'bg-light',
        filters: [
          {
            type: 'InputMultiselect',
            label: 'Country:',
            column: 'country_region',
            options: APAC_COUNTRY_REGIONS,
            defaultValue: null,
          },
        ],
        ctaTitle: null,
        ctas: [],
      },
      {
        title: 'How are individual Asia-Pacific countries handling the spread of Coronavirus?',
        description: 'As the COVID-19 pandemic spreads throughout the world, countries are at different stages in their exposure to the virus. They are also employing diverse strategies to limit or contain COVID-19’s impact. You can compare how your country is doing compared to other nations.',
        embedSrc: 'https://public.domo.com/embed/pages/eVY81',
        embedHeight: null,
        embedHeightMobile: null,
        class: 'bg-light',
        filters: [
          {
            type: 'InputMultiselect',
            label: 'Country:',
            column: 'country_region',
            options: APAC_COUNTRY_REGIONS,
            defaultValue: [...APAC_COUNTRY_REGIONS].filter(acr => ['Australia', 'China', 'Indonesia', 'Japan', 'New Zealand', 'Singapore'].includes(acr.value)),
          },
        ],
        ctaTitle: null,
        ctas: [],
      },
    ],
  },
];
