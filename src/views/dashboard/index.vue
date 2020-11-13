<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <span v-permission="['admin']">admin可以看见的字</span>
    <span v-permission="['user']">user可以看见的字</span>
    <el-button @click="showAsyncMenu(['admin'])">显示admin路由</el-button>
    <el-button @click="showAsyncMenu(['user'])">显示admin路由</el-button>
    <el-button @click="showAsyncMenu(['admin', 'user'])"
      >显示全部路由</el-button
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import permission from "@/directive/permisson/index";
import { resetRouter } from "@/router";

export default {
  name: "Dashboard",
  directives: {
    permission,
  },
  computed: {
    ...mapGetters(["name"]),
  },
  methods: {
    async showAsyncMenu(roles) {
      //*重制路由
      resetRouter();

      this.$message.success("显示异步路由");
      const accessRoutes = await this.$store.dispatch(
        "permission/generateRoutes",
        roles
      );
      this.$router.addRoutes(accessRoutes);
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
