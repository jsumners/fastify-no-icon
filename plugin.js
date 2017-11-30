'use strict'

const fp = require('fastify-plugin')

function noFaviconHandler (req, reply) {
  reply.code(404).send()
}

function noFaviconPlugin (fastify, options, next) {
  fastify.get('/favicon.ico', noFaviconHandler)
  next()
}

module.exports = fp(noFaviconPlugin)
