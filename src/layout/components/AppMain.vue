<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
/*50 = navbar  */
  /* 34 = tagsView */
$appMainHeight:calc(100vh - 50px - 34px);
.app-main {
  min-height: $appMainHeight;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header+.app-main {
  height: appMainHeight;
  /* padding-top: 50px; */
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
