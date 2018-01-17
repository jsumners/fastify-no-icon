'use strict'

const fp = require('fastify-plugin')

function noFaviconHandler (req, reply) {
  reply.code(404).send()
}

function noFaviconPlugin (fastify, options, next) {
  fastify.get('/favicon.ico', noFaviconHandler)
  next()
}

module.exports = fp(noFaviconPlugin, {
  fastify: '>=0.39.1',
  name: 'fastify-no-icon'
})
