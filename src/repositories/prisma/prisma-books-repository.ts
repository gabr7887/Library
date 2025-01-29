import { Book, Prisma } from '@prisma/client'
import { BooksRepository } from '../books-repository'
import { prisma } from '@/lib/prisma'

export class PrismaBooksRepository implements BooksRepository {
  async findById(id: string): Promise<Book | null> {
    const book = await prisma.book.findUnique({
      where: {
        id,
      },
    })

    return book
  }

  async searchManyByName(query: string, page: number): Promise<Book[]> {
    const books = await prisma.book.findMany({
      where: {
        name: {
          contains: query,
        },
      },
      take: 20,
      skip: (page - 1) * 20,
    })

    return books
  }

  async create(data: Prisma.BookUncheckedCreateInput): Promise<Book> {
    const book = await prisma.book.create({ data })

    return book
  }
}
