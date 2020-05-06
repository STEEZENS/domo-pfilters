<template>
  <div
    id="App">

    <HeaderGlobal/>

    <router-view/>

  </div>
</template>


<script>
import HeaderGlobal from '@/components/HeaderGlobal.vue';

export default {
  name: 'App',

  components: {
    HeaderGlobal,
  },
};
</script>


<style src="@/styles/index.scss" lang="scss"></style>
<style src="@/assets/icons/font/index.css" lang="css"></style>

<style lang="scss" scoped>
@import '@/styles/_variables';

#App {
  padding-top: 100px;
  padding-bottom: 80px;
}
</style>
