/*
路由器对象
*/
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routers"

// 缓存原本的push方法
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace

// 只当新的push方法
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  // console.log('push',onResolve, onReject) // 声明式跳转默认传了一个成功的回调
  // 如果指定了成功或失败的回调
  if (onResolve || onReject)
    // 直接调用原本的push方法
    // originalPush(location, onResolve, onReject) // this指向不是router而是undefined
    return originalPush.call(this, location, onResolve, onReject)
  
  // 没有指定成功或失败的回调，必须调用catch处理
  return originalPush.call(this, location).catch((err) => {
    // 如果是重复导航产生的错误，不在向外传递错误
    if (VueRouter.isNavigationFailure(err)) {
      // resolve err
      return err // 产生的是成功promise，成功的promise的value是err
    }
    // 如果是其它原因导航的错误，将错误向下传递
    // rethrow error
    return Promise.reject(err)
  })
}

VueRouter.prototype.replace = function (location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch((err) => {
    if (VueRouter.isNavigationFailure(err)) {
      return err // 产生的是成功promise，成功的promise的value是err
    }
    return Promise.reject(err)
  })
}

// 安装Vue插件
Vue.use(VueRouter)

export default new VueRouter({
  // 模式
  mode:'history', // 不带#
  routes
})


