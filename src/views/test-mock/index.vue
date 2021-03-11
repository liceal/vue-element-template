<template>
  <div>
    <pre>
      测试接口在 mock/test.js 文件内 , mock/index.js 注册了test.js文件。
      在vue.config.js中关闭mock服务
    </pre>

    <el-button @click="send" type="primary">发送测试[test/get]接口</el-button>
    <div ref="result"></div>
  </div>
</template>

<script>
import {getTest} from '@/api/test'
import {getList} from '@/api/table'
export default {
  name:"Test",
  methods:{
    send(){
      getTest().then(res=>{
        this.$refs.result.innerHTML = JSON.stringify(res)
      })
      // getList().then(res=>{
      //   this.$refs.result.innerHTML = JSON.stringify(res)
      // })
    }
  }
}
</script>

<style>

</style>