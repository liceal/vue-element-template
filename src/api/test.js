import request from '@/utils/request'

const URL = {
  test: "/test"
}

export function getTest(params) {
  return request({
    url: URL.test,
    method: 'get',
    params
  })
}
