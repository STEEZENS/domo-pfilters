<template>
  <span
    class="ChipBase"
    :class="{
      isClosable,
    }"
    @click="$emit('click', $event)">
    {{ label }}
    <i
      v-if="isClosable"
      class="ChipBase__x icon-x-circle"
      key="chip-base-x">
    </i>
  </span>
</template>


<script>
export default {
  name: 'ChipBase',

  props: {
    label: { type: String, default: 'Chip' },
    isClosable: { type: Boolean, default: false },
  },
};
</script>


<style lang="scss" scoped>
@import '@/styles/_variables';

$chip-base-height: 24px;

.ChipBase {
  display: inline-block;
  position: relative;
  padding: 0 12px;
  margin-right: 4px;
  font-size: 12px;
  font-weight: $font-weight-normal;
  line-height: $chip-base-height;
  white-space: nowrap;
  vertical-align: middle;
  border-radius: $chip-base-height / 2;
  background-color: rgba($light-blue, .4);
  &.isClosable {
    padding-right: 28px;
  }
  &:hover {
    background-color: rgba($light-blue, .6);
    .ChipBase__x {
      color: inherit !important;
    }
  }
}

.ChipBase__x {
  position: absolute;
  top: 0;
  right: 2px;
  bottom: 0;
  width: $chip-base-height;
  height: $chip-base-height;
  margin: auto 0;
  font-size: 14px;
  line-height: $chip-base-height;
  color: rgba($black, 0.5);
  text-align: center;
}
</style>
