<template>
  <div
    class="InputCheckbox"
    :checked="value"
    :disabled="disabled"
    tabindex="0"
    @keyup.enter.space="handleCheck"
    @click="handleCheck">

    <div class="InputCheckbox__box">
      <IconCheckmark
        class="InputCheckbox__box__checkmark"
        :is-checked="value"
        :size="18"
        color="#FFFFFF"
      />
    </div>

    <div
      class="InputCheckbox__label"
      v-text="label">
    </div>
  </div>
</template>


<script>
import IconCheckmark from '@/components/IconCheckmark.vue';

export default {
  name: 'InputCheckbox',

  components: {
    IconCheckmark,
  },

  props: {
    value:    { type: Boolean, default: false },
    label:    { type: String,  default: 'Label' },
    disabled: { type: Boolean, default: false },
  },

  methods: {
    handleCheck() {
      if (this.disabled) return;
      this.$emit('input', !this.value);
    },
  },
};
</script>


<style lang="scss" scoped>
@import '@/styles/_variables';

$box-size: 18px;

.InputCheckbox {
  display: inline-block;
  position: relative;
  text-align: left;
  white-space: nowrap;
  outline: none;
}

.InputCheckbox:not([disabled]) {
  cursor: pointer;
}

.InputCheckbox__box {
  display: inline-block;
  position: relative;
  width: $box-size;
  height: $box-size;
  vertical-align: text-top;
  border-width: 1px;
  border-style: solid;
  border-color: $border-color;
  border-radius: $radius;
  background-color: $white;
}

.InputCheckbox:focus .InputCheckbox__box {
  border-color: $light-blue;
}

.InputCheckbox__label {
  display: inline-block;
  margin-left: -$box-size;
  padding-left: $box-size + 8px;
  vertical-align: text-top;
  font-size: 14px;
  line-height: $box-size;
  white-space: normal;
}

.InputCheckbox__box__checkmark {
  display: block;
  position: absolute;
  top: -1px;
  left: -1px;
  width: $box-size;
  height: $box-size;
}

.InputCheckbox[checked] .InputCheckbox__box {
  background: $light-blue;
  border-color: $light-blue;
}
</style>
