const qs = require('querystring')
const parse = require('parseurl')
module.exports = {
  _queryCache: {},
  get url() {
    return this.req.url
  },
  get querystring() {
    return parse(this.req).query || ''
  },
  get query() {
    const str = this.querystring
    return this._queryCache[str] || (this._queryCache[str] = qs.parse(str))
  },
  get method() {
    return this.req.method.toLowerCase()
  }
}
