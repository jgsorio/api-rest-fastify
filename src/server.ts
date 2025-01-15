import fastify from 'fastify'
import { env } from './env'

const app = fastify()

app.get('/health', async () => {
  return { status: 'ok' }
})

app.listen(
  {
    port: env.PORT,
  },
  (_, address) => {
    console.log(address)
  },
)
