import Mock from 'mockjs'

const baseUrl = '/dev-api'
Mock.mock(baseUrl + '/getList', 'get', function () {
  const data = require('./data/list.json')
  return {
    data,
    msg: 'ok',
    code: 200
  }
})
