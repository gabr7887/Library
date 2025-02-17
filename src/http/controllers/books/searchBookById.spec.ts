import { app } from '@/app'
import { prisma } from '@/lib/prisma'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

describe('Search Book (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to search books by ID', async () => {
    const { token } = await createAndAuthenticateUser(app)

    const user = await prisma.user.create({
      data: {
        name: 'test',
        email: 'user@gmail.com',
        password_hash: 'sadsadsd',
      },
    })

    const category = await prisma.categories.create({
      data: {
        category: 'teste',
      },
    })

    await request(app.server)
      .post('/books')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'BookTest',
        user_id: user.id,
        category: category.category,
      })

    const book = await prisma.book.create({
      data: {
        name: 'BookTest',
        user_id: user.id,
        category: category.category,
      },
    })

    const response = await request(app.server)
      .get('/books/searchid')
      .query({
        id: book.id,
      })
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
  })
})
