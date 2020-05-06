<template>
  <div
    class="SingleSelectView">

    <EmbedBase
      :section="{
        embedSrc: 'https://public.domo.com/embed/pages/bmKvO',
        filters: [
        {
          type: 'InputSelect',
          label: 'Metric:',
          column: 'Domo_Metric_Name_ForFilter',
          options: projectionMetrics,
          defaultValue: projectionMetrics.find(pm => pm.value === 'Projected All Hospital Beds'),
        },
        ],
      }"
    />
  </div>
</template>


<script>
import PROJECTION_METRICS from '@/data/projection-metrics';
import EmbedBase from '@/components/EmbedBase.vue';

export default {
  name: 'SingleSelectView',

  components: {
    EmbedBase,
  },

  data() {
    return {
      projectionMetrics: PROJECTION_METRICS,
    };
  },
};
</script>
