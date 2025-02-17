import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeSearchBookByIdUseCase } from '@/use-cases/factories/make-search-book-by-id-use-case'
import { ResourceNotFound } from '@/use-cases/errors/resource-not-found'

export async function searchBooksById(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const searchBodySchema = z.object({
    id: z.string(),
  })

  const { id } = searchBodySchema.parse(request.query)

  try {
    const searchBooksById = makeSearchBookByIdUseCase()

    await searchBooksById.execute({
      id,
    })
  } catch (err) {
    if (err instanceof ResourceNotFound) {
      return reply.status(404).send()
    }
    return reply.status(500).send()
  }

  return reply.status(200).send()
}
