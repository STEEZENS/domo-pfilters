import US_STATE_PROVINCES from '@/data/us-state-provinces';

export default [
  {
    name: 'impact-social-distancing',
    label: 'Social Distancing',
    hash: '#social-distancing',
    sections: [
      {
        title: 'How are people reacting to social distancing guidelines?',
        description: `
          State and city legislators have introduced "stay at home" orders or guidelines to help stop the spread of COVID-19 cases. Below you will see the impact these guidelines have on movement of people down to the county level.
          <br/>
          <div class="italic font-14 pt-2">
          This data is based on millions of anonymized samples of location data gathered from people's cellphones, provided by
          <a class="link color-red" href="https://www.safegraph.com/?utm_source=domo&utm_medium=partner&utm_campaign=&utm_content=covid">SafeGraph</a>.
          Census block groups that have too few samples are excluded. All data is averaged over the past 7 days.
          </div>
        `,
        embedSrc: 'https://public.domo.com/embed/pages/dGD8K',
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
