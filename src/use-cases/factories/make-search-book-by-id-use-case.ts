import { PrismaBooksRepository } from '@/repositories/prisma/prisma-books-repository'
import { SearchBookByIdUseCase } from '../search-book-by-id'

export function makeSearchBookByIdUseCase() {
  const prismaBooksRepository = new PrismaBooksRepository()
  const useCase = new SearchBookByIdUseCase(prismaBooksRepository)

  return useCase
}
