import request from '../utils/request'

export const getList = (data) =>
  request({
    url: '/getList',
    method: 'get',
    params: data
  })
