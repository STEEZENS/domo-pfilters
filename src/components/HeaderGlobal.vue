<template>
  <header
    class="HeaderGlobal">
    <div
      class="container-md">
      <router-link
        class="__link"
        to="/">
        Multi-Select
      </router-link>

      <router-link
        class="__link"
        to="/single-select">
        Single Select
      </router-link>

      <router-link
        class="__link"
        to="/interdependent-select">
        Interdependent Select
      </router-link>
    </div>
  </header>
</template>


<script>
export default {
  name: 'HeaderGlobal',
};
</script>


<style lang="scss" scoped>
@import '@/styles/_variables';

.HeaderGlobal {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 24px;
  padding-bottom: 24px;
  white-space: nowrap;
  border-bottom: $border;
  background: $white;
  .__link {
    margin-right: 8px;
    padding: 10px 16px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: $radius;
    background-color: $white;
    &:hover {
      background-color: rgba($black, 0.05);
    }
    &.router-link-exact-active {
      color: $white;
      background-color: $red;
    }
  }
}
</style>
