import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
  connection: 'postgres',
  connections: {
    postgres: {
      client: 'pg',
      connection: {
        host: env.get('DB_HOST'),
        port: Number(env.get('DB_PORT', '5432')),
        user: env.get('DB_USER'),
        password: env.get('DB_PASSWORD'),
        database: env.get('DB_DATABASE'),
        ssl: env.get('DB_SSL', true) ? { rejectUnauthorized: false } : false, // For production, it's recommended to use SSL with proper certificates. The above configuration allows self-signed certificates for development purposes.
      },
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
      debug: false,
    },
  },
})

export default dbConfig
