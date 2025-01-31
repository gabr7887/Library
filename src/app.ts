import fastify from 'fastify'
import { UserRoutes } from './http/controllers/users/userRoutes'
import { ZodError } from 'zod'
import { env } from './env'
import fastifyJwt from '@fastify/jwt'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

app.register(UserRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error', issues: error.format() })
  }

  if (env.NODE_ENV === 'production') {
    console.error(error)
  } else {
    // TODO user ferramenta de log como datadog/newrelic....
  }

  return reply.status(500).send('internal server error.')
})
