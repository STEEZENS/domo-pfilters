<template>
  <svg
    class="IconCheckmark"
    :class="{ isChecked }"
    :style="computedStyle"
    viewBox="0 0 16 16"
    key="BC-checkmark">
    <path
      class="IconCheckmark__checkmark"
      :style="computedCheckmarkStyle"
      d="M2.8 8.5 6.5 12 13.2 3.5"
    />
  </svg>
</template>


<script>
export default {
  name: 'IconCheckmark',

  props: {
    isChecked: { type: Boolean, default: false },
    size:      { type: Number,  default: 18 },
    color:     { type: String,  default: '#FFFFFF' },
  },

  computed: {
    computedStyle() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
      };
    },

    computedCheckmarkStyle() {
      return {
        stroke: `${this.color} !important`,
        strokeDasharray: `${this.size}px`,
        strokeDashoffset: `${this.size}px`,
      };
    },
  },
};
</script>


<style lang="scss" scoped>
@import '@/styles/_variables';

$icon-checkmark-default-size: 18px;
$icon-checkmark-default-color: #FFFFFF;

.IconCheckmark {
  display: inline-block;
  width: $icon-checkmark-default-size;
  height: $icon-checkmark-default-size;
}

.IconCheckmark__checkmark {
  fill: none;
  stroke: $icon-checkmark-default-color;
  stroke-width: 1.75;
  stroke-dasharray: $icon-checkmark-default-size;
  stroke-dashoffset: $icon-checkmark-default-size;
  transition: all .3s ease 0s;
}

.IconCheckmark.isChecked .IconCheckmark__checkmark {
  stroke-dashoffset: 0 !important;
}
</style>
