'use strict'

const test = require('tap').test
const got = require('got')

test('it returns an empty 404', (t) => {
  t.plan(3)
  const fastify = require('fastify')()
  fastify.register(require('./'))

  fastify.listen(0, (err) => {
    fastify.server.unref()
    if (err) t.threw(err)
    const port = fastify.server.address().port
    got(`http://127.0.0.1:${port}/favicon.ico`)
      .then(() => {
        t.fail('should receive an error')
      })
      .catch(err => {
        t.type(err, Error)
        t.is(err.response.statusCode, 404)
        t.is(+err.response.headers['content-length'], 0)
      })
  })
})
