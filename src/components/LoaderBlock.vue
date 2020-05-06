<template>
  <div
    class="LoaderBlock"
    :style="computedStyle">
  </div>
</template>


<script>
export default {
  name: 'LoaderBlock',

  props: {
    width:  { type: String, default: '100%' },
    height: { type: String, default: '40px' },
  },

  computed: {
    computedStyle() {
      return {
        width: `${this.width}`,
        height: `${this.height}`,
      };
    },
  },
};
</script>


<style lang="scss" scoped>
@import '@/styles/_variables';

.LoaderBlock {
  position: relative;
  overflow: hidden;
  border-radius: $radius;
  background-color: rgba($black, 0.05);
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba($black, 0),
      rgba($black, 0.1),
      rgba($black, 0)
    );
    transform: translateX(-120%);
    animation: 1.75s loading ease-in-out infinite;
  }
}

@keyframes loading {
  100% { transform: translateX(120%); }
}
</style>
