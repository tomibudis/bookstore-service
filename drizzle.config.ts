import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/entity/*.entity.ts',
  out: './src/migration',
  driver: 'pg',
  dbCredentials: {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
  },
} satisfies Config;