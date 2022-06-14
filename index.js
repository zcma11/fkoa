const http = require('http')
const context = require('./lib/context')
const request = require('./lib/request')
const response = require('./lib/response')

class Koa {
  use(callback) {
    this.callback = callback
  }

  listen(...args) {
    const server = http.createServer(async (req, res) => {
      const ctx = this.createContext(req, res)
      await this.callback(ctx)
      res.end(ctx.body)
    })

    server.listen(...args)
  }

  createContext(req, res) {
    const ctx = Object.create(context)
    ctx.request = Object.create(request)
    ctx.response = Object.create(response)
    ctx.req = ctx.request.req = req
    ctx.res = ctx.response.res = res

    return ctx
  }
}

module.exports = Koa
