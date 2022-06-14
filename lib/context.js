module.exports = {
  // request
  get url() {
    return this.request.url
  },
  get query() {
    return this.request.query
  },
  get method() {
    return this.request.method
  },
  // response
  get body() {
    return this.response.body
  },
  set body(val) {
    this.response.body = val
  },
  headers() {
    return this.response._headers()
  },
  get type() {
    return this.response.type
  },
  set type(val) {
    this.response.type = val
  }
}
