import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryBooksRepository } from '@/repositories/in-memory/in-memory-books-repository'
import { CreateBookUseCase } from './create-book'
import { randomUUID } from 'node:crypto'

let booksRepository: InMemoryBooksRepository
let sut: CreateBookUseCase

describe('Create book use case', () => {
  beforeEach(() => {
    booksRepository = new InMemoryBooksRepository()
    sut = new CreateBookUseCase(booksRepository)
  })

  it('should be able to create a book', async () => {
    const { book } = await sut.execute({
      name: 'Book of narnia',
      user_id: randomUUID(),
      category: randomUUID(),
    })

    expect(book.name).toBe('Book of narnia')
  })
})
