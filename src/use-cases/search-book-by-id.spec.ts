import { InMemoryBooksRepository } from '@/repositories/in-memory/in-memory-books-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { ResourceNotFound } from './errors/resource-not-found'
import { SearchBookByIdUseCase } from './search-book-by-id'
import { randomUUID } from 'node:crypto'

let booksRepository: InMemoryBooksRepository
let sut: SearchBookByIdUseCase

describe('Get book Use Case', () => {
  beforeEach(() => {
    booksRepository = new InMemoryBooksRepository()
    sut = new SearchBookByIdUseCase(booksRepository)
  })

  it('should be able to get a book by id', async () => {
    const createdbook = await booksRepository.create({
      name: 'Book of narnia',
      user_id: randomUUID(),
      category: randomUUID(),
    })

    const { book } = await sut.execute({ id: createdbook.id })

    expect(book.name).toEqual(expect.any(String))
  })

  it('should not be able to get a book with wrong id', async () => {
    await expect(() =>
      sut.execute({
        id: 'non-existing-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFound)
  })
})
