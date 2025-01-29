import { PrismaBooksRepository } from '@/repositories/prisma/prisma-books-repository'
import { SearchBooksUseCase } from '../search-books'

export function makeSearchBooksUseCase() {
  const prismaBooksRepository = new PrismaBooksRepository()
  const useCase = new SearchBooksUseCase(prismaBooksRepository)

  return useCase
}
