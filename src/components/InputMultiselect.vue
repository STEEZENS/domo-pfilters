<template>
  <div
    class="InputMultiselect"
    :class="{
      isDropped,
    }">

    <v-popover
      placement="bottom-start"
      :disabled="isDisabled"
      @show="handleShowDropdown"
      @hide="handleHideDropdown">
      <button
        class="InputMultiselect__field"
        :class="{ isDisabled }"
        ref="inputMultiselectTrigger"
        type="button">
        <span
          class="__label">
          {{ label }}
        </span>
        <span
          class="__chips">
          <ChipBase
            v-if="!value || !value.length"
            class="__chip"
            label="All"
            key="input-multiselect-all-chip"
          />
          <ChipBase
            class="__chip"
            v-for="selectedOption in value"
            :label="selectedOption.label"
            is-closable
            :key="`input-multiselect-${selectedOption.value}-chip`"
            @click.stop="handleInput(selectedOption)"
          />
        </span>
        <i
          class="__caret icon-caret-down">
        </i>
      </button>

      <template
        slot="popover">
        <div
          class="InputMultiselect__dropdown"
          :class="{ hasSearch }"
          :style="computedDropdownStyle"
          ref="dropdown">
          <div
            v-if="hasSearch"
            class="InputMultiselect__dropdown__search"
            key="input-multiselect-search">
            <InputSearch
              class="InputMultiselect__dropdown__search__input"
              ref="searchInput"
              v-model="searchValue"
              :search-items="computedOptions"
              @search="handleSearch"
            />
            <span
              v-show="!filteredOptions.length"
              class="InputMultiselect__dropdown__search__no-results">
              No results
            </span>
          </div>
          <InputCheckbox
            class="InputMultiselect__dropdown__checkbox"
            v-for="option in filteredOptions"
            :label="option.label"
            :value="isOptionSelected(option)"
            :key="option.label"
            @input="handleInput(option)"
          />
        </div>
      </template>
    </v-popover>
  </div>
</template>


<script>
import ChipBase from '@/components/ChipBase.vue';
import InputSearch from '@/components/InputSearch.vue';
import InputCheckbox from '@/components/InputCheckbox.vue';

export default {
  name: 'InputMultiselect',

  components: {
    ChipBase,
    InputSearch,
    InputCheckbox,
  },

  data() {
    return {
      isDropped: false,

      dropdownWidth: 0,

      searchValue: '',

      searchFilteredOptions: this.getOptionsWithAll(),
    };
  },

  props: {
    label:   { type: String,  default: 'Filter:' },
    options: { type: Array,   required: true }, // { label, value }
    value:   { type: Array,   default: null },

    isDisabled: { type: Boolean, default: false },

    hasAllOption: { type: Boolean, default: true },
    hasSearch:    { type: Boolean, default: true },
  },

  computed: {
    computedOptions() {
      return this.getOptionsWithAll();
    },

    filteredOptions() {
      if (!this.hasSearch) return this.computedOptions;
      return this.searchFilteredOptions;
    },

    computedDropdownStyle() {
      return {
        minWidth: `${this.dropdownWidth}px`,
      };
    },
  },

  watch: {
    isDisabled(isDisabled) {
      if (isDisabled) {
        this.$emit('disabled');
      }
    },
  },

  methods: {
    handleInput(option) {
      this.$emit('input', option);
    },

    handleSearch(filteredResults) {
      this.searchFilteredOptions = filteredResults;
    },

    getOptionsWithAll() {
      if (!this.hasAllOption) return this.options;
      return [{ label: 'All', value: null }, ...this.options];
    },

    sortOptions(options) {
      // @NOTE if you want sorting, just wrap in this.filteredOptions
      const all = [...options].filter((o) => !o.value);
      const selected = [...options].filter((o) => o.value && this.isOptionSelected(o));
      const notSelected = [...options].filter((o) => o.value && !this.isOptionSelected(o));
      return [...all, ...selected, ...notSelected];
    },

    isOptionSelected(option) {
      const noValue = !this.value || !this.value.length;

      if (noValue) {
        if (!option.value) return true;
        return false;
      }

      return this.value.some((selectedOption) => selectedOption.value === option.value);
    },

    handleShowDropdown() {
      this.dropdownWidth = this.$refs.inputMultiselectTrigger.offsetWidth;
      this.isDropped = true;
      if (this.hasSearch) {
        setTimeout(() => {
          this.$refs.searchInput.$el.querySelector('input').focus();
        }, 200);
      }
    },

    handleHideDropdown() {
      this.isDropped = false;
      setTimeout(() => {
        this.searchValue = '';
        if (this.$refs.dropdown) {
          this.$refs.dropdown.scrollTop = 0;
        }
      }, 500);
    },
  },
};
</script>


<style lang="scss" scoped>
@import '@/styles/_variables';

$input-multiselect-field-height: 44px;

.InputMultiselect {
  display: inline-block;
  min-width: 290px;
  max-width: 100%;
}

.InputMultiselect__field {
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  min-height: $input-multiselect-field-height;
  padding: 4px 40px 8px 16px;
  font-weight: $font-weight-semi-bold;
  text-align: left;
  border: $border;
  border-radius: $radius;
  background-color: $white;
  overflow-x: auto;
  cursor: pointer;
  .__label {
    margin-top: 4px;
    padding-right: 8px;
    white-space: nowrap;
  }
  .__chips {
  }
  .__chip {
    margin-top: 4px;
  }
  .__chip + .__chip {
    margin-right: 4px;
  }
  .__caret {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 32px;
    height: 100%;
    color: rgba($black, 0.5);
    font-size: 18px;
    line-height: 40px;
    text-align: center;
    background: linear-gradient(to right, rgba($white, 0), rgba($white, 1));
  }
}

.InputMultiselect__field.isDisabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.InputMultiselect.isDropped .InputMultiselect__field,
.InputMultiselect__field:not(.isDisabled):focus,
.InputMultiselect__field:not(.isDisabled):hover {
  border-color: $white;
  box-shadow: 0 2px 8px 0 rgba($black, 0.2);
}

.InputMultiselect__dropdown {
  min-width: 250px;
  min-height: 100px;
  max-height: 240px;
  padding-top: 8px;
  padding-bottom: 8px;
  overflow-x: hidden;
  overflow-y: scroll;
}

.InputMultiselect__dropdown.hasSearch {
  padding-top: 48px;
}

.InputMultiselect__dropdown__search {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 8px;
  border-radius: $radius;
  background: $white;
}

.InputMultiselect__dropdown__search__no-results {
  position: absolute;
  bottom: -32px;
  left: 0;
  width: 100%;
  padding-left: 20px;
  color: rgba($black, 0.5);
  font-size: 14px;
}

.InputMultiselect__dropdown__checkbox {
  display: block;
  width: 100%;
  padding: 8px 16px;
  &:hover,
  &:focus {
    background-color: $light;
  }
}
</style>
