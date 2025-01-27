import { BooksRepository } from '@/repositories/books-repository'
import { Book } from '@prisma/client'

interface CreateBookUseCaseRequest {
  user_id: string
  name: string
  category: string
}

interface CreateBookUseCaseResponse {
  book: Book
}

export class CreateBookUseCase {
  constructor(private booksRepository: BooksRepository) {}

  async execute({
    user_id,
    name,
    category,
  }: CreateBookUseCaseRequest): Promise<CreateBookUseCaseResponse> {
    const book = await this.booksRepository.create({ user_id, name, category })

    return {
      book,
    }
  }
}
