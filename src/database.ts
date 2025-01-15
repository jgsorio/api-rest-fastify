import 'dotenv/config'
import { Knex, knex as setupKnex } from 'knex'

const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: process.env.DATABASE_URL!,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './src/database/migrations',
  },
}
const knex = setupKnex(config)

export { knex, config }
