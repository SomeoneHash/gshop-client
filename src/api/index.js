/* 
包含应用的所有接口的接口请求函数
  函数内部调用ajax函数发送请求
  函数返回的promise对象
*/
import ajax from './ajax'

/* 
首页三级分类
/api/product/getBaseCategoryList
*/

export function getCategoryList() {
  // return ajax.get('/api/product/getBaseCategoryList')
  return ajax('/api/product/getBaseCategoryList') // 发不带参数的get请求
  return ajax({
    url: '/api/product/getBaseCategoryList',
    // method: 'get'
  })
}



import ajax from './ajax'

export function getCategoryList() {
  // return ajax.get('product/getcategorylist')
  // return ajax('product/getcategorylist') // 发get请求不带参数
  return ajax({
    url:'product/getcategorylist',
    // methods: 'get'
  })
  
}