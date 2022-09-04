import request from '../utils/request'

export const getList = (data) =>
  request({
    url: '/getList',
    method: 'get',
    params: data
  })

  export const getDetail = (data) =>
  request({
    url: '/getDetail',
    method: 'get',
    params: data
  })
