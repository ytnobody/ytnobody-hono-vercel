import { Hono } from 'hono'
import { handle } from 'hono/nextjs'
import { MessageDomain } from '../src/domain/message_domain'

export const config = {
  runtime: 'edge',
}

const app = new Hono().basePath('/api')

app.get('/', (c) => c.json({ message: MessageDomain.getMessage() }))

export default handle(app)
