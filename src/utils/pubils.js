
/**
 * 节流
 * */
export function throttle ( delay) {
  var timer = null
  return function (fun) {
    const context = this
    const args = arguments
    if (!timer) {
      timer = setTimeout(function () {
        timer= null
      }, delay)
      fun.apply(context, args)
    }
  }
}

export function debounce (fun, wait) {
  let timer = null
  return function () {
    const argu = arguments
    // 事件触发，如果之前有等待的事件，则清空计时，重新进行事件等待执行
    if (timer) {
      clearTimeout(timer)
      return
    }
    fun.apply(this, argu)
    timer = setTimeout(function () {
    }, wait)
  }
}
