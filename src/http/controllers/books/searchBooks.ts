import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeSearchBooksUseCase } from '@/use-cases/factories/make-search-books-use-case'

export async function searchBooks(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const searchBooksBodySchema = z.object({
    query: z.string(),
    page: z.coerce.number().min(1).default(1),
  })

  const { query, page } = searchBooksBodySchema.parse(request.body)

  const searchBooksUseCase = makeSearchBooksUseCase()

  const { books } = await searchBooksUseCase.execute({
    query,
    page,
  })

  return reply.status(200).send({
    books,
  })
}
