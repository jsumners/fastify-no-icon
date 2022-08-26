'use strict'

const test = require('tap').test

test('it returns an empty 404', async (t) => {
  t.plan(2)
  const fastify = require('fastify')()
  fastify.register(require('.'))

  await fastify.listen({ port: 0 })
  t.teardown(() => { fastify.close() })

  const response = await fastify.inject('/favicon.ico')
  t.equal(response.statusCode, 404)
  t.equal(response.headers['content-length'], '0')
})
