import { asyncRoutes, constantRoutes } from '@/router'

/**
 * Use meta.role to determine if the current user has permission
 * ? 判断每个节点，是否在roles权限内，如果没有写roles直接显示，否则判断是否在权限内
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

//? 过滤异步路由
export function filterAsyncRoutes(routers, roles) {
  // console.log('过滤异步路由', routers, roles);
  const res = []

  routers.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [], //* 包含了异步路由之后的完整路由
  addRoutes: [] //*当前增加的异步路由
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    //? 把路由连接上去
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      // console.log('处理完权限路由', accessedRoutes);
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)//? 返回可以用的异步路由，然后注册一下
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

