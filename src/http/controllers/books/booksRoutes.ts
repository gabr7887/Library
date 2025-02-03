import { FastifyInstance } from 'fastify'
import { verifyJWT } from '../../middlewares/verify-jwt'
import { createBook } from './createBook'
import { searchBooks } from './searchBooks'
import { searchBooksById } from './searchBooksById'

export async function BooksRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/books/search', searchBooks)
  app.get('/books/searchid', searchBooksById)

  app.post('/books', createBook)
}
