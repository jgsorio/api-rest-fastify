import fastify from 'fastify'

const app = fastify()

app.get('/health', async () => {
  return { status: 'ok' }
})

app.listen(
  {
    port: 8080,
  },
  (_, address) => {
    console.log(address)
  },
)
