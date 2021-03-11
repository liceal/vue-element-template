<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div>权限：{{roles}}</div>

    <div v-permission="['admin']">v-permission方式 admin权限，修改权限将删除这个节点，不会再显示</div>
    <div v-if="checkPermission(['user'])">v-if方式 动态user权限</div>
    
    <el-button @click="showAsyncMenu(['admin'])">显示admin路由</el-button>
    <el-button @click="showAsyncMenu(['user'])">显示user路由</el-button>
    <el-button @click="showAsyncMenu(['admin', 'user','edit'])">显示全部路由</el-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import permission from "@/directive/permisson/index";
import checkPermission from '@/utils/permission'
import { resetRouter } from "@/router";

export default {
  name: "Dashboard",
  directives: {
    permission,
  },
  computed: {
    ...mapGetters(["name",'roles']),
  },
  methods: {
    checkPermission,
    async showAsyncMenu(roles) {
      //*重制路由
      resetRouter();
      this.$notify.success({
          title: '当前权限',
          message: roles,
          duration: 3000
        });
      
      this.$store.commit('user/SET_ROLES',roles); //? 修改用户权限
      const accessRoutes = await this.$store.dispatch( //? 修改权限菜单
        "permission/generateRoutes",
        roles
      )

      this.$store.commit('user/SET_NAME',roles.join(','))

      this.$router.addRoutes(accessRoutes);

      // console.log(this.$store.getters.roles);
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
