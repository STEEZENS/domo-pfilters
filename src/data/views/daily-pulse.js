import PROJECTIONS_DESCRIPTION_BLURB from '@/data/projections-description-blurb';
import US_STATE_PROVINCES from '@/data/us-state-provinces';
import US_REGIONS from '@/data/us-regions';

export default [
  {
    name: 'daily-pulse-overview',
    label: 'Overview',
    hash: '#overview',
    sections: [
      {
        title: 'What are the latest statistics on the Coronavirus pandemic?',
        description: null,
        embedSrc: 'https://public.domo.com/embed/pages/bDGMY',
        embedHeight: null,
        embedHeightMobile: null,
        class: null,
        filters: [],
        ctaTitle: null,
        ctas: [],
      },
    ],
  },
  {
    name: 'daily-pulse-maps',
    label: 'Maps',
    hash: '#maps',
    sections: [
      {
        title: 'Tracking the Coronavirus pandemic across the globe.',
        description: 'Drag the timeline slider or tap the play button to see how the effects of Covid-19 have spread to more than 185 countries.',
        embedSrc: 'https://public.domo.com/cards/aOOZr',
        embedHeight: 810,
        embedHeightMobile: 580,
        class: 'bg-light',
        filters: [],
        ctaTitle: 'The geographics page includes statistics from world, country, US states, and even US counties.',
        ctas: [
          {
            label: 'See more geographic stats',
            to: '/geographics',
          },
        ],
      },
    ],
  },
  {
    name: 'daily-pulse-testing',
    label: 'Testing',
    hash: '#testing',
    sections: [
      {
        title: 'How is Coronavirus testing going around the world?',
        description: 'The widespread availability of testing is viewed as critical to tracking and controlling the spread of the COVID-19 virus. As health officials rush to develop and deploy tests, you can observe the progress that different states and countries are making in this crucial area.',
        embedSrc: 'https://public.domo.com/embed/pages/e7o4j',
        embedHeight: null,
        embedHeightMobile: null,
        class: null,
        filters: [],
        ctaTitle: 'The Testing and Treatment page includes a deeper analysis of how the worldwide effort of testing is going. See how testing impacts hospitalizations and other treatments.',
        ctas: [
          {
            label: 'See all testing & treatment stats',
            to: '/testing-and-treatment',
          },
        ],
      },
    ],
  },
  {
    name: 'daily-pulse-projections',
    label: 'Projections',
    hash: '#projections',
    sections: [
      {
        title: 'When will the effects of the Coronavirus pandemic peak?',
        description: PROJECTIONS_DESCRIPTION_BLURB,
        embedSrc: 'https://public.domo.com/embed/pages/dBxPQ',
        embedHeight: null,
        embedHeightMobile: null,
        class: 'bg-light',
        filters: [
          {
            type: 'InputMultiselect',
            label: 'US State:',
            column: 'province_state',
            options: US_STATE_PROVINCES,
          },
          {
            type: 'InputMultiselect',
            label: 'US Region:',
            column: 'US_Region_ForFilter',
            options: US_REGIONS,
          },
        ],
        ctaTitle: 'Domo has prepared predictive analysis and projections for several aspects of bed and hospital utilization, personal protective equipment (PPE), ventilators, and death rate. Our Projections page dives deeper into each of these topics.',
        ctas: [
          {
            label: 'See more projections',
            to: '/projections',
          },
        ],
      },
    ],
  },
];
