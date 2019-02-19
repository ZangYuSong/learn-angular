const Koa = require('koa')
const app = new Koa()
const route = require('koa-route')
const cors = require('koa2-cors')
let isLogin = false
app.use(
  route.get('/isLogin', (ctx, next) => {
    ctx.response.body = JSON.stringify({
      data: isLogin,
      status: 1,
      message: isLogin ? '已登陆' : '未登录'
    })
    next()
  })
)
app.use(
  route.get('/login', (ctx, next) => {
    if ('admin' === ctx.query.username && '123456' === ctx.query.password) {
      isLogin = true
      ctx.response.body = JSON.stringify({
        data: isLogin,
        status: 1,
        message: '登陆成功'
      })
    } else {
      isLogin = false
      ctx.response.body = JSON.stringify({
        data: isLogin,
        status: 0,
        message: '用户名或者密码错误'
      })
    }
    next()
  })
)
app.use(
  route.get('/logout', (ctx, next) => {
    isLogin = false
    ctx.response.body = JSON.stringify({
      data: true,
      status: 1,
      message: '注销成功'
    })
    next()
  })
)
app.use(cors())
app.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})
