/** When your routing table is too long, you can split it into small modules**/

import permission from './modules/permission'
import test from './modules/test'

const asyncRouter = permission
  .concat(test)
  .concat([{ path: '*', redirect: '/404', hidden: true }])

export default asyncRouter
