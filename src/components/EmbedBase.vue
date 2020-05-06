<template>
  <section
    class="EmbedBase">
    <div
      class="container-md">

      <!-- Filters -->
      <component
        class="EmbedBase__filter"
        v-for="filter in section.filters"
        :is="filter.type"
        :label="filter.label"
        :options="filter.options"
        :key="filter.column"
        :is-disabled="isFilterDisabled(filter)"
        :value="$data.filters[filter.column]"
        @disabled="handleInput(filter.type, filter.column, null)"
        @input="handleInput(filter.type, filter.column, $event)">
      </component>

      <div
        class="font-12 pt-2">
        {{ computedEmbedSrc }}
      </div>

      <div
        class="EmbedBase__embed"
        :class="{ isEmbedLoading }">
        <!-- Loader -->
        <div
          v-if="section.embedSrc && isEmbedLoading"
          class="EmbedBase__loader"
          key="embed-section-loading-placeholder">
          <LoaderBlock
            class="EmbedBase__loader__block"
            v-for="n in 3"
            height="150px"
            :key="'loader-block-' + n"
          />
        </div>

        <!-- Embed -->
        <iframe
          v-if="section.embedSrc"
          class="EmbedBase__iframe"
          ref="iframe"
          :src="computedEmbedSrc"
          :height="computedEmbedHeight"
          marginheight="0"
          marginwidth="0"
          frameborder="0"
          key="embed-section-iframe"
          @load="handleEmbedLoad">
        </iframe>
      </div>

    </div>
  </section>
</template>


<script>
import InputMultiselect from '@/components/InputMultiselect.vue';
import InputSelect from '@/components/InputSelect.vue';
import LoaderBlock from '@/components/LoaderBlock.vue';

export default {
  name: 'EmbedBase',

  components: {
    InputMultiselect,
    InputSelect,
    LoaderBlock,
  },

  data() {
    const filters = {};

    this.section.filters.forEach((f) => {
      filters[f.column] = f.defaultValue || null;
    });

    return {
      filters,

      computedEmbedSrc: this.section.embedSrc,

      embedPostMessageHeight: null,

      isEmbedLoading: true,
    };
  },

  props: {
    section: { type: Object, required: true },
  },

  computed: {
    isEmbedHeightAuto() {
      return !this.section.embedHeight;
    },

    computedEmbedHeight() {
      if (this.isEmbedHeightAuto) return this.embedPostMessageHeight;
      return this.getManualEmbedHeight(this.section);
    },
  },

  created() {
    this.updateEmbedSrc();
  },

  mounted() {
    if (!this.isEmbedHeightAuto) return;
    window.addEventListener('message', this.handleEmbedPostMessage, false);
  },

  beforeDestroy() {
    if (!this.isEmbedHeightAuto) return;
    window.removeEventListener('message', this.handleEmbedPostMessage, false);
  },

  methods: {
    handleEmbedPostMessage(e) {
      const hasRef = this.$refs && this.$refs.iframe && this.$refs.iframe.contentWindow;
      const hasHeight = e.data && e.data.params && e.data.params.height;
      const confirmedTarget = hasRef && hasHeight && this.$refs.iframe.contentWindow === e.source;

      if (confirmedTarget) {
        this.embedPostMessageHeight = (e.data.params.height + 20);
      }
    },

    handleEmbedLoad() {
      this.isEmbedLoading = false;
    },

    handleInput(filterType, column, value) {
      this.filters[column] = (filterType === 'InputMultiselect')
        ? this.getInputMultiSelectValue(column, value)
        : value;

      return this.updateEmbedSrc();
    },

    getInputMultiSelectValue(column, value) {
      if (!value || !value.value) return null;

      const iterableFilters = this.filters[column] || [];

      let newValue = [...iterableFilters].filter((f) => (f.value !== value.value));

      if (iterableFilters.length === newValue.length) {
        newValue = [...iterableFilters, value];
      }

      return newValue;
    },

    updateEmbedSrc() {
      const pFilters = Object.entries(this.filters)
        .reduce((filters, f) => filters.concat(this.generatePFilter(f[0], 'IN', f[1]) || []), []);

      const stringifiedPFilters = this.stringifyPFilters(pFilters);

      this.computedEmbedSrc = `${this.section.embedSrc}?transparentBackground=true${stringifiedPFilters}`;
    },

    generatePFilter(column = null, operand = 'IN', value = null) {
      const valueIsArray = Array.isArray(value);

      if (valueIsArray && (!value[0] || !value[0].value)) return null;
      if (!valueIsArray && (!value || !value.value)) return null;

      return {
        column,
        operand,
        values: valueIsArray ? value.map((v) => v.value) : [value.value],
      };
    },

    stringifyPFilters(pFilters = []) {
      if (!pFilters || !pFilters.length) return '';
      return `&pfilters=${JSON.stringify(pFilters)}`;
    },

    getManualEmbedHeight(section) {
      return (section.embedHeightMobile && this.$window.width < 415)
        ? section.embedHeightMobile
        : section.embedHeight;
    },

    isFilterDisabled(filter) {
      if (!filter.enabledBy) return false;

      const enablingColumn = this.filters[filter.enabledBy.column];

      if (!enablingColumn) return false;

      return enablingColumn.some((v) => v.value !== filter.enabledBy.value);
    },
  },
};
</script>


<style lang="scss" scoped>
@import '@/styles/_variables';

.EmbedBase__filter {
  margin-top: 8px;
  margin-right: 12px;
}

.EmbedBase__embed {
  position: relative;
  min-height: 300px;
  &.isEmbedLoading {
    min-height: 530px;
  }
}

.EmbedBase__loader {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% + 16px) !important;
  margin-left: -8px;
  padding-top: 16px;
  padding-bottom: 32px;
  flex-wrap: wrap;
  justify-content: space-between;
}

.EmbedBase__loader__block {
  flex: 1 1 40%;
  margin: 16px 8px 0 16px;
  &:last-child {
    flex: 1 1 100%;
    height: 300px !important;
  }
}

.EmbedBase__iframe {
  width: calc(100% + 24px) !important;
  margin-top: 8px;
  margin-left: -12px;
}

.EmbedBase__embed.isEmbedLoading .EmbedBase__iframe {
  opacity: 0;
}
</style>
