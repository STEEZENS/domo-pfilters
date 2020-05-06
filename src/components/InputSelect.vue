<template>
  <div
    class="InputSelect"
    :class="{
      isDropped,
    }">

    <v-popover
      placement="bottom-start"
      :disabled="isDisabled"
      @show="handleShowDropdown"
      @hide="handleHideDropdown">
      <button
        class="InputSelect__field"
        :class="{ isDisabled }"
        ref="inputSelectTrigger"
        type="button">
        <span
          class="__label">
          {{ computedValue.label }}
        </span>
        <i
          class="__caret icon-caret-down">
        </i>
      </button>

      <template
        slot="popover">
        <div
          class="InputSelect__dropdown"
          :style="computedDropdownStyle"
          ref="dropdown">
          <button
            class="InputSelect__dropdown__option"
            :class="{ isSelected: isOptionSelected(option) }"
            v-for="option in options"
            :key="option.label"
            v-close-popover
            @click="handleInput(option)">
            <IconCheckmark
              class="__checkmark"
              :is-checked="isOptionSelected(option)"
              :size="20"
              color="rgba(0, 0, 0, 0.5)"
            />
            {{ option.label }}
          </button>
        </div>
      </template>
    </v-popover>
  </div>
</template>


<script>
import IconCheckmark from '@/components/IconCheckmark.vue';

export default {
  name: 'InputSelect',

  components: {
    IconCheckmark,
  },

  data() {
    return {
      isDropped: false,

      dropdownWidth: 0,
    };
  },

  props: {
    options: { type: Array,  required: true }, // { label, value }
    value:   { type: Object, default: null },

    isDisabled: { type: Boolean, default: false },
  },

  computed: {
    computedValue() {
      return this.value && this.value.value
        ? this.value
        : this.options[0];
    },

    computedDropdownStyle() {
      return {
        minWidth: `${this.dropdownWidth}px`,
        maxWidth: '90vw !important',
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

    isOptionSelected(option) {
      return this.computedValue.value === option.value;
    },

    handleShowDropdown() {
      this.dropdownWidth = this.$refs.inputSelectTrigger.offsetWidth;
      this.isDropped = true;
    },

    handleHideDropdown() {
      this.isDropped = false;
      setTimeout(() => {
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

$input-select-field-height: 44px;

.InputSelect {
  display: inline-block;
  min-width: 290px;
  // max-width: 100%;
  max-width: 290px;
}

.InputSelect__field {
  display: flex;
  position: relative;
  width: 100%;
  max-width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: $input-select-field-height;
  padding: 8px 16px;
  padding-right: 40px;
  font-weight: $font-weight-semi-bold;
  white-space: nowrap;
  text-align: left;
  border: $border;
  border-radius: $radius;
  background-color: $white;
  cursor: pointer;
  .__label {
    text-overflow: ellipsis;
    overflow: hidden;
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

.InputSelect__field.isDisabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.InputSelect.isDropped .InputSelect__field,
.InputSelect__field:focus,
.InputSelect__field:hover {
  border-color: $white;
  box-shadow: 0 2px 8px 0 rgba($black, 0.2);
}

.InputSelect__dropdown {
  min-width: 250px !important;
  max-height: 230px;
  padding-top: 8px;
  padding-bottom: 8px;
  overflow-x: hidden;
  overflow-y: auto;
}

.InputSelect__dropdown__option {
  display: block;
  position: relative;
  width: 100%;
  padding: 10px 16px;
  padding-left: $input-select-field-height;
  font-size: 14px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &:hover,
  &:focus {
    background-color: $light;
  }
  .__checkmark {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto 0 auto 14px;
  }
}
</style>
