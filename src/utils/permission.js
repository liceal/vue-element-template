import store from '@/store';

/**
 * 例子 ['admin'] return 是否包含此权限
 * @param {Array} value 
 * @returns {Boolean}
 * @example see @/views/permisson/directive.vue
 */
export default function checkPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    const roles = store.getters && store.getters.roles
    const permissionRoles = value

    const hasPermission = roles.some(role => {
      return permissionRoles.includes(role)
    })
    return hasPermission
  } else {
    console.log(`need roles! Like v-permisson=["admin","editor"]`)
    return false
  }
}