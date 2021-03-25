<template>
  <div>
    <h3>
      拼音测试
    </h3>
    <div>
      输入你的拼音：<el-input v-model="input_value" style="width:200px" />
    </div>
    <div>原数据：{{ routers }}</div>
    <div>过滤数据：{{ result }}</div>
  </div>
</template>

<script>
import pinyinMatch from "pinyin-match";
export default {
  name: "Pinyin",
  data() {
    return {
      routers: ["生产计划", "生产报表", "数据字典", "你好啊"],
      input_value: ""
    };
  },
  computed: {
    result() {
      if (this.input_value === "") return this.routers;
      let res = this.routers.filter(v =>
        pinyinMatch.match(v, this.input_value)
      );
      return res;
    }
  }
};
</script>

<style></style>
