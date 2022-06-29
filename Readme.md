# fastify-no-icon

This is a simple plugin for Fastify to deal with annoying `/favicon.ico`
requests. Under normal operation Fastify will throw an error because a route
isn't registered to handle the request. This plugin merely gives it one.

## Example

```js
const fastify = require('fastify')()
fastify.register(require('fastify-no-icon'))
fastify.listen({
  port: 3000
})
// curl 127.0.0.1:3000/favicon.ico => empty 404 and no thrown error
```

## License

[MIT License](http://jsumners.mit-license.org/)
