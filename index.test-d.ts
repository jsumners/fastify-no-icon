import { FastifyInstance, FastifyPluginCallback } from "fastify";
import fastify from "fastify";
import { expectType } from "tsd";

import fastifyNoIconDefault from "./";
const fastifyNoIconCjs = require("./");

const app: FastifyInstance = fastify();
app.register(fastifyNoIconDefault);
app.register(fastifyNoIconCjs);

expectType<FastifyPluginCallback>(fastifyNoIconDefault);
expectType<any>(fastifyNoIconCjs);
