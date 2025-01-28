import { BooksRepository } from '@/repositories/books-repository'
import { Book } from '@prisma/client'

interface SearchBooksUseCaseRequest {
  query: string
  page: number
}

interface SearchBooksUseCaseResponse {
  books: Book[]
}

export class SearchBooksUseCase {
  constructor(private booksRepository: BooksRepository) {}

  async execute({
    query,
    page,
  }: SearchBooksUseCaseRequest): Promise<SearchBooksUseCaseResponse> {
    const books = await this.booksRepository.searchManyByName(query, page)

    return {
      books,
    }
  }
}
