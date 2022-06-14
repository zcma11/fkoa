module.exports = {
  get _headers() {
    return this.res.getHeaders()
  },
  get(filed) {
    return this.res.getHeader(filed)
  },
  set(filed, val) {
    this.res.setHeader(filed, val)
  },
  get type() {
    return this.get('Content-Type')
  },
  set type(val) {
    const map = {
      json: 'application/json',
      text: 'text/plain'
    }
    this.set('Content-Type', map[val])
  },
  get body() {
    return this._body
  },
  set body(val) {
    if (typeof val === 'string') {
      this.type = 'text'
      this._body = val
      return
    }
    // default json
    this.type = 'json'
    this._body = JSON.stringify(val)
  }
}
