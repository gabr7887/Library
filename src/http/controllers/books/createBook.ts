import { makeCreateBookUseCase } from '@/use-cases/factories/make-create-book-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function createBook(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    user_id: z.string(),
    name: z.string(),
    category: z.string(),
  })

  const { user_id, name, category } = registerBodySchema.parse(request.body)

  const createBook = makeCreateBookUseCase()

  await createBook.execute({
    user_id,
    name,
    category,
  })

  return reply.status(201).send()
}
