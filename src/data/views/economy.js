import US_STATE_PROVINCES from '@/data/us-state-provinces';

export default [
  {
    name: 'economy-unemployment',
    label: 'Unemployment',
    hash: '#unemployment',
    sections: [
      {
        title: 'How is the Coronavirus pandemic impacting the US economy?',
        description: 'US states and major cities have introduced various travel restrictions and social distancing measures to prevent COVID-19 cases from surging throughout the country. These lockdown actions are having a heavy impact on service-related industries, small businesses, and the overall economy. In the following charts, you can observe how unemployment claims are impacting the overall country and individual states.',
        embedSrc: 'https://public.domo.com/embed/pages/bkGpX',
        embedHeight: null,
        embedHeightMobile: null,
        class: null,
        filters: [
          {
            type: 'InputMultiselect',
            label: 'US State:',
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
