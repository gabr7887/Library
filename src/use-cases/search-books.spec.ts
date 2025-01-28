import { InMemoryBooksRepository } from '@/repositories/in-memory/in-memory-books-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { randomUUID } from 'node:crypto'
import { SearchBooksUseCase } from './search-books'

let booksRepository: InMemoryBooksRepository
let sut: SearchBooksUseCase

describe('Get manys books Use Case', () => {
  beforeEach(() => {
    booksRepository = new InMemoryBooksRepository()
    sut = new SearchBooksUseCase(booksRepository)
  })

  it('should be able to get 20 books', async () => {
    for (let i = 0; i <= 22; i++) {
      await booksRepository.create({
        name: `Book of narnia ${i}`,
        user_id: randomUUID(),
        category: randomUUID(),
      })
    }

    const { books } = await sut.execute({ query: 'Book of narnia', page: 1 })

    expect(books).toHaveLength(20)
  })
})
