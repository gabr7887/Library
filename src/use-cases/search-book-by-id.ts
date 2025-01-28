import { BooksRepository } from '@/repositories/books-repository'
import { Book } from '@prisma/client'
import { ResourceNotFound } from './errors/resource-not-found'

interface SearchBookByIdUseCaseRequest {
  id: string
}

interface SearchBookByIdUseCaseResponse {
  book: Book
}

export class SearchBookByIdUseCase {
  constructor(private booksRepository: BooksRepository) {}

  async execute({
    id,
  }: SearchBookByIdUseCaseRequest): Promise<SearchBookByIdUseCaseResponse> {
    const book = await this.booksRepository.findById(id)

    if (!book) {
      throw new ResourceNotFound()
    }

    return {
      book,
    }
  }
}
