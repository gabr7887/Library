import { PrismaBooksRepository } from '@/repositories/prisma/prisma-books-repository'
import { CreateBookUseCase } from '../create-book'

export function makeCreateBookUseCase() {
  const prismaBooksRepository = new PrismaBooksRepository()
  const useCase = new CreateBookUseCase(prismaBooksRepository)

  return useCase
}
