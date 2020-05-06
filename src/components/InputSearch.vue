<template>
  <InputText
    :value="value"
    icon="search"
    placeholder="Search..."
    show-clear-text
    no-border
    background-color="rgba(0, 0, 0, 0.05)"
    @input="handleInput"
  />
</template>


<script>
import InputText from '@/components/InputText.vue';

export default {
  name: 'InputSearch',

  components: {
    InputText,
  },

  props: {
    value:       { type: String, default: null },
    searchItems: { type: Array,  default: () => [] },
  },

  computed: {
    filteredSearchItems() {
      if (!this.value) return this.searchItems;
      return this.searchItems
        .filter((i) => i.label.toLowerCase().includes(this.value.toLowerCase()));
    },
  },

  watch: {
    value() {
      this.$emit('search', this.filteredSearchItems);
    },
  },

  methods: {
    handleInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>
