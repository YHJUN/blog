const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')


const index = require('./src/routes/index')
const users = require('./src/routes/users')
const errorViewRouter = require('./src/routes/view/error')
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/src/public'))

app.use(views(__dirname + '/src/views', {
  extension: 'ejs'
}))



app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

app.use(errorViewRouter.routes(), errorViewRouter.allowedMethods())
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
