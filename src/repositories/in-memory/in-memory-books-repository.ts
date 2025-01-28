import { Book, Prisma } from '@prisma/client'
import { BooksRepository } from '../books-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryBooksRepository implements BooksRepository {
  public items: Book[] = []

  async searchManyByName(query: string, page: number) {
    return this.items
      .filter((item) => item.name.includes(query))
      .slice((page - 1) * 20, page * 20)
  }

  async findById(id: string): Promise<Book | null> {
    const book = this.items.find((item) => item.id === id)

    if (!book) {
      return null
    }

    return book
  }

  async create(data: Prisma.BookUncheckedCreateInput) {
    const book: Book = {
      id: randomUUID(),
      user_id: data.user_id,
      name: data.name,
      category: data.category,
      created_at: new Date(),
    }

    this.items.push(book)

    return book
  }
}
