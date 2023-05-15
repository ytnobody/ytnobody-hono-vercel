import { Hono } from 'hono'
import { handle } from 'hono/nextjs'

export const config = {
  runtime: 'edge',
}

const app = new Hono().basePath('/api')

app.get('/', (c) => c.json({ message: 'Hello ytnobody-hono-vercel' }))

export default handle(app)
