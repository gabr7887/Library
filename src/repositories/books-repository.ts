import { Prisma, Book } from '@prisma/client'

export interface BooksRepository {
  findById(id: string): Promise<Book | null>
  searchManyByName(query: string, page: number): Promise<Book[]>
  create(data: Prisma.BookUncheckedCreateInput): Promise<Book>
}
