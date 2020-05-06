<template>
  <div
    class="HomeView">

    <EmbedBase
      :section="{
        embedSrc: 'https://public.domo.com/embed/pages/aOWnr',
        filters: [
          {
            type: 'InputMultiselect',
            label: 'Country:',
            column: 'country_region',
            options: globalCountryRegions,
            defaultValue: null,
          },
        ],
      }"
    />
  </div>
</template>


<script>
import GLOBAL_COUNTRY_REGIONS from '@/data/global-country-regions';
import EmbedBase from '@/components/EmbedBase.vue';

export default {
  name: 'HomeView',

  components: {
    EmbedBase,
  },

  data() {
    return {
      globalCountryRegions: GLOBAL_COUNTRY_REGIONS,
    };
  },
};
</script>
