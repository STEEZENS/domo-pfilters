<template>
  <div
    class="InterdependentSelectView">

    <EmbedBase
      :section="{
        embedSrc: 'https://public.domo.com/embed/pages/e9q4x',
        filters: [
          {
            type: 'InputMultiselect',
            label: 'Country:',
            column: 'country_region',
            options: globalProjectionCountryRegions,
          },
          {
            type: 'InputMultiselect',
            label: 'US State:',
            column: 'province_state',
            options: usStateProvinces,
            enabledBy: {
              column: 'country_region',
              value: 'United States',
            },
          },
        ],
      }"
    />
  </div>
</template>


<script>
import GLOBAL_PROJECTION_COUNTRY_REGIONS from '@/data/global-projection-country-regions';
import US_STATE_PROVINCES from '@/data/us-state-provinces';
import EmbedBase from '@/components/EmbedBase.vue';

export default {
  name: 'InterdependentSelectView',

  components: {
    EmbedBase,
  },

  data() {
    return {
      globalProjectionCountryRegions: GLOBAL_PROJECTION_COUNTRY_REGIONS,
      usStateProvinces: US_STATE_PROVINCES,
    };
  },
};
</script>
