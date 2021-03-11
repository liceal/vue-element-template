const Mock = require('mockjs')

module.exports = [
  {
    url: '/test',
    type: "get",
    response: config => {
      console.log(config);
      return {
        code: 20000,
        data: {
          msg: "测试接口"
        }
      }
    }
  }
]