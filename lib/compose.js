function compose(middlewares) {
  return ctx => {
    return dispatch(0)
    function dispatch(i) {
      console.log(i)
      const fn = middlewares[i]
      if (!fn) {
        return Promise.resolve()
      }

      return Promise.resolve(fn(ctx, dispatch.bind(null, i + 1)))
    }
  }
}

module.exports = compose